import Layout from '../../components/Layout';
import Style from '../../styles/vehicle.module.css';
import Button from '../../components/base/button';
const Vehicle = () => {
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <p className="text-nunito text-36">{'<'} Detail</p>
          <div className={Style.productBox}>
            <img src="/bike.png" alt="item" className={Style.imageProduct} />
            <div className={Style.descriptionBox}>
              <div>
                <p className="text-playfair text-48">Fixie-Gray Only</p>
                <p className="text-playfair text-36 text-grey">Yogyakarta</p>
              </div>
              <div>
                <p className="text-green text-nunito text-bold">Avaliable</p>
                <p className="text-nunito text-red">No Prepayment</p>
              </div>
              <div>
                <p className='text-nunito'>Capacity: 1 person</p>
                <p className='text-nunito'>Type: Bike</p>
                <p className='text-nunito'>Reservation before 2 PM</p>
              </div>
              <div className={Style.price}>
                <p className="text-playfair text-36 text-bold">Rp.78.000/day</p>
              </div>
              <div className={Style.amountBox}>
                <Button type="minus" />
                <p className="text-48 text-w900 text-nunito">2</p>
                <Button type="plus" />
              </div>
            </div>
          </div>
          <div className={Style.buttonBox}>
            <Button type="reservation" to="chat" text="Chat admin" colorCode={2} />
            <Button type="reservation" to="reservation" text="Reservation" colorCode={1} />
            <Button type="like" to="#" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Vehicle;
