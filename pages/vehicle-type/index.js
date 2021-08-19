import Layout from '../../components/Layout';
import Style from '../../styles/vehicleType.module.css';
import Card from '../../components/base/card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const VehicleType = () => {
  const user = useSelector((state) => state.user.profile);
  const [car, setCar] = useState([]);
  const [bike, setBike] = useState([]);
  const [motorcycle, setMotorcycle] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=bike&column=createdAt&sort=asc`
      )
      .then((res) => {
        setBike(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(`${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=car&column=createdAt&sort=asc`)
      .then((res) => {
        setCar(res.data.data.result);
      })
      .catch(() => {});
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=1&limit=4&search=type&keyword=motorcycle&column=createdAt&sort=asc`
      )
      .then((res) => {
        setMotorcycle(res.data.data.result);
      })
      .catch(() => {});
  }, []);
  console.log(car)
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Popular in town</p>
            <Link href="/vehicle-type/city">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            <Card type="town" title="Merapi" city="yogyakarta"/>
            <Card type="town" title="Monas" city="jakarta"/>
            <Card type="town" title="Lembang" city="bandung"/>
            <Card type="town" title="Bromo" city="malang"/>
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Car</p>
            <Link href="/vehicle-type/car?page=1&limit=4&sort=asc">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            {car.map((item) => (
              <div>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} />
              </div>
            ))}
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Motorcycle</p>
            <Link href="/vehicle-type/motorcycle?page=1&limit=4&sort=asc">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            {motorcycle.map((item) => (
              <div>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} />
              </div>
            ))}
          </div>
          <div className={Style.cardTitle}>
            <p className="text-playfair text-36 text-bold">Bike</p>
            <Link href="/vehicle-type/bike?page=1&limit=4&sort=asc">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            {bike.map((item) => (
              <div>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VehicleType;
