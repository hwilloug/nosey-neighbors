import { Button, Container, Typography } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { Image } from 'mui-image'
import YoutubeEmbed from '../components/YoutubeEmbed'

function LandingPage() {

    const newsArticles = [
        {
            name: 'Lorem Ipsum Dolor Dit Amet',
            img: 'https://www.freshtix.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs1WkRGaVkyWXlZaTFoT0RWa0xUUXdaVEl0T1RrME1DMWxPVEkzTjJJd056VmtORFlHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--cc893f19d04bdd6b5a0bc0d60390f2b6fd7388c5/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2hwQWxnQ2FRS1FBWHNIT2d4bmNtRjJhWFI1U1NJS2JtOXlkR2dHT3daVU9nOWlZV05yWjNKdmRXNWtTU0lBQmpzR1ZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--50c4bfdd32afd4feceaa03a3a175bd67c3151245/TheMilestoneClub.3400signYellowOnDarkGreen.jpg',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam."
        }
    ]

    return (
    <>
        <Container sx={{display: 'flex', gap: '10px'}}>
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/11/10/13/guns-n-roses.jpg?width=640&auto=webp&quality=50&crop=1500%3A1005%2Csmart" />
            <Image src="https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg" />
            <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/09/29/12/the-ramones-live.jpg?width=640&auto=webp&quality=50&crop=1247%3A831%2Csmart" />

        </Container>
        <Container sx={{border: '1px solid darkgrey', p: '20px', m: '20px'}} align='center'>
            <Typography variant='h4' sx={{m: '20px'}}>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Typography>
            <Button color='secondary' variant='contained'>Sign Up</Button>
        </Container>
        <Container align='center'>
            <YoutubeEmbed embedId='q2I0ulTZWXA' />
        </Container>
        <Container sx={{
            display: 'flex', 
            justifyContent: 'space-between',
            gap: '20px',
            alignItems: 'center'
        }}>
            <Parallax speed={10} style={{flexShrink: 0}}>
                <Image src='https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/04/03/11/nirbvanaband0304a.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart' />
            </Parallax>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
        </Container>
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            alignItems: 'center'
        }}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
            <Parallax speed={10} style={{flexShrink: 0}}>
                <Image src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/04/07/10/aerosmith0704.jpg?width=640&auto=webp&quality=50&crop=1500%3A1000%2Csmart" />
            </Parallax>
        </Container>
        <Container sx={{padding: '20px'}}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam.</Typography>
        </Container>
        <Container>
            <Typography variant='h4'>News</Typography>
            {newsArticles.map((article) => (
                <Container>
                    <Typography variant='h5'>{article.name}</Typography>
                    <Container sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <Image src={article.img} />
                        <Typography>{article.content}</Typography>
                    </Container>
                </Container>
            ))}
        </Container>
      </>
    )
}

export default LandingPage