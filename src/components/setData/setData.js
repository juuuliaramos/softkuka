const SetData = ({ personagens, index }) => {
  let personagem = personagens[index]

  return (
    <div>
      <h3>Dados do Personagem:</h3>
      <ul>
        <li> Name: {personagem.name}</li>
        <li> Birth Year: {personagem.birth_year}</li>
        <li> Eye Color: {personagem.eye_color}</li>
        <li> Height: {personagem.height}</li>
        <li> Gender: {personagem.gender}</li>
        <li> Hair Color: {personagem.hair_color}</li>
      </ul>
    </div>
  )
}

export default SetData
