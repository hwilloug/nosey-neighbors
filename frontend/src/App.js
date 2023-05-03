import './App.css';
import { Container } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Image } from 'mui-image'

function App() {
  return (
    <div className="App">
      <main>
        <ParallaxProvider>
          <Parallax style={{background: 'black'}} speed={-10}>
            <Image src="https://i.ytimg.com/vi/23pYfDKyfBk/maxresdefault.jpg" />
          </Parallax>
          <Parallax style={{background: 'black'}} speed={5}>
            <Container style={{display: 'flex', justifyContent: 'space-between'}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum.s</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam. Facilisis volutpat est velit egestas dui id. Vestibulum morbi blandit cursus risus at ultrices. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Cursus mattis molestie a iaculis at. Vel pretium lectus quam id leo in. Dignissim convallis aenean et tortor at risus viverra adipiscing. Erat nam at lectus urna duis convallis. Rutrum tellus pellentesque eu tincidunt. Augue neque gravida in fermentum et sollicitudin. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Nulla aliquet enim tortor at auctor urna. Malesuada bibendum arcu vitae elementum.</p>
            </Container>
          </Parallax>
        </ParallaxProvider>
      </main>
    </div>
  );
}

export default App;
