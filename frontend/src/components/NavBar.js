import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

function NavBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const pages = [
    {
        name: 'Music',
        url: 'music'
    },
    {
        name: 'About',
        url: 'about'
    },
    {
        name: 'Merch',
        url: 'merch'
    },
    {
        name: 'Contact',
        url: 'contact'
    }
  ]

  return (
    <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Nosey Neighbor
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={page.url} underline='none' color='inherit'>
                        {page.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem key='socials' onClick={handleCloseNavMenu}>
                    <FacebookIcon /><TwitterIcon /><InstagramIcon />
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Nosy Neighbor
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 'auto', mx: 1, color: 'white', display: 'block' }}
                  href={page.url}
                >
                  {page.name}
                </Button>
              ))}
              <Container sx={{flexGrow: 5}}></Container>
              <Button key='facebook' onClick={handleCloseNavMenu} sx={{ my: 'auto', color: 'white', display: 'block'}}>
                    <FacebookIcon />
              </Button>
              <Button key='twitter' onClick={handleCloseNavMenu} sx={{ my: 'auto', color: 'white', display: 'block'}}>
                    <TwitterIcon />
              </Button>
              <Button key='instagram' onClick={handleCloseNavMenu} sx={{ my: 'auto', color: 'white', display: 'block'}}>
                    <InstagramIcon />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default NavBar