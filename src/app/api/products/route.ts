import { NextResponse } from "next/server";
import { ProductsListResponse } from "@/shared/types/product.types";

export async function GET() {
  try {
    const response = await fetch(process.env.BASE_API_URL! + "/Products/List", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN!}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      (await response.json()) as Promise<ProductsListResponse>
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
