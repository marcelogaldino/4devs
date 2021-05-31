import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 16px 16px;
  background: #007CFF;
  color: #FFF;
  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#007CFF')};
  }

  & + button {
    margin-top: 12px;
  }
`;
