import About from '../components/About'
import SignUp from '../components/SignUp'
import HeaderImage from '../components/HeaderImage'
import Music from '../components/Music'
import Merch from '../components/Merch'
import Contact from '../components/Contact'
import UpcomingShows from '../components/UpcomingShows'
import ComingSoon from '../components/ComingSoon'

function LandingPage() {

    return (
    <>
        <HeaderImage />
        <SignUp />
        <Music />
        <About />
        <UpcomingShows />
        <Merch />
        <Contact />
    </>
    )
}

export default LandingPage