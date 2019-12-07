import React, { Component } from 'react'

class ErrorComponent extends Component {
  state = {
    error: false,
  }

  render() {
    if (this.state.error) {
      throw new Error('Error generado desde el botón')
    }
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ error: true })
          }}>
          Generar Error
        </button>
      </div>
    )
  }
}

class FaseError extends Component {
  state = {
    tieneError: false,
    msgError: '',
  }

  componentDidCatch(error, infoError) {
    console.log('---> componentDidCatch')
    console.log(error, infoError)
    this.setState({
      tieneError: true,
      msgError: error.toString(),
    })
  }

  render() {
    if (this.state.tieneError) {
      return (
        <>
          <div>El mensaje de error: {this.state.msgError}</div>
          <button
            onClick={() => {
              this.setState({
                tieneError: false,
              })
            }}>
            Volver
          </button>
        </>
      )
    }
    return (
      <div>
        <ErrorComponent />
      </div>
    )
  }
}

export default FaseError
