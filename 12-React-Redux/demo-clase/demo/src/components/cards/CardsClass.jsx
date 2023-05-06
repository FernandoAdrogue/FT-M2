import React from "react";
import Card from '../card/Card'
import { connect } from "react-redux";
import getCharacters from "../../redux/actions";


class CardClass extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

componentDidMount(){
}
render () {
        console.log(this.props.characters);
        return (
            <div>
                <h1>Card Class</h1>
                <div>
                    {this.props.characters.map(character => { 
                        return <Card id={character.id} name={character.name} key={character.id}/>
                    })}
                </div>
            </div>
        )
    }
}

//Las lineas a cuntinuacion son para la Suscripcion del componente al estado global
//Es solo se utiliza en los smart component para pasar los estados a los componentes representacionales
const mapStateToProps = (state) => {
    return {
        characters: state.characters, //pasa un elemento del estado global a un prop del conpanente
    }
}

const mapDispatchToProps = (dispath)=> {
    return {
        getCharacters: ()=>{dispath(getCharacters())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardClass)//El connet se encarga de pasar el estado global a las props