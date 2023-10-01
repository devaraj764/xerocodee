import { Container, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SuccessGif from '../assets/successfully-done.gif'
// import { useQueryClient } from "react-query";

type Props = {
}

const LoginSuccessPage: React.FC<Props> = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Get a specific query parameter by name
    const token = queryParams.get('token');

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            if (token) {
                localStorage.setItem('token', token);
                window.location.reload();
            }
        }, 3000);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, []);

    return (
        <Container maxW='500px' bg='#fff' p="10px" borderRadius={'0 25px'}>
            <HStack justifyContent={'center'} alignItems={'center'}>
                <Image src={SuccessGif} alt="Successfully Gif" height={'100px'} width={'100px'} />
                <Text ml={'-1em'} fontSize={'24px'} fontWeight="bold">Login Successfull</Text>
            </HStack>
        </Container>
    )
}

export default LoginSuccessPage