import React from 'react'
import { Link, Text, VStack, Grid, GridItem } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom';
import GoogleButton from '../components/auth/GoogleButton'
import GitHubButton from '../components/auth/GitHubButton'
import AuthLayout from '../Layouts/AuthLayout'
import LoginForm from '../components/auth/LoginForm'


const LoginPage: React.FC = () => {
    return (
        <AuthLayout>
            <Text fontSize="28px" fontWeight='900'>Welcome Back Again !</Text>
            <Text fontSize="14px">Login to Your Account</Text>
            <VStack justifyContent={'center'} minH={'50vh'} mb={'3em'}>
                <LoginForm />
                <Text my={3}>OR</Text>
                <Grid
                    templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                    gap='1em'
                    w='full'
                >
                    <GridItem>
                        <GoogleButton title="Login With Google" />
                    </GridItem>
                    <GridItem>
                        <GitHubButton title="Login With Github" />
                    </GridItem>
                </Grid>
                <Text mt="1em" >Don't have an Account ? <Link as={RLink} to='/signup' color='#1F64FF' fontWeight='600'>SIGNUP</Link> </Text>
            </VStack>
        </AuthLayout>
    )
}

export default LoginPage