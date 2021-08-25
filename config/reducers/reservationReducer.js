const initialState = {
  reservation: {},
  amount: 0,
};
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_AMOUNT':
      return {
        ...state,
        amount: action.payload,
      };
    default:
      return state;
  }
};
export default reservationReducer;
