import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UserdetailContext } from "../App";

const SignUp = () => {
  const { userdetail, setUserdetail } = useContext(UserdetailContext);
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "password" || name === "email" || name === "name") {
      setUserdetail({ ...userdetail, [name]: value });
    }

    console.log(userdetail);
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
    // date of birth
    // username
    // email
    // phone number
    <React.Fragment>
      <form className="row g-3 sizing">
        <div className="col-md-4">
          <label for="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            placeholder="Firstname"
            required
          />
        </div>

        <div className="col-md-4">
          <label for="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            placeholder="Lastname"
            required
          />
        </div>

        <div className="col-md-4">
          <label for="validationDefaultUsername" className="form-label">
            Username
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
              onChange={handleInputChange}
              name="name"
            />
          </div>
        </div>

        <div className=" col-md-6 ">
          <label for="floatingInput">Email address</label>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="floatingPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="col-md-4">
          <label for="validationDefault06" className="form-label">
            Phone number
          </label>
          <input
            type="number"
            className="form-control"
            id="validationDefault06"
            placeholder="08023456789"
            required
            maxLength={11}
            // style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
          />
        </div>

        <div className="col-md-3">
          <label for="validationDefault03" className="form-label">
            Gender
          </label>
          <select
            type="text"
            className="form-select"
            id="validationDefault03"
            required
          >
            <option selected disabled value="">
              Select your gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">
            State of Origin
          </label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="Akwa Ibom">Akwa Ibom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamfara</option>
          </select>
        </div>
        <div className="col-md-12">
          <label for="validationDefault05" className="form-label">
            Course of Study
          </label>
          <select
            type="text"
            className="form-select"
            id="validationDefault05"
            required
          >
            <option selected disabled value="">
              Choose your course of study
            </option>
            <option>Civil Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Petroleum Engineering</option>
            <option>Agric Engineering</option>
            <option>Wood product Engineering</option>
            <option>Electrical Engineering</option>
            <option>Food Engineering</option>
            <option>Industrial and Production Engineering</option>
          </select>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            <Link rel="noreferrer" to={`/signin/${userdetail.gmail}`}>
              Submit form
            </Link>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
