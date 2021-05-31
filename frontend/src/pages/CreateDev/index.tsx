/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '@unform/web';

import {
  Container, Content, Checkbox, InputDate,
} from './styles';

import Input from '../../components/Input';

const CreateDev: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h2>Informações Cadastrais</h2>
          <Input name="nome" type="text" placeholder="Nome Completo" />
          <Input name="idade" type="number" placeholder="Idade" />
          <Input name="hobby" type="text" placeholder="Hobby Ex: ler livros..." />
          <Checkbox>
            <Input name="sexo" type="checkbox" id="sexo" value="M">Masculino</Input>
            <Input name="sexo" type="checkbox" id="sexo" value="F">Feminino</Input>
            <Input name="sexo" type="checkbox" id="sexo" value="O">Outro</Input>
          </Checkbox>
          <InputDate>
            <label htmlFor="datanascimento">Data de nascimento</label>
            <Input name="datanascimento" id="datanascimento" type="date" />
          </InputDate>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateDev;
