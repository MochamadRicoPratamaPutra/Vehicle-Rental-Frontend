import Layout from '../../../components/Layout';
import Style from '../../../styles/vehicle.module.css';
import Button from '../../../components/base/button';
import { useSelector } from 'react-redux';
const Vehicle = () => {
  const user = useSelector((state) => state.user.profile);
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
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <p className="text-nunito text-36">{'<'} Reservation</p>
          <div className={Style.productBox}>
            <img src="/bike.png" alt="item" className={Style.imageProduct} />
            <div className={Style.descriptionBox}>
              <div>
                <p className="text-playfair text-48">Fixie-Gray Only</p>
                <p className="text-playfair text-36 text-grey">Yogyakarta</p>
                <p className="text-nunito text-red">No Prepayment</p>
              </div>
              <div className={Style.amountBox}>
                <Button type="minus" />
                <p className="text-48 text-w900 text-nunito">2</p>
                <Button type="plus" />
              </div>
              <div>
                <p className="text-24 text-w700 text-black">Reservation Date: </p>
                <input type="date" min={today} className={`${Style.inputBox} text-nunito text-w400 text-24`} />
                <div className={`${Style.choiceBox}`}>
                  <form>
                    <select id="duration" name="duration" className="text-nunito text-w400 text-18">
                      <option value="1 day">1 day</option>
                      <option value="2 day">2 day</option>
                      <option value="3 day">3 day</option>
                    </select>
                    <input type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Button type="confirmation" text="Pay now: Rp. 178000" />
        </div>
      </Layout>
    </div>
  );
};

export default Vehicle;
