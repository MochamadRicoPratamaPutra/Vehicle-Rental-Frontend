import Style from './button.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {useRouter} from 'next/router'
import { login } from '../../../config/action/userAction';
import swal from 'sweetalert';
import { useState } from 'react';
import { updateAmount } from '../../../config/action/reservationAction';
const Button = ({ type, to, text, colorCode, data, maxAmount }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [amount, setAmount] = useState(0)
  const handleLogin = async () => {
    console.log(data);
    dispatch(login(data))
      .then((res) => {
        swal("Success Login","Welcome", "success")
        router.push(`/${to}`);
      })
      .catch((err) => {
        swal(`Error`,`${err}`, "error");
      });
  };
  const handlePlusAmount = () => {
    const newAmount = amount + 1
    if (newAmount < maxAmount) {
      setAmount(newAmount)
      dispatch(updateAmount(newAmount))
    } else {
      setAmount(maxAmount)
      dispatch(updateAmount(maxAmount))
    }
  }
  const handleMinusAmount = () => {
    let newAmount = amount - 1
    if (newAmount > 0) {
      setAmount(newAmount)
      dispatch(updateAmount(amount))
    } else {
      setAmount(0)
      dispatch(updateAmount(0))
    }
  }
  if (type == 'registerNav') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button className={`text-nunito text-black ${Style.button} ${Style.button1} ${Style.color1}`}>
              Register
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type == 'loginNav') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button className={`text-nunito text-black ${Style.button} ${Style.button1} ${Style.color2}`}>
              Login
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'reservation') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button
              className={`text-nunito text-24 text-w700 ${Style.button} ${Style.button2} ${
                colorCode === 1 ? Style.color1 : Style.color3
              } ${colorCode === 1 ? `text-black` : `text-yellow`}`}
            >
              {text}
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'like') {
    return (
      <div>
        <Link href={`/${to}`}>
          <a>
            <button
              className={`text-nunito text-24 text-w700 text-yellow ${Style.button} ${Style.color3} ${Style.like}`}
            >
              <img src="/like.svg" alt="like" />
              <p>Like</p>
            </button>
          </a>
        </Link>
      </div>
    );
  } else if (type === 'plus') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color1} text-black`}
          >
            +
          </button>
        </a>
      </div>
    );
  } else if (type === 'minus') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color4} text-black`}
          >
            -
          </button>
        </a>
      </div>
    );
  } else if (type === 'plusMinus') {
    return (
      <div className={Style.plusMinusBox}>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color4} text-black`}
            onClick={handleMinusAmount}
          >
            -
          </button>
          <p className="text-48 text-w900 text-nunito">{amount}</p>
          <button
            className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color1} text-black`}
            onClick={handlePlusAmount}
          >
            +
          </button>
      </div>
    )
  }
  else if (type === 'confirmation') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'category') {
    return (
      <div>
        <select
          className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color3} text-yellow`}
        >
          <option disabled selected value>
            Add item to?
          </option>
          <option value="car">Car</option>
          <option value="motorbike">Motorbike</option>
          <option value="bike">Bike</option>
        </select>
      </div>
    );
  } else if (type === 'login') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={handleLogin}
          >
            Login
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <Link href={`/#`}>
          <a>
            <button className={`text-nunito ${Style.button} ${Style.button1} ${Style.color1}`}>explore</button>
          </a>
        </Link>
      </div>
    );
  }
};

export default Button;
