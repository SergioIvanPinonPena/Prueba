import axios from "axios";
import {
  Outlet,
  Link,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import React, { useState } from "react";
export default function (props) {
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const [sing, setSing] = React.useState({
    sing: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link
              className="btn btn-primary"
              onClick={(e) => {
                console.log(values);

                var data = JSON.stringify({
                  password: values.password,
                  email: values.email
                });

                var config = {
                  method: "post",
                  maxBodyLength: Infinity,
                  url:
                    "https://site--resolute-mice--2r729rw9gdmc.code.run/users/login",
                  headers: {
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

                    setSing((prevState) => {
                      return {
                        ...prevState,
                        sing: true
                      };
                    });
                    console.log(response.data.token);

                    localStorage.setItem("id", response.data.token.id);
                    localStorage.setItem(
                      "account_money",
                      response.data.token.account_money
                    );
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
              to="/depositar"
            >
              Submit
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
