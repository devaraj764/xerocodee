import React from 'react'
import { Container, Grid, GridItem, HStack, Image, VStack } from '@chakra-ui/react'
import WaveVector from '../assets/wave-vector.png'
import Bro from '../assets/bro.png'
import Logo from '../assets/logo.png'

type Props = {
    children: JSX.Element[]
}

const AuthLayout: React.FC<Props> = ({ children }: Props) => {
    return (
        <Container style={{ position: 'relative' }} maxW='container.lg' bg='#fff' p="1.5em" borderRadius={'0 25px'}>
            <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                gap='2em'
            >
                <GridItem w='full' textAlign={'center'}>
                    <HStack justifyContent={'center'}>
                        <Image src={Logo} alt="XeroCode Logo" mb={'10px'} />
                    </HStack>
                    {children}
                </GridItem>
                <GridItem borderLeft='1px solid #ccc' mb={'30px'} p='6' className='auth-image'>
                    <VStack justifyContent={'center'} h='100%'>
                        <Image src={Bro} alt='bro' maxW='100%' />
                    </VStack>
                </GridItem>
            </Grid>
            <Image className='wave-vector' src={WaveVector} alt='wave-vector' position={'absolute'} bottom={'0'} right={'0'} />
        </Container>
    )
}

export default AuthLayout