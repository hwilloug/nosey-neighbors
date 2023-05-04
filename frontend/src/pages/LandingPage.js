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
        <Music />
        <About />
        <NewsArticles />
    </>
    )
}

export default LandingPage