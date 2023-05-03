import { Button, Container, Typography } from '@mui/material'
import { Image } from 'mui-image'
import YoutubeEmbed from '../components/YoutubeEmbed'
import NewsArticles from '../components/NewsArticles'
import About from '../components/About'
import SignUp from '../components/SignUp'
import HeaderImage from '../components/HeaderImage'

function LandingPage() {

    return (
    <>
        <HeaderImage />
        <SignUp />
        <Container align='center'>
            <YoutubeEmbed embedId='q2I0ulTZWXA' />
        </Container>
        <About />
        <NewsArticles />
      </>
    )
}

export default LandingPage