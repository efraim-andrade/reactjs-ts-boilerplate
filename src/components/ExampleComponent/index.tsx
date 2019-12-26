import React from 'react';

import { Container } from './styles';

interface Props {
  title?: string;
}

export default function ExampleComponent({ title }: Props) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
