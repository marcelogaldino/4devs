import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';

const Home: React.FC = () => (
  <>
    <Container>
      <Content>
        <h1>4DEVS</h1>
        <Link to="/create">
          <Button type="button">Criar um Dev</Button>
        </Link>

        <Link to="/find">
          <Button type="button">Consultar todos os Devs</Button>
        </Link>

        <Link to="/pagination">
          <Button type="button">Consultar Devs com paginação</Button>
        </Link>
      </Content>
      <Background />
    </Container>
  </>
);

export default Home;
