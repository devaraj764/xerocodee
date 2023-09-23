import React, { useState } from 'react'
import FillDetailsLayout from '../Layouts/FillDetailsLayout'
import { Button, HStack, Input } from '@chakra-ui/react'

type Props = {}

const FillRolePage: React.FC<Props> = () => {
    const [selected, setSelected] = useState<string>('');

    const [roleName, setRoleName] = useState<string>('');

    const handleSubmit = () => {
        console.log({ role: selected, name: roleName || '' })
        setRoleName('')
    }
    return (
        <FillDetailsLayout>
            <HStack justifyContent={'space-between'}>
                <Button
                    onClick={() => {
                        setSelected('developer')
                        handleSubmit()
                    }}
                    _hover={{ border: '1px solid #1F64FF' }} minH='50px' minW='250px' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Developer</Button>
                <Button
                    onClick={() => setSelected('organization')}
                    bg={selected === 'organization' ? '#1F64FF' : 'transparent'}
                    color={selected === 'organization' ? '#fff' : '#000'}
                    _hover={{ border: '1px solid #1F64FF' }} minH='50px' minW='250px' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Organization</Button>
                <Button
                    onClick={() => setSelected('company')}
                    bg={selected === 'company' ? '#1F64FF' : 'transparent'}
                    color={selected === 'company' ? '#fff' : '#000'}
                    _hover={{ border: '1px solid #1F64FF' }} minH='50px' minW='250px' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Company</Button>
            </HStack>
            {
                (selected !== '' && selected !== 'developer')
                    ?
                    <HStack mt={'24'} justifyContent={'center'} alignItems='center'>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoleName(e.target.value)} maxW='400px' type="text" placeholder={`${selected === 'organization' ? 'Organization' : 'Company'} Name`} border='2px solid #ccc' />
                        <Button isDisabled={roleName === ''} onClick={handleSubmit} _hover={{}} variant={'solid'} color='#fff' bg='#1F64FF'>Submit</Button>
                    </HStack> : <></>
            }
        </FillDetailsLayout>
    )
}

export default FillRolePage