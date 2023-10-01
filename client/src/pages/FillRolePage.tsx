import React, { useState } from 'react'
import FillDetailsLayout from '../Layouts/FillDetailsLayout'
import { Button, Grid, GridItem, HStack, Input } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'
import { updateUser } from '../api/user'

type Props = {}

const FillRolePage: React.FC<Props> = () => {
    const [selected, setSelected] = useState<string>('');
    const [roleName, setRoleName] = useState<string>('');
    const queryClient = useQueryClient();

    const updateRole = useMutation({
        mutationFn: () => {
            const data = { designation: selected, name: roleName }
            return updateUser({ role: data });
        },
        onSuccess: () => {
            queryClient.invalidateQueries('get-user-data');
        }
    })

    const handleSubmit = () => {
        updateRole.mutate();
        setRoleName('')
    }
    return (
        <FillDetailsLayout>
            <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
                gap='1em'
                w='full'
            >
                <GridItem>
                    <Button
                        onClick={() => {
                            setSelected('developer')
                            handleSubmit()
                        }}
                        _hover={{ border: '1px solid #1F64FF' }} minH='50px' w='full' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Developer</Button>
                </GridItem>
                <GridItem>
                    <Button
                        onClick={() => setSelected('organization')}
                        bg={selected === 'organization' ? '#1F64FF' : 'transparent'}
                        color={selected === 'organization' ? '#fff' : '#000'}
                        _hover={{ border: '1px solid #1F64FF' }} minH='50px' w='full' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Organization</Button>
                </GridItem>
                <GridItem>
                    <Button
                        onClick={() => setSelected('company')}
                        bg={selected === 'company' ? '#1F64FF' : 'transparent'}
                        color={selected === 'company' ? '#fff' : '#000'}
                        _hover={{ border: '1px solid #1F64FF' }} minH='50px' w='full' border={'1px solid #ccc'} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Company</Button>
                </GridItem>
            </Grid>
            {
                (selected !== '' && selected !== 'developer')
                    ?
                    <HStack mt={'24'} justifyContent={'center'} alignItems='center'>
                        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRoleName(e.target.value)} maxW='400px' type="text" placeholder={`${selected === 'organization' ? 'Organization' : 'Company'} Name`} border='2px solid #ccc' />
                        <Button isDisabled={roleName === '' || updateRole.isLoading} onClick={handleSubmit} _hover={{}} variant={'solid'} color='#fff' bg='#1F64FF'>Submit</Button>
                    </HStack> : <></>
            }
        </FillDetailsLayout>
    )
}

export default FillRolePage