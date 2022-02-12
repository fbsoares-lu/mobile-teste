import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #F6F8FF;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  height: 60px;
  width: 100%;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.poppins_semibold};
  font-size: 16px;
  color: #FFFFFF;
`;