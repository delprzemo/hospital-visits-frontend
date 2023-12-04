const BASE_URL = process.env.REACT_APP_API_BASE_URL

export type HttpResult<T> = {
  status: number
  result: T | null
}

export const httpPost = async <T>(
  url: string,
  body: Object,
): Promise<HttpResult<T>> => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const text = await response.text()
  const result = {
    status: response.status,
    result: text ? JSON.parse(text) : null,
  }
  return result
}

export const httpGet = async <T>(url: string): Promise<HttpResult<T>> => {
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: 'GET',
  })

  const text = await response.text()
  const result = {
    status: response.status,
    result: text ? JSON.parse(text) : null,
  }
  return result
}
