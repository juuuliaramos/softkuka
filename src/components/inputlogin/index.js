import './style.css'

const InputLogin = () => {
  const changePage = () => {
    window.location.assign('/homepage')
  }

  return (
    <div id="outside">
      <div id="whitebox">
        <input className="inputs" placeholder="e-mail"></input>
        <input className="inputs" placeholder="senha"></input>
        <button id="btt" onClick={changePage}>
          Get in
        </button>
      </div>
    </div>
  )
}
export default InputLogin
