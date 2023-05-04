import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {
  return (
    <Container
      id='footer'
      sx={{
        padding: '10px',
        mt: '10px',
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <List sx={{display: 'flex'}}>
        <ListItem><Typography variant='h6' noWrap>
          <Link href='/' underline='none' color='inherit'>Nosey Neighbor</Link>
        </Typography></ListItem>
        <ListItem><Link href='/music' sx={{color: 'white'}}>Music</Link></ListItem>
        <ListItem><Link href='/about' sx={{color: 'white'}}>About</Link></ListItem>
        <ListItem><Link href='/shows' sx={{color: 'white'}}>Shows</Link></ListItem>
        <ListItem><Link href='/book' sx={{color: 'white'}}>Merch</Link></ListItem>
        <ListItem><Link href='/contact' sx={{color: 'white'}}>Contact</Link></ListItem>
        <ListItem><Link href='/sitemap' sx={{color: 'white'}}>Sitemap</Link></ListItem>
        <ListItem><FacebookIcon /><TwitterIcon /><InstagramIcon /></ListItem>
        </List>
      <Typography align='center'>© {new Date().getFullYear()} Nosey Neighbor</Typography>
    </Container>
  )
}

export default Footer