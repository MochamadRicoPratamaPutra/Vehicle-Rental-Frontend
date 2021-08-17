import Layout from '../components/Layout';
import Style from '../styles/login.module.css';
import Button from '../components/base/button';
const ForgotPassword = () => {
  return (
    <div>
      <Layout isAuth={true} navbarOff={true}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <img src="/backgroundForgotPassword.svg" alt="img" />
          </div>
          <div className={Style.content}>
            <div className={Style.forgotContent}>
              <p className="text-playfair text-w700 text-64 text-white">Don't worry, we got your back!</p>
              <div className={Style.button}>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                />
                <Button type="confirmation" text="Sign up" />
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
