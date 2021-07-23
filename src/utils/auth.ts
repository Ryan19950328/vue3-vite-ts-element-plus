import Cookies from 'js-cookie'

const TokenKey = 'nToken'

export function getToken(): string {
  return Cookies.get(TokenKey) || ''
}

export function setToken(key = TokenKey, token: string): void {
  console.log(Cookies.set(key, token))

  Cookies.set(TokenKey, token)
}

export function removeToken(): void {
  Cookies.remove(TokenKey)
}
