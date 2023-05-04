import { Typography, Container } from "@mui/material";
import Image from "mui-image";

export default function Merch() {

    const merch = [
        {
            img: 'https://pyxis.nymag.com/v1/imgs/8f2/9c4/c95d85e1b7750cee91df7a7d5db3e355a9-13-black-tshirt-jcrew.2x.h473.w710.jpg',
            name: 'Shirt',
            price: '20'
        },
        {
            img: 'https://pyxis.nymag.com/v1/imgs/8f2/9c4/c95d85e1b7750cee91df7a7d5db3e355a9-13-black-tshirt-jcrew.2x.h473.w710.jpg',
            name: 'Shirt',
            price: '20'
        },
        {
            img: 'https://pyxis.nymag.com/v1/imgs/8f2/9c4/c95d85e1b7750cee91df7a7d5db3e355a9-13-black-tshirt-jcrew.2x.h473.w710.jpg',
            name: 'Shirt',
            price: '20'
        },
        {
            img: 'https://pyxis.nymag.com/v1/imgs/8f2/9c4/c95d85e1b7750cee91df7a7d5db3e355a9-13-black-tshirt-jcrew.2x.h473.w710.jpg',
            name: 'Shirt',
            price: '20'
        }
    ]

    return (
        <Container id="merch">
            <Typography variant="h4">Merch</Typography>
            <Container sx={{display: 'flex', flexWrap: 'wrap', gap: '50px'}}>
            {merch.map((m) => (
                <Container sx={{width: '300px'}}>
                    <Image src={m.img} width="300px" />
                    <Typography>{m.name}</Typography>
                    <Typography>${m.price}</Typography>
                </Container>
            ))}
            </Container>
        </Container>
    )
}