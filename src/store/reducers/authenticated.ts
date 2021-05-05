interface AuthenticatedProps {
  isAuthenticated: boolean
  nome: string
  type: string
}

const INITIAL_STATE = {
  isAuthenticated: false,
  nome: ''
}

export function authenticated(state = INITIAL_STATE, action: AuthenticatedProps) {
  if (action.type === 'AUTHENTICATED_FETCH') {
    return {
      isAuthenticated: action.isAuthenticated,
      nome: action.nome
    };
  }
  return state
}