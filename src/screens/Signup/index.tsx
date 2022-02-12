import React from 'react';
import { SignupForm } from '../../components/SignupForm';

import {
    Container,
    Title,
} from './styles';

export function SignUp(){
  
  return(
    <Container>
        <Title>Cadastro de usuário</Title>
        <SignupForm />
    </Container>
  );
}