import axios, { AxiosResponse } from 'axios'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}
export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export type AxiosAdapter = <T = any>(
  data: HttpRequest
) => Promise<HttpResponse<T>>

export const axiosAdapter: AxiosAdapter = async <T = any>(
  data: HttpRequest
): Promise<HttpResponse<T>> => {
  let axiosResponse: AxiosResponse
  try {
    axiosResponse = await axios.request({
      [`${data.method === 'get' ? 'params' : 'data'}`]: data.body,
      url: data.url,
      method: data.method,
      headers: data.headers
    })
  } catch (error) {
    axiosResponse = error.response
  }
  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data
  }
}
