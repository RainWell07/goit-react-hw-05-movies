import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Suspense } from "react";
import { RingLoader } from "react-spinners";
import { SiThemoviedatabase } from "react-icons/si";
import { Container, Header } from "./StyledLayout";

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  :hover {
    color: #00e640;
  }
  &.active {
    color: #2ecc71;
  }
`;

export default function Layout() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
  <>
  <Header>
  <nav>
  <SiThemoviedatabase onClick={handleHomeClick}/>
  <ul>
    <li>
  <StyledLink to="/">Home</StyledLink>
   </li>
    <li>
  <StyledLink to="movies">Movies
</StyledLink>
      </li>
      </ul>
      </nav>
      </Header>
      <Container>
      <main>
 <Suspense
fallback={
 <RingLoader
  size={500}
  color="green"
  css={{
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  }}
  loading="true"
  />
  }
 >
    <Outlet />
    </Suspense>
    </main>
    </Container>
    </>
  );
}