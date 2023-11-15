import Layout from '../../components/Layout';
import Style from '../../styles/login.module.css';
import Button from '../../components/base/button';
import { useState } from 'react';
import { useRouter } from 'next/router';
const ForgotPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState('')
  const [reTypePassword, setReTypePassword] = useState('')
  return (
    <div>
      <Layout isAuth={true} navbarOff={true}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <img src="/backgroundForgotPassword.svg" alt="img" className={Style.imageBg}/>
          </div>
          <div className={Style.containerForgot}>
            <div className={Style.forgotContent}>
              <p className="text-playfair text-w700 text-64 text-white">Change your Password!</p>
              <div className={Style.button}>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  name="retypePassword"
                  placeholder="Retype your Password"
                  className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                  onChange={(e) => setReTypePassword(e.target.value)}
                />
                <Button type="changePassword" text="Change Password" disable={password !== reTypePassword} email={router.query.email} password={password}/>
              </div>
              {/* <p className="text-nunito text-w700 text-24 text-white">
                You will receive a link to reset your password. If you haven’t received any link, click Resend Link
              </p> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
