import Layout from '../components/Layout';
import Button from '../components/base/button';
import Style from '../styles/user.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment/moment';
const User = () => {
  const user = useSelector((state) => state.user.profile);
  const [dataUser, setDataUser] = useState({
    name: user.name,
    address: user.address,
    birthDate: user.birthDate,
    email: user.email,
    profilePicture: user.profilePicture,
    displayName: user.displayName,
    gender: user.gender,
    phone: user.phone
  })
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [reTypePassword, setReTypePassword] = useState("")
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  });
  const [imgPrev, setImgPrev] = useState(null);

  const handleChangePassword = () => {
    axios.put(`${process.env.REACT_APP_API_URL}/users/forgot/${dataUser.email}`, {
      password: newPassword
    }).then(() => {
      swal('Password updated!', 'Password has been updated', 'success');
      router.push('/user')
    }).catch((err) => {
      swal(`Error`, `${err}`, 'error');
    })
  }
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
            <p className="text-playfair text-w700 text-48">{user.name}</p>
            <p className="text-nunito text-w700 text-24 text-grey">{user.email}</p>
          </div>
          <p className="text-nunito text-w900 text-24">Change Password</p>
          <div className={Style.input}>
            <label htmlFor="oldPassword" className="text-nunit text-24 text-grey">
              Old Password:
            </label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <label htmlFor="newPassword" className="text-nunit text-24 text-grey">
              New Password:
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label htmlFor="retypePassword" className="text-nunit text-24 text-grey">
              Retype New Password:
            </label>
            <input
              type="password"
              name="retypePassword"
              id="retypePassword"
              className={`text-nunito text-24 ${Style.inputBox}`}
              value={reTypePassword}
              onChange={(e) => setReTypePassword(e.target.value)}
            />
          </div>
          <div className={Style.identity}>
            <a>
              <button
                className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
                onClick={handleChangePassword}
                disabled={reTypePassword === newPassword && newPassword !== "" && reTypePassword !== "" ? false : true}
              >
                Save changes
              </button>
            </a>
            <div>
              <a>
                <button
                  className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
                  onClick={() => router.push('/user')}
                >
                  Cancel
                </button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default User;
