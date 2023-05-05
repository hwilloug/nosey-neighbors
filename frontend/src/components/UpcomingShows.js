import { Typography, Container, Button } from "@mui/material"
import { Image } from 'mui-image'

export default function UpcomingShows() {

    const newsArticles = [
        {
            name: 'Live at The Milestone',
            date: 'Thursday, May 11, 2023 8PM',
            img: require('../assets/milestone051123.JPG'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.",
            link: "https://www.freshtix.com/events/thenotlikelys"
        },
        {
            name: 'Live at The Milestone',
            date: 'Friday, May 19, 2023 8PM',
            img: require('../assets/milestone051923.JPG'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.",
            link: "https://www.freshtix.com/events/thenotlikelys"
        }
    ]

    return (
        <Container sx={{my: '100px'}} id="shows">
            <Typography variant='h4'>Upcoming Shows</Typography>
            {newsArticles.map((article) => (
                <Container sx={{my: '50px'}}>
                    <Typography variant='h5'>{article.name}</Typography>
                    <Typography>{article.date}</Typography>
                    <Container sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Image src={article.img} />
                        <Container>
                            <Typography>{article.content}</Typography>
                            <Button 
                                variant='contained'
                                href={article.link} 
                                target="_blank" 
                                color='secondary'
                                sx={{mt: '20px'}}
                            >Get Tickets</Button>
                        </Container>
                    </Container>
                </Container>
            ))}
        </Container>
    )
}