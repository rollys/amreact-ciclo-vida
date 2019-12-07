import React from 'react'
import './App.css'
// import FaseMontaje from './components/fase-montaje'
import FaseActualizacion from './components/fase-actualizacion'
// import FaseDesmontaje from './components/fase-desmontaje'
// import FaseError from './components/fase-error'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CICLOS DE VIDA EN REACT</h1>
        {/*<FaseMontaje />*/}
        <FaseActualizacion />
        {/*<FaseDesmontaje />*/}
        {/*<FaseError />*/}
      </header>
    </div>
  )
}

export default App
