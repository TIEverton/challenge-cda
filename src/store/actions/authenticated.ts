export function fetchAuthetication(isAuthenticated: boolean, nome?: string) {
  return {
    type: 'AUTHENTICATED_FETCH',
    isAuthenticated,
    nome
  }
}