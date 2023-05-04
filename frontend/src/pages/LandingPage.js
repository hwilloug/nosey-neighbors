import { Container } from '@mui/material'
import YoutubeEmbed from '../components/YoutubeEmbed'
import NewsArticles from '../components/NewsArticles'
import About from '../components/About'
import SignUp from '../components/SignUp'
import HeaderImage from '../components/HeaderImage'
import Music from '../components/Music'

function LandingPage() {

    return (
    <>
        <HeaderImage />
        <SignUp />
        <Container sx={{display: 'flex'}}>
            <YoutubeEmbed embedId='q2I0ulTZWXA' />
            <Music />
        </Container>
        <About />
        <NewsArticles />
      </>
    )
}

export default LandingPage