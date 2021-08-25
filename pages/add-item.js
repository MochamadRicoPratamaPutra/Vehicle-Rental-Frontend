import Layout from '../components/Layout';
import Style from '../styles/addItem.module.css';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AuthenticatedRoute from '../components/authenticatedRoute';
import { useRouter } from 'next/router';
const AddItem = () => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    price: 0,
    stock: 0,
    type: '',
    img: '',
    description: '',
    city: '',
    prepayment: 0,
  });
  let imgItem = null;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputFile = (e) => {
    console.log(e.target.files[0]);
    let imgItem = URL.createObjectURL(e.target.files[0]);
    console.log(imgItem);
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
    console.log(form);
    console.log(form.img);
    console.log(form.img.name);
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.description);
    formData.append('img', form.img, form.img.name);
    formData.append('type', form.type);
    formData.append('city', form.city.toLowerCase());
    formData.append('prepayment', form.prepayment);
    e.preventDefault();
    axios
      .post(`http://localhost:4000/vehicle`, formData, config)
      .then((res) => {
        swal('Success', 'Vehicle successfuly added to list', 'success');
      })
      .catch((err) => swal('Error', 'error', 'error'));
  };
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
        <button type="button" className={`text-nunito text-36 ${Style.back}`} onClick={() => router.back()}>{'<'} Add new item</button>
          <div className={Style.inputContainer}>
            <div className={Style.leftSide}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name (max up to 50 words)"
                className={`text-nunito text-24 ${Style.inputBox}`}
                onChange={handleChange}
              />
              <div className={Style.photoContainer}>
                <button>
                  <img src={`${imgItem ? imgItem : '/photo.svg'}`} alt="photo" />
                  <p className="text-nunito text-w700 text-18 text-grey">Click to add image</p>
                  <input type="file" name="img" onChange={handleInputFile} />
                </button>
              </div>
            </div>
            <div className={Style.rightSide}>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Location"
                className={`text-nunito text-24 ${Style.inputBox}`}
                onChange={handleChange}
              />
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description (max up to 150 words)"
                className={`text-nunito text-24 ${Style.inputBox}`}
                onChange={handleChange}
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
              />
            </div>
          </div>
          <div className={Style.buttonContainer}>
            <div>
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
            </div>
            <div>
              <a>
                <button
                  className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AuthenticatedRoute(AddItem, { pathAfterFailure: '/login', admin: true });
