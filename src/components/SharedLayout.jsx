import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Nav, Conteiner } from './app.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>

      <Conteiner>
        <Outlet />
      </Conteiner>
    </>
  );
};
