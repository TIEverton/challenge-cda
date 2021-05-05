import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset';
}

export function Button({ type, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest} />
  );
}

