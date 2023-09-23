import React from 'react'
import { Container, Grid, GridItem, Image, Stack, VStack } from '@chakra-ui/react'
import WaveVector from '../assets/wave-vector.png'
import Bro from '../assets/bro.png'
import Logo from '../assets/logo.png'

type Props = {
    children: JSX.Element[]
}

const AuthLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <Container style={{ position: 'relative' }} maxW='container.lg' bg='#fff' p="2em" borderRadius={'0 25px'}>
            <Grid
                templateColumns={{ base: '1fr 1fr' }}
                gap='2em'
            >
                <GridItem w='full' px={'10px'}>
                    <Stack alignItems={'center'} >
                        <Image src={Logo} alt="XeroCode Logo" mb={'10px'} />
                        {children}
                    </Stack>
                </GridItem>
                <GridItem borderLeft='1px solid #ccc' mb={'30px'} p='6'>
                    <VStack justifyContent={'center'} h='100%'>
                        <Image src={Bro} alt='wave-vector' maxW='100%' />
                    </VStack>
                </GridItem>
            </Grid>
            <Image src={WaveVector} alt='wave-vector' position={'absolute'} bottom={'0'} right={'0'} />
        </Container>
    )
}

export default AuthLayout