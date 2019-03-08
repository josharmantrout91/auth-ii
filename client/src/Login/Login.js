import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: "login",
      username: "",
      password: ""
    };
  }
  displayFormRegister = () => {
    this.setState({ activeForm: "register" });
  };
  displayFormLogin = () => {
    this.setState({ activeForm: "login" });
  };
  render() {
    return (
      <div className="login-wrapper">
        <div className="form-wrapper">
          {this.state.activeForm === "login" ? (
            <div>
              <h2>Login Form</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="username" />
                <input
                  name="username"
                  id="username"
                  value={this.state.username}
                  type="text"
                  onChange={this.handleInput}
                />
                <label htmlFor="password" />
                <input
                  name="password"
                  id="password"
                  value={this.state.password}
                  type="text"
                  onChange={this.handleInput}
                />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>Register Form</h2>
              <form onSubmit={this.handleRegister}>
                <label htmlFor="username" />
                <input
                  name="username"
                  id="username"
                  value={this.state.username}
                  type="text"
                  onChange={this.handleInput}
                />
                <label htmlFor="department" />
                <input
                  name="username"
                  id="username"
                  value={this.state.username}
                  type="text"
                  onChange={this.handleInput}
                />
                <label htmlFor="password" />
                <input
                  name="password"
                  id="password"
                  value={this.state.password}
                  type="text"
                  onChange={this.handleInput}
                />
                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRegister = e => {
    e.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/register";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogin = e => {
    e.preventDefault();

    const endpoint = "http://localhost:5000/api/auth/login";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Login;
