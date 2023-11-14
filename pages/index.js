import Layout from '../components/Layout';
import Button from '../components/base/button';
import Style from '../styles/homepage.module.css';
import Card from '../components/base/card';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useState } from 'react';
export default function Home() {
  const user = useSelector((state) => state.user.profile);
  const [form, setForm] = useState({
    city: '',
    type: '',
    prepayment: '',
    date: '',
  });
  const [typeCar, setTypeCar] = useState('')
  const [city, setCity] = useState("")
  return (
    <div>
      <Layout isAuth={user.id ? true : false} home={true}>
        <div className={Style.contentHome}>
          <img src="/backgroundHome.svg" alt="bg" className={Style.imgBg} />
          <div className={Style.content}>
            <p className={`text-playfair ${Style.title}`}>Explore and Travel</p>
            <p className={`text-nunito ${Style.subtitle}`}>Vehicle Finder</p>
            <hr className={Style.smallLine} />
            <div className={`text-nunito ${Style.choiceBox}`}>
              <form>
                <select id="destination" name="destination" onChange={(e) => setCity(e.target.value)}>
                  <option disabled selected value>
                    Location
                  </option>
                  <option value="bandung">Bandung</option>
                  <option value="yogyakarta">Yogyakarta</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="kalimantan">Kalimantan</option>
                  <option value="malang">Malang</option>
                </select>
                <input type="submit" />
              </form>
              <form>
                <select id="vehicle" name="vehicle" onChange={(e) => setTypeCar(e.target.value)}>
                  <option disabled selected value>
                    Type
                  </option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
                <input type="submit" />
              </form>
            </div>
            <Button typeCar={typeCar} city={city} type={'explore'} text={'Explore'}/>
          </div>
          <hr className={Style.resLine} />
        </div>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <div className={Style.cardTitle}>
              <Link href="/add-item">
                <a>
                  <button
                    className={`text-w700 text-nunito text-24 ${Style.plus} ${
                      user.role !== 'admin' ? 'displayNone' : null
                    }`}
                  >
                    +
                  </button>
                </a>
              </Link>
              <p className="text-playfair text-36 text-bold">Popular in town</p>
            </div>
            <Link href="/vehicle-type">
              <a>
                <p className="text-nunito text-17 text-orange">View more {'>'}</p>
              </a>
            </Link>
          </div>
          <div className={Style.cardTitle}>
            <Card type="town" title="Merapi" city="yogyakarta" />
            <Card type="town" title="Monas" city="jakarta" />
            <Card type="town" title="Lembang" city="bandung" />
            <Card type="town" title="Bromo" city="malang1" />
          </div>
          <p className="text-playfair text-36 text-bold">Testimonial</p>
          <div className={Style.testimonyBox}>
            <div>
              <div className={Style.star}>
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
              </div>
              <p className={`text-24 text-mulish text-w400 ${Style.textBox}`}>
                ”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an
                amazing experience to have a ride for wildlife trip!”
              </p>
              <p className="text-22 text-w700 text-nunito">Edward Newgate</p>
              <p className="text-18 text-nunito text-grey">Circle User</p>
            </div>
            <div className={Style.cardTestimony}>
              <Card type="testimonial" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
