import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { HashLink as Link } from 'react-router-hash-link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

function Footer() {

  const linkStyle = {
    color: 'white'
  }

  return (
    <Container
      id='footer'
      sx={{
        padding: '10px',
        mt: '10px',
        backgroundColor: 'black',
        color: 'white'
      }}
      maxWidth="100%"
    >
      <List sx={{display: 'flex'}}>
        <ListItem><Typography variant='h6' noWrap>
          <Link to='/' style={linkStyle}>Nosey Neighbor</Link>
        </Typography></ListItem>
        <ListItem><Link to='#music' style={linkStyle}>Music</Link></ListItem>
        <ListItem><Link to='#about' style={linkStyle}>About</Link></ListItem>
        <ListItem><Link to='#shows' style={linkStyle}>Shows</Link></ListItem>
        <ListItem><Link to='#book' style={linkStyle}>Merch</Link></ListItem>
        <ListItem><Link to='#contact' style={linkStyle}>Contact</Link></ListItem>
        <ListItem><Link to='#sitemap' style={linkStyle}>Sitemap</Link></ListItem>
        <ListItem><FacebookIcon /><InstagramIcon /></ListItem>
        </List>
      <Typography align='center'>© {new Date().getFullYear()} Nosey Neighbor</Typography>
    </Container>
  )
}

export default Footer