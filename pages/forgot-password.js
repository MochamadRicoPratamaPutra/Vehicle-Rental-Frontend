import Layout from '../components/Layout';
import Style from '../styles/login.module.css';
import Button from '../components/base/button';
import { useState } from 'react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  return (
    <div>
      <Layout isAuth={true} navbarOff={true}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <img src="/backgroundForgotPassword.svg" alt="img" className={Style.imageBg}/>
          </div>
          <div className={Style.containerForgot}>
            <div className={Style.forgotContent}>
              <p className="text-playfair text-w700 text-64 text-white">Don&apos;t worry, we got your back!</p>
              <div className={Style.button}>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="forgotPassword" text="Send Email" email={email}/>
              </div>
              <p className="text-nunito text-w700 text-24 text-white">
                You will receive a link to reset your password. If you haven’t received any link, click Resend Link
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
