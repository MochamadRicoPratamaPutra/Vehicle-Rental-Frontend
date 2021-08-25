import Layout from '../../components/Layout';
import Style from '../../styles/confirmation.module.css';
import Button from '../../components/base/button';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../../components/authenticatedRoute';
import { useRouter } from 'next/router';
import Randomstring from 'randomstring';
import { useState } from 'react';
const Confirmation = () => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const { reservation, amount, date, day, total } = useSelector((state) => state.reservation);
  const code = Randomstring.generate(7);
  const [payment, setPayment] = useState('');
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
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
                <p className="text-playfair text-48 text-dark">{reservation.name}</p>
                <p className="text-playfair text-36 text-dark">{reservation.city}</p>
              </div>
              <p className="text-nunito text-32 text-grey text-w700">
                {reservation.prepayment === 0 ? 'No Prepayment' : 'Can Prepayment'}
              </p>
              <div>
                <p className="text-playfair text-36 text-dark text-w700">{code}</p>
                <button className={`${Style.copy} text-nunito text-w700 text-24`}>Copy booking code</button>
              </div>
            </div>
          </div>
          <div className={Style.detail}>
            <div className={`${Style.box} ${Style.boxLeft}`}>
              <p className="text-nunito text-w700 text-24 text-black">
                quantity: {amount} {reservation.type}
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
              <p className="text-nunito text-w700 text-24 text-black">Total: {total}</p>
            </div>
            <div className={Style.box}>
              <p className="text-nunito text-w900 text-24 text-black">Identity: </p>
              <p className="text-nunito text-w400 text-24 text-black">
                {user.name} ({user.phone})
              </p>
              <p className="text-nunito text-w400 text-24 text-black">{user.email}</p>
            </div>
          </div>
          <div className={Style.payment}>
            <p className="text-nunito text-w700 text-24">Payment code: </p>
            <div className={Style.box2}>
              <p className="text-playfair text-w-700 text-24">{code}</p>
              <button className={`text-nunito text-w700 text-24 text-yellow ${Style.buttonCopy}`}>copy</button>
            </div>
            <form>
              <select
                name="paymentMethod"
                id="paymentMethod"
                className="text-nunito text-w700 text-24"
                onChange={handlePayment}
              >
                <option disabled selected value>
                  Select payment methods
                </option>
                <option value="cash">cash</option>
                <option value="tranfer">transfer</option>
              </select>
            </form>
          </div>
          <Button
            type="completion"
            text={`Pay now: Rp. ${total}`}
            data={{reservation, amount, date, day, total, payment, code, user}}
          />
        </div>
      </Layout>
    </div>
  );
};

export default AuthenticatedRoute(Confirmation, { pathAfterFailure: '/login', admin: false });
