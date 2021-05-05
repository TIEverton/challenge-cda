interface PenalProps {
  id: string,
  code: {
    id: string,
    nome: string,
    descricao: string,
    multa: string,
    tempoPrisao: string,
    status: boolean,
  }
  type: string
}

const INITIAL_STATE = {
  codes: []
}

export function penal(state = INITIAL_STATE, action: PenalProps) {
  if (action.type === 'PENAL_FETCH') {
    return {
      ...state,
      codes: action.code
    };
  } else if (action.type === 'PENAL_ADD') {
    return {
      codes: [...state.codes, action.code]
    }
  } else if (action.type === 'PENAL_REMOVE') {
    return {
      ...state,
      codes: state.codes.filter((code: any) => code.id !== action.id)
    }
  } else if (action.type === 'PENAL_EDIT') {
    return {
      codes: state.codes.map((code: any) => {
        if (code.id !== action.id) {
          return code
        } else {
          return {
            ...action.code
          }
        }
      })
    }
  } else if (action.type === 'PENAL_ORDERACTIVE') {
    const filtered = state.codes.sort(function (a: any, b: any) {
      return a.status < b.status ? -1 : 1;
    })
    return {
      codes: filtered
    }
  } else if (action.type === 'PENAL_ORDERINACTIVE') {
    const filtered = state.codes.sort(function (a: any, b: any) {
      return a.status > b.status ? -1 : 1;
    })
    return {
      codes: filtered
    }
  }
  return state
}