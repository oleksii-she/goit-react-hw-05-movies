import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentBox = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
`;

export const LinkActiveDetalies = styled(NavLink)`
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  margin-left: 50px;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #dca53d;
  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: green;
    transition: cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.ul`
  margin-right: 8px;
`;

export const BoxText = styled.div`
  margin-left: 25px;
`;
