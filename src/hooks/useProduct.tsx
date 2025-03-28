"use client";

import { useProductsQuery } from "@/services/product";

const useProduct = () => {
  const { data, isLoading, error } = useProductsQuery(undefined);

  return { data, isLoading, error };
};

export default useProduct;
