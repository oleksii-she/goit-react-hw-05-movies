import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Header, Nav, Conteiner } from './app.styled';
import BeatLoader from 'react-spinners/BeatLoader';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Conteiner>
        <Suspense fallback={<BeatLoader color="#36d7b7" />}>
          <Outlet />
        </Suspense>
      </Conteiner>
    </>
  );
};

// export default SharedLayout;
