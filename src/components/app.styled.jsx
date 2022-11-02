import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 1100;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: rgb(255, 255, 255);
  background-color: rgb(63, 81, 181);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
`;

export const StyledLink = styled(NavLink)`
  color: aqua;
  margin-left: 50px;
  &:first-child {
    margin-left: 0;
  }
  &.active {
    color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Section = styled.section`
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px; ;
`;
