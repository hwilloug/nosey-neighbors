import { Container, Typography } from "@mui/material";

export default function ComingSoon(props) {
    return (
        <Container id={props.name.toLowerCase()}>
            <Typography variant='h5'>{props.name} Coming Soon</Typography>
        </Container>
    )
}