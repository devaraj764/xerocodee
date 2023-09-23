import React from 'react'
import { HStack, Link, Text, VStack } from '@chakra-ui/react'
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
                <Text my={3}>OR</Text>
                <HStack w='100%' gap={'1em'} justifyContent={'space-between'}>
                    <GoogleButton title="Sign Up With Google" />
                    <GitHubButton title="Sign Up With Github" />
                </HStack>
                <Text mt="1em" >Already have an account? <Link as={RLink} to='/login' color='#1F64FF' fontWeight='600'>LOGIN</Link> </Text>
            </VStack>
        </AuthLayout>
    )
}

export default SignupPage