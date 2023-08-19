import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL;
const API_KEY = "18a2432b5d484a44ac02ef549813b3dd";

const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${API_KEY}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: (data) =>
        `top-headlines?country=us&category=${data.tab}&pageSize=30`,
    }),
    getArticlesNews: builder.query({
      query: (data) => `everything?q=${data.searchInput}`,
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetArticlesNewsQuery } = restApi;

export default restApi;
