import {
  ProductsListRequest,
  ProductsListResponse,
} from "@/shared/types/product.types";
import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<ProductsListResponse, ProductsListRequest | undefined>({
      query: (data) => ({
        url: "products/list",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useProductsQuery } = productApi;
