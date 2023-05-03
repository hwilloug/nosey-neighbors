import { Container } from "@mui/material"
import { Image } from 'mui-image'

function HeaderImage() {
    return (
        <Container sx={{display: 'flex', gap: '10px'}}>
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/10/13/guns-n-roses.jpg?width=640&auto=webp&quality=50&crop=1500%3A1005%2Csmart" />
            <Image src="https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg" />
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/29/12/the-ramones-live.jpg?width=640&auto=webp&quality=50&crop=1247%3A831%2Csmart" />

        </Container>
    )
}

export default HeaderImage