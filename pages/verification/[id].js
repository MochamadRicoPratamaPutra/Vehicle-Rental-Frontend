import axios from 'axios';
import { useEffect } from 'react';
import Style from '../../styles/confirmationStatus.module.css';
import { useRouter } from 'next/router';
const ConfirmationStatus = ({ validate }) => {
  const router = useRouter();
  useEffect(() => {
    if (validate === true) {
      setTimeout(() => {
        router.push('/login');
      }, 5000);
    } else {
      setTimeout(() => {
        router.push('/');
      }, 5000);
    }
  });
  console.log(validate);
  return (
    <div>
      {validate ? (
        <div className={Style.wrapper}>
          <img src={'/Logo.svg'} alt="Logo" />
          <h1>Thank you for registering</h1>
          <h2>Enjoy your travel with Circle!</h2>
        </div>
      ) : (
        <div className={Style.wrapper}>
          <img src={'/Logo.svg'} alt="Logo" />
          <h1>FORBIDDEN, YOU DONT HAVE ACCESS TO THIS PAGE</h1>
        </div>
      )}
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log(id);
  try {
    await axios.get(`${process.env.REACT_APP_BASE_URL}/users/verification/${id}`);
    return {
      props: {
        validate: true,
      },
    };
  } catch {
    return {
      props: {
        validate: false,
      },
    };
  }
};
export default ConfirmationStatus;
