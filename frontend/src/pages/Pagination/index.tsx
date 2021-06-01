/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import useDevs from '../../hooks/useDevs';
import usePagination from '../../hooks/usePagination';

import {
  Container, Card, Cards, Pages, ButtonBack,
} from './styles';

const Pagination: React.FC = () => {
  const { devs, fetchDevs } = useDevs(3);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    if (actualPage !== undefined) {
      fetchDevs(actualPage);
    }
  }, [actualPage]);

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
      <Pages>
        {
          Array(5).fill('').map((_, index) => (
            <button type="button" key={index} onClick={() => setActualPage(index + 1)}>
              {index + 1}
            </button>
          ))
        }
      </Pages>
    </>
  );
};
export default Pagination;
