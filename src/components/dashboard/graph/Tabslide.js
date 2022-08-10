import React from "react";
import styled from "styled-components";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Daily from "./Daily";

const PatientTabSlide = () => {
  const [layout, setLayout] = React.useState("daily");
  // console.log(pageType, userType );

  return (
    <TabSlider>
      <div className="table-cont">
        <p className="title">Task done</p>
        <div className="links-div">
          {layout === "daily" ? (
            <span
              className="profile-group group-link active"
              onClick={() => {
                setLayout("daily");
              }}
            >
              {/* <ProfileInformation/> */}
              Daily
            </span>
          ) : (
            <span
              className="profile-group group-link "
              onClick={() => {
                setLayout("daily");
              }}
            >
              Daily
            </span>
          )}
          <span
            className={
              layout === "weekly"
                ? "profile-group group-link active"
                : "profile-group group-link "
            }
            onClick={() => {
              setLayout("weekly");
            }}
          >
            Weekly
          </span>
          <span
            className={
              layout === "monthly"
                ? "profile-group group-link active"
                : "profile-group group-link"
            }
            onClick={() => {
              setLayout("monthly");
            }}
          >
            Daily
          </span>
        </div>
      </div>
      <div className="graph">
        {layout === "daily" ? (
          <Daily />
        ) : layout === "weekly" ? (
          <Weekly />
        ) : layout === "monthly" ? (
          <Monthly />
        ) : null}
      </div>
    </TabSlider>
  );
};

const TabSlider = styled.div`
  width: 100%;
  background: white;
  border-radius: 15px;

  .profile-group {
    position: relative;
  }
  .profile-group:hover {
    cursor: pointer;
  }
  .active {
    font-weight: 800px;
    font-size: 1.2rem;
    color: #f8b400;
    border-bottom: 3px solid #f8b400;
  }
  .group-link {
    text-decoration: none;
    padding: 15px 0;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
  .table-cont {
    display:grid;
    grid-template-columns: 3fr 1fr;
  }
  .graph{
    width:100%;
    
  }
  .title {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #005555;
    padding: 0 24px;
  }
  .links-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
  }
  .clearfix {
    margin-top: 3rem;
  }
`;

export default PatientTabSlide;

// 19e!Stlil885e
