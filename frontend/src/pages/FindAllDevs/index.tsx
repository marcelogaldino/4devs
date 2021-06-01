import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

import api from '../../services/api';

import {
  ButtonBack, Container, Card, Cards,
} from './styles';

interface IDataDevs {
  id: string;
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
}

const FindAllDevs: React.FC = () => {
  const [devs, setDevs] = useState<IDataDevs[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <ButtonBack>
        <Link to="/">
          <FiHome size={20} />
          Voltar para a Home
        </Link>
      </ButtonBack>
      <Container>
        <Cards>
          {devs.map((dev) => (
            <Link key={dev.id} to={`/edit/${dev.id}`}>
              <Card>
                <ul>
                  <li>
                    <strong>Nome</strong>
                    {' '}
                    {dev.nome}
                  </li>
                  <li>
                    <strong>Idade</strong>
                    {' '}
                    {dev.idade}
                  </li>
                  <li>
                    <strong>Sexo</strong>
                    {' '}
                    {dev.sexo}
                  </li>
                  <li>
                    <strong>Hobby</strong>
                    {' '}
                    {dev.hobby}
                  </li>
                </ul>
              </Card>
            </Link>

          ))}
        </Cards>
      </Container>
    </>
  );
};
export default FindAllDevs;
