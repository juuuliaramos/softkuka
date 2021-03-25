import styled from 'styled-components'
import { motion } from 'framer-motion'

const SetData = ({ personagens, index }) => {
  let personagem = personagens[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 4 }}
    >
      <Div>
        <h3>Dados do Personagem:</h3>
        <ul>
          <li> Name: {personagem.name}</li>
          <li> Birth Year: {personagem.birth_year}</li>
          <li> Eye Color: {personagem.eye_color}</li>
          <li> Height: {personagem.height}</li>
          <li> Gender: {personagem.gender}</li>
          <li> Hair Color: {personagem.hair_color}</li>
        </ul>
      </Div>
    </motion.div>
  )
}

export default SetData

/*  Estilização */
export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
