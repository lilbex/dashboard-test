import React from "react";
import styled from "styled-components";

const TaskCard = ({ title, number, src, numMore, whichWeek, srcLogo }) => {
  // get screen width
  const screenWidth = window.innerWidth;

  return (
    <TaskCardStyle>
      <div className="row-1">
        <img className="img" src={srcLogo} alt="todo" />
        <p className="card-title">{title}</p>
        <p className="num">{number}</p>
      </div>
      <hr className="divide" />
      <div className="row-1">
        <img className="img" src={src} alt="todo" />
        {screenWidth > 768 ? (
          <div>
            <p className="">
              <span style={{ color: "green" }}>{numMore}+</span> more
            </p>
            <p>{whichWeek}</p>
          </div>
        ) : (
          <p>
            {numMore}+ more {whichWeek}{" "}
          </p>
        )}
      </div>
    </TaskCardStyle>
  );
};

export default TaskCard;

const TaskCardStyle = styled.div`
  width: 274px;
  height: 173px;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  @media screen and (max-width: 1080px) {
    padding: 2px;
  }
  @media screen and (max-width: 720px) {
    height: 130px;
  }
  .row-1 {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  .img {
    margin-top: 15px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .card-title {
    font-size: 16px;
    line-height: 21px;
    position: relative;
    top: 10px;
    @media screen and (max-width: 903px) {
      font-size: 14px;
      line-height: 13px;
    }
  }
  .num {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 29px;
    color: #1e1e1e;
    @media screen and (max-width: 903px) {
      font-size: 14px;
      line-height: 13px;
    }
  }
  .divide {
    /* width: 90%; */
    background: #e8edf1;
  }
  .row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
