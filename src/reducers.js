
const initialState = {
    display:"ria",
}

  export const Modal = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

      case 'NUMBER':
        let clone1 = JSON.parse(JSON.stringify(state))
        clone1.display = "";
        return clone1;

      case 'OPERATOR':
        let clone2 = JSON.parse(JSON.stringify(state))
        clone2.display = "";
        return clone2;
      case 'EQUALTO':
        let clone3 = JSON.parse(JSON.stringify(state))
        clone3.display = "";
        return clone3;

      default:
        return state;
    }
  };







  