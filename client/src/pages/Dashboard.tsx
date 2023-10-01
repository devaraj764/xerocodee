import { Button, Container, Grid, GridItem, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { UserContext } from '../App'
import Logo from '../assets/logo.png'
import ChooseConnects from '../components/dashboard/ChooseConnects'
import ProgressDiv from '../components/dashboard/ProgressDiv'

type Props = {}
export type TConnects = {
  cloud_provider: string
  source_code: string
  data_source: string
}

const Dashboard = (props: Props) => {
  const { user, logout } = useContext(UserContext);
  // const navigate = useNavigate();

  const [connects, setConnects] = React.useState<TConnects>({
    cloud_provider: '',
    source_code: '',
    data_source: '',
  });

  const [progress, setProgress] = React.useState<number>(0)

  React.useEffect(() => {
    if (connects.cloud_provider !== '') setProgress(40);
    if (connects.source_code !== '') setProgress(80);
    if (connects.data_source !== '') setProgress(100);
  }, [connects])

  return (
    <Container maxW='container.xl' px={0}>
      <HStack justifyContent={'space-between'}>
        <Image src={Logo} alt="XeroCode Logo" maxH='50px' mb={'20px'} />
        <Button onClick={logout} variant={'outline'} colorScheme='red'>Logout</Button>
      </HStack>
      <Stack bg='#fff' p="1.5em" borderRadius={'0 25px'} minH={'80vh'}>
        <Text fontSize={'42px'} fontWeight={'700'}>Hi {user?.firstName}!</Text>
        <Text fontSize={'14px'} fontWeight={'600'}  mt={-2}>Welcome to Xerocodee ExoSystem 😇 </Text>
        <Grid
          templateColumns={{ base: '1fr', lg: '12fr 5fr' }}
          gap="1em"
          mt="20px"
          h='full'
        >
          <GridItem h='full'>
            <ChooseConnects connects={connects} setConnects={setConnects} progress={progress} />
          </GridItem>
          <GridItem h='full' p='10px  '>
            <ProgressDiv progress={progress} connects={connects} />
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  )
}

export default Dashboard