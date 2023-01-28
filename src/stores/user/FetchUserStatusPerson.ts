// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const FetchUserStatusPerson:any = createApi({
  reducerPath: 'FetchUserStatusPerson',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getUserStatusPerson: builder.query({
      query: (name) => `user/status/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserStatusPersonQuery  } = FetchUserStatusPerson