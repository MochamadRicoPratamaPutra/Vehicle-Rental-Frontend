import Layout from '../components/Layout';
import Button from '../components/base/button';
import Style from '../styles/user.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const User = () => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  });
  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.value } });
  };
  const [imgPrev, setImgPrev] = useState(null);
  const handleInputFile = (e) => {
    // console.log(e.target.file)
    // img = URL.createObjectURL(e.target.files[0])
    // console.log(img)
    e.preventDefault();
    if (e.target.files.length !== 0) {
      setImgPrev(URL.createObjectURL(e.target.files[0]));
    }
    dispatch({ type: 'CHANGE_VALUE', payload: { [e.target.name]: e.target.files[0] } });
  };
  const handleSubmit = (e) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('address', user.address);
    formData.append('birthDate', user.birthDate);
    formData.append('email', user.email);
    formData.append('profilePicture', user.profilePicture, user.profilePicture.name);
    formData.append('displayName', user.displayName);
    formData.append('phone', user.phone);
    formData.append('gender', user.gender);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/users/${user.id}`, formData, config)
      .then((res) => {
        swal('Success', 'Vehicle successfuly update data', 'success');
      })
      .catch((err) => swal('Error', 'error', 'error'));
  };
  const handleDeleteAcc = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover your account!',
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
        axios.delete(`http://localhost:4000/users/${user.id}`, config);
        swal('Your account has been deleted, we will miss you', {
          icon: 'success',
        });
        localStorage.removeItem('token');
        router.push('/login');
      } else {
        swal('Error');
      }
    });
  };
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={false}>
        <div className="contentBox">
          <p className="text-nunito text-w700 text-36">Profile</p>
          <div className={Style.top}>
            <img
              src={imgPrev !== null ? imgPrev : user.profilePicture ? user.profilePicture : '/avatar.svg'}
              alt="profilePicture"
              className={Style.picture}
            />
            <form onSubmit={handleInputFile} className={Style.inputFile}>
              <label htmlFor="profilePicture">Change Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                onChange={handleInputFile}
                className="displayNone"
              />
            </form>
            <p className="text-playfair text-w700 text-48">{user.name}</p>
            <p className="text-nunito text-w700 text-24 text-grey">{user.email}</p>
            <p className="text-nunito text-w700 text-24 text-grey">{user.phone}</p>
            <p className="text-nunito text-w700 text-24 text-grey">Has been active since 2013</p>
          </div>
          <div className={Style.gender}>
            <div>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="male"
                // defaultValue={user.gender === 'male' ? true : false}
              />
              <label className="text-nunito text-24" htmlFor="gender">
                male
              </label>
            </div>
            <div>
              <input type="radio" id="gender" name="gender" value="female" />
              <label className="text-nunito text-24" htmlFor="gender">
                female
              </label>
            </div>
          </div>
          <p className="text-nunito text-w900 text-24">Contacts</p>
          <div className={Style.input}>
            <label htmlFor="email" className="text-nunit text-24 text-grey">
              Email address:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="address" className="text-nunit text-24 text-grey">
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={user.address}
              onChange={handleChange}
            />
            <label htmlFor="phone" className="text-nunit text-24 text-grey">
              Mobile number:
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={user.phone}
              onChange={handleChange}
            />
            <p className="text-nunito text-w900 text-24">Identity</p>
            <div className={Style.identity}>
              <div className={Style.identityInput}>
                <label htmlFor="displayName" className="text-nunit text-24 text-grey">
                  Display name:
                </label>
                <input
                  type="text"
                  name="displayName"
                  id="displayName"
                  className={`text-nunito text-24 ${Style.inputBox}`}
                  value={user.displayName}
                  onChange={handleChange}
                />
              </div>
              <div className={Style.identityInput}>
                <label htmlFor="birthDate" className="text-nunit text-24 text-grey">
                  DD/MM/YY:
                </label>
                <input
                  type="text"
                  name="birthDate"
                  id="birthDate"
                  className={`text-nunito text-24 ${Style.inputBox}`}
                  value={user.birthDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={Style.identity}>
            <a>
              <button
                className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </a>
            <Button type="confirmation" text="Edit Password" />
            <Button type="confirmation" text="Cancel" />
            <a>
              <button
                className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.colorAlert} text-black`}
                onClick={handleDeleteAcc}
              >
                Delete Account
              </button>
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default User;
