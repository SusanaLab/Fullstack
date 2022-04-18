import Contador from "./Ejercicios/Contador/Contador"
import Greetings from "./Ejercicios/Grettings"
import Estados from "./Ejercicios/Estados/Estados"
import Click from "./Ejercicios/Estados/Click"
import LLamada from "./Ejercicios/Evento/LLmada "
import Evento from "./Ejercicios/Evento/Evento"
import Controladores from "./Ejercicios/Evento/Controladores"

const App = () => {


  return (
    <div>
    <Greetings/>
      <Contador/>
     <Estados/>
     <Click/>
    <Evento/>
    <LLamada/>
    <Controladores/>
    </div>
  )
}
export default App