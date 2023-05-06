import { useEffect } from 'react'
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import getCharacters from '../../redux/actions' // es la action para obtener los characters

const CardsFunc = (props)=>{

    const characters = useSelector((state)=> state.characters) //suscripcion del componente al estado global

    const dispatch = useDispatch() // le da al smart component la capacidad de hacer dispatch
    
    useEffect(()=> {
        dispatch(getCharacters())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) //!! siempre tiene que estar el array de dependencias

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