import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export { default } from 'next-auth/middleware';

//export const config = {
//  matcher: [
//'/admin/:path*',
//'/user',
//'/((?!api|_next/static|_next/image|favicon.ico).*)',
// 모든 API 경로 , 정적파일경로(_next/static), 이미지 경로(_next/image) , favicon.ico 제외
//  ]
//};

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET });
    const pathname = req.nextUrl.pathname;

    //console.log("middleware pathname : ", pathname, ",  session : ", session);

    // 정규식을 이용한 정적파일(css, js 등)과 이미지, favicon.ico 등을 미들웨어 제외처리
    const staticFilePattern = /\.(.*)$/;//경로의 끝이 파일 확장자로 끝나는지를 확인

    if (staticFilePattern.test(pathname)) {
        return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith('/user') && !session) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    if (pathname.startsWith('/admin') && session?.role !== 'Admin') {
        return NextResponse.redirect(new URL('/', req.url));
    }

    if (pathname.startsWith('/auth') && session) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}
