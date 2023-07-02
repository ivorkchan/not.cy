import { ImageResponse } from "next/server";

export const runtime = "edge";

const regularFont = fetch(
  new URL("/public/fonts/Inter-Regular.woff", import.meta.url)
).then((res) => res.arrayBuffer());

const boldFont = fetch(
  new URL("/public/fonts/Inter-Bold.woff", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  try {
    const [regularFontData, boldFontData] = await Promise.all([
      regularFont,
      boldFont,
    ]);

    const { searchParams } = new URL(request.url);

    const hasWidth = searchParams.has("width");
    const width = hasWidth ? Number(searchParams.get("width")) : 1200;

    const hasHeight = searchParams.has("height");
    const height = hasHeight ? Number(searchParams.get("height")) : 630;

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : "Ivork Chan";

    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-[#649632]">
          <div tw="flex flex-col m-16">
            <h1 tw="text-white text-6xl">{title}</h1>
          </div>
        </div>
      ),
      {
        width: width,
        height: height,
        fonts: [
          {
            name: "Inter",
            data: regularFontData,
            weight: 400,
          },
          {
            name: "Inter",
            data: boldFontData,
            weight: 700,
          },
        ],
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`);
    }
    return new Response(`Failed to generate og.`, {
      status: 500,
    });
  }
}
