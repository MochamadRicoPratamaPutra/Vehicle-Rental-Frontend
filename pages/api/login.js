import axios from 'axios';
import cookie from 'cookie';
const login = (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const data = {
      email,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, data)
      .then((response) => {
        console.log(response, ' response login');
        const result = response.data.data;
        const setCookie = [];
        const serializeCookie = (key, value, hrs) => {
          if ('number' == typeof value) value = val.toString();
          if ('object' == typeof value) value = JSON.stringify(val);
          return cookie.serialize(key, value, { expires: new Date(Date.now() + 1000 * 3600 * hrs), httpOnly: true });
        };
        const setMultipleCookies = (res) => {
          setCookie.push(serializeCookie('token', response.data.token, 24));
          setCookie.push(serializeCookie('id', result.id, 24));
          setCookie.push(serializeCookie('role', result.role, 24));
          res.setHeader('Set-Cookie', setCookie);
        };
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        setMultipleCookies();
        res.status(200);
        res.json({ data: result });
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }
};
export default login;