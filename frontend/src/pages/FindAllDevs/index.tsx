import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Card, Cards } from './styles';

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
      <Container>
        <Link to="/">Home</Link>

        <Cards>
          {devs.map((dev) => (
            <Link to={`/edit/${dev.id}`}>
              <Card key={dev.id}>
                <ul>
                  <li>
                    Nome
                    {' '}
                    {dev.nome}
                  </li>
                  <li>
                    Idade
                    {' '}
                    {dev.idade}
                  </li>
                  <li>
                    Sexo
                    {' '}
                    {dev.sexo}
                  </li>
                  <li>
                    Hobby
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
