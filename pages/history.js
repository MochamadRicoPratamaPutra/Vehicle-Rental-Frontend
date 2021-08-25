import Layout from '../components/Layout';
import Style from '../styles/history.module.css';
import Card from '../components/base/card';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../components/authenticatedRoute';
const History = () => {
  const user = useSelector((state) => state.user.profile);
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
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
              <div className={Style.listPayment}>
                <div className={Style.payment}>
                  <p className="text-nunito text-w700 text-24 text-black">Please finish your payment for vespa</p>
                  <input type="checkbox" className={Style.check} />
                </div>
                <div className={Style.payment}>
                  <p className="text-nunito text-w700 text-24 text-black">Please finish your payment for vespa</p>
                  <input type="checkbox" className={Style.check} />
                </div>
                <div className={Style.payment}>
                  <p className="text-nunito text-w700 text-24 text-black">Please finish your payment for vespa</p>
                  <input type="checkbox" className={Style.check} />
                </div>
              </div>
            </div>
            <h1 className="text-nunito text-36 text-black text-w700">Vehicle</h1>
            <div className={Style.cardContainer}>
              <div className={Style.card}>
                <img src="/bike.png" alt="img" className={Style.img} />
                <div className={Style.cardDesc}>
                  <div>
                    <p className="text-nunito text-24 text-w700">Vespa matic</p>
                    <p className="text-nuntio text-18">25 Agustus 2021</p>
                  </div>
                  <div>
                    <p className="text-nunito text-w700 text-black">Prepayment: Rp. 2500000</p>
                    <p className="text-nunito text-24 text-green">Has been returned</p>
                  </div>
                </div>
                <input type="checkbox" className={Style.check} />
              </div>
              <div className={Style.card}>
                <img src="/bike.png" alt="img" className={Style.img} />
                <div className={Style.cardDesc}>
                  <div>
                    <p className="text-nunito text-24 text-w700">Vespa matic</p>
                    <p className="text-nuntio text-18">25 Agustus 2021</p>
                  </div>
                  <div>
                    <p className="text-nunito text-w700 text-black">Prepayment: Rp. 2500000</p>
                    <p className="text-nunito text-24 text-green">Has been returned</p>
                  </div>
                </div>
                <input type="checkbox" className={Style.check} />
              </div>
              <div className={Style.card}>
                <img src="/bike.png" alt="img" className={Style.img} />
                <div className={Style.cardDesc}>
                  <div>
                    <p className="text-nunito text-24 text-w700">Vespa matic</p>
                    <p className="text-nuntio text-18">25 Agustus 2021</p>
                  </div>
                  <div>
                    <p className="text-nunito text-w700 text-black">Prepayment: Rp. 2500000</p>
                    <p className="text-nunito text-24 text-green">Has been returned</p>
                  </div>
                </div>
                <input type="checkbox" className={Style.check} />
              </div>
              <div className={Style.card}>
                <img src="/bike.png" alt="img" className={Style.img} />
                <div className={Style.cardDesc}>
                  <div>
                    <p className="text-nunito text-24 text-w700">Vespa matic</p>
                    <p className="text-nuntio text-18">25 Agustus 2021</p>
                  </div>
                  <div>
                    <p className="text-nunito text-w700 text-black">Prepayment: Rp. 2500000</p>
                    <p className="text-nunito text-24 text-green">Has been returned</p>
                  </div>
                </div>
                <input type="checkbox" className={Style.check} />
              </div>
              <div className={Style.card}>
                <img src="/bike.png" alt="img" className={Style.img} />
                <div className={Style.cardDesc}>
                  <div>
                    <p className="text-nunito text-24 text-w700">Vespa matic</p>
                    <p className="text-nuntio text-18">25 Agustus 2021</p>
                  </div>
                  <div>
                    <p className="text-nunito text-w700 text-black">Prepayment: Rp. 2500000</p>
                    <p className="text-nunito text-24 text-green">Has been returned</p>
                  </div>
                </div>
                <input type="checkbox" className={Style.check} />
              </div>
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

export default AuthenticatedRoute(History, { pathAfterFailure: '/login' });
