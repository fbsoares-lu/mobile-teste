import React, { useCallback, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Alert, FlatList, ScrollView } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container, Input, Button, ButtonText } from './styles';
import { api } from '../../service/api';

interface ISigninData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    cpf: string;
    birthday: string;
    mothers_name: string;
    status: string;
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().max(20).required(),
    password_confirmation: yup.string().required(),
    phone: yup.string().max(10).required(),
    cpf: yup.string().max(11).required(),
    birthday: yup.string().required(),
    mothers_name: yup.string().required(),
    status: yup.string().required(),
}).required();

const dataKey = '@app:users';

export function SignupForm(){
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            phone: '',
            cpf: '',
            birthday: '',
            mothers_name: '',
            status: '',
        },
    });

    const onSubmit = async (data: ISigninData) => {
        await api.post('/users', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            phone: data.phone,
            cpf: data.cpf,
            birthday: data.birthday,
            mothersName: data.mothers_name,
            status: data.status,
        })
        .then(() => {
            Alert.alert('Usuário cadastrado!');
        })
        .catch((err) => {
            console.log(err)
            Alert.alert('Não foi possivel salvar');
        })
    };

    return(
        <Container>
            <ScrollView>
                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe seu nome'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('name') }
                    />
                    )}
                    name="name"
                />
                {/* {errors.name?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe seu email'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('email') }
                    />
                    )}
                    name="email"
                />
                {/* {errors.email?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe sua senha'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('password') }
                    />
                    )}
                    name="password"
                />
                {/* {errors.password?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Confirme a senha'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('password_confirmation') }
                    />
                    )}
                    name="password_confirmation"
                />
                {/* {errors.password_confirmation?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe seu telefone'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('phone') }
                    />
                    )}
                    name="phone"
                />
                {/* {errors.phone?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe seu CPF'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('cpf') }
                    />
                    )}
                    name="cpf"
                />
                {/* {errors.cpf?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe seu aniversário'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('birthday') }
                    />
                    )}
                    name="birthday"
                />
                {/* {errors.birthday?.message && <Text>This is required.</Text>} */}

                <Controller
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        placeholder='Informe nome da sua mae'
                        placeholderTextColor={'#B1BEFF'}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        { ...register('mothers_name') }
                    />
                    )}
                    name="mothers_name"
                />
                {/* {errors.mothers_name?.message && <Text>This is required.</Text>} */}

                
            </ScrollView>

            <Button onPress={handleSubmit(onSubmit)}>
                <ButtonText>Cadastrar</ButtonText>
            </Button>
        </Container>
    );
}