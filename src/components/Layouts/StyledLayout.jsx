import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 35px;
  padding-bottom:35px;
  background-color: black;
  border-radius: 5px;
`;

const Header = styled.header`
  width: 100%;
  background-color: black;
  border-radius: 95px;
  margin-bottom:30px;


  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:800px;

    ul {
      display: flex;
      justify-content: center;
      gap: 60px;
      list-style: none;
      margin: 0;
      padding:0;
    }
  }
  a{
 color:white;
 font-size:30px;
 transition: color 0.8s;
  }
svg {
    font-size: 120px;
    color: #2ecc71;
    transition: color 1s;
    cursor: pointer;
    padding: 20px;
}
svg:hover {
    color: #00e640;
}
`;

export { Container, Header };
