import React from 'react';
import { SigninForm } from '../../components/SigninForm';

import {
    Container,
} from './styles';

export function Signin(){
  
  return(
    <Container>
        <SigninForm />
    </Container>
  );
}