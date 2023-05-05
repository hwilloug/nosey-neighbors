import { Container, Typography } from '@mui/material'
import { Image } from 'mui-image'

function About() {

    const imageStyling = {
        border: '1px solid white',
        borderRadius: '10px',
        padding: '20px'
    }

    return (
        <Container id="about">
            <Typography variant='h4'>About Us</Typography>
            <Container sx={{
                display: {md: 'flex'}, 
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center',
            }}>
                <Image 
                    sx={imageStyling} src={require('../assets/IMG_8613.JPG')} />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
                <Image sx={imageStyling} src={require('../assets/IMG_8616.JPG')} />
            </Container>
            <Container sx={{
                display: {md: 'flex'}, 
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center',
            }}>
                <Image 
                    sx={imageStyling} src={require('../assets/IMG_8615.JPG')} />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
                <Image sx={imageStyling} src={require('../assets/IMG_8612.JPG')} />
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Image sx={imageStyling} src={require('../assets/IMG_8614.JPG')} />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
            </Container>
        </Container>
    )
}

export default About