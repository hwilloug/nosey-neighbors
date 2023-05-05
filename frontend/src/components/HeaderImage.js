import { Container } from "@mui/material"
import { Image } from 'mui-image'

function HeaderImage() {
    return (
        <Container sx={{display: 'flex', gap: '10px', backgroundColor: 'black', alignItems: 'center'}} disableGutters maxWidth="100%">
            <Image src={require("../assets/IMG_8610.JPG")} />
            <Image src={require('../assets/logo.JPG')} />
            <Image src={require('../assets/IMG_8611.JPG')} />
        </Container>
    )
}

export default HeaderImage