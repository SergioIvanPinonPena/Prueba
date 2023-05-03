import axios from "axios";
import {
  Outlet,
  Link,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import React, { useState } from "react";
export default function (props) {
  let id = localStorage.getItem("id");
  let account_money = localStorage.getItem("account_money");
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const [valuesr, setValuesr] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });
  const [data, setData] = React.useState({
    id: "",
    account_money: "",
    role: "",
    name: ""
  });
  const [datat, setDatat] = React.useState({
    doing: props.id,
    account: "",
    value: ""
  });
  const [sing, setSing] = React.useState({
    sing: ""
  });
  const [deposita, setDeposita] = React.useState({
    value: true
  });
  const [transferir, setTransferir] = React.useState({
    value: false
  });
  const handleChanget = (e) => {
    const { name, value } = e.target;
    setDatat((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleChanger = (event) => {
    const { name, value } = event.target;
    setValuesr((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  if (data.role != 2) {
    return (
      <div className="Home">
        <div className="Auth-form-container">
          <div className="container">
            <div className="row">
              <Link className="btn btn-primary px-2 col" to="/depositar">
                deposita
              </Link>
              <Link className="btn btn-primary px-2 col" to="/retirar">
                Retira
              </Link>
            </div>
          </div>

          <form>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register User</h3>
              <div className="form-group mt-3">
                <label>nombre</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g Jane"
                  onChange={handleChanger}
                  name="name"
                />
              </div>
              <div className="form-group mt-3">
                <label>apellido</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="e.g acosta"
                  onChange={handleChanger}
                  name="lastname"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  onChange={handleChanger}
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={handleChanger}
                  name="password"
                />
              </div>
              <div className="form-group mt-3">
                <label>Confirmar password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  onChange={handleChanger}
                  name="passwordConfirmation"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(valuesr);

                    var data = JSON.stringify({
                      name: valuesr.name,
                      lastname: valuesr.lastname,
                      passwordConfirmation: valuesr.passwordConfirmation,
                      password: valuesr.password,
                      email: valuesr.email
                    });

                    var config = {
                      method: "post",
                      maxBodyLength: Infinity,
                      url:
                        "https://site--resolute-mice--2r729rw9gdmc.code.run/users/signup",
                      headers: {
                        "Access-Control-Allow-Origin": "https://0lnuug.csb.app",
                        "Content-Type": "application/json"
                      },
                      data: data
                    };

                    axios(config)
                      .then(function (response) {
                        return response;
                      })
                      .then((response) => {
                        console.log(response);
                        return alert("usuario creado");
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                  }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <div className="Home"></div>;
  }
}
