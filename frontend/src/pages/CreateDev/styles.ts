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
  height: 650px;
  background: #FFF;
  padding: 12px 48px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    margin-bottom: 18px;
  }


`;

export const Header = styled.div`
  display: flex;

  a {
    margin-right: 22px;
    text-decoration: none;
    color: red;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SelectElement = styled.div`
  margin-top: 32px;

  select {
    background: transparent;
    font-size: 16px;
    color: #666360;
  }

  label {
    padding: 16px;
  }
`;

export const InputDate = styled.div`
  margin-top: 32px;

  label {
    padding: 16px;
  }
`;
