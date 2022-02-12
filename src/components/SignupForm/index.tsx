import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { Alert, ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container, InputFormat, Input, Button, ButtonText, Erros } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface ISigninData {
    name: string;
    email: string;
    password: string;
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().max(20).required()
}).required();

const dataKey = '@app:users';

export function SignupForm(){
    const navigation = useNavigation();
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = async(data: ISigninData) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password
        };

        try {
            const currentData = await AsyncStorage.getItem(dataKey);
            const currentDataFormatted = currentData ? JSON.parse(currentData) : [];

            const userData = [
                ...currentDataFormatted,
                user
            ];

            await AsyncStorage.setItem(dataKey, JSON.stringify(userData));
            Alert.alert('Usuário cadastrado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível salvar!');
        }
    };

    return(
        <Container>
            <ScrollView
                style={{ marginTop: 30}}
            >
                {errors.name?.message && <Erros>Nome obrigatório</Erros>}
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputFormat>
                            <Feather
                                name='user'
                                size={18}
                                color={'#B1BEFF'}
                            />
                            <Input
                                placeholder='Informe seu nome'
                                placeholderTextColor={'#B1BEFF'}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                { ...register('name') }
                            />
                        </InputFormat>
                    )}
                    name="name"
                />
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
            </ScrollView>

            <Button onPress={handleSubmit(onSubmit)}>
                <ButtonText>Cadastrar</ButtonText>
            </Button>
        </Container>
    );
}