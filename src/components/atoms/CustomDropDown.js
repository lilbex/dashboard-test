import React, { useEffect, useState,useRef } from "react";
import styled from "styled-components";

const SelectCheckbox = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  // useEffect(() => {}, [selected]);

  return (
    <>
      <StyledSelect>
        <div className="select" onClick={toggle}>
          {/* {selected.length > 0 ? (
            selected.map((slots) => <p>{slots}</p>)
          ) : (
            <p>Select timeslots</p>
          )} */}

          <span onClick={toggle}>
            <svg
              width="10"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3378 0.838623C12.7283 0.448099 13.3615 0.448099 13.752 0.838623C14.1426 1.22915 14.1426 1.86231 13.752 2.25284L7.75203 8.25284C7.37345 8.63141 6.76386 8.64466 6.3692 8.28288L0.369198 2.78288C-0.0379212 2.40969 -0.0654237 1.77712 0.307769 1.37001C0.680961 0.962887 1.31353 0.935384 1.72065 1.30858L7.01485 6.16159L12.3378 0.838623Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div className={open ? "checkbox-content" : "checkbox-content hide"}>
          {options.map((slots, i) => (
            <div className="chk">
              <input
                onChange={(e) => onChange(e, i)}
                type="radio"
                name={slots.value}
              />
              <span className="checkboxtext">{slots.label}</span>
            </div>
          ))}
        </div>
      </StyledSelect>
    </>
  );
};
export default SelectCheckbox;

const StyledSelect = styled.div`
  color:#8E919C;
  font-size: 12px;
  line-height: 20px;
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 400;
  .select {
    width: 100%;
    padding: 13px 15px;
    background: #fff;
    border-radius: 5px;
    /* border-color: internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)); */
    position: relative;
    border: 1px solid #DFE8FC;
    height: 100%;
    display: flex;
    color:black;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    span {
      svg {
        transform: ${({ open }) => (!open ? "rotate(0)" : "rotate(180deg)")};
      }
    }
  }
  input[type="checkbox"] {
    /* Double-sized Checkboxes */
    -ms-transform: scale(1); /* IE */
    -moz-transform: scale(1); /* FF */
    -webkit-transform: scale(1); /* Safari and Chrome */
    -o-transform: scale(1); /* Opera */
    transform: scale(0.3);
    padding: 10px;
    border-radius: 5px;
    /* border: 1px solid #DFE8FC; */
  }

  /* Might want to wrap a span around your checkbox text */
  .checkboxtext {
    font-size: 13px;
    /* display: inline; */
    width: 100%;
    margin-top: 15px
  }
  .checkbox-content {
    display: flex;
    flex-direction: column;
    width:280px;
    justify-content: center;
    position: absolute;
    background: #fff;
    top: 130px;
    padding:5px;
    margin-top:10px
    padding-left: 10px;
    z-index:1000 ;
    border-radius: 10px;
    /* overflow: scroll; */
    box-shadow: 0px 4px 15px 0px rgba(191,178,178,0.71);
    -webkit-box-shadow: -1px 4px 15px -1px rgba(191,178,178,0.71);
    -moz-box-shadow: -1px 4px 15px -1px rgba(191,178,178,0.71);
  }
  .chk{
    display: flex;
    margin-bottom: -20px;
    color:black;
  }
  .hide {
    display: none;
  }
`;
