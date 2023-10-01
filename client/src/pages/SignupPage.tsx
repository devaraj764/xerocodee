import React from 'react'
import { Grid, GridItem, Link, Text, VStack } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import SignUpForm from '../components/auth/SignUpForm'
import GoogleButton from '../components/auth/GoogleButton'
import GitHubButton from '../components/auth/GitHubButton'
import AuthLayout from '../Layouts/AuthLayout'

const SignupPage: React.FC = () => {
    return (
        <AuthLayout>
            <Text fontSize="28px" fontWeight='900'>Hello !</Text>
            <Text fontSize="14px">SignUp to Your Account</Text>
            <VStack justifyContent={'center'} minH={'50vh'} textAlign={'center'}>
                <SignUpForm />
                <Text my={1}>OR</Text>
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
                <Text mt="1em" >Already have an account? <Link as={RLink} to='/login' color='#1F64FF' fontWeight='600'>LOGIN</Link> </Text>
            </VStack>
        </AuthLayout>
    )
}

export default SignupPage