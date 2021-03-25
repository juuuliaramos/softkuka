import Routes from './routes'
import styled from 'styled-components'
import Footer from './components/footer'

function App() {
  return (
    <Container>
      <Routes />
      <Footer />
    </Container>
  )
}

export default App

// Estilização da home page
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`
