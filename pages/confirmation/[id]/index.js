import Layout from '../../../components/Layout';
import Style from '../../../styles/confirmation.module.css';
import Button from '../../../components/base/button';
const Vehicle = () => {
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <p className="text-nunito text-36">{'<'} Payment</p>
          <div className={Style.productBox}>
            <div>
              <img src="/bike.png" alt="item" className={Style.imageProduct} />
            </div>
            <div className={Style.right}>
              <div>
                <p className="text-playfair text-48 text-dark">Fixie-Gray Only</p>
                <p className="text-playfair text-36 text-dark">Yogyakarta</p>
              </div>
              <p className="text-nunito text-32 text-grey text-w700">No Prepayment</p>
              <div>
                <p className="text-playfair text-36 text-dark text-w700">#FG1209878YZS</p>
                <button className={`${Style.copy} text-nunito text-w700 text-24`}>Copy booking code</button>
              </div>
            </div>
          </div>
          <div className={Style.detail}>
            <div className={`${Style.box} ${Style.boxLeft}`}>
              <p className="text-nunito text-w700 text-24 text-black">quantity: 2 bikes</p>
            </div>
            <div className={`${Style.box} ${Style.boxRight} ${Style.date}`}>
              <p className="text-nunito text-w700 text-24 text-black">Reservation date:</p>
              <p className="text-nunito text-w700 text-24 text-black">Jan 18 - 20 2021</p>
            </div>
          </div>
          <div className={Style.detail}>
            <div className={`${Style.box} ${Style.boxLeft}`}>
              <div>
                <p className="text-nunito text-w900 text-24 text-black">Order details: </p>
                <p className="text-nunito text-w400 text-24 text-black">1 bike: Rp. 78.000</p>
                <p className="text-nunito text-w400 text-24 text-black">1 bike: Rp. 78.000</p>
              </div>
              <p className="text-nunito text-w700 text-24 text-black">Total: 178.000</p>
            </div>
            <div className={Style.box}>
              <p className="text-nunito text-w900 text-24 text-black">Identity: </p>
              <p className="text-nunito text-w400 text-24 text-black">Samantha Doe (+6290987682)</p>
              <p className="text-nunito text-w400 text-24 text-black">samanthadoe@mail.com</p>
            </div>
          </div>
          <div className={Style.payment}>
            <p className="text-nunito text-w700 text-24">Payment code: </p>
            <div className={Style.box2}>
              <p className="text-playfair text-w-700 text-24">#FG1209878YZS</p>
              <button className={`text-nunito text-w700 text-24 text-yellow ${Style.buttonCopy}`}>copy</button>
            </div>
            <form>
              <select name="paymentMethod" id="paymentMethod" className="text-nunito text-w700 text-24">
                <option disabled selected value>
                  Select payment methods
                </option>
                <option value="cash">cash</option>
                <option value="tranfer">transfer</option>
              </select>
            </form>
          </div>
          <Button type="confirmation" text="Pay now: Rp. 178000" />
        </div>
      </Layout>
    </div>
  );
};

export default Vehicle;
