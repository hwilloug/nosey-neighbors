import { Button, Container, Typography } from '@mui/material'

function SignUp() {
    return (
        <Container sx={{p: '20px', my: '20px', mx: 'auto'}} align='center'>
            <Typography variant='h4' sx={{m: '20px'}}>Sign up now to get band related email updates</Typography>
            <Button color='secondary' variant='contained'>Sign Up</Button>
        </Container>
    )
}

export default SignUp