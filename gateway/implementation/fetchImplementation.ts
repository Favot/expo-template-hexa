
import {
  AuthenticationError,
  NetworkError,
  RestClient,
} from "../services/restClient"

export const fetchClient: RestClient = {
  httpRequest: async (url, options = {}) => {
    const s = {
      accessToken: "TOKEN",
    } // TODO: Get token from storage
    const overridingOptions: RequestInit = {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${s?.accessToken}`,
      },
    }
    return fetch(url, overridingOptions)
  },
}

export const assertValidResponse = async (response: Response) => {
  if (response.ok) {
    return
  }
  if (response.status === 401) {
    throw new AuthenticationError("Authentication failed")
  }
  const { error, message } = await response.json()
  throw new NetworkError("Request failed", {
    url: response.url,
    status: response.status,
    bodyError: error,
    bodyMessage: message,
  })
}
