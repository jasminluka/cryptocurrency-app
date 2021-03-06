import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const cryptoNewsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_RAPID_API_BING_NEWS_KEY
}

const createRequest = url => ({
  url,
  headers: cryptoNewsApiHeaders
})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safesearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const {
  useGetCryptoNewsQuery
} = cryptoNewsApi