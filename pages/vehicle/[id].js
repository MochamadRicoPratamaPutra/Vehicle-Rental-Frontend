import Layout from '../../components/Layout';
import Style from '../../styles/vehicle.module.css';
import Button from '../../components/base/button';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Vehicle = ({ vehicle }) => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const [form, setForm] = useState({
    name: vehicle.name,
    price: vehicle.price,
    stock: vehicle.stock,
    type: vehicle.type,
    img: vehicle.img,
    description: vehicle.description,
    city: vehicle.city,
    prepayment: vehicle.prepayment,
  });
  const [imgItem, setImgItem] = useState(null);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputFile = (e) => {
    setImgItem(URL.createObjectURL(e.target.files[0]));
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleSubmit = (e) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.description);
    if (form.img.name) {
      formData.append('img', form.img, form.img.name);
    } else {
      formData.append('img', form.img);
    }
    formData.append('type', form.type);
    formData.append('city', form.city.toLowerCase());
    formData.append('prepayment', form.prepayment);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/vehicle/${router.query.id}`, formData, config)
      .then((res) => {
        swal('Success', 'Vehicle successfuly edit vehicle', 'success');
      })
      .catch((err) => swal('Error', `${err}`, 'error'));
  };
  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const config = {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        };
        axios
          .delete(`${process.env.REACT_APP_API_URL}/vehicle/${router.query.id}`, config)
          .then((res) => {
            swal('Success', 'Vehicle successfuly deleted', 'success');
            router.push('/');
          })
          .catch((err) => swal('Error', `${err}`, 'error'));
      }
    });
  };
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          {user.role !== 'admin' ? (
            <>
              <button type="button" className={`text-nunito text-36 ${Style.back}`} onClick={() => router.back()}>
                {'<'} Detail
              </button>
              <div className={Style.productBox}>
                <img src={`${vehicle.img}`} alt="item" className={Style.imageProduct} />
                <div className={Style.descriptionBox}>
                  <div className={Style.name}>
                    <p className="text-playfair text-48">{vehicle.name}</p>
                    <p className="text-playfair text-36 text-grey">{vehicle.city}</p>
                  </div>
                  <div>
                    <p className="text-green text-nunito text-bold">Avaliable</p>
                    <p className="text-nunito text-red">
                      {vehicle.prepayment === 0 ? 'No Prepayment' : 'Can Prepayment'}
                    </p>
                  </div>
                  <div className={Style.desc}>
                    <p className="text-nunito">{vehicle.description}</p>
                  </div>
                  <div className={Style.price}>
                    <p className="text-playfair text-36 text-bold">Rp. {vehicle.price}/day</p>
                  </div>
                  <div className={Style.amountBox}>
                    <Button type="plusMinus" maxAmount={vehicle.stock} />
                  </div>
                </div>
              </div>
              <div className={Style.buttonBox}>
                <Button type="reservation" to="chat" text="Chat admin" colorCode={2} />
                <Button type="addReservation" colorCode={1} data={vehicle} />
                <Button type="like" to="#" />
              </div>
            </>
          ) : (
            <>
              <button type="button" className={`text-nunito text-36 ${Style.back}`} onClick={() => router.back()}>
                {'<'} Edit Item
              </button>
              <div className={Style.productBox}>
                <div className={Style.imgInput}>
                  <img src={`${imgItem ? imgItem : vehicle.img}`} alt="item" className={Style.imageProduct} />
                  <label htmlFor="img" className="text-nunito text-w700 text-18 text-grey">
                    Click to add image
                  </label>
                  <input type="file" name="img" id="img" onChange={handleInputFile} className="displayNone" />
                </div>
                <div className={Style.descriptionBox}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name (max up to 50 words)"
                    className={`text-nunito text-24 ${Style.inputBox2}`}
                    onChange={handleChange}
                    defaultValue={vehicle.name}
                  />
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Location"
                    className={`text-nunito text-24 ${Style.inputBox2}`}
                    onChange={handleChange}
                    defaultValue={vehicle.city}
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description (max up to 150 words)"
                    className={`text-nunito text-24 ${Style.inputBox2}`}
                    onChange={handleChange}
                    defaultValue={vehicle.description}
                  />
                  <label htmlFor="price" className="text-playfair text-w700 text-24">
                    Price:{' '}
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Type the price"
                    className={Style.inputBlock}
                    onChange={handleChange}
                    defaultValue={vehicle.price}
                  />
                  <label htmlFor="stock" className="text-playfair text-w700 text-24">
                    Stock:{' '}
                  </label>
                  <input
                    type="text"
                    name="stock"
                    placeholder="Type the stock"
                    className={Style.inputBlock}
                    onChange={handleChange}
                    defaultValue={vehicle.stock}
                  />
                </div>
              </div>
              <div className={Style.buttonBox}>
                <select
                  className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color3} text-yellow`}
                  name="type"
                  onChange={handleChange}
                >
                  <option disabled selected value>
                    Add item to?
                  </option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="bike">Bike</option>
                </select>
                <button
                  className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
                <button
                  className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color3} text-yellow`}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </Layout>
    </div>
  );
};
export const getStaticPaths = async() =>{
  const paths = [{ params: { id: '6' } }, { params: { id: '7' } }, { params: { id: '8' } }]
  return {
    paths: paths,
    fallback: true
  }
}
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/vehicle/${id}`);
  return {
    props: {
      vehicle: data.data[0],
    },
  };
};
export default Vehicle;
