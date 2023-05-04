import NewsArticles from '../components/NewsArticles'
import About from '../components/About'
import SignUp from '../components/SignUp'
import HeaderImage from '../components/HeaderImage'
import Music from '../components/Music'
import Merch from '../components/Merch'
import Contact from '../components/Contact'

function LandingPage() {

    return (
    <>
        <HeaderImage />
        <SignUp />
        <Music />
        <About />
        <NewsArticles />
        <Merch />
        <Contact />
    </>
    )
}

export default LandingPage