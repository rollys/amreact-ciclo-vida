import React, { Component } from 'react'

class FaseMontaje extends Component {
  constructor() {
    super()
    console.log('---> constructor')
    // debugger
    this.state = {
      title: 'Título inicial',
      count: 0,
      bpi: {},
    }
  }

  handleClick = () => {
    this.setState({
      title: 'Cambiando el título',
    })
  }

  UNSAFE_componentWillMount() {
    // debugger
    console.log('---> componentWillMount')
    this.setState({
      title: 'Título cambiado desde componentWillMount',
    })

    this.setState(state => {
      return { count: state.count + 1 }
    })
    this.setState(state => {
      return { count: state.count + 1 }
    })
    this.setState(state => {
      return { count: state.count + 1 }
    })
  }

  componentDidMount() {
    // debugger
    console.log('---> componentDidMount')
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(r => {
        return r.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          bpi: data.bpi,
        })
      })
  }

  render() {
    // debugger
    console.log('---> render')
    const currencyList = Object.keys(this.state.bpi)
    console.log(currencyList)
    return (
      <div>
        <h2>Fase Montaje</h2>
        <h3>{this.state.title}</h3>
        <h4>contador: {this.state.count}</h4>
        <button onClick={this.handleClick}>Cambiar título</button>
        <div>
          {currencyList.map(item => {
            return (
              <p key={item}>
                {item}: {this.state.bpi[item].rate}{' '}
              </p>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FaseMontaje
