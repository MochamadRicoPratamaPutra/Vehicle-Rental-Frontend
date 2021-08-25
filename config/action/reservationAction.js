export const updateAmount = (amount) => (dispatch) => {
  dispatch({type: "UPDATE_AMOUNT", payload: amount})
}