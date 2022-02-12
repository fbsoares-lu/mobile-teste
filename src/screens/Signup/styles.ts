import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.light};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.poppins_medium};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.light};
`;

export const Header = styled.View`
    padding-top: ${getStatusBarHeight() + 60}px;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.main};
    width: 100%;
`;  

export const Back = styled.TouchableOpacity``;
