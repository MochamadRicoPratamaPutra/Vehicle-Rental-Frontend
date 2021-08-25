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
    case 'ADD_RESERVATION':
      return {
        ...state,
        reservation: action.payload
      }
    case 'CONFIRMATION_RESERVATION':
      return {
        ...state,
        date: action.payload.date,
        day: action.payload.day,
        total: action.payload.total,
      }
    default:
      return state;
  }
};
export default reservationReducer;
