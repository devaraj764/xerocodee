import React from 'react'
import { TConnects } from '../../pages/Dashboard'
import { Box, CircularProgress, CircularProgressLabel, HStack, Image, Text, VStack } from '@chakra-ui/react'
import steps from './data'

type Props = {
    connects: TConnects
    progress: number
}

const ProgressDiv: React.FC<Props> = ({ progress, connects }: Props) => {
    return (
        <Box
            maxW={'400px'}
            border='1px solid #0000002f'
            minH={'60vh'}
            h='full'
            borderRadius={'10px'}
            boxShadow={'7px 7px 10px 0px #0000001A'}
            p='15px'
        >
            <VStack mb='3'>
                <Text fontWeight={700} fontSize={'22px'} >Your Progress</Text>
                <Text fontSize={'14px'} color='#818181' mt={-2}>towards XeroCodee</Text>
                <CircularProgress thickness={'16px'} value={progress} size='130px' my={2} color='#0D64DE'>
                    <CircularProgressLabel fontSize={'22px'} fontWeight='700'>{progress}%</CircularProgressLabel>
                </CircularProgress>
            </VStack>
            <VStack alignItems={'flex-start'} gap='3' w='full'>
                {
                    steps.map((step, index) => {
                        const foptions = step.options.filter(option => (index === 0 && connects.cloud_provider === option.key) || (index === 1 && connects.source_code === option.key) || (index === 2 && connects.data_source === option.key))
                        const option = foptions[0] ? { ...foptions[0], status: 'completed' } : { ...step.options[0], status: 'pending' }
                        // console.log(foptions[0])
                        return (
                            <Box w='full' key={index}>
                                <Text fontSize={'14px'} color='#818181' mb={1}>Step {index + 1}</Text>
                                <Box w='full' bg={option.color} py='7px' px='12px' borderRadius={'7px'}>
                                    <HStack justifyContent={'space-between'} gap='20px' w='full'>
                                        <VStack alignItems={'flex-start'}>
                                            <Text fontWeight={700} fontSize={'18px'} >{option.service_name}</Text>
                                            <Text fontSize={'14px'} color='#818181' mt={-2}>Status: {option.status}</Text>
                                        </VStack>
                                        <HStack justifyContent={'center'} alignItems='center' bg={'#fff'} borderRadius={'10px'} width={'70px'} h={'60px'}>
                                            <Image src={option.service_logo[0]} w={option.service_logo[1]} alt='AWS' />
                                        </HStack>
                                    </HStack>
                                </Box>
                            </Box>
                        )
                    })
                }
            </VStack>
        </Box>
    )
}

export default ProgressDiv