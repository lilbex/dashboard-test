import React from "react";
import styled from "styled-components";
// import DashboardBody from "./DashboardBody";
import Dashboard from "../dashboard/Index";
import LeftSide from "../dashboard/leftside/Index";
import CustomSearch from "../../components/atoms/SearchInput";
import MenuItem from "./MenuItem";

const Navigations = ({ title }) => {
  return (
    <NavigationsStyle>
      <div className="side__nav">
        <div className="side__nav__header">
          <MenuItem
            label="Dashboard"
            to="/"
            icon="images/dashboard-oragne.svg"
          />
        </div>
        <div className="side__nav-section-2">
          <MenuItem label="Dashboard" to="/" icon="images/dashboard.svg" />
          <MenuItem label="Dashboard" to="/" icon="images/icon-2.svg" />
          <MenuItem label="Dashboard" to="/" icon="images/book.svg" />
          <MenuItem label="Dashboard" to="/" icon="images/wheel.svg" />
          <MenuItem label="Dashboard" to="/" icon="images/telegram.svg" />
          <MenuItem label="Dashboard" to="/" icon="images/icon-6.svg" />
        </div>
      </div>
      <div className="right__side">
        <div className="top__nav">
          <div className="search__container">
            <CustomSearch />
          </div>
        </div>
        <div className="dashboard__content">
          <div className="left">
            <Dashboard />
          </div>
          <div className="right">
            <LeftSide />
          </div>
        </div>
      </div>
    </NavigationsStyle>
  );
};

export default Navigations;
const NavigationsStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;

  .side__nav {
    width: 5%;
    background: #fbfaff;

    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: flex-start;
  }
  .side__nav__header {
    margin-top: 10px;
  }
  .side__nav-section-2 {
    margin-top: 40px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .right__side {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0;
    padding: 0;
  }
  .top__nav {
    width: 100%;

    height: 76px;
    background: #ffffff;
    margin: 0;
    padding: 0;
  }

  .dashboard__content {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    
  }
  .left {
    width: 70%;
    padding: 20px;
    @media screen and (max-width: 1280px) {
      padding:10px;
    }
  }
  .right {
    width: 27%;
  }

  .search__container {
    width: 200px;

    margin: 0 auto;
    margin-top: 15px;
  }
`;
