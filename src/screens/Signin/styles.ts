import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${getStatusBarHeight()+ 100}px;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SecondaryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_bold};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.main};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_medium};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};

  text-align: center;
  margin-top: 40px;
`;

