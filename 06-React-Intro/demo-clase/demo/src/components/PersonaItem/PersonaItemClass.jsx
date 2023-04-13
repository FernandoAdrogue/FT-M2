import React from "react";

class PersonaItemClass extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <hr></hr>
              <p>Nombre: {this.props.name}</p>
              <p>Edad: {this.props.age}</p>
              <hr></hr>
            </div>
        );
    }
}

export default PersonaItemClass