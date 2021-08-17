import Layout from '../components/Layout';
import Style from '../styles/login.module.css';
import Button from '../components/base/button';
const Login = () => {
  return (
    <div>
      <Layout isAuth={true} navbarOff={true}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <img src="/backgroundLogin.svg" alt="img" />
          </div>
          <div className={Style.content}>
            <div className={Style.leftSide}>
              <p className="text-playfair text-w700 text-64 text-white">Let's Explore the World</p>
              <p className="text-nunito text-w700 text-24 text-white">Don't have an account?</p>
              <Button type="confirmation" text="Sign up" />
            </div>
            <div className={Style.rightSide}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
              />
              <input
                type="text"
                name="password"
                placeholder="Password"
                className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
              />
              <p className={`text-mulish text-w700 text-18 text-white`}>Forgot password?</p>
              <div>
                <Button type="confirmation" text="Login" />
              </div>
              <div>
                <Button type="confirmation" text="with google" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
