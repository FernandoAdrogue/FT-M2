import React from "react"

class Card extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <span>Id: {this.props.id} </span><span>Nombre: {this.props.name}</span>
            </div>
        )
    }
}

export default Card
