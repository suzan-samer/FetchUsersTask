// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getuserByName: builder.query({
      query: (name) => `users`,
    }),
  }),
})
// get only one product
export const OneUserApi = createApi({
  reducerPath: 'OneUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getOneUserByName: builder.query({
      query: (name) => `users/${name}`,
    }),
  }),
})
export const OneUserPostApi = createApi({
  reducerPath: 'OneUserPostApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getOneUserPostByName: builder.query({
      query: (name) => `posts/${name}`,
    }),
  }),
})
export const { useGetuserByNameQuery } = userApi;
export const { useGetOneUserByNameQuery } = OneUserApi;
export const { useGetOneUserPostByNameQuery } = OneUserPostApi;