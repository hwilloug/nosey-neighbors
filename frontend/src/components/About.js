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
                <Typography>We are Nosey Neighbor, a melodic hardcore metal band formed out of Rock Hill/Fort Mill, SC area. We started out as a two piece Blake and Brent, brothers that have been playing together for years now. Then we added Nick, who is a amazing lead guitarist who adds a real twist on our sound. We played the three of us together for around two years.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>Until we met Paul: Paul is a amazing guitar player, lead and rythm, but he is playing bass for us, and he is killing the groove, moving around the frets and adding a real groovy feel to our sound. And of course lastly, we found Trystan. We met Trystan on Facebook and he came out and tried out the band and he loved our sound! This is Trystan's first band, and he is crushing it! He has been with us almost a year now, and we have a lot in store!</Typography>
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
                <Typography>As for the backstory of our name, we used to practice at Blake's mom's house, and there was a nosey neighbor there that constantly harassed us and called the police on us. Hence the name, Nosey Neighbor.</Typography>
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Typography>We are going to record our EP in June, and we plan on pushing more and more shows and getting out to there to play music that people enjoy!</Typography>
                <Image sx={imageStyling} src={require('../assets/IMG_8612.JPG')} />
            </Container>
            <Container sx={{
                display: {md: 'flex'},
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center'
            }}>
                <Image sx={imageStyling} src={require('../assets/IMG_8614.JPG')} />
                <Typography>Influences for us are scattered from Knocked Loose all the way to The Eagles. We love this band called Sleep Talk from Sydney, Australia.  We hope you enjoy our music and hope you come out to a show and see us play!</Typography>
            </Container>
        </Container>
    )
}

export default About