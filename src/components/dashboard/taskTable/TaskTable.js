import React from "react";
import styled from "styled-components";
import ProgressBar from "@ramonak/react-progress-bar";

const TaskTable = () => {
  return (
    <TaskTableStyle>
      <table>
        <tr>
          <th>Name of task</th>
          <th>start date</th>
          <th>End date</th>
          <th>Hour</th>
          <th>Progress</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Task 1</td>
          <td>01/01/2020</td>
          <td>01/01/2020</td>
          <td>1</td>
          <td>
            <div className="progress-bar">
            <ProgressBar isLabelVisible={false} height="5px" baseBgColor="#E3E8EE" bgColor="#4BA8A8" completed={60} />
            </div>
          </td>
          <td>
            <div className="action-btn">
              <img src="images/three-dots-vertcal.svg" alt="action" />
              </div>
          </td>
        </tr>
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
    font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;

color: #1E1E1E;
  }

  th,
  td {
    text-align: left;
    padding: 20px 8px;
    border-bottom: 1px solid #E7EBEC;

  }
  .table-image {
    height: 40px;
    width: 40px;
    margin-right: 10px;
    border-radius: 60px;
  }
`;
