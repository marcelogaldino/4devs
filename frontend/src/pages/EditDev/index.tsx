/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import formatDate from '../../utils/formatDate';

import {
  Container, Content, SelectElement, InputDate, Header, Buttons, FormDelete,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

interface IDataDevs {
  id: string;
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
  datanascimento: Date;
}

const EditDev: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const [dev, setDev] = useState<IDataDevs>();
  const formRef = useRef<FormHandles>(null);

  const handleSubmitDelete = useCallback(async () => {
    try {
      const id = location.pathname.replace('/edit/', '');

      await api.delete(`/devs/${id}`);
      history.push('/find');
    } catch (error) {
      console.log(error);
    }
  }, [location.pathname, history]);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required().typeError('Informe um nome'),
        idade: Yup.number().min(1).max(150).typeError('Idade deve estar entre 1 e 150'),
        hobby: Yup.string().max(255).typeError('Máximo de 255 caracteres'),
        sexo: Yup.string().max(1),
        datanascimento: Yup.date().typeError('Insira uma data válida'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const id = location.pathname.replace('/edit/', '');

      await api.put(`/devs/${id}`, data);
      history.push('/find');
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, [location.pathname, history]);

  useEffect(() => {
    async function fetchDev() {
      const id = location.pathname.replace('/edit/', '');

      const response = await api.get(`/devs/${id}`);

      setDev(response.data);
    }

    fetchDev();
  }, [location.pathname]);

  const initialData = {
    nome: dev?.nome,
    idade: dev?.idade,
    sexo: dev?.sexo,
    hobby: dev?.hobby,
    datanascimento: formatDate(dev?.datanascimento),
  };

  return (
    <Container>
      <Content>
        <Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
          <Header>
            <Link to="/find">
              <FiChevronLeft size={20} />
              Voltar
            </Link>
            <h2>Informações Cadastrais</h2>
          </Header>
          <Input name="nome" type="text" placeholder="Nome Completo" />
          <Input name="idade" type="number" placeholder="Idade" />
          <Input name="hobby" type="text" placeholder="Hobby Ex: ler livros..." />
          <SelectElement>
            <label htmlFor="sexo">Sexo</label>
            <Select name="sexo">
              {initialData.sexo === 'M' ? (
                <option selected value="M">Masculino</option>
              ) : (
                <option value="M">Masculino</option>
              )}

              {initialData.sexo === 'F' ? (
                <option selected value="F">Feminino</option>
              ) : (
                <option value="F">Feminino</option>
              )}

              {initialData.sexo === 'O' ? (
                <option selected value="O">Outro</option>
              ) : (
                <option value="O">Outro</option>
              )}
            </Select>

          </SelectElement>
          <InputDate>
            <label htmlFor="datanascimento">Data de nascimento</label>
            <Input name="datanascimento" id="datanascimento" type="date" />
          </InputDate>
          <Buttons>
            <Button type="submit">Atualizar Cadastro</Button>
          </Buttons>
        </Form>
      </Content>

      <FormDelete>
        <Form onSubmit={handleSubmitDelete}>
          <Button type="submit">Deletar</Button>
        </Form>
      </FormDelete>

    </Container>
  );
};

export default EditDev;
