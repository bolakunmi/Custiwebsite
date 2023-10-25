import { useContext, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UserdetailContext } from "../App";

const SignIn = () => {
  const { userdetail, setUserdetail } = useContext(UserdetailContext);

  
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "password" || name === "email") {
      setUserdetail({ ...userdetail, [name]: value });
    }
  }

  function handleSubmit(e) {
    console.log("submitted");
    // e.preventDefault
    const { name, value } = e.target;
    if (name === "password") {
      setUserdetail({ ...userdetail, [name]: value });
    }

    if (name === "email") {
      setUserdetail({ ...userdetail, [name]: value.split("@")[0] });
      console.log(value);
    }
  }

  return (
    <React.Fragment>
      <div>
        <img src={require("../pictures/mountain.jpg")} />
      </div>
      <div className="login">
        <form className="sizing loginform">
          <div class="form-floating mb-3 ">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              // value={newemail}
              required
              onChange={handleInputChange}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              // value={newpassword}
              required
              onChange={handleInputChange}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={handleSubmit}
          >
            <Link rel="noreferrer" to={`/signin/${userdetail.gmail}`}>
              Submit
            </Link>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
