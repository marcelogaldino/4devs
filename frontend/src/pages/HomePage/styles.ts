import styled from 'styled-components';

import DevImage from '../../assets/devbg.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  margin: 48px 78px;

  h1 {
    margin-bottom: 64px;
  }

  a {
    width: 100%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${DevImage}) no-repeat center;
  background-size: cover;
`;
