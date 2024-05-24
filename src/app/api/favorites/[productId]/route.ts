import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface Params {
    productId?: string;
}


export async function POST(request: Request, { params }: { params: Params }) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return Response.error();
    }
    const { productId } = params;

    if (!productId || typeof productId !== 'string') {
        throw new Error("Invalid Product ID");
    }
    let favoriteIds = [...currentUser.favoriteIds || []];;

    favoriteIds.push(productId);

    const user = await prisma?.user.update({
        where: {
            id: currentUser.id
        },
        data: {
            favoriteIds
        }
    })
    return NextResponse.json(user);
}
