import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import GithubIcon from "../../assets/github.png";

type Props = {
    title?: string
}

const backendUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';

const GitHubButton: React.FC<Props> = (props: Props) => {

    const redirectToGithubSSO = async () => {
        const googleLoginUrl = `${backendUrl}/auth/github`;
        window.location.replace(googleLoginUrl);
    }
    return (
        <Button onClick={redirectToGithubSSO} rightIcon={<Image src={GithubIcon} ml='5px' />} fontSize={'14px'} w='100%' p='6' variant={'outline'}>
            {props.title || 'Login with Google'}
        </Button>
    )
}

export default GitHubButton