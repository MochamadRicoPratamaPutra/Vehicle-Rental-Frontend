import Navbar from "./layout/navbar"
import Footer from "./layout/footer";
const Layout = (props) => {
  return (
    <div>
      <Navbar isAuth={props.isAuth}/>
      {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;