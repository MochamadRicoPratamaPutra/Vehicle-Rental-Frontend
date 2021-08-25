import React from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import router from 'next/router';
const AuthenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    componentDidMount() {
      const cookie = Cookies.get()
      console.log(Object.keys(cookie).length)
      if (Object.keys(cookie).length !== 0) {
        if (options.admin === true) {
          if (cookie.role === "admin") {
            this.setState({ loading: false });
          }
          else {
            router.push('/')
          }
        }
        this.setState({ loading: false });
      } else {
        Router.push(options.pathAfterFailure || '/login');
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return AuthenticatedRoute;
};

export default AuthenticatedRoute;