import './style.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SetData from '../../components/setData/setData'
import Footer from '../../components/footer'
import IconBack from '../../components/utils/arrow-back.svg'

const HomePage = () => {
  const [person, setPerson] = useState([])
  const [index, setIndex] = useState(0)

  const getFigure = () => {
    axios('https://swapi.dev/api/people/').then((response) => {
      setPerson(response.data.results)
    })
  }

  const setFigure = (num) => {
    setIndex(num)
    console.log(index)
  }

  useEffect(() => {
    getFigure()
  }, [])

  const backButton = () => {
    window.location.assign('/')
  }

  return (
    <div id="externaHome">
      <button id="back-btt" onClick={backButton}>
        <img id="img-back" src={IconBack} />
        Get back
      </button>
      <div id="divButtons">
        <button className="buttons" onClick={() => setFigure(0)}>
          Luke Skywalker
        </button>
        <button className="buttons" onClick={() => setFigure(5)}>
          Owen Lars
        </button>
        <button className="buttons" onClick={() => setFigure(3)}>
          Darth Vader
        </button>
        <button className="buttons" onClick={() => setFigure(4)}>
          Leia Organa
        </button>
        <button className="buttons" onClick={() => setFigure(8)}>
          Biggs Darklighter
        </button>
      </div>

      {person.length > 0 ? (
        <div id="data">
          <SetData personagens={person} index={index} />
        </div>
      ) : (
        <span>... Carregando ...</span>
      )}
      <Footer />
    </div>
  )
}

export default HomePage
