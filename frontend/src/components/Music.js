import { Container, Typography } from '@mui/material'
import { Spotify } from 'react-spotify-embed'
import YoutubeEmbed from '../components/YoutubeEmbed'

function Music() {
    return (
        <Container id="music">
            <Typography variant='h4' sx={{mt: '50px'}}>Music</Typography>
            <Container sx={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <YoutubeEmbed embedId='q2I0ulTZWXA' />
                <Spotify link="https://open.spotify.com/album/4uNzDULQ9RAy0nxGaPbCDn?si=Uh6oIUpuRaeuEybngX37rw" />
            </Container>
        </Container>
    )
}

export default Music