import React, { Component } from "react";
import Auth from "../../services/auth";
import { authHeader } from "../../services/auth-header";
import Menu from "../Menu";

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
        username: username,
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
      error => this.setState({ error: "Sem acesso", loading: false })
    );

    // userService.login(username, password).then(
    //   user => {
    //     const { from } = this.props.location.state || {
    //       from: { pathname: "/" }
    //     };
    //     this.props.history.push(from);
    //   },
    //   error => this.setState({ error, loading: false })
    // );
  }

  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <React.Fragment>
        <Menu />
        <div className='container login'>
          <div className='alert alert-info '>Insira seu login e senha</div>
          <h2>Login</h2>
          <form name='form' onSubmit={this.handleSubmit}>
            <div
              className={
                "form-group" + (submitted && !username ? " has-error" : "")
              }
            >
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={username}
                onChange={this.handleChange}
              />
              {submitted && !username && (
                <div className='help-block'>Username is required</div>
              )}
            </div>
            <div
              className={
                "form-group" + (submitted && !password ? " has-error" : "")
              }
            >
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              {submitted && !password && (
                <div className='help-block'>Password is required</div>
              )}
            </div>
            <div className='form-group'>
              <button className='btn btn-primary' disabled={loading}>
                Login
              </button>
              {loading && (
                <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
              )}
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default login;
