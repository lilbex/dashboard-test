import React, { useState } from "react";
import Input from "../../atoms/InputField";
import styled from "styled-components";
import Collaborators from "./CollaboratorButton";
import Messages from "./Messages";
import {toast} from 'react-toastify';

const LeftSide = () => {
  const [field, setField] = useState({
    budgetTitle: "",
    startDate: "",
    endDate: "",
    hourBudgeted: "",
    collaborators: [],
  });
  const [error, setError] = useState([])
  // console.log(field);
  const handleChange = (e) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if end date is greater than start date
    if (field.endDate < field.startDate) {
      setError([...error, "End date should be greater than start date"]);
      return;
    }
    if(field.hourBudgeted==="" || field.budgetTitle==="" || field.endDate==="" || field.startDate===""){
      setError([...error, "All fields are required"]);
      return;
    }
    // check if budget hour is greater than 0 or not a number
    if (field.hourBudgeted <= 0 || isNaN(field.hourBudgeted)) {
      setError([...error, "Budget hour should be greater than 0"]);
      return;
    }
    
    try {
      const existingData = localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : [];
      existingData.push(field);
      localStorage.setItem("data", JSON.stringify(existingData));
      setField({
        budgetTitle: "",
        startDate: "",
        endDate: "",
        hourBudgeted: "",
      });
      toast.success("Task added successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IndexStyle>
      <div className="section-1">
        <p className="common-p">Today’s Schedule</p>
        <div className="title_action">
          <img src="images/dashboard-sing.svg" alt="" />
          <img src="images/calender.svg" alt="" />
        </div>
      </div>
      <div className="section-1 ">
        <p className="common-p">New Tasks</p>
        <img src="images/three-dots.svg" alt="" />
      </div>
      <div className="form-section">
        <form>
         {error.length > 0 && error.map((err, index) => (
           <p className="error" key={index}>{err}</p>
          ))}
          <div className="form-group">
            <Input
              value={field.budgetTitle}
              onChange={(e) => handleChange(e)}
              name="budgetTitle"
              type="text"
              label="Task title"
              placeholder="Create new"
            />
          </div>
          {/* <div className="form-group emoji-selection"></div> */}
          <div className="form-group">
            <div className="collaborator_wrapper">
              <Collaborators />
              <Collaborators />
              <img className="add-user" src="images/plus-bg.svg" alt="" />
              <img className="add-user" src="images/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className="form-group">
            <p>Time to complete</p>
            <Input
              name="startDate"
              value={field.startDate}
              onChange={(e) => handleChange(e)}
              label="start date"
              type="date"
              placeholder="Start date"
            />
            <Input
              name="endDate"
              value={field.endDate}
              onChange={(e) => handleChange(e)}
              label="end date"
              type="date"
              placeholder="End date"
            />
          </div>
          <div className="form-group">
            <p>Hours Budgeted</p>
            <Input
              name="hourBudgeted"
              value={field.hourBudgeted}
              onChange={(e) => handleChange(e)}
              type="number"
              placeholder="Enter Hours"
            />
            <button onClick={handleSubmit} className="button">
              Save
            </button>
          </div>
        </form>
        <div className="message-wrapper">
          <p className="message">Messages</p>
          <div>
            <Messages
              name="Johm Michael"
              message="Hello Michael, How are you?"
            />
            <Messages
              name="Rebecca Lorel"
              message="can wiuhytfhgjuiyuthe meet today?"
            />
          </div>
        </div>
      </div>
    </IndexStyle>
  );
};

export default LeftSide;

const IndexStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  margin: 0;
  padding: 15px;
  overflow: scroll;
  .section-1 {
    display: flex;
    justify-content: space-between;
    padding: 2px 20px;
    .title_action {
      width: 78px;
      height: 29px;
      background: #f4f4f4;
      border-radius: 14.5px;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      margin-top: 10px;
      img {
        width: 15px;
      }
    }
  }
  .common-p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #005555;
    margin-bottom: 20px;
  }
  .form-group {
    width: 100%;
    border-bottom: 1px solid #e8edf1;
    /* margin-bottom:5px; */
  }
  .collaborator_wrapper {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }
  .add-user {
    margin-top: 12px;
  }
  .button {
    width: 77px;
    height: 35px;
    background: #e3e8ee;
    box-shadow: 0px 8px 20px rgba(227, 232, 238, 0.24);
    border-radius: 7px;
    outline: none;
    border: none;
    margin-bottom: 5px;
  }
  .message-wrapper {
    width: 100%;
    margin-bottom: 2px;
  }
  .message {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #005555;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
