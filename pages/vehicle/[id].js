import Layout from '../../components/Layout';
import Style from '../../styles/vehicle.module.css';
import Button from '../../components/base/button';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
const Vehicle = ({vehicle}) => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter()
  const dispatch = useDispatch()
  // const handleReservation = () => {
  //   dispatch()
  // }
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <button type="button" className={`text-nunito text-36 ${Style.back}`} onClick={() => router.back()}>{'<'} Detail</button>
          <div className={Style.productBox}>
            <img src={`${vehicle.img}`} alt="item" className={Style.imageProduct} />
            <div className={Style.descriptionBox}>
              <div className={Style.name}>
                <p className="text-playfair text-48">{vehicle.name}</p>
                <p className="text-playfair text-36 text-grey">{vehicle.city}</p>
              </div>
              <div>
                <p className="text-green text-nunito text-bold">Avaliable</p>
                <p className="text-nunito text-red">{vehicle.prepayment === 0 ? "No Prepayment" : "Can Prepayment"}</p>
              </div>
              <div className={Style.desc}>
                <p className="text-nunito">{vehicle.description}</p>
              </div>
              <div className={Style.price}>
                <p className="text-playfair text-36 text-bold">Rp. {vehicle.price}/day</p>
              </div>
              <div className={Style.amountBox}>
                <Button type="plusMinus" maxAmount={vehicle.stock}/>
              </div>
            </div>
          </div>
          <div className={Style.buttonBox}>
            <Button type="reservation" to="chat" text="Chat admin" colorCode={2} />
            <Button type="reservation" to="/reservation" text="Reservation" colorCode={1} />
            <Button type="like" to="#" />
          </div>
        </div>
      </Layout>
    </div>
  );
};
export const getServerSideProps =async(context)=>{
  const id = context.params.id
  const {data} = await axios.get(`http://localhost:4000/vehicle/${id}`)
  return {
    props: {
      vehicle: data.data[0]
    }
  }
}
export default Vehicle;