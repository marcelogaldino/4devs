/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container, Content, SelectElement, InputDate, Header,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';

const CreateDev: React.FC = () => {
  const history = useHistory();
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

      await api.post('/devs', data);
      history.push('/find');
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Header>
            <Link to="/">
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

export default CreateDev;
