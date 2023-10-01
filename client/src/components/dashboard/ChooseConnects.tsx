import { Box, Collapse, HStack, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { ImRadioChecked2 } from 'react-icons/im'
import { TConnects } from '../../pages/Dashboard'
import steps from './data'

type Props = {
  connects: TConnects
  setConnects: React.Dispatch<React.SetStateAction<TConnects>>
  progress: number
}


const ChooseConnects: React.FC<Props> = ({ connects, progress, setConnects }) => {
  const toast = useToast()

  const handleClick = (index: number, key: string) => {
    var cs = connects;
    if (index === 0 && progress >= 0) cs.cloud_provider = key;
    else if (index === 1 && progress >= 40) cs.source_code = key;
    else if (index === 2 && progress >= 80) cs.data_source = key;
    else {
      toast({
        title: `Please complete previous step ${progress === 0 ? '1' : progress === 40 ? '2' : '3'}`,
        status: 'warning', // You can use 'success', 'error', 'warning', or 'info'
        duration: 2000, // Display duration in milliseconds
        isClosable: true, // Allow the user to close the toast
      })
    }
    setConnects(() => ({ ...cs }));
  }

  return (
    <Stack w='full' gap='0'>
      {
        steps.map((step, index) => (
          <Collapse
            key={index}
            in={
              (index === 0 && progress >= 0) || (index === 1 && progress >= 40) || (index === 2 && progress >= 80) ? true : false
            } style={{ transition: 'visibility 0.5s ease-in-out' }}>

            <HStack w='full' alignItems={'flex-start'}>
              <ImRadioChecked2 style={{ zIndex: '999', color: (index === 0 && progress >= 0) || (index === 1 && progress >= 40) || (index === 2 && progress >= 80) ? '#0C5BC6' : '#afafaf' }} size={32} />
              <Box
                borderLeft={'5px solid'}
                borderColor={(index === 0 && progress >= 40) || (index === 1 && progress >= 80) || (index === 2 && progress >= 100)
                  ? '#0C5BC6' : '#afafaf'}
                h='full'
                pl='2em'
                ml={'-1.6em'}
                w='full' mt={5}>
                <Text fontWeight={'600'}>{step.title}</Text>
                <Text fontSize={'12px'}>{step.tagline}</Text>
                <HStack gap='1em' pb='2em' pr='2em' w='full' flexWrap={'wrap'}>
                  {step.options.map((service, k) => (
                    <Box
                      onClick={() => handleClick(index, service.key)}
                      key={k}
                      p='10px' minW={'150px'} borderRadius='10px' mt={5}
                      cursor={'pointer'}
                      border={
                        (index === 0 && connects.cloud_provider === service.key) ||
                          (index === 1 && connects.source_code === service.key) ||
                          (index === 2 && connects.data_source === service.key)
                          ?
                          '2px solid #0C5BC6'
                          :
                          '1px solid #F3F3F4'}
                      boxShadow={'5px 5px 10px 0px rgba(0, 0, 0, 0.10);'}>
                      <HStack justifyContent={'space-between'} gap='20px' w='full'>
                        <Text fontWeight={'600'}>{service.service_name}</Text>
                        <HStack justifyContent={'center'} alignItems='center' bg={service.color} borderRadius={'10px'} width={'70px'} h={'60px'}>
                          <Image src={service.service_logo[0]} w={service.service_logo[1]} alt='AWS' />
                        </HStack>
                      </HStack>
                    </Box>
                  ))}
                </HStack>
              </Box>
            </HStack >
          </Collapse>
        ))
      }
    </Stack >
  )
}

export default ChooseConnects