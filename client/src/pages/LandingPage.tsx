import { Box, Button, Container, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import GoogleButton from '../components/auth/GoogleButton'
import GitHubButton from '../components/auth/GitHubButton'
type Props = {}

const LandingPage: React.FC = (props: Props) => {
    const navigate = useNavigate();
    return (
        <Container style={{ position: 'relative' }} maxW='500px' bg='#fff' p="2em" borderRadius={'0 25px'}>
            <Stack alignItems={'center'}>
                <Image src={Logo} alt="XeroCode Logo" mb={'10px'} />
                <Spacer mb={'1.5em'} />
                <Button onClick={() => navigate('/login')} fontSize={'18px'} w='100%' variant={'solid'} colorScheme='facebook' bg='#1F64FF' p='6'>
                    Login to Xerocodee
                </Button>
                <Button onClick={() => navigate('/signup')} fontSize={'18px'} w='100%' variant={'outline'} colorScheme='facebook' borderColor='#1F64FF' p='6'>
                    Create an Account
                </Button>
                <Box my="1em">
                    <Text>OR</Text>
                </Box>
                <GoogleButton />
                <GitHubButton />
            </Stack>
        </Container>
    )
}

export default LandingPage