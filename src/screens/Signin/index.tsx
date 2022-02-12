import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SigninForm } from '../../components/SigninForm';

import {
    Container,
    Title,
    SecondaryTitle,
    Description,
} from './styles';

const dataKey = '@app:users';

export function SignIn(){
  return(
    <Container>
      <StatusBar 
        barStyle='dark-content' 
        backgroundColor='transparent' 
        translucent={true}
      />
      <Title>Sign <SecondaryTitle>In</SecondaryTitle></Title>
      <Description>Entre com sua credencial{'\n'}para continuar</Description>
      
      <SigninForm />
    </Container>
  );
}