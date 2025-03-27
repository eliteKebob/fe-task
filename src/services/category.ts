import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    categories: builder.mutation({
      query: () => ({
        url: "Categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useCategoriesMutation } = categoryApi;
