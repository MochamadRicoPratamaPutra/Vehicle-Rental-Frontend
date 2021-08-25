import Navbar from './layout/navbar';
import Footer from './layout/footer';
const Layout = (props) => {
  return (
    <div>
      <Navbar
        isAuth={props.isAuth}
        navbarOff={props.navbarOff}
        vehicle={props.vehicle}
        home={props.home}
        history={props.history}
        about={props.about}
        searchOff={props.searchOff}
      />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
