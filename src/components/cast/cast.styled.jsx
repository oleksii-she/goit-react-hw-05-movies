import styled from 'styled-components';

export const ContentBox = styled.div`
  max-width: 1280px;
  margin: auto;
`;
export const List = styled.ul`
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  gap: 15px;
  max-width: calc(100vw - 15px);
  margin: 0 auto;
  padding: 0;
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
export const Wrapper = styled.div`
  padding: 5px;
`;

export const Title = styled.h2`
  display: flex;
`;
