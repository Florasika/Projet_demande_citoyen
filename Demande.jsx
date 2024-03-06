import React from 'react';
import '../Demande_citoyen/Demande.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


const Demande = () => {
    return(
        <div>
            <div className="header">
                <h1 className='text'>Demande</h1>
            </div>


            <div className="container">
                
                <div className="input">
                            <span>Domaine de demande</span>
                            <input type="text" />
                </div>

                <div className="input">
                    <span>Type de la demande</span>
                    <input type="text" />
                </div>


                <button type="button" className='save'>Enregistrer</button>
            </div>

            <div className="cloche">
                    <FontAwesomeIcon icon={faBell} />
                    <circle className="badge">1</circle>
            </div>

            <div className="click">
                <button type="button" className="lieu"><a href="/localisation_signalement">Localisation</a></button>
            </div>
        </div>
    )
}

export default Demande;