export type ApiGoodResponse<T> = {
  meta: unknown
  data: T
}

export type ApiBadResponse = ApiDefaultErrorResponse | ApiUnknownErrorResponse

export type ApiDefaultErrorResponse = {
  meta: unknown
  error: {
    errorCode: string
    payload: { name: string, message: string }[]
  }
}

export type ApiModernErrorResponse = {
  meta: unknown
  errors: { code: string, payload: unknown }[]
}

export type ApiUnknownErrorResponse = unknown
