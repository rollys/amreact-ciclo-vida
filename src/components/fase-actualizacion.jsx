import React, { Component } from 'react'
// import  { PureComponent } from 'react'

const IMAGE_ANIMAL = {
  panda: 'https://cutt.ly/pand4',
  gato: 'https://cutt.ly/gato',
  oveja: 'https://cutt.ly/oveja',
}

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageAnimal: IMAGE_ANIMAL[this.props.animal],
    }
  }

  /* UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('---> componentWillReceiveProps')
    console.log(this.props, nextProps)
    if (this.props.animal !== nextProps.animal) {
      console.log('Actualizó estado')
      this.setState({
        imageAnimal: IMAGE_ANIMAL[nextProps.animal],
      })
    }
  } */

  static getDerivedStateFromProps(props, state) {
    console.log('---> getDerivedStateFromProps')
    return {
      imageAnimal: IMAGE_ANIMAL[props.animal],
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('---> shouldComponentUpdate')
    return this.props.animal !== nextProps.animal
  }

  /*
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('---> componentWillUpdate')
    const img = document.querySelector('img')
    img.animate([{ filter: 'grayscale(30%)' }, { filter: 'grayscale(100%)' }], {
      duration: 1000,
    })
  }
  */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('---> getSnapshotBeforeUpdate')
    const img = document.querySelector('img')
    img.animate([{ filter: 'grayscale(30%)' }, { filter: 'grayscale(100%)' }], {
      duration: 1000,
    })
    return { border: '2px dashed red' }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('---> componentDidUpdate')
    console.log('Msg desde getSnapshotBeforeUpdate', snapshot)
    const img = document.querySelector('img')
    img.style.border = snapshot.border
  }

  render() {
    console.log('---> render')
    return (
      <div>
        <p>La images es: {this.props.animal}</p>
        <img
          style={{
            width: 250,
          }}
          src={this.state.imageAnimal}
          alt={this.props.animal}
        />
      </div>
    )
  }
}

class FaseActualizacion extends Component {
  state = {
    animal: 'panda',
  }
  render() {
    return (
      <div>
        <h2>Fase de actualización</h2>
        <div>
          <button onClick={() => this.setState({ animal: 'panda' })}>
            Panda
          </button>
          <button onClick={() => this.setState({ animal: 'gato' })}>
            Gato
          </button>
          <button onClick={() => this.setState({ animal: 'oveja' })}>
            Oveja
          </button>
        </div>
        <Image animal={this.state.animal} />
      </div>
    )
  }
}

export default FaseActualizacion
