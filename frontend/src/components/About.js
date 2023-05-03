import { Container, Typography } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { Image } from 'mui-image'

function About() {
    return (
        <>
            <Typography variant='h4' sx={{mt: '100px'}}>About Us</Typography>
            <Container sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center',
            }}>
                <Parallax speed={10} style={{flexShrink: 0}}>
                    <Image src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/04/03/11/nirbvanaband0304a.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart' />
                </Parallax>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
                <Parallax speed={10} style={{flexShrink: 0}}>
                    <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/04/07/10/aerosmith0704.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart" />
                </Parallax>
            </Container>
            <Container sx={{padding: '20px'}}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
        </>
    )
}

export default About