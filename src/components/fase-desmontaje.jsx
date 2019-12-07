import React, { Component } from 'react'

class Ventana extends Component {
  state = {
    widthVentana: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeVentana)
  }

  resizeVentana = () => {
    console.log('resizeVentana')
    this.setState({
      widthVentana: document.body.clientWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeVentana)
  }

  render() {
    return <div>El tamanio de la ventana es {this.state.widthVentana}</div>
  }
}

class FaseDesmontaje extends Component {
  state = {
    desmontar: false,
  }
  render() {
    if (this.state.desmontar) {
      return <div>Componente desmontado!!!</div>
    }

    return (
      <div>
        <h2>Fase desmontaje</h2>
        <Ventana />
        <button
          onClick={() => {
            this.setState({
              desmontar: true,
            })
          }}>
          Desmontar
        </button>
      </div>
    )
  }
}

export default FaseDesmontaje
