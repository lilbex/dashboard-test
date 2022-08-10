import React, { useState, useEffect, useRef, Fragment } from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";
import { toast,ToastContainer } from "react-toastify";

const dateConverter = (currDate) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let newDate = new Date(currDate);
  let formatted_date =
    newDate.getDate() +
    " " +
    months[newDate.getMonth()] +
    ", " +
    newDate.getFullYear();
  return formatted_date;
};

const TaskTable = () => {
  const [data, setData] = useState([]);
  const [idOfTable, setIdOfTable] = useState(-1);
  const getData = () => {
    let d = localStorage.getItem("data");
    setData(JSON.parse(d));
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIdOfTable(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const showModal = (index) => {
    setIdOfTable(index);
  };

  useEffect(() => {
    //check getdata every 2 seconds
    const interval = setInterval(() => {
      getData();
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  // delete task
  const deleteTask = (index) => {
    let newData = [...data];
    try {
      newData.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(newData));
      setData(newData);
      toast.success("Task deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("Error deleting task");
    }
  };
  // edit task
  // const editTask = (index, task) => {
  //   let newData = [...data];
  //   newData[index] = task;
  //   localStorage.setItem("data", JSON.stringify(newData));
  //   setData(newData);
  // }

  return (
    <TaskTableStyle>
      <ToastContainer />
      <table>
        <tr>
          <th>Name of task</th>
          <th>start date</th>
          <th>End date</th>
          <th>Hour</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
        {data && data.length > 0 ? (
          data.map(
            ({ budgetTitle, startDate, endDate, hourBudgeted }, index) => (
              <tr key={index}>
                <td>{budgetTitle}</td>
                <td>{dateConverter(startDate)}</td>
                <td>{dateConverter(endDate)}</td>
                <td>{hourBudgeted}</td>
                <td>
                  <div className="progress-bar">
                    <ProgressBar
                      isLabelVisible={false}
                      height="5px"
                      baseBgColor="#E3E8EE"
                      bgColor="#4BA8A8"
                      completed={60}
                    />
                  </div>
                </td>
                <td>
                  <div className="action-btn">
                    <img
                      onClick={() => showModal(index)}
                      src="images/three-dots-vertcal.svg"
                      alt="action"
                    />
                  </div>
                  {index === idOfTable ? (
                    <Fragment>
                      <span ref={ref} className="popup">
                        <p className="pop_item" >Edit task</p>
                        <p className="red pop_item" onClick={() => deleteTask(index)}>Delete Patient</p>
                      </span>
                    </Fragment>
                  ) : null}
                </td>
              </tr>
            )
          )
        ) : (
          <p>No task in todo</p>
        )}
      </table>
    </TaskTableStyle>
  );
};

export default TaskTable;
const TaskTableStyle = styled.div`
  box-sizing: border-box;
  padding: 0px 27px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: white;
  overflow-x: auto;
  font-family: "Sofia Pro";
  border-radius: 15px;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    grid-area: a;
  }
  th {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;

    color: #768396;
  }

  td {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: #1e1e1e;
  }

  th,
  td {
    text-align: left;
    padding: 20px 8px;
    border-bottom: 1px solid #e7ebec;
  }
  .table-image {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 60px;
  }

  .popup {
    position: absolute;
    min-width: 200px;
    /* max-height: 150px; */
    /* right: 50px; */
    /* top: 40px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    padding: 1rem;
    border: 1px solid rgba(33, 51, 79, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    z-index: 10000;
    border-radius: 10px;
    /* z-index: 100; */
    font-family: "Sofia Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #071232;
    /* overflow: auto; */
    p:not(:last-child) {
      margin-bottom: 12px !important;
    }
    p:hover {
      display: inline-block;
    }
  }
  .red{
    color: #ff0000;
  }
  .pop_item{
    cursor: pointer;
  }
`;
