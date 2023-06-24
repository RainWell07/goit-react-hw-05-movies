import styled from "@emotion/styled";


const StyledCast = styled.ul`

display: flex;
flex-wrap: wrap;
gap: 45px;
justify-content: center;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
padding: 20px;
border-radius: 10px;
list-style:none;
color:white;

li {
  flex-basis: calc((100% - 80px) / 5);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 10px;
  border:3px solid #067937;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    object-fit: cover;
  }
  div {
    padding: 10px;
    text-align: center;
  }
}


`


export {StyledCast}