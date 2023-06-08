export interface IErrorResponse<T> {
  data: T[]
  message: string
  status: string
  statusCode: number
}

export interface IErrorItem {
  defaultMessage: string
  id: string
}

export interface IErrorMessage {
  message: string
  status: string | number
  data: any
}
