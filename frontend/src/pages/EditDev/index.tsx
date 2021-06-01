/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import formatDate from '../../utils/formatDate';

import {
  Container, Content, SelectElement, InputDate,
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
  const location = useLocation();
  const [dev, setDev] = useState<IDataDevs>();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string(),
        idade: Yup.number().min(1).max(150).typeError('Idade deve estar entre 1 e 150'),
        hobby: Yup.string().max(255).typeError('Máximo de 255 caracteres'),
        sexo: Yup.string().max(1),
        datanascimento: Yup.date().typeError('Insira uma data válida'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.put('/devs', data);
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

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

  console.log(initialData.datanascimento);

  return (
    <Container>
      <Content>
        <Form initialData={initialData} ref={formRef} onSubmit={handleSubmit}>
          <h2>Informações Cadastrais</h2>
          <Input name="nome" type="text" placeholder="Nome Completo" />
          <Input name="idade" type="number" placeholder="Idade" />
          <Input name="hobby" type="text" placeholder="Hobby Ex: ler livros..." />
          <SelectElement>
            <label htmlFor="sexo">Sexo</label>
            <Select name="sexo">
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
            </Select>

          </SelectElement>
          <InputDate>
            <label htmlFor="datanascimento">Data de nascimento</label>
            <Input name="datanascimento" id="datanascimento" type="date" />
          </InputDate>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default EditDev;
