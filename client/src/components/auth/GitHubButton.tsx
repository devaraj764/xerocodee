import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import GithubIcon from "../../assets/github.png";

type Props = {
    title?: string
}

const GitHubButton: React.FC<Props> = (props: Props) => {
    return (
        <Button rightIcon={<Image src={GithubIcon} ml='5px' />} fontSize={'14px'} w='100%' p='6' variant={'outline'}>
            {props.title || 'Login with Google'}
        </Button>
    )
}

export default GitHubButton