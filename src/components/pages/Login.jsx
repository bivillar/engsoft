import React, { Component } from "react";
import Auth from "../../services/auth";
import { authHeader } from "../../services/auth-header";
import Menu from "../Menu";
import { Alert, Spinner } from "react-bootstrap";

var md5 = require("md5");
const qs = require("qs");

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: false,
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });

    Auth.post(
      "auth/",
      qs.stringify({
        username: username.toLowerCase(),
        password: md5(password).toUpperCase()
      })
    ).then(
      response => {
        // console.log(user.data.token);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        const { from } = this.props.location.state || {
          from: { pathname: "/" }
        };
        this.props.history.push(from);
      },
      error =>
        this.setState({ error: "Senha ou Login inválidos", loading: false })
    );
  }

  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <React.Fragment id='login'>
        <Menu />
        <div className='container login'>
          <div className='alert alert-info '>Insira seu usuário e senha</div>
          <h2>Login</h2>
          <form name='form' onSubmit={this.handleSubmit}>
            <div
              className={
                "form-group" + (submitted && !username ? " has-error" : "")
              }
            >
              <label htmlFor='username'>Usuário</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={username}
                onChange={this.handleChange}
                required
              />
              {submitted && !username && (
                <div
                  className='help-block'
                  style={{ color: "red", fontSize: "12px" }}
                >
                  Usuário é necessário
                </div>
              )}
            </div>
            <div
              className={
                "form-group" + (submitted && !password ? " has-error" : "")
              }
            >
              <label htmlFor='password'>Senha</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={this.handleChange}
                required
              />
              {submitted && !password && (
                <div
                  className='help-block'
                  style={{ color: "red", fontSize: "12px" }}
                >
                  Senha é necessária
                </div>
              )}
            </div>
            <div className='form-group'>
              <button className='btn btn-info' disabled={loading}>
                Login
              </button>
              {"            "}
              {loading && <Spinner animation='border' variant='info' />}
            </div>
            {error && <Alert variant='danger'>{error}</Alert>}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default login;
