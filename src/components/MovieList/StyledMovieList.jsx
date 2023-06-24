import styled from "@emotion/styled";

const StyledMovieList = styled.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;
padding: 35px;
list-style: none;

li {
  a {
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  padding:10px;
  font-weight:bold;
  border-radius: 10px;
  background-color: #51936d;
  color: inherit;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  :visited {
  color: blue;
  }
  :hover {
  background-color: #080e2c;
  color:white;
  }
  }
  }
`;


export {StyledMovieList};