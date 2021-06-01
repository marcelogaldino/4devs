import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Selectrops extends SelectHTMLAttributes<HTMLSelectElement>{
  name: string;
}

const Input: React.FC<Selectrops> = ({ name, children, ...rest }) => {
  const selectRef = useRef(null);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <select defaultValue={defaultValue} ref={selectRef} {...rest}>
        {children}
      </select>
    </Container>
  );
};

export default Input;
