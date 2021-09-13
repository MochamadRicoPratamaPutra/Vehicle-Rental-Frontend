import Image from 'next/image';
import Style from './navbar.module.css';
import Button from '../../base/button';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { logout } from '../../../config/action/userAction';
import swal from 'sweetalert';
const Navbar = ({ isAuth, navbarOff, vehicle, home, history, about, searchOff }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [drop, setDrop] = useState(false);
  const user = useSelector((state) => state.user.profile);
  const [search, setSearch] = useState('');
  const [dropUser, setDropUser] = useState(false);
  const handleDropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else if (drop === true) {
      setDrop(false);
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmitSearch = (e) => {
    e.preventDefault()
    if (search !== '') {
      router.push(`/search?keyword=${search}&page=1&limit=4&sort=asc`);
    } else {
      swal('Error', 'Please insert a word before clicking the button', 'error')
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    router.push('/');
  };
  const handleUserClick = () => {
    if (dropUser === false) {
      setDropUser(true);
    } else if (dropUser === true) {
      setDropUser(false);
    }
  };
  return (
    <div>
      <div className={`${navbarOff === true ? 'displayNone' : Style.container}`}>
        <div className={Style.logo}>
          <Link href="/">
            <a>
              <Image src="/Logo.svg" width="44px" height="44px" />
            </a>
          </Link>
          <button className={Style.buttonCollapse} onClick={handleDropDown}>
            <hr />
            <hr />
            <hr />
          </button>
        </div>
        <hr className={Style.line} />
        <div className={`text-nunito ${Style.tab} ${drop === false ? `${Style.hidden}` : `${Style.visible}`}`}>
          <Link href="/">
            <a>
              <p className={home ? 'text-w700' : null}>Home</p>
            </a>
          </Link>
          <Link href="/vehicle-type">
            <a>
              <p className={vehicle ? 'text-w700' : null}>Vehicle Type</p>
            </a>
          </Link>
          <Link href="/history">
            <a>
              <p className={history ? 'text-w700' : null}>History</p>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <p className={about ? 'text-w700' : null}>About</p>
            </a>
          </Link>
          {isAuth === true ? (
            <div className={Style.buttonContainer}>
              <form onSubmit={handleSubmitSearch}>
                <input
                  type="text"
                  name="searchVehicle"
                  id="searchVehicle"
                  placeholder="Search Vehicle"
                  className={`text-nunito ${Style.searchBox} ${searchOff ? 'displayNone' : null}`}
                  onChange={handleSearch}
                />
              </form>
              <div>
                <Image src="/email.svg" width="40px" height="36px" />
              </div>
              <button className={Style.userButton} onClick={handleUserClick}>
                <img src={user.profilePicture ? user.profilePicture : '/avatar.svg'} className={Style.photoBox} />
                <div className={`${dropUser ? null : 'displayNone'} ${Style.userDrop}`}>
                  <div className={Style.userContent}>
                    <Link href="/user">
                      <a className={`text.nunito text-24 ${Style.userList}`}>User</a>
                    </Link>
                    <Link href="/history">
                      <a className={`text.nunito text-24 ${Style.userList}`}>History</a>
                    </Link>
                    <button className={`${Style.logout} ${Style.userList} text-nunito text-24`} onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className={Style.buttonContainer}>
              <Button type="loginNav" to="login" />
              <Button type="registerNav" to="register" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
