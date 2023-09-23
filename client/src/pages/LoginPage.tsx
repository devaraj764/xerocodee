import React from 'react'
import { HStack, Text, Link,  VStack } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import GoogleButton from '../components/auth/GoogleButton'
import GitHubButton from '../components/auth/GitHubButton'
import AuthLayout from '../Layouts/AuthLayout'
import LoginForm from '../components/auth/LoginForm'


const LoginPage: React.FC = () => {
    return (
        <AuthLayout>
            <Text fontSize="28px" fontWeight='900'>Welcome Back Again !</Text>
            <Text fontSize="14px">Login to Your Account</Text>
            <VStack justifyContent={'center'} minH={'50vh'} textAlign={'center'}>
                <LoginForm />
                <Text my={3}>OR</Text>
                <HStack w='100%' gap={'1em'} justifyContent={'space-between'}>
                    <GoogleButton title="Login With Google" />
                    <GitHubButton title="Login With Github" />
                </HStack>
                <Text mt="1em" >Don’t have an Account ? <Link  as={RLink} to='/signup' color='#1F64FF' fontWeight='600'>SIGNUP</Link> </Text>
            </VStack>
        </AuthLayout>
    )
}

export default LoginPage