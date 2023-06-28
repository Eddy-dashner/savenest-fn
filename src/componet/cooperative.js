import React, { useState } from "react";
import picture from "../pages/home/images/4.png";
import Dashnav from "../pages/dashboard/dashnav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./joining.css";

const Cooperative = () => {
  const [show, setShow] = useState(true);
  const [viewteams, setViewteams] = useState([]);
  const [name, setName] = useState("");
  const [withdraw, setWithdraw] = useState(true);

  fetch("https://graceful-cod-culottes.cyclic.app/api/v1/user/teams")
    .then((res) => res.json())
    .then((data) => {
      setViewteams(data.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const toggleHiddenSection = (name, checkbutton) => {
    console.log(checkbutton);
    if (checkbutton === "JOIN") {
      setShow(!show);
      setName(name);
    } else if (checkbutton === "WITHDRAW") setWithdraw(!withdraw);
    setName(name);
  };
  const [data, setData] = useState({
    name: "",
    userName: "",
    amount: "",
    email: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "amount") {
      value = parseInt(value, 10);
    }

    setData({ ...data, [name]: value });
  };

  let post = async (body) => {
    try {
      const response = await fetch(
        "https://graceful-cod-culottes.cyclic.app/api/v1/user/join",
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
          alert(rep.message);
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  let withdrawcash = async (body) => {
    try {
      const response = await fetch(
        "https://graceful-cod-culottes.cyclic.app/api/v1/withdraw",
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
          alert(rep.message);
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    data.name = name;
    console.log("data:", data);
    console.log("name:", name);
    // if (data.name.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // } else
    // if (data.userName.trim() === "") {
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
    // }
    // else if (data.amount.trim() === "") {
    //   return toast.error("please fill all information", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //     autoClose: false,
    //     theme: "colored",
    //   });
    // }

    setShow(true);

    setData({
      name: "",
      userName: "",
      amount: "",
      email: "",
    });

    post(data);
    withdrawcash(data);
    console.log(data);
  };
  const handleSubmits = (e) => {
    e.preventDefault();

    data.name = name;
    console.log("data:", data);
    console.log("name:", name);

    setWithdraw(true);

    setData({
      name: "",
      userName: "",
      amount: "",
      email: "",
    });

    withdrawcash(data);
    console.log(data);
  };

  const checkTeam = (arr, usermail) => {
    const found = arr.find((item) => item.email === usermail);
    if (found) {
      return true;
    }
    return false;
  };
  const datawithdraw = "WITHDRAW";
  const datajoin = "JOIN";

  return (
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

            {!show && (
              <div className="join-team-show">
                <div className="join-form-btn">
                  <form>
                    <input
                      type="text"
                      placeholder="Name of Team"
                      name="name"
                      // onChange={handleChange}
                      value={name}
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

                    <input
                      type="submit"
                      value="Join"
                      id="donejoining-btn"
                      onClick={handleSubmit}
                    />
                  </form>
                </div>
              </div>
            )}

            {!withdraw && (
              <div className="join-team-show">
                <div className="join-form-btn">
                  <form>
                    <input
                      type="text"
                      placeholder="Name of Team"
                      name="name"
                      // onChange={handleChange}
                      value={name}
                    />
                    <br />
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      onChange={handleChange}
                      value={data.email}
                    />
                    <input
                      type="amount"
                      placeholder="Enter amount"
                      name="amount"
                      onChange={handleChange}
                      value={data.amount}
                    />
                    <input
                      type="submit"
                      value="TRANSFER"
                      id="withdraw-btn"
                      onClick={handleSubmits}
                    />
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
                <div>
                  <div className="join-btn">
                    <input
                      type="submit"
                      value={
                        checkTeam(card.members, localStorage.getItem("logedIn"))
                          ? datawithdraw
                          : datajoin
                      }
                      id="jointeam-btn"
                      onClick={(event) =>
                        toggleHiddenSection(
                          card.teamName,
                          checkTeam(
                            card.members,
                            localStorage.getItem("logedIn")
                          )
                            ? datawithdraw
                            : datajoin
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};
export default Cooperative;
