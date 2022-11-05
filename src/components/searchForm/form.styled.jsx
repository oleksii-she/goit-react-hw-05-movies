import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled(Field)`
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.space[2]}px;
  width: 280px;
`;

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 8px;
  background: transparent;
  border: none;
`;

export const Label = styled.label`
  position: relative;
`;
