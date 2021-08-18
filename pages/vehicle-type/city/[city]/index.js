import Layout from '../../../../components/Layout';
import Style from '../../../../styles/vehicleType.module.css';
import Card from '../../../../components/base/card';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
const VehicleType = () => {
  const router = useRouter();
  const str = router.query.city;
  const [product, setProduct] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const page = router.query.page;
  const limit = router.query.limit;
  const sort = router.query.sort;
  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/vehicle/?page=${page}&limit=${limit}&search=city&keyword=${str}&column=createdAt&sort=${sort}`
        )
        .then((res) => {
          setProduct(res.data.data.result);
          setNext(res.data.data.next);
          setPrev(res.data.data.previous);
        })
        .catch(() => {});
    }
  }, [page, limit, str, sort]);
  return (
    <div>
      <Layout>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className={`text-playfair text-36 text-bold ${Style.cap}`}>{str}</p>
          </div>
          <div className={`${Style.cardTitle} ${Style.wrap}`}>
            {product.map((item) => (
              <div>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} />
              </div>
            ))}
          </div>
          <div className={Style.pagination}>
            <>
              {sort === 'desc' ? (
                <Link href={`/vehicle-type/city/${str}?page=1&limit=4&sort=asc`} >
                  <a className={Style.sort}>newest</a>
                </Link>
              ) : (
                <Link href={`/vehicle-type/city/${str}?page=1&limit=4&sort=desc`} >
                  <a className={Style.sort}>oldest</a>
                </Link>
              )}
            </>
            <>
              {prev ? (
                <Link href={`/vehicle-type/city/${str}?page=${prev.page}&limit=4&sort=${sort}`} >
                  <a className={Style.prev}>{prev.page}</a>
                </Link>
              ) : (
                <p className={Style.notDisplay}></p>
              )}
            </>
            <p className="text-orange">{page}</p>
            <>
              {next ? (
                <Link href={`/vehicle-type/city/${str}?page=${next.page}&limit=4&sort=${sort}`} >
                  <a className={Style.next}>{next.page}</a>
                </Link>
              ) : (
                <p></p>
              )}
            </>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VehicleType;
