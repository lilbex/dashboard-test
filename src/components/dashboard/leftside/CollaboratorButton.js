import React from "react";
import styled from "styled-components";

const CollaboratorButton = () => {
  return (
    <CollaboratorsStyle>
      <img className="user" src="images/user.png" alt=""/>
      <p>Kolawale</p>
      <img className="close" src="images/close-blue.svg" alt=""/>
    </CollaboratorsStyle>
  );
};

export default CollaboratorButton;

const CollaboratorsStyle = styled.div`
    width: 120px;
    height: 34px;
    background: #e8e8ff;
    border-radius: 17.5px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 2px 5px;
    p {
      margin-top: 8px;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 17px;
      color: #5051f9;
    }
    .user {
      width: 25px;
      height: 25px;
      vertical-align: middle;
      border-radius: 50%;
      margin-top: 4.5px;
    }
    .close {
      width: 10px;
    }
  
`;