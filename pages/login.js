import Layout from '../components/Layout';
import Style from '../styles/login.module.css';
import Button from '../components/base/button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  useEffect(() => {
    const isAuth = localStorage.getItem('token');
    if (isAuth) {
      router.push('/');
    }
  });
  return (
    <div>
      <Layout isAuth={true} navbarOff={true}>
        <div className={Style.contentContainer}>
          <div className={Style.imageContainer}>
            <img src="/backgroundLogin.svg" alt="img" className={Style.imageBg} />
          </div>
          <div className={Style.content}>
            <div className={Style.leftSide}>
              <p className="text-playfair text-w700 text-64 text-white">Let's Explore the World</p>
              <p className="text-nunito text-w700 text-24 text-white">Don't have an account?</p>
              <Link href="/register">
                <a>
                  <Button type="confirmation" text="Sign up" to="/register" />
                </a>
              </Link>
            </div>
            <div className={Style.rightSide}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                onChange={handleChange}
              />
              <Link href="/forgot-password">
                <a>
                  <p className={`text-mulish text-w700 text-18 text-white`}>Forgot password?</p>
                </a>
              </Link>
              <div>
                <Button type="login" text="Login" data={form} to="/" />
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
