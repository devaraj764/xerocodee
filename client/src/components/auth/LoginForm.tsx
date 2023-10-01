import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    FormControl,
    Input,
    Button,
    Text,
    Stack,
    useToast,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { TLoginData, login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

type FormValues = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const navigate = useNavigate()
    const toast = useToast();

    const loginMutation = useMutation({
        mutationFn: (data: TLoginData) => login(data),
        onSuccess: (data: { token: string }) => {
            navigate(`/login/success?token=${data.token}`);
        },
        onError: (err: any) => {
            toast({
                title: 'Error Logging in !',
                description: err.message,
                status: 'error', // You can use 'success', 'error', 'warning', or 'info'
                duration: 5000, // Display duration in milliseconds
                isClosable: true, // Allow the user to close the toast
            })
        }
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // Here, you can call a function with the form data, e.g., submitSignUp(data)
        loginMutation.mutate(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: '20px' }}>
            <Stack spacing={5}>
                <FormControl isRequired>
                    <Input
                        className='form-input'
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        placeholder="Email"
                    />
                    {errors.email && (
                        <Text color="red.500">{errors.email.message}</Text>
                    )}
                </FormControl>

                <FormControl isRequired>
                    <Input
                        className='form-input'
                        type="password"
                        {...register('password', { required: 'Password is required' })}
                        placeholder="Password"
                    />
                    {errors.password && (
                        <Text color="red.500">{errors.password.message}</Text>
                    )}
                </FormControl>
                <Button type="submit" variant="unstyled" color='#fff' bg={'#1F64FF'}>
                    LOGIN
                </Button>
            </Stack>
        </form>
    );
};

export default LoginForm;
