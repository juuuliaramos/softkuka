import Routes from './routes'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Routes />
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
