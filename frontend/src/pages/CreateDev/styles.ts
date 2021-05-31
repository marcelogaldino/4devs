import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  width: 850px;
  height: 550px;
  background: #FFF;
  padding: 12px 48px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    margin-bottom: 18px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputDate = styled.div`
  margin-top: 32px;

  label {
    padding: 16px;
  }
`;
