import React, { useCallback, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Alert, Button, Text } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from "yup";
import { Container, Input } from './styles';

interface ISigninData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().max(20).required(),
}).required();

const dataKey = '@app:users';

export function SigninForm(){
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit = async (data: ISigninData) => {
        try {
            await AsyncStorage.setItem(dataKey, JSON.stringify(data));
        } catch (error) {
            Alert.alert("Não foi possível salvar");
        }
    };

    return(
        <Container>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                    placeholder='Informe seu email'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    { ...register('email') }
                />
                )}
                name="email"
            />
            {errors.email?.message && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                <Input
                    placeholder='Informe sua senha'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    { ...register('password') }
                />
                )}
                name="password"
            />
            {errors.password?.message && <Text>This is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Container>
    );
}