import React, { useState } from "react";
import picture from "../pages/home/images/4.png";
import Dashnav from "../pages/dashboard/dashnav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./joining.css";
import { Link } from "react-router-dom";

const Cooperative = () => {
  const [show, setShow] = useState(true);

  const [viewteams, setViewteams] = useState([]);

  fetch("https://gleaming-clothes-pig.cyclic.app/api/v1/user/teams")
    .then((res) => res.json())
    .then((data) => {
      setViewteams(data.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const toggleHiddenSection = () => {
    setShow(!show);
  };
  const [data, setData] = useState({
    name: "",
    userName: "",
    amount: Number,
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(
        "https://gleaming-clothes-pig.cyclic.app/api/v1/user/join",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((rep) => {
          console.log(rep.message);
          // alert(rep.message);
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (data.name.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // } else if (data.userName.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // } else if (data.email.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // } else if (data.amount.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // }
    // const amount = Number(data.amount);

    setData({
      name: "",
      userName: "",
      amount: 0,
      email: "",
    });

    // const requestData = {
    //   ...data,
    //   amount: amount,
    // };

    // post(requestData);
    // console.log(requestData);

    post(data);
    console.log(data);
  };

  return (
    <div>
      <div className="cooperative-container">
        <div className="head-navbar">
          <Dashnav />
        </div>
        <div className="cooperative-content">
          <div className="welcome">
            <h1>Welcome to SaveNest saving assocciation Dashboard</h1>
          </div>
          <div className="here">
            <div className="both-head-btn">
              <h1 className="head-card">
                HERE COMES THE LIST OF ALL AVAILABLE TEAMS.
              </h1>
              <div className="join-btn">
                <input
                  type="submit"
                  value="JOIN ONE TEAM"
                  id="jointeam-btn"
                  onClick={toggleHiddenSection}
                />
              </div>
              {!show && (
                <div className="join-team-show">
                  <div className="join-form-btn">
                    <form>
                      <input
                        type="text"
                        placeholder="Name of Team"
                        name="name"
                        onChange={handleChange}
                        value={data.name}
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Your Username"
                        name="userName"
                        onChange={handleChange}
                        value={data.userName}
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                      />
                      <input
                        type="number"
                        placeholder="Starting amount"
                        name="amount"
                        onChange={handleChange}
                        value={data.amount}
                      />
                      {/* <Link to={`/update/${card.id}`}> */}
                      <input
                        type="submit"
                        value="Join"
                        id="donejoining-btn"
                        onClick={handleSubmit}
                      />
                      {/* join */}
                      {/* </Link> */}
                    </form>
                  </div>
                </div>
              )}
            </div>
            <div className="whole-cards">
              {viewteams.map((card) => (
                <div class="cardsTeam" key={card.teamName}>
                  <h1>{card.teamName}</h1>
                  <img src={picture} alt="new" />
                  <ul>
                    {" "}
                    Team Members:
                    {card.members.map((member, index) => (
                      <li key={index}>Name: {member.name}</li>
                    ))}
                  </ul>
                  <p>Required Amount: {card.requiredAmount}</p>
                  <p>Wallet: {card.wallet}</p>
                </div>
              ))}
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};
export default Cooperative;
