export const onClickNumber = (Modal) => {
  return {
    type: 'NUMBER',
    Modal
  }
}

export const onClickOperator = (Modal) => {
  return {
    type: 'OPERATOR',
    Modal
  }
}

export const onClickEqual = (Modal) => {
  return {
    type: 'EQUALTO',
    Modal
  }
}

export const onClickAC = (Modal) => {
  return {
    type: 'CLEAR',
    Modal
  }
}
