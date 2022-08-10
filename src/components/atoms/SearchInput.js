import React from 'react'
import styled from 'styled-components'
// import { BsSearch } from "react-icons/bs";


const CustomSearch = ({ placeholder ="Search for a patient"}) => {
  return (
    <SearchStyle>
      <input placeholder={placeholder} />
      {/* <BsSearch /> */}
      <span className="search-icon">
        <span width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M15.0541 17.253C14.646 16.8625 14.646 16.2293 15.0541 15.8388C15.4622 15.4483 16.1238 15.4483 16.5319 15.8388L20.7118 19.8388C21.1198 20.2293 21.1198 20.8625 20.7118 21.253C20.3037 21.6435 19.642 21.6435 19.234 21.253L15.0541 17.253Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29883 11.5459C4.29883 15.4119 7.57375 18.5459 11.6136 18.5459C15.6534 18.5459 18.9283 15.4119 18.9283 11.5459C18.9283 7.67991 15.6534 4.5459 11.6136 4.5459C7.57375 4.5459 4.29883 7.67991 4.29883 11.5459ZM16.8384 11.5459C16.8384 14.3073 14.4992 16.5459 11.6136 16.5459C8.728 16.5459 6.38877 14.3073 6.38877 11.5459C6.38877 8.78447 8.728 6.5459 11.6136 6.5459C14.4992 6.5459 16.8384 8.78447 16.8384 11.5459Z" fill="black" />
          </svg>
        </span>
      </span>
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
  min-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #e6e6e6;
  background: #F3F4F8;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

input{
  background: transparent;
  border:none;
  outline: none;
  width: 94%;
  height: .5rem;
  border-radius: 10px;
  padding: 1rem;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;

  &::placeholder {
    color: #828A95;
  }
}
.search-icon{
  cursor: pointer;
}
`;

export default CustomSearch