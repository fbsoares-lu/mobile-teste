import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
    Container,
    Title,
    SecondaryTitle,
    Users,
    UsersContent,
    Content,
    Name,
    Email,
} from './styles';

interface User {
  user: UserData;
}

interface UserData {
  name: string;
  email: string;
  password:string;
}

export function Home(){
  const route = useRoute();
  const {user} = route.params as User;

  const [users, setUsers] = useState();

  return(
    <Container>
      <Title>Olá {user.name},{'\n'}<SecondaryTitle>Bem-vindo</SecondaryTitle></Title>
      <Users>
        <UsersContent>
          <Content>
            <Feather 
              name='user'
              size={18}
              color={'#000'}
            />
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </Content>
        </UsersContent>
      </Users>
    </Container>
  );
}