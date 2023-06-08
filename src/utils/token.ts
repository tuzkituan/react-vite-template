export function getToken() {
  const tokenString = localStorage.getItem('token_sub_app');
  return tokenString ? JSON.parse(tokenString) : '';
}

export function setToken(token: any) {
  return localStorage.setItem('token_sub_app', JSON.stringify(token));
}
