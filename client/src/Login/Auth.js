import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5500/api";

axios.intercepters.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem("jwt");

    return options;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Auth extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      const notLoggedIn = <div>Please Log In to See Users</div>;
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
