// import 'dotenv/config'
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import GoogleIcon from "../../assets/google.png";

type Props = {
    title?: string
}
const backendUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

const GoogleButton: React.FC<Props> = (props: Props) => {

    const redirectToGoogleSSO = async () => {
        const googleLoginUrl = `${backendUrl}/auth/google`;
        window.open(googleLoginUrl, '_blank', "width=500,height=600")
    }

    return (
        <Button onClick={redirectToGoogleSSO} rightIcon={<Image src={GoogleIcon} ml='5px' />} fontSize={'14px'} w='100%' variant={'outline'} p="6">
            {props.title || 'Login with Google'}
        </Button>
    )
}

export default GoogleButton