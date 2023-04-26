import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {animals} = this.props
    return (<div>{
      animals.map(({name, specie, image},index) => (
      <div key={index}>
        <h5>{name}</h5>
        <img src={image} alt={name} width="300px"/><br />
        <span>{specie}</span>
      </div>)
      )}
    </div>
  )
  }
}
