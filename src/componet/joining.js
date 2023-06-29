import React, { useState } from "react";
import "./joining.css";
import Dashnav from "../pages/dashboard/dashnav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Joining = () => {
  const [data, setData] = useState({
    teamName: "",
    members: [
      { name: "", email: "" },
      { name: "", email: "" },
      { name: "", email: "" },
    ],
    requiredAmount: "",
    wallet: "",
  });
  const handleChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedMembers = [...data.members];
    updatedMembers[index] = { ...updatedMembers[index], [name]: value };
    setData({ ...data, members: updatedMembers });
  };

  let post = async (body) => {
    try {
      const response = await fetch(
        "https://desert-sand-angler-hose.cyclic.app/api/v1/new/teams",
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
          console.log(rep.message); // Handle the response as per your application's requirements
          toast.success(rep.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            theme: "colored",
          });
        });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAnyMemberFieldEmpty = data.members.some(
      (member) => member.name.trim() === "" || member.email.trim() === ""
    );
    if (isAnyMemberFieldEmpty) {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }

    if (data.teamName.trim() === "") {
      return toast.error("please fill all information", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: false,
        theme: "colored",
      });
    }

    setData({
      teamName: "",
      members: [
        { name: "", email: "" },
        { name: "", email: "" },
        { name: "", email: "" },
      ],
      requiredAmount: "",
      wallet: "",
    });
    post(data);
    console.log(data);
  };

  return (
    <div>
      <div className="Joining-container">
        <Dashnav />
        <div className="joining">
          <div className="welcome">
            <h1>Welcome to SaveNest saving assocciation Dashboard</h1>
          </div>
          <div className="Joining-content">
            <div className="picture-one"></div>
            <div className="Create-team">
              <h1>WANT TO CREATE A TEAM</h1>
              <form>
                <input
                  className="p"
                  type="text"
                  placeholder="Team Name"
                  name="teamName"
                  onChange={(e) =>
                    setData({ ...data, teamName: e.target.value })
                  }
                  value={data.teamName}
                />{" "}
                <br />
                <div className="inputTwo1">
                  {" "}
                  <input
                    type="text"
                    placeholder="First team member"
                    name="name"
                    onChange={(e) => handleChange(e, 0)}
                    value={data.members[0].name}
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={(e) => handleChange(e, 0)}
                    value={data.members[0].email}
                  />
                </div>
                <div className="inputTwo2">
                  <input
                    type="text"
                    placeholder="Second team member"
                    name="name"
                    onChange={(e) => handleChange(e, 1)}
                    value={data.members[1].name}
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    onChange={(e) => handleChange(e, 1)}
                    value={data.members[1].email}
                  />
                </div>
                <div className="inputTwo3">
                  <input
                    type="text"
                    placeholder="Third team member"
                    name="name"
                    onChange={(e) => handleChange(e, 2)}
                    value={data.members[2].name}
                  />{" "}
                  <br />
                  <input
                    type="emai"
                    placeholder="Your Email"
                    name="email"
                    onChange={(e) => handleChange(e, 2)}
                    value={data.members[2].email}
                  />
                </div>
                <div className="inputTwo4">
                  <input
                    type="text"
                    placeholder="Initial amout"
                    name="requiredAmount"
                    onChange={(e) =>
                      setData({ ...data, requiredAmount: e.target.value })
                    }
                    value={data.requiredAmount}
                  />{" "}
                  <br />
                  <input
                    id="warr"
                    type="text"
                    placeholder="Wallet"
                    name="wallet"
                    onChange={(e) =>
                      setData({ ...data, wallet: e.target.value })
                    }
                    value={data.wallet}
                  />
                </div>
                <input
                  type="submit"
                  value="CREATE"
                  id="createteam-btn"
                  onClick={handleSubmit}
                />
                <ToastContainer></ToastContainer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joining;
