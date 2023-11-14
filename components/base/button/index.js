import Style from './button.module.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { login, signup } from '../../../config/action/userAction';
import swal from 'sweetalert';
import { useState } from 'react';
import {
  updateAmount,
  addReservation,
  confirmationReservation,
  completeReservation,
} from '../../../config/action/reservationAction';
import axios from 'axios';
const Button = ({ type, to, text, colorCode, data, maxAmount, itemAmount, id, register, done, email, password, disable, city, typeCar }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [amount, setAmount] = useState(itemAmount ? itemAmount : 0);
  const amountFix = useSelector((state) => state.reservation.amount);
  const handleLogin = async () => {
    dispatch(login(data))
      .then((res) => {
        swal('Success Login', 'Welcome', 'success');
        router.push(`/${to}`);
      })
      .catch((err) => {
        swal(`Error`, err?.response?.data?.message || `Login gagal`, 'error');
      });
  };
  const handleRegister = async () => {
    dispatch(signup(data))
      .then((res) => {
        swal('Success Login', 'Please, check your email to activating your account', 'success');
      })
      .catch((err) => {
        swal(`Error`, `${err}`, 'error');
      });
  }
  const handlePlusAmount = () => {
    const newAmount = amount + 1;
    if (newAmount < maxAmount) {
      setAmount(newAmount);
      dispatch(updateAmount(newAmount));
    } else {
      setAmount(maxAmount);
      dispatch(updateAmount(maxAmount));
    }
  };
  const handleMinusAmount = () => {
    let newAmount = amount - 1;
    if (newAmount > 0) {
      setAmount(newAmount);
      dispatch(updateAmount(amount));
    } else {
      setAmount(0);
      dispatch(updateAmount(0));
    }
  };
  const handleReservation = () => {
    if (amountFix === 0) {
      swal('Error', 'Please enter your amount of vehicle you want to rent', 'error');
    } else {
      dispatch(addReservation(data, amountFix));
      router.push('/reservation');
    }
  };
  const handleConfirmation = () => {
    if (!data.date) {
      swal('Error', 'Please fill the reservation date', 'error');
    } else {
      dispatch(confirmationReservation(data));
      router.push('/confirmation');
    }
  };
  const handleComplete = () => {
    if (!data.payment) {
      swal('Error', 'Payment method has not been selected', 'error');
    } else {
      dispatch(completeReservation(data))
        .then((res) => {
          swal('Success Making Reservation', "We're waiting for your payment", 'success');
          router.push('/');
        })
        .catch((err) => {
          swal(`Error`, `${err}`, 'error');
        });
    }
  };
  const handleApprove = () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    console.log(id)
    axios
      .get(`${process.env.REACT_APP_API_URL}/reservation/payment/${id}`, config)
      .then(() => {
        swal('Payment Approved', 'success', 'success');
      })
      .catch((err) => {
        swal(`Error`, `${err}`, 'error');
      });
  };
  const handleForgot = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/email-forgot/${email}`).then(() => {
      swal('Email Sent!', 'Check your email to recover your password', 'success');
    }).catch((err) => {
      swal(`Error`, `${err}`, 'error');
    })
  }
  const handleChangePassword = () => {
    console.log(password)
    axios.put(`${process.env.REACT_APP_API_URL}/users/forgot/${email}`, {
      password: password
    }).then(() => {
      swal('Password updated!', 'You can login now', 'success');
      router.push('/login')
    }).catch((err) => {
      swal(`Error`, `${err}`, 'error');
    })
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
            <button className={`text-nunito text-black ${Style.button} ${Style.button1} ${Style.color2}`}>Login</button>
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
  } else if (type === 'plusMinus') {
    return (
      <div className={Style.plusMinusBox}>
        <button
          className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color4} text-black`}
          onClick={handleMinusAmount}
        >
          -
        </button>
        <p className="text-48 text-w900 text-nunito">{itemAmount ? itemAmount : amount}</p>
        <button
          className={`text-nunito text-48 text-w900 ${Style.button} ${Style.button3} ${Style.color1} text-black`}
          onClick={handlePlusAmount}
        >
          +
        </button>
      </div>
    );
  } else if (type === 'confirmationReservation') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={handleConfirmation}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'completion') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={handleComplete}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'approve') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={handleApprove}
            disabled={done !== 'waiting for payment' ? true : false}
          >
            Approve Payment
          </button>
        </a>
      </div>
    );
  } else if (type === 'confirmation') {
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
  } else if (type === 'addReservation') {
    return (
      <div>
        <button
          className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
          onClick={handleReservation}
        >
          Reservation
        </button>
      </div>
    );
  } else if (type === 'login') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={register ? handleRegister : handleLogin}
          >
            {register ? 'Register' : 'Login'}
          </button>
        </a>
      </div>
    );
  } else if (type === 'forgotPassword') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1} text-black`}
            onClick={handleForgot}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'changePassword') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito text-24 text-w900 ${Style.button} ${Style.button4} ${Style.color1}`}
            onClick={handleChangePassword}
            disabled={disable}
          >
            {text}
          </button>
        </a>
      </div>
    );
  } else if (type === 'explore') {
    return (
      <div>
        <a>
          <button
            className={`text-nunito ${Style.button} ${Style.button1} ${Style.color1}`}
            onClick={() => {
              if(city && !typeCar) {
                router.push(`/vehicle-type/city/${city}?page=1&limit=4&sort=asc`)
              } else if(!city && typeCar) {
                router.push(`/vehicle-type/${typeCar}?page=1&limit=4&sort=asc`)
              } 
              else if(city && type) {
                router.push(`/search-city-type?city=${city}&type=${typeCar}&page=1&limit=4&sort=asc`)
              }
            }}
            disabled={!city && !typeCar}
          >
            {text}
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
