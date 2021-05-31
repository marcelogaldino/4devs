import React from 'react';
import { Container, Content, Background } from './styles';

import Button from '../../components/Button';

const Home: React.FC = () => (
  <>
    <Container>
      <Content>
        <h1>4DEVS</h1>
        <Button type="button">Criar um Dev</Button>
        <Button type="button">Consultar todos os Devs</Button>
        <Button type="button">Consultar Devs com paginação</Button>
      </Content>
      <Background />
    </Container>
  </>
);

export default Home;
