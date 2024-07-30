import './App.css'
import { Desplegable } from './components/desplegable/Desplegable'
import { Header } from './components/header/Header'
import { Peticion } from './components/peticion/Peticion'

function App() {
  return (
    <>
      <div>
        <Header />
        <Desplegable></Desplegable>
        <Peticion />
      </div>
    </>
  )
}

export default App
