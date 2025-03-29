import React from "react";
import { ProductsListResponse } from "@/shared/types/product.types";
import "@/styles/page.scss";
import ProductList from "@/components/Product/ProductList";
import { getProducts } from "@/services/product";

export default async function HomePage() {
  const products = await getProducts();
  return <Home products={products} />;
}

interface IHome {
  products: ProductsListResponse;
}

function Home({ products }: IHome) {
  return <ProductList products={products.data} />;
}
