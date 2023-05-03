import { Container } from '@mui/material'
import { Spotify } from 'react-spotify-embed'

function Music() {
    return (
        <Container align="center">
            <Spotify link="https://open.spotify.com/album/4uNzDULQ9RAy0nxGaPbCDn?si=Uh6oIUpuRaeuEybngX37rw" />
        </Container>
    )
}

export default Music