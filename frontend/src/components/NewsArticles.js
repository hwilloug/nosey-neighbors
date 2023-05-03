import { Typography, Container, Button } from "@mui/material"
import { Image } from 'mui-image'

function NewsArticles() {

    const newsArticles = [
        {
            name: 'Lorem Ipsum Dolor Dit Amet',
            date: 'Friday, May 19, 2023 8PM',
            img: 'https://www.freshtix.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1WkRGaVkyWXlZaTFoT0RWa0xUUXdaVEl0T1RrME1DMWxPVEkzTjJJd056VmtORFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--cc893f19d04bdd6b5a0bc0d60390f2b6fd7388c5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2hwQWxnQ2FRS1FBWHNIT2d4bmNtRjJhWFI1U1NJS2JtOXlkR2dHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lBQmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--50c4bfdd32afd4feceaa03a3a175bd67c3151245/TheMilestoneClub.3400signYellowOnDarkGreen.jpg',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.",
            link: "https://www.freshtix.com/events/thenotlikelys"
        },
        {
            name: 'Lorem Ipsum Dolor Dit Amet',
            date: 'Saturday, April 8, 7PM',
            img: "https://theroostergastonia.com/wp-content/uploads/2023/04/4-8-23-Below-7.png",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.",
            link: "https://theroostergastonia.ticketleap.com/below-7/"
        }
    ]

    return (
        <Container sx={{my: '100px'}}>
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

export default NewsArticles