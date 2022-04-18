import Contador from "./Contador/Contador"

const Hello = ({ name, age }) => {
  //La desestructuración facilita aún más la definición de variables auxiliares como los valores que paso a la funcion.
//no es necesario debajo pasarle props porque la funcion ya las toma
  const bornYear = () =>  new Date().getFullYear()- age
  

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

const Greetings = () => {
  const nimi = 'Pekka'
  const ika = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Contador/>
    </div>
  )
}
export default Greetings