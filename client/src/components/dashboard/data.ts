import AWSLogo from '../../assets/connects/aws.svg'
import GCPLogo from '../../assets/connects/gcp.svg'
import GithubLogo from '../../assets/connects/github.svg'
import GitlabLogo from '../../assets/connects/gitlab.svg'
import BitbucketLogo from '../../assets/connects/bitbucket.svg'
import MongodbLogo from '../../assets/connects/mongodb.svg'
import RedisLogo from '../../assets/connects/redis.svg'
import PsqlLogo from '../../assets/connects/psql.svg'

const steps = [
    {
        title: 'Step 1',
        tagline: 'Connect to Cloud',
        options: [
            {
                service_name: 'AWS',
                service_logo: [AWSLogo, '38px'],
                key: 'aws',
                color: '#FFF5E5'
            },
            {
                service_name: 'GCP',
                service_logo: [GCPLogo, '38px'],
                key: 'gcp',
                color: '#ECF3FE'
            }
        ]
    },
    {
        title: 'Step 2',
        tagline: 'Connect to Source Code',
        options: [
            {
                service_name: 'Github',
                service_logo: [GithubLogo, '38px'],
                key: 'github',
                color: '#E9E9E9'
            },
            {
                service_name: 'Gitlab',
                service_logo: [GitlabLogo, '38px'],
                key: 'gitlab',
                color: '#FCECEA'
            },
            {
                service_name: 'Bitbucket',
                service_logo: [BitbucketLogo, '38px'],
                key: 'bitbucket',
                color: '#E0ECFF'
            }
        ]
    },
    {
        title: 'Step 3',
        tagline: 'Connect to DataSource',
        options: [
            {
                service_name: 'MongoDB',
                service_logo: [MongodbLogo, '38px'],
                key: 'moongodb',
                color: '#EDF5ED'
            },
            {
                service_name: 'RedisDB',
                service_logo: [RedisLogo, '38px'],
                key: 'redisdb',
                color: '#FBEAE9'
            },
            {
                service_name: 'Postgresql',
                service_logo: [PsqlLogo, '38px'],
                key: 'psql',
                color: '#EBF0F4'
            }
        ]
    },
]

export default steps;
