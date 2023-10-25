import React, { Children, useState } from "react";
import General from "./components/header.js";
import Main from "./components/main.js";
import About from "./components/About.js";
import { Faculty } from "./components/faculty.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignIn from "./components/signin.js";
import SignUp from "./components/signup.js";
import "./App.css";
import "./components/style.css";
import { BrowserRouter as Router, Routes, Route, useHistory } from "react-router-dom";
import User from "./components/user.js";

export const UserdetailContext = React.createContext();

function GeneralProvider({ children }) {
  const [userdetail, setUserdetail] = useState(
    {
      name: "",
      email: "",
      password: "",
    },
  );

  return (
    <UserdetailContext.Provider value={{ userdetail, setUserdetail }}>
      {children}
    </UserdetailContext.Provider>
  );
}

function App() {
  // ADD A LOADER!!!
  // animations
  // media query

  // probably add timer with the loader too?
  const loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
    console.log("end", loader.style.display);
  });

  // const [userdetail, setUserdetail] = useState()

  return (
    <React.Fragment>
      <GeneralProvider>
        <General />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin/:user" element={<User />} />
        </Routes>
      </GeneralProvider>
    </React.Fragment>
  );
}

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

export default App;
