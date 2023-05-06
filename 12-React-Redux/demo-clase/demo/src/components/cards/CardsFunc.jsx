import Card from '../card/Card'
import { useSelector } from 'react-redux'

const CardsFunc = (props)=>{

    const characters = useSelector((state)=> state.characters) //suscripcion del componente al estado global

    return(
        <div>
            <h1>Cards Funcional</h1>
            <div>
                {characters.map(character => { 
                        return <Card id={character.id} name={character.name} key={character.id}/>
                    })}
                </div>
        </div>
    )
}

export default CardsFunc