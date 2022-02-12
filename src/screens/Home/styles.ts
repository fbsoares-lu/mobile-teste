import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_semibold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SecondaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_relugar};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Users = styled.View`
  background-color: red;
`;

export const UsersContent = styled.View``;

export const Content = styled.View``;

export const Name = styled.Text``;

export const Email = styled.Text``;
