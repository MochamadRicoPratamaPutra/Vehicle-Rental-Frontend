import Layout from "../components/Layout";
import Card from "../components/base/card";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Style from "../styles/vehicletype.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
const SearchCityType = () => {
  const user = useSelector((state) => state.user.profile);
  const router = useRouter();
  const keyword = router.query.keyword;
  const page = router.query.page;
  const limit = router.query.limit;
  const sort = router.query.sort;
  const type = router.query.type;
  const city = router.query.city;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (window) {
      if (!type && !city) {
        router.push("/");
      } else if (!page || !limit || !sort) {
        router.push(
          `/search-city-type?city=${city}&type=${type}&page=1&limit=4&sort=asc`
        );
      }
    }
  });
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/vehicle/vehicle-by-type-city?page=${page}&limit=${limit}&city=${city}&type=${type}&sort=${sort}`
      )
      .then((res) => {
        setResult(res.data.data.result);
        setNext(res.data.data.next);
        setPrev(res.data.data.previous);
      });
  }, [page, limit, sort, city, type]);
  return (
    <div>
      <Layout isAuth={user.id ? true : false} vehicle={true} searchOff={true}>
        <div className="contentBox">
          <p className="text-playfair text-36 text-black text-w900">
            Searching for {type} in Kota {city}
          </p>
          <div
            className={`${Style.cardTitle} ${Style.wrap} ${
              parseInt(result.length) === parseInt(limit)
                ? null
                : Style.lastPage
            } ${keyword ? null : "displayNone"}`}
          >
            {result.map((item) => (
              <div key={item.id}>
                <Card
                  type="product"
                  title={item.name}
                  city={item.city}
                  img={item.img}
                  id={item.id}
                  margining={
                    parseInt(result.length) === parseInt(limit) ? null : true
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Style.pagination}>
          <>
            {sort === "desc" ? (
              <Link href={`/search-city-type?city=${city}&type=${type}&page=1&limit=4&sort=asc`}>
                <a className={Style.sort}>oldest</a>
              </Link>
            ) : (
              <Link href={`/search-city-type?city=${city}&type=${type}&page=1&limit=4&sort=desc`}>
                <a className={Style.sort}>newest</a>
              </Link>
            )}
          </>
          <>
            {prev ? (
              <Link
                href={`/search-city-type?city=${city}&type=${type}&page=${prev.page}&limit=4&sort=${sort}`}
              >
                <a className={Style.prev}>{prev.page}</a>
              </Link>
            ) : (
              <p className={Style.notDisplay}></p>
            )}
          </>
          <p className="text-orange">{page}</p>
          <>
            {next ? (
              <Link
                href={`/search-city-type?city=${city}&type=${type}&page=${next.page}&limit=4&sort=${sort}`}
              >
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
export default SearchCityType;
