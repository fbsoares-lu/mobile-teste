import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Alert, ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { 
    Container, 
    InputFormat, 
    Input, 
    Button, 
    ButtonText, 
    Erros,
    Signup,
    SignupText,
    RecoveryPassword,
    Line,
    LineContent
} from './styles';
import { useNavigation } from '@react-navigation/native';

interface ISigninData {
    email: string;
    password: string;
}

interface User {
    name: string;
    email: string;
    password:string;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().max(20).required()
}).required();

const dataKey = '@app:users';

export function SigninForm(){
    const theme = useTheme();
    const navigation = useNavigation();

    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (response: ISigninData) => {
        try {
            const data = await AsyncStorage.getItem(dataKey);
            const userFormatted = JSON.parse(data);
            const user: User = await userFormatted.find((item) => {
                if (item.email === response.email && 
                    item.password === response.password) {
                    return item.email;
                } 
            });
            
            if (user) {
                navigation.navigate('Home', { user });
                return;
            }
            Alert.alert('Usuário não existe!');
        } catch (error) {
            Alert.alert('Não conseguiu conectar!')
        }
        
    };

    function handleSignup() {
        navigation.navigate('SignUp');
    }

    return(
        <Container>
            <ScrollView
                style={{ marginTop: 30}}
            >
                {errors.email?.message && <Erros>Email obrigatório</Erros>}
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputFormat>
                            <Feather
                                name='mail'
                                size={18}
                                color={'#B1BEFF'}
                            />
                            <Input
                                placeholder='Informe seu email'
                                placeholderTextColor={'#B1BEFF'}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                { ...register('email') }
                            />
                        </InputFormat>
                    )}
                    name="email"
                />
                {errors.password?.message && <Erros>Senha obrigatória</Erros>}
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputFormat>
                            <Feather
                                name='lock'
                                size={18}
                                color={'#B1BEFF'}
                            />
                            <Input
                                secureTextEntry
                                placeholder='Informe sua senha'
                                placeholderTextColor={'#B1BEFF'}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                { ...register('password') }
                            />
                        </InputFormat>
                    )}
                    name="password"
                />
                <Button onPress={handleSubmit(onSubmit)}>
                    <ButtonText>Entrar</ButtonText>
                </Button>

                <Line>
                    <LineContent />
                </Line>
                
                <RecoveryPassword>
                    <Feather name='unlock' size={18} color={theme.colors.main} />
                    <SignupText>Recuperar senha</SignupText>
                </RecoveryPassword>
                
                <Signup onPress={handleSignup}>
                    <Feather name='log-in' size={18} color={theme.colors.main} />
                    <SignupText>Cadastre-se</SignupText>
                </Signup>
            </ScrollView>
        </Container>
    );
}