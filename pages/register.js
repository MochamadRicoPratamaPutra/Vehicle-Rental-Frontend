import Layout from '../components/Layout';
import Style from '../styles/login.module.css';
import Button from '../components/base/button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
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
              <p className="text-playfair text-w700 text-64 text-white">Let&apos;s Explore the World</p>
              <p className="text-nunito text-w700 text-24 text-white">Don&apos;t have an account?</p>
              <Link href="/login">
                <a>
                  <Button type="confirmation" text="Login" to="/login" />
                </a>
              </Link>
            </div>
            <div className={Style.rightSide}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`text-nunito text-w700 text-24 text-white ${Style.inputBox}`}
                onChange={handleChange}
              />
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
              <div>
                <Button type="login" text="Register" register={true} data={form} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Register;
