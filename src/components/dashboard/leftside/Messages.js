import React from "react";
import styled from "styled-components";

const Messsages = ({name, message}) => {
  return (
    <CollaboratorsStyle>
      <img className="user" src="images/user.png" alt=""/>
      <div className="msg-container">
        <p className="name">{name}</p>
        <p className="msg">{message}</p>
      </div>
    </CollaboratorsStyle>
  );
};

export default Messsages;

const CollaboratorsStyle = styled.div`
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2px;
  padding: 5px;
  .msg-container{
    display:flex ;
    flex-direction:column;
    margin:0;
    margin-top:10px;
    padding:0;
    gap:2px;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 17px;
    text-wrap: wrap;
  }
  .name{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #005555;
    margin:0;
    padding:0;
  }
  .msg{
    margin-top:2px;
  }
  .user {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    border-radius: 50%;
    margin-top: 4.5px;
    border:1px solid pink;
  }
`;
