import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo,setZoo] = React.useState({
    zooName:'',
    animals:[],
    species:[],
    allAnimals:[],
  })

  React.useEffect(()=>{
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleInputChange = e => {
    const {value} = e.target
    setZoo({
      ...zoo,
      zooName:value,
    })
  }

  const handleSpecies = e => {
    const {value} = e.target
    const filtered = zoo.allAnimals.filter((animal)=>animal.specie === value )
    setZoo({
        ...zoo,
        animals:filtered,
      })
  }

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals:zoo.allAnimals
    })
  }


  return (
    <div>
      <label>Zoo Name:</label>
      <input type="text" value={zoo.zooName} onChange={handleInputChange}/>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
