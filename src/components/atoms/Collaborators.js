import React from "react";
import styled from "styled-components";

const Collaborators = ({ title }) => {
  return (
    <CollaboratorsStyle>
      <div><img /></div>
      <p className="bg-title">{title}</p>
      <p className="bg-title-amount">N30,000.00</p>
    </CollaboratorsStyle>
  );
}
export default Collaborators;

const CollaboratorsStyle = styled.div`

position: absolute;
width: 95px;
height: 34px;
background: #E8E8FF;
border-radius: 17.5px;`;