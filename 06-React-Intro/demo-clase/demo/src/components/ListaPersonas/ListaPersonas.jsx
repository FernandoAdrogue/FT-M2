//Componente funcional
import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem";
// import PersonaItemClass from "../PersonaItem/PersonaItemClass";
const ListaPersonas = ({listaPersonas}) => {
  return (
    <div>
        {listaPersonas.map(persona => {
          return <PersonaItem name={persona.name} age={persona.age} />
        })}
    </div>
  )
}

export default ListaPersonas