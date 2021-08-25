import Layout from '../components/Layout';
import Card from '../components/base/card';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Style from '../styles/vehicletype.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
const Search = () => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const keyword = router.query.keyword;
  const page = router.query.page;
  const limit = router.query.limit;
  const sort = router.query.sort;
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (window) {
      if (!keyword) {
        router.push('/')
      } else if (!page || !limit || !sort) {
        router.push(`/search?keyword=${keyword}&page=1&limit=4&sort=asc`)
      }
    }
  })
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/?page=${page}&limit=${limit}&search=name&keyword=${keyword}&column=createdAt&sort=${sort}`
      )
      .then((res) => {
        setResult(res.data.data.result);
        setNext(res.data.data.next);
        setPrev(res.data.data.previous);
      });
  }, [keyword, page, limit, sort]);
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/search?keyword=${search}&page=1&limit=4&sort=asc`);
  };
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true} searchOff={true}>
        <div className="contentBox">
          <form onSubmit={handleSubmitSearch}>
            <input
              type="text"
              className={`text-24 text-nunito text-grey ${Style.searchBox}`}
              placeholder="Seach"
              onChange={handleSearch}
            />
          </form>
          <p className="text-playfair text-36 text-black text-w900">
            {router.query.keyword
              ? `Did you search "${router.query.keyword}"?`
              : 'You need to input the keyword to search box'}
          </p>
          <div
            className={`${Style.cardTitle} ${Style.wrap} ${
              parseInt(result.length) === parseInt(limit) ? null : Style.lastPage
            } ${keyword ? null : "displayNone"}`}
          >
            {result.map((item) => (
              <div>
                <Card
                  type="product"
                  title={item.name}
                  city={item.city}
                  img={item.img}
                  id={item.id}
                  margining={parseInt(result.length) === parseInt(limit) ? null : true}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Style.pagination}>
          <>
            {sort === 'desc' ? (
              <Link href={`/search?keyword=${search}&page=1&limit=4&sort=asc`}>
                <a className={Style.sort}>oldest</a>
              </Link>
            ) : (
              <Link href={`/search?keyword=${search}&page=1&limit=4&sort=desc`}>
                <a className={Style.sort}>newest</a>
              </Link>
            )}
          </>
          <>
            {prev ? (
              <Link href={`/search?keyword=${search}&page=${prev.page}&limit=4&sort=${sort}`}>
                <a className={Style.prev}>{prev.page}</a>
              </Link>
            ) : (
              <p className={Style.notDisplay}></p>
            )}
          </>
          <p className="text-orange">{page}</p>
          <>
            {next ? (
              <Link href={`search?keyword=${search}&page=${next.page}&limit=4&sort=${sort}`}>
                <a className={Style.next}>{next.page}</a>
              </Link>
            ) : (
              <p></p>
            )}
          </>
        </div>
      </Layout>
    </div>
  );
};
export default Search;
