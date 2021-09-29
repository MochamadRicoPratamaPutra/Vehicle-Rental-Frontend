import Layout from '../components/Layout';
import Style from '../styles/history.module.css';
import Card from '../components/base/card';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../components/authenticatedRoute';
import axios from 'axios';
import Cookies from 'next-cookies';
import Link from 'next/link';
const History = ({ reservation }) => {
  const user = useSelector((state) => state.user.profile);
  return (
    <div>
      <Layout isAuth={user.id ? true : false} history={true}>
        <div className={Style.historyContainer}>
          <div className={Style.left}>
            <div className={Style.searchChoice}>
              <div>
                <input
                  type="text"
                  placeholder="Search history"
                  className={`text-nunito text-24 text-grey ${Style.inputBox}`}
                />
              </div>
              <div>
                <select name="filter" id="filter" className={`text-nunito text-24 text-grey ${Style.filter}`}>
                  <option value disabled>
                    filter
                  </option>
                  <option value="type">Type</option>
                  <option value="date">Date Added</option>
                  <option value="name">Name</option>
                  <option value="favoriteProduct">Favorite Product</option>
                </select>
              </div>
            </div>
            <div>
              <h1 className="text-nunito text-36 text-black text-w700">Payment</h1>
            </div>
            <h1 className="text-nunito text-36 text-black text-w700">Vehicle</h1>
            <div className={Style.cardContainer}>
              {reservation.map((item) => (
                <>
                  <Link href={`/confirmation/confirmationVehicle/${item.reservationId}`}>
                    <a>
                      <div className={Style.card}>
                        <img src={item.img} alt="img" className={Style.img} />
                        <div className={Style.cardDesc}>
                          <div>
                            <p className="text-nunito text-24 text-w700">{item.vehicleName}</p>
                            <p className="text-nuntio text-18">{item.reservationDate}</p>
                          </div>
                          <div>
                            <p className="text-nunito text-w700 text-black">Prepayment: Rp. {item.totalPayment}</p>
                            <p className="text-nunito text-24 text-green">
                              {item.status === 'waiting for payment'
                                ? 'Not yet renting'
                                : item.status === 'active'
                                ? 'currently renting'
                                : 'Has been returned'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </>
              ))}
            </div>
          </div>
          <div className={Style.arrivalBox}>
            <p className="text-playfair text-w900 text-24">New Arrival</p>
            <Card type="town" title="Merapi" city="yogyakarta" />
            <Card type="town" title="Monas" city="jakarta" />
            <p>view more</p>
          </div>
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
  const cookieCheck = Cookies(context)
  let result;
  if (cookieCheck.role === 'user') {
    result = await axios.get(`${process.env.REACT_APP_API_URL}/reservation/user/${cookieCheck.id}`, {
      withCredentials: true,
      headers: {
        cookie: cookie,
      },
    });
  } else {
    result = await axios.get(`${process.env.REACT_APP_API_URL}/reservation`, {
      withCredentials: true,
      headers: {
        cookie: cookie,
      },
    });
  }
  const reservation = result.data.data;
  console.log(reservation);
  return {
    props: {
      reservation: reservation,
    },
  };
};
export default AuthenticatedRoute(History, { pathAfterFailure: '/login' });
