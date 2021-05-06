

export function fetchCodePenal(code: Object) {
  return {
    type: 'PENAL_FETCH',
    code
  }
}

export function addCodePenal(code: Object) {
  return {
    type: 'PENAL_ADD',
    code
  }
}

export function removeCodePenal(id: string) {
  return {
    type: 'PENAL_REMOVE',
    id
  }
}

export function editCodePenal(code: Object, id: number) {
  return {
    type: 'PENAL_EDIT',
    code,
    id
  }
}

export function orderActivePenal() {
  return {
    type: 'PENAL_ORDERACTIVE',
  }
}

export function orderInactivePenal() {
  return {
    type: 'PENAL_ORDERINACTIVE',
  }
}

export function orderTempoMenorPenal() {
  return {
    type: 'PENAL_ORDERTEMPOMENOR',
  }
}

export function orderTempoMaiorPenal() {
  return {
    type: 'PENAL_ORDERTEMPOMAIOR',
  }
}


export function orderMultaMenorPenal() {
  return {
    type: 'PENAL_ORDERMULTAMENOR',
  }
}

export function orderMultaMaiorPenal() {
  return {
    type: 'PENAL_ORDERMULTAMAIOR',
  }
}