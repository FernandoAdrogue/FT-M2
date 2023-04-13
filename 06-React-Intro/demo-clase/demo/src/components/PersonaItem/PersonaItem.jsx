import React from "react";

const PersonaItem = ({name,age}) => {
    return (
        <div>
          <hr></hr>
          <p>Nombre: {name}</p>
          <p>Edad: {age}</p>
          <hr></hr>
        </div>
    )
}

export default PersonaItem
