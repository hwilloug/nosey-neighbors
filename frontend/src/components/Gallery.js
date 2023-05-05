import { Container, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "mui-image";

export default function Gallery() {

    const images = [
        require('../assets/gallery/IMG_8622.JPG'),
        require('../assets/gallery/IMG_8623.JPG'),
        require('../assets/gallery/IMG_8624.JPG'),
        require('../assets/gallery/IMG_8625.JPG'),
        require('../assets/gallery/IMG_8626.JPG'),
        require('../assets/gallery/IMG_8627.JPG'),
        require('../assets/gallery/IMG_8628.JPG'),
        require('../assets/gallery/IMG_8629.JPG'),
        require('../assets/gallery/IMG_8630.JPG'),
        require('../assets/gallery/IMG_8631.JPG'),
        require('../assets/gallery/IMG_8632.JPG'),
        require('../assets/gallery/IMG_8633.JPG')
    ]

    return (
        <Container id="gallery">
            <Typography variant="h4">Gallery</Typography>
            <ImageList
                variant="masonry"
                gap={10}
                cols={2}
            >
                {images.map((img, i) => (
                    <ImageListItem key={i}>
                        <Image
                            src={img}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    )
}