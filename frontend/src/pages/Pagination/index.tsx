/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useDevs from '../../hooks/useDevs';
import usePagination from '../../hooks/usePagination';

import {
  Container, Card, Cards, Pages,
} from './styles';

const Pagination: React.FC = () => {
  const { devs, fetchDevs } = useDevs(3);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    if (actualPage !== undefined) {
      fetchDevs(actualPage);
    }
  }, [fetchDevs, actualPage]);

  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Cards>
          {devs.map((dev) => (
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

          ))}
        </Cards>

        <Pages>
          {
              Array(5).fill('').map((_, index) => (
                <button type="button" key={index} onClick={() => setActualPage(index + 1)}>
                  {index + 1}
                </button>
              ))
            }
        </Pages>
      </Container>
    </>
  );
};
export default Pagination;
