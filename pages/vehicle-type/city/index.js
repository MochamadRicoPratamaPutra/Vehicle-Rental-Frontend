import Layout from '../../../components/Layout';
import Style from '../../../styles/vehicleType.module.css';
import Card from '../../../components/base/card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const VehicleType = () => {
  const user = useSelector((state) => state.user.profile);
  const [jakarta, setJakarta] = useState([]);
  const [bandung, setBandung] = useState([]);
  const [malang, setMalang] = useState([]);
  const [yogyakarta, setYogyakarta] = useState([]);
  const [kalimantan, setKalimantan] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=city&keyword=jakarta&column=createdAt&sort=asc`
      )
      .then((res) => {
        setJakarta(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=malang&column=createdAt&sort=asc`
      )
      .then((res) => {
        setMalang(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=bandung&column=createdAt&sort=asc`
      )
      .then((res) => {
        setBandung(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=yogyakarta&column=createdAt&sort=asc`
      )
      .then((res) => {
        setYogyakarta(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=kalimantan&column=createdAt&sort=asc`
      )
      .then((res) => {
        setKalimantan(res.data.data.result);
      })
      .catch(() => {});
  }, []);
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Bandung</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Yogyakarta</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Jakarta</p>
            <Link href="/vehicle-type/city/jakarta?page=1&limit=4&sort=asc">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            {jakarta.map((item) => (
              <div>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} />
              </div>
            ))}
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Kalimantan</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Malang</p>
            <p className="text-nunito text-17 text-orange">View more {'>'}</p>
          </div>
          <div className={Style.cardTitle}>
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
            <Card type="product" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VehicleType;
