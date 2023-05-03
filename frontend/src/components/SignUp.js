import { Button, Container, Typography } from '@mui/material'

function SignUp() {
    return (
        <Container sx={{border: '1px solid darkgrey', p: '20px', m: '20px'}} align='center'>
            <Typography variant='h4' sx={{m: '20px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Typography>
            <Button color='secondary' variant='contained'>Sign Up</Button>
        </Container>
    )
}

export default SignUp