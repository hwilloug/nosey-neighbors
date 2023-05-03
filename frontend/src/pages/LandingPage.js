import { Button, Container, Typography } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { Image } from 'mui-image'
import YoutubeEmbed from '../components/YoutubeEmbed'

function LandingPage() {
    return (
    <>
        <Container sx={{display: 'flex', gap: '10px'}}>
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/10/13/guns-n-roses.jpg?width=640&auto=webp&quality=50&crop=1500%3A1005%2Csmart" />
            <Image src="https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg" />
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/29/12/the-ramones-live.jpg?width=640&auto=webp&quality=50&crop=1247%3A831%2Csmart" />

        </Container>
        <Container sx={{border: '1px solid darkgrey', p: '20px', m: '20px'}} align='center'>
            <Typography variant='h4' sx={{m: '20px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Typography>
            <Button color='secondary' variant='contained'>Sign Up</Button>
        </Container>
        <Container align='center'>
            <YoutubeEmbed embedId='q2I0ulTZWXA' />
        </Container>
        <Container sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            gap: '20px',
            alignItems: 'center'
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

export default LandingPage