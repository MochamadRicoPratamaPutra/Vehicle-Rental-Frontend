import Layout from '../../components/Layout';
import Style from '../../styles/vehicle.module.css';
import Button from '../../components/base/button';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import router from 'next/router';
import AuthenticatedRoute from '../../components/authenticatedRoute';
const Vehicle = () => {
  const user = useSelector((state) => state.user.profile);
  const { reservation, amount } = useSelector((state) => state.reservation);
  const [date, setDate] = useState(null);
  const [day, setDay] = useState(1);
  useEffect(() => {
    if (Object.keys(reservation).length === 0) {
      router.push('/login');
    }
  }, []);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  const handleDate = () => {
    setDate(today);
  };
  const handleReservDay = (e) => {
    setDay(e.target.value);
  };
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <button type="button" className={`text-nunito text-36 ${Style.back}`} onClick={() => router.back()}>
            {'<'} Reservation
          </button>
          <div className={Style.productBox}>
            <img src={reservation.img} alt="item" className={Style.imageProduct} />
            <div className={Style.descriptionBox}>
              <div>
                <p className="text-playfair text-48">{reservation.name}</p>
                <p className="text-playfair text-36 text-grey">{reservation.city}</p>
                <p className="text-nunito text-red">
                  {reservation.prepayment === 0 ? 'No Prepayment' : 'Can Prepayment'}
                </p>
              </div>
              <div className={Style.amountBox}>
                <Button type="plusMinus" maxAmount={reservation.stock} itemAmount={amount} />
              </div>
              <div>
                <p className="text-24 text-w700 text-black">Reservation Date: </p>
                <input
                  type="date"
                  min={today}
                  className={`${Style.inputBox} text-nunito text-w400 text-24`}
                  onChange={handleDate}
                />
                <div className={`${Style.choiceBox}`}>
                  <form>
                    <select
                      id="duration"
                      name="duration"
                      className="text-nunito text-w400 text-18"
                      onChange={handleReservDay}
                    >
                      <option value="1">1 day</option>
                      <option value="2">2 day</option>
                      <option value="3">3 day</option>
                    </select>
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Button
            type="confirmationReservation"
            text={`Pay now: Rp. ${reservation.price * amount * day}`}
            data={{ date: date, day: day, total: parseInt(reservation.price * amount * day) }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default AuthenticatedRoute(Vehicle, { pathAfterFailure: '/login', admin: false });
