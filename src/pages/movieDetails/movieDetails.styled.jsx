import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentBox = styled.div`
  display: flex;
`;

export const LinkActiveDetalies = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.ul`
  margin-right: 8px;
`;
