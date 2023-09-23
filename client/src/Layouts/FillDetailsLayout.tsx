import { Box, Container, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/logo.png'

type Props = {
    children: JSX.Element[]
}

const FillDetailsLayout: React.FC<Props> = ({ children }) => {
    return (
        <Container maxW='container.xl' bg='#fff' p="2em" borderRadius={'0 25px'}>
            <VStack alignItems={'center'} minH={'50vh'}>
                <Image src={Logo} alt="XeroCode Logo" mb={'1em'} />
                <Text fontSize="24px" fontWeight={'bold'}>Welome Arya Soni !</Text>
                <HStack minW={'500px'} justifyContent={'space-between'}>
                    <Divider borderColor='#ccc' />
                    <Text fontSize="14px" w='100%' color='#00002280' fontWeight={'700'}>Choose from the following</Text>
                    <Divider borderColor='#ccc' />
                </HStack>
                <Box my='2em' maxW='1000px' w='100%' textAlign={'center'} h='100%'>
                    {children}
                </Box>
            </VStack>
        </Container>
    )
}

export default FillDetailsLayout