import { ProductsListResponse } from "@/shared/types/product.types";
import React from "react";
import "./page.scss";
import ProductList from "@/components/Product/ProductList";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  return <Home products={products} />;
}

interface IHome {
  products: ProductsListResponse;
}

function Home({ products }: IHome) {
  // return <div>debug</div>
  return <ProductList products={products.data} />;
}
