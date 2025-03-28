"use client";

import { Box, CircularProgress } from "@mui/material";
import ProductCard from "@/components/Product/ProductCard";
import { ProductsList } from "@/shared/types/product.types";
import React from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

interface IProductList {
  products: ProductsList[];
}

const ProductList: React.FC<IProductList> = ({ products }) => {
  const { count, loader } = useInfiniteScroll({
    items: products,
    defaultCount: 36,
    increaseFactor: 12,
  });

  return (
    <Box className="products-wrapper">
      {products.slice(0, count).map((product, i) => (
        <React.Fragment key={i}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}

      {count < products.length && (
        <Box sx={{ display: "flex", justifySelf: "center", justifyContent: "center" }} ref={loader}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
