import React, { useState } from "react";
import "./signup.css";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// import Button from "../../properties/Button";

function Signup() {
  const name = "SIGN UP";

  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Phone: "",
    Password: "",
    ConfirmPassword: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    if (data.FirstName.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.LastName.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.UserName.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Email.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Phone.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.Password.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else if (data.ConfirmPassword.trim() === "") {
      toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    } else {
      toast.success("You have successful sign up!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        theme: "colored",
      });
    }
  };
  return (
    <div>
      <div className="signup-container">
        <div className="signup-container-one">
          <div className="signup-content-one">
            <h1>Welcome to our site!</h1>
            <p>
              Please enter your Registration details, and start journey with us.
            </p>
            <a href="./signin.js">SIGN IN</a>
          </div>
        </div>
        <div className="signup-container-two">
          <div className="signup-content-two">
            <h1>CREATE ACCOUNT</h1>
            <form method="post">
              <div className="signup-name">
                <input
                  type="text"
                  placeholder="First Name"
                  name="FirstName"
                  onChange={handleChange}
                  value={data.FirstName}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="LastName"
                  onChange={handleChange}
                  value={data.LastName}
                />
                <br />
              </div>
              <input
                type="text"
                placeholder="UserName"
                name="UserName"
                onChange={handleChange}
                value={data.UserName}
              />
              <br />
              <input
                type="email"
                placeholder="Email "
                name="Email"
                onChange={handleChange}
                value={data.Email}
              />
              <br />
              <input
                type="phone"
                placeholder="Phone "
                name="Phone"
                onChange={handleChange}
                value={data.Phone}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                name="Password"
                onChange={handleChange}
                value={data.Password}
              />
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                onChange={handleChange}
                value={data.ConfirmPassword}
              />
              <br />
              <div className="checks">
                <input type="checkbox" name="agree" id="check" />
                <label>I Agree to the terms and conditions of use.</label>
                <br />
              </div>
              <Link to="/dashboard">
                {" "}
                <input
                  type="submit"
                  value={name}
                  id="signup-btn"
                  onClick={handleSubmit}
                />
              </Link>
              {/* <Button btnName="Submit"></Button> */}
              <ToastContainer
                transition={Flip}
                hideProgressBar={true}
                closeButton={<p>Close</p>}
              >
                {" "}
              </ToastContainer>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
