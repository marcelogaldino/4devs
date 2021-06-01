import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonBack = styled.div`
  margin: 80px 0 80px 80px;

  a {
    text-decoration: none;
    color: dodgerblue;
    font-weight: 500;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
