
const initialState = {
  display: "",
}

export const Modal = (state = initialState, action) => {
console.log(state);

  switch (action.type) {
    case 'NUMBER':
      let clone1 = JSON.parse(JSON.stringify(state))
      clone1.display += action.Modal;
      return clone1;

    case 'OPERATOR':

      let clone2 = JSON.parse(JSON.stringify(state))
      console.log(clone2);
      clone2.display += action.Modal;
      return clone2;

    case 'EQUALTO':

      let clone3 = JSON.parse(JSON.stringify(state))
      clone3.display = action.Modal;
      return clone3;
    
    case 'CLEAR':

      let clone4 = JSON.parse(JSON.stringify(state))
      clone4.display = "";
      return clone4;

    default:
      return state;
  }
};
