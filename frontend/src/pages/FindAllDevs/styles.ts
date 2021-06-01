import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Cards = styled.div`
  max-width: 1200px;
  margin: 138px auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Card = styled.div`
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
  height: 4rem;
  width: 400px;
  height: 400px;
  cursor: pointer;
`;
