import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBack = styled.div`
  margin: 40px 0 40px 40px;

a {
  text-decoration: none;
  color: dodgerblue;
  font-weight: 500;

  svg {
    margin-right: 4px;
  }
}
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 138px auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

  a {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  display: flex;
  color: #000;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background: #FFF;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#FFF')};
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Pages = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-right: 12px;

  button {
    border: 0;
    border-radius: 8px;
    padding: 16px 16px;
    background: #007CFF;
    color: #FFF;
    font-weight: 500;

    & + button {
      margin-left: 4px;
    }

    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#007CFF')};
    }
  }

`;
