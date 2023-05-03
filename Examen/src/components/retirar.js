import axios from "axios";
import {
  Outlet,
  Link,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import React, { useState } from "react";
export default function (pr) {
  let id = localStorage.getItem("id");
  let account_money = localStorage.getItem("account_money");

  let props = {
    id,
    account_money
  };
  const [transferir, setTransferir] = React.useState({
    value: false
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
  const handleChanget = (e) => {
    const { name, value } = e.target;
    setDatat((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  return (
    <div className="Auth-form-container">
      <div className="container">
        <div className="row">
          <Link className="btn btn-primary px-2 col" to="/depositar">
            depositar
          </Link>
          <Link className="btn btn-primary px-2 col" to="/createUser">
            Registrar Usuario
          </Link>
        </div>
      </div>
      <form>
        <h1 className="display-4">RETIRA DINERO!!</h1>
        <small>Cuenta: {props.id}</small>
        <br />
        <small>Dinero en cuenta: {props.account_money}</small>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">cantidad</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputquantity"
            placeholder="cantidad"
            name="value"
            onChange={handleChanget}
          />
        </div>
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            var datas = JSON.stringify({
              account: props.id,
              value: datat.value
            });

            var config = {
              method: "put",
              maxBodyLength: Infinity,
              url:
                "https://site--resolute-mice--2r729rw9gdmc.code.run/users/transOut",
              headers: {
                "Access-Control-Allow-Origin": "https://0lnuug.csb.app",
                "Content-Type": "application/json"
              },
              data: datas
            };

            axios(config)
              .then((response) => {
                setData((prevState) => {
                  return {
                    id: response.data.id,
                    role: response.data.role,
                    name: response.data.name,
                    account_money: response.data.amount
                  };
                });
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
        <br></br>
      </form>
    </div>
  );
}
