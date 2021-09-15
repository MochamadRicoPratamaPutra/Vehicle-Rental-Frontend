import axios from 'axios';
import cookie from 'cookies';
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
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        setMultipleCookies(res);
        res.setHeader('Set-Cookie', [
          cookie.serialize('token', result.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/',
          }),
          cookie.serialize('id', result.id, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/',
          }),
          cookie.serialize('role', result.role, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7200000,
            path: '/',
          }),
        ]);
        res.status(200);
        res.json({ data: result });
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }
};
export default login;