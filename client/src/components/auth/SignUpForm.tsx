import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    FormControl,
    Input,
    Button,
    Text,
    Stack,
} from '@chakra-ui/react';

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const SignUpForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        // Here, you can call a function with the form data, e.g., submitSignUp(data)
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', marginTop: '20px' }}>
            <Stack spacing={5}>
                <FormControl isRequired>
                    <Input
                        className='form-input'
                        {...register('firstName', { required: 'First Name is required' })}
                        placeholder="First Name"
                    />
                    {errors.firstName && (
                        <Text color="red.500">{errors.firstName.message}</Text>
                    )}
                </FormControl>

                <FormControl isRequired>
                    <Input
                        className='form-input'
                        {...register('lastName', { required: 'Last Name is required' })}
                        placeholder="Last Name"
                    />
                    {errors.lastName && (
                        <Text color="red.500">{errors.lastName.message}</Text>
                    )}
                </FormControl>

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

                <FormControl isRequired>
                    <Input
                        className='form-input'
                        type="password"
                        {...register('confirmPassword', {
                            required: 'Confirm Password is required',
                            validate: (value) =>
                                value === watch('password') ||
                                'Passwords do not match',
                        })}
                        placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && (
                        <Text color="red.500">{errors.confirmPassword.message}</Text>
                    )}
                </FormControl>

                <Button type="submit" variant="unstyled" color='#fff' bg={'#1F64FF'}>
                    SIGNUP
                </Button>
            </Stack>
        </form>
    );
};

export default SignUpForm;
