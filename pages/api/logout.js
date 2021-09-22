import cookie from 'cookie';
import axios from 'axios';
const logout = (req, res) => {
  if (req.method === 'GET') {
    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/users/logout`)
    //   .then(() => {
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Set-Cookie', [
      cookie.serialize('token', "", {
        // httpOnly: true,
        // secure: true,
        // sameSite: 'strict',
        maxAge: -1,
        path: '/',
      }),
      cookie.serialize('id', "", {
        // httpOnly: true,
        // secure: true,
        // sameSite: 'strict',
        maxAge: -1,
        path: '/',
      }),
      cookie.serialize('role', "", {
        // httpOnly: true,
        // secure: true,
        // sameSite: 'strict',
        maxAge: -1,
        path: '/',
      }),
    ]);
    res.status(200);
    res.json({ success: true });

    // })
    // .catch((error) => {
    //   console.log(error, 'error logout');
    // });
  }
};
export default logout;
