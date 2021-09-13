import Layout from '../../../components/Layout';
import Style from '../../../styles/confirmation.module.css';
import Button from '../../../components/base/button';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../../../components/authenticatedRoute';
import { useRouter } from 'next/router';
import axios from 'axios';
const Confirmation = ({ reservation }) => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const { id } = router.query;
  const date = reservation.reservationDate;
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <p className="text-nunito text-36" onClick={() => router.back()}>
            {'<'} Payment
          </p>
          <div className={Style.productBox}>
            <div>
              <img src={reservation.img} alt="item" className={Style.imageProduct} />
            </div>
            <div className={Style.right}>
              <div>
                <p className="text-playfair text-48 text-dark">{reservation.vehicleName}</p>
                <p className="text-playfair text-36 text-dark">{reservation.city}</p>
              </div>
              <p className="text-nunito text-32 text-grey text-w700">
                {reservation.prepayment === 0 ? 'No Prepayment' : 'Can Prepayment'}
              </p>
              <div>
                <p className="text-playfair text-36 text-dark text-w700">{reservation.bookingCode}</p>
                <button className={`${Style.copy} text-nunito text-w700 text-24`}>Copy booking code</button>
              </div>
            </div>
          </div>
          <div className={Style.detail}>
            <div className={`${Style.box} ${Style.boxLeft}`}>
              <p className="text-nunito text-w700 text-24 text-black">
                quantity: {reservation.quantity} {reservation.type}
              </p>
            </div>
            <div className={`${Style.box} ${Style.boxRight} ${Style.date}`}>
              <p className="text-nunito text-w700 text-24 text-black">Reservation date:</p>
              <p className="text-nunito text-w700 text-24 text-black">{date}</p>
            </div>
          </div>
          <div className={Style.detail}>
            <div className={`${Style.box} ${Style.boxLeft}`}>
              <div>
                <p className="text-nunito text-w900 text-24 text-black">Order details: </p>
                <p className="text-nunito text-w400 text-24 text-black">
                  1 {reservation.type}: Rp. {reservation.price}
                </p>
                <p className="text-nunito text-w400 text-24 text-black">
                  1 {reservation.type}: Rp. {reservation.price}
                </p>
              </div>
              <p className="text-nunito text-w700 text-24 text-black">Total: {reservation.totalPayment}</p>
            </div>
            <div className={Style.box}>
              <p className="text-nunito text-w900 text-24 text-black">Identity: </p>
              <p className="text-nunito text-w400 text-24 text-black">
                {reservation.userName} ({reservation.phone})
              </p>
              <p className="text-nunito text-w400 text-24 text-black">{reservation.email}</p>
            </div>
          </div>
          <div className={Style.payment}>
            <p className="text-nunito text-w700 text-24">Payment code: </p>
            <div className={Style.box2}>
              <p className="text-playfair text-w-700 text-24">{reservation.paymentCode}</p>
              <button className={`text-nunito text-w700 text-24 text-yellow ${Style.buttonCopy}`}>copy</button>
            </div>
            <div className={Style.box2}>
              <p className="text-24 text-nunito text-grey">Payment Method: {reservation.paymentMethod}</p>
            </div>
          </div>
          <Button type="approve" id={reservation.reservationId} done={reservation.status}/>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  let cookie = '';
  if (context.req) {
    cookie = context.req.headers.cookie;
  }
  const { id } = context.params;
  const result = await axios.get(`${process.env.REACT_APP_API_URL}/reservation/${id}`, {
    withCredentials: true,
    headers: {
      cookie: cookie,
    },
  });
  const reservation = result.data.data[0];
  console.log(reservation);
  return {
    props: {
      reservation: reservation,
    },
  };
};
export default AuthenticatedRoute(Confirmation, { pathAfterFailure: '/login', admin: true });
