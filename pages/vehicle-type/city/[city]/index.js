import Layout from '../../../../components/Layout';
import Style from '../../../../styles/vehicletype.module.css';
import Card from '../../../../components/base/card';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const VehicleType = ({product, next, prev, str, sort, page, limit}) => {
  const user = useSelector((state) => state.user.profile);
  console.log(product)
  const router = useRouter();
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true}>
        <div className="contentBox">
          <div className={Style.cardTitle}>
            <p className={`text-playfair text-36 text-bold ${Style.cap}`}>{str}</p>
          </div>
          <div className={`${Style.cardTitle} ${Style.wrap} ${parseInt(product.length) === parseInt(limit) ? null : Style.lastPage}`}>
            {product.map((item) => (
              <div key={item.id}>
                <Card type="product" title={item.name} city={item.city} img={item.img} id={item.id} margining={parseInt(product.length) === parseInt(limit) ? null : true}/>
              </div>
            ))}
          </div>
          <div className={Style.pagination}>
            <>
              {sort === 'desc' ? (
                <Link href={`/vehicle-type/city/${str}?page=1&limit=4&sort=asc`} >
                  <a className={Style.sort}>oldest</a>
                </Link>
              ) : (
                <Link href={`/vehicle-type/city/${str}?page=1&limit=4&sort=desc`} >
                  <a className={Style.sort}>newest</a>
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
export const getServerSideProps = async (context) => {
  try {
    const page = context.query.page;
    const limit = context.query.limit;
    const str = context.params.city;
    const sort = context.query.sort;
    let product;
    let next;
    let prev;
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=${page}&limit=${limit}&search=city&keyword=${str}&column=createdAt&sort=${sort}`
      )
      .then((res) => {
        product = res.data.data.result;
        next = res.data.data.next;
        prev = res.data.data.previous;
      });
    // console.log(product, next, prev)
    if (!next) {
      next = null
    }
    if (!prev) {
      prev = null
    }
    return {
      props: {
        product,
        next,
        prev,
        str,
        sort,
        page,
        limit
      },
    };
  } catch {
    const str = context.params.city;
    return {
      redirect: {
        destination: `/vehicle-type/city/${str}?page=4&limit=4&sort=asc`,
        permanent: false,
      },
    };
  }
};
export default VehicleType;
  // const str = router.query.city;
  // const [product, setProduct] = useState([]);
  // const [next, setNext] = useState([]);
  // const [prev, setPrev] = useState([]);
  // const page = router.query.page;
  // const limit = router.query.limit;
  // const sort = router.query.sort;
  // useEffect(() => {
  //   if (!router.isReady) {
  //     return;
  //   } else {
  //     axios
  //       .get(
  //         `${process.env.REACT_APP_API_URL}/vehicle/?page=${page}&limit=${limit}&search=city&keyword=${str}&column=createdAt&sort=${sort}`
  //       )
  //       .then((res) => {
  //         setProduct(res.data.data.result);
  //         setNext(res.data.data.next);
  //         setPrev(res.data.data.previous);
  //       })
  //       .catch(() => {});
  //   }
  // }, [page, limit, str, sort]);