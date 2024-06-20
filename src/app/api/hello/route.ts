export async function GET(request: Request) {
  return new Response('안녕하세요, Hello, GET');
}

export async function POST(request: Request) {
  return new Response('안녕하세요, Hello, POST');
}
