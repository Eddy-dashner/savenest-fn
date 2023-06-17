import React from "react";
import Goalnav from "./goalNav";
import "./goal.css";
import DashboardLayout from "../../componet/DashboardLayout";
import Button from "../../properties/Button";

function Setgoal() {
  return (
    <div className="containerGoals">
      <DashboardLayout>
        <Goalnav />
        <div className="formAll">
          <div className="goal-setgoal">
            <h1 className="setgoal-header">
              Set Your Goals. Achieve Your Dreams. Complete the fields below to
              get started on your path to success.
            </h1>

            <div className="form-setgoal">
              <input type="text" placeholder="Title" />
              <br />
              <input type="text" placeholder="Starting Time" />
              <br />
              <input type="text" placeholder="Ending Time" />
              <br />
              <input type="text" placeholder="Amount Required" />
              <br />
              <textarea placeholder="Details Goals" rows="7"></textarea>
              <Button btnName="SAVE"></Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Setgoal;
