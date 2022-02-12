import React from 'react';
import { SignupForm } from '../../components/SignupForm';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Title,
    Header,
    Back
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SignUp(){
  const theme = useTheme();
  const navigate = useNavigation();
  return(
    <Container>
      <Header>
        <Back onPress={() => navigate.goBack()}>
          <Feather 
            name='arrow-left'
            size={20}
            color={theme.colors.light}
            style={{paddingRight: 20}}
          />
        </Back>
        <Title>Cadastro de usuário</Title>
      </Header>
      <SignupForm />
    </Container>
  );
}