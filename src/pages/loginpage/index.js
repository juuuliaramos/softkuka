import styled from 'styled-components'
import Inputlogin from '../../components/inputlogin'
import { motion } from 'framer-motion'

const LoginPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
      <Container>
        <Image src="https://www.veinerd.com/image/cache/catalog/camisetas/starwars-1-estampa-590x620.jpg" />
        <Inputlogin />
      </Container>
    </motion.div>
  )
}

export default LoginPage

/* Estilização */
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    margin: 0;
  }
`

export const Image = styled.img`
  width: 35%;
  height: 60%;

  @media screen and (max-width: 764px) {
    width: 90%;
    height: 100%;
  }
`
