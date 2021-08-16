import Image from 'next/image';
import Style from './navbar.module.css';
import Button from '../../base/button';
import { useState } from 'react';
const Navbar = ({ isAuth }) => {
  const [drop, setDrop] = useState(false);
  const handleDropDown = () => {
    if (drop === false) {
      setDrop(true);
    } else if (drop === true) {
      setDrop(false);
    }
  };

  return (
    <div>
      <div className={Style.container}>
        <div className={Style.logo}>
          <Image src="/Logo.svg" width="44px" height="44px" />
          <button className={Style.buttonCollapse} onClick={handleDropDown}>
            <hr />
            <hr />
            <hr />
          </button>
        </div>
        <div className={`text-nunito ${Style.tab} ${drop === false ? `${Style.hidden}` : `${Style.visible}`}`}>
          <p>Home</p>
          <p>Vehicle Type</p>
          <p>History</p>
          <p>About</p>
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
              <img src="/avatar.svg" className={Style.photoBox}/>
            </div>
          ) : (
            <div className={Style.buttonContainer}>
              <Button type="login" to="login" />
              <Button type="register" to="register" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
