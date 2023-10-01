import React, { useState } from 'react'
import FillDetailsLayout from '../Layouts/FillDetailsLayout'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { useMutation, useQueryClient } from 'react-query'
import { updateUser } from '../api/user'

type Props = {}

const FillHostingPage: React.FC<Props> = () => {
    const [selected, setSelected] = useState<string>('');
    const queryClient = useQueryClient();

    const updateRole = useMutation({
        mutationFn: () => {
            return updateUser({ hostingPlan: selected });
        },
        onSuccess: () => {
            queryClient.invalidateQueries('get-user-data');
        }
    })

    const handleSubmit = () => {
        updateRole.mutate();
    }
    return (
        <FillDetailsLayout>
            <Grid
                templateColumns={{ base: '1fr', lg: selected ? '1fr 1fr 1fr' : '1fr 1fr' }}
                gap='2em'
            >
                <GridItem>
                    <Button
                        onClick={() => {
                            setSelected('self')
                            handleSubmit()
                        }}
                        _hover={{ border: '1px solid #1F64FF' }} minH='50px' w='full' border={`1px solid ${selected === 'self' ? '#1F64FF' : '#ccc'}`} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Self Hosting</Button>
                </GridItem>
                <GridItem>
                    <Button
                        onClick={() => {
                            setSelected('xerocodee')
                            handleSubmit()
                        }}
                        _hover={{ border: '1px solid #1F64FF' }} minH='50px' w='full' border={`1px solid ${selected === 'xerocodee' ? '#1F64FF' : '#ccc'}`} variant={'unstyled'} fontWeight='bold' fontSize={'18px'}>Xerocodee Hosting</Button>
                </GridItem>
                {
                    (selected !== '')
                        ?
                        <GridItem>
                            <Button
                                isDisabled={updateRole.isLoading} onClick={handleSubmit} _hover={{}}
                                minH='50px' w='full' variant={'solid'} color='#fff' bg='#1F64FF'>Submit</Button>
                        </GridItem> : <></>
                }
            </Grid>
        </FillDetailsLayout>
    )
}

export default FillHostingPage