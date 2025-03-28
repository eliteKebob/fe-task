import React from "react";
import { ProductsListResponse } from "@/shared/types/product.types";
import "@/styles/page.scss";
import ProductList from "@/components/Product/ProductList";

async function getProducts() {
  try {
    const response = await fetch(process.env.BASE_API_URL! + "/Products/List", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN!}`,
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function HomePage() {
  const products = await getProducts();
  return <Home products={products} />;
}

interface IHome {
  products: ProductsListResponse;
}

function Home({ products }: IHome) {
  return (
    <React.Fragment>
      <ProductList products={products.data} />
    </React.Fragment>
  );
}
