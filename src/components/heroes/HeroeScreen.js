import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({history}) => {
    const {heroeId} =  useParams();
    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if(!heroe){
        return <Redirect to="/" />
    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    const handleReturn = ()=>{
        if(history.length<=2){
            history.push('/');
        }else{
            history.goBack();
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${id}.jpg`} 
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    alt={superhero} />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p><b>Alter Ego:</b> {alter_ego}</p>
                        <p><b>Publisher:</b> {publisher}</p>
                        <p><b>First Appearence:</b> {first_appearance}</p>
                    </li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
