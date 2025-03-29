import {
  ProductsListRequest,
  ProductsListResponse,
} from "@/shared/types/product.types";
import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<
      ProductsListResponse,
      ProductsListRequest | undefined
    >({
      query: (data) => ({
        url: "products/list",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const getProducts = async () => {
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
};

export const { useProductsQuery } = productApi;
