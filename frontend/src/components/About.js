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
                    sx={imageStyling} src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/04/03/11/nirbvanaband0304a.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart' />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
                <Image sx={imageStyling} src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/04/07/10/aerosmith0704.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart" />
            </Container>
            <Container sx={{
                display: {md: 'flex'}, 
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center',
            }}>
                <Image 
                    sx={imageStyling} src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/04/03/11/nirbvanaband0304a.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart' />
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
                <Image sx={imageStyling} src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/04/07/10/aerosmith0704.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart" />
            </Container>
            <Container sx={{p: '20px', mt: '50px'}}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            </Container>
        </Container>
    )
}

export default About