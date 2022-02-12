import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const InputFormat = styled.View`
  align-items: center;
  flex-direction: row;

  width: 100%;
  height: 60px;
  padding: 15px;
  background-color: #F6F8FF;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-left: 20px;
  padding-right: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  height: 60px;
  width: 100%;
  padding: 10px;

  margin-bottom: ${getBottomSpace}px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_semibold};
  font-size: 16px;
  color: #FFFFFF;
`;

export const Erros = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_semibold};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.errors};
`;