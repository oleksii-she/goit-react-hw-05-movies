import styled from 'styled-components';

export const ListStyled = styled.ul`
  flex-wrap: wrap;
  gap: 31px;
  padding-top: 60px;
  padding-bottom: 60px;
  justify-content: center;
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 30px;
  max-width: 100%;
`;
export const ImgBox = styled.div`
  position: relative;
  max-width: 100%;
`;

export const Img = styled.img`
  height: 574px;
`;

export const Average = styled.span`
  position: absolute;
  z-index: 99;
  top: 5px;
  left: 5px;
  border: 2px solid;
  border-radius: 50%;
  padding: 8px;
  background-color: rgb(63, 81, 181);
  color: #f4f2ee;
`;

export const Title = styled.h2`
  margin-top: 5px;
  font-weight: 700;
`;
