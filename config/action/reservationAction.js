import axios from 'axios';

export const updateAmount = (amount) => (dispatch) => {
  dispatch({ type: 'UPDATE_AMOUNT', payload: amount });
};
export const addReservation = (data, amount) => (dispatch) => {
  const dataFix = { ...data, amount };
  console.log(dataFix);
  dispatch({ type: 'ADD_RESERVATION', payload: dataFix });
};

export const confirmationReservation = (data) => (dispatch) => {
  dispatch({ type: 'CONFIRMATION_RESERVATION', payload: { date: data.date, day: data.day, total: data.total } });
};
export const completeReservation = (data) => async (dispatch) => {
  const rentedFrom = new Date(data.date)
  const rentedTo = new Date((new Date(data.date).getTime()+(data.day*24*60*60*1000)))
  const dataBody = {
    bookingCode: data.code,
    paymentCode: data.code,
    status: 'waiting for payment',
    userIdBorrower: data.user.id,
    vehicleId: data.reservation.id,
    paymentMethod: data.payment,
    quantity: data.amount,
    totalPayment: data.total,
    rentedFrom: rentedFrom,
    returnAt: rentedTo,
  };
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  return await axios.post(`${process.env.REACT_APP_API_URL}/reservation/`, dataBody, config)
  .then((res) => {
    console.log(res)
  })
  .catch((err)=> {
    console.log(err)
  })
};
