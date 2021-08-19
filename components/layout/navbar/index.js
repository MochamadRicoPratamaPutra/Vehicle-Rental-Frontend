import Image from 'next/image';
import Style from './navbar.module.css';
import Button from '../../base/button';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Navbar = ({ isAuth, navbarOff, vehicle, home, history, about }) => {
  const [drop, setDrop] = useState(false);
  const user = useSelector((state) => state.user.profile);
  const handleDropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else if (drop === true) {
      setDrop(false);
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
          <Link href="/home">
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
              <form>
                <input
                  type="text"
                  name="searchVehicle"
                  id="serchVehicle"
                  placeholder="Search Vehicle"
                  className={`text-nunito ${Style.searchBox}`}
                />
              </form>
              <div>
                <Image src="/email.svg" width="40px" height="36px" />
              </div>
              <Link href="/user">
                <a>
                  <img src={user.profilePicture ? user.profilePicture : "/avatar.svg"} className={Style.photoBox} />
                </a>
              </Link>
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
