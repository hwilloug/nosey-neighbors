import { Container, Link, Typography } from "@mui/material";

export default function Contact() {
    return (
        <Container id="contact">
            <Typography variant='h4'>Contact Us</Typography>
            <Link href="mailto: bhill81597@gmail.com" sx={{color: 'white'}}>Send us an email</Link>
        </Container>
    )
}