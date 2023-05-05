import { Typography, Container, Button } from "@mui/material"
import { Image } from 'mui-image'

export default function UpcomingShows() {

    const newsArticles = [
        {
            name: 'Live at The Milestone',
            date: 'Thursday, May 11, 2023 8PM',
            img: require('../assets/milestone051123.JPG'),
            content: "Come see us live at The Milestone, opening for Totally Slow with SHEHEHE and Faye",
            link: "https://www.freshtix.com/events/totallyslow"
        },
        {
            name: 'Live at The Milestone',
            date: 'Friday, May 19, 2023 8PM',
            img: require('../assets/milestone051923.JPG'),
            content: "Come see us live at The Milestone, opening for The Not Likelys with Problems and The Menders",
            link: "https://www.freshtix.com/events/thenotlikelys"
        },
        {
            name: "Live at The Purple Buffalo",
            date: 'Monday, August 21, 2023 8PM',
            img: require('../assets/'),
            content: 'Come see us live at The Purple Buffalo, opening for Burn Absolute, The Pinedrape, and Garotte'
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
                            {article.link && <Button 
                                variant='contained'
                                href={article.link} 
                                target="_blank" 
                                color='secondary'
                                sx={{mt: '20px'}}
                            >Get Tickets</Button>}
                        </Container>
                    </Container>
                </Container>
            ))}
        </Container>
    )
}