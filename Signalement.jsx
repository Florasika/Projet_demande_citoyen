import React from 'react';
import '../Signalement_citoyen/Signalement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Signalement = () => {
    return(
        <div>
            <div className="header">
                <h1 className='text'>Signalement</h1>
            </div>


            <div className="container">
                
                <div className="input">
                    <span>Nom de l'incident</span>
                    <input type="text" />
                </div>

                <div className="input">
                    <span>Proposition de résolution de l'incident</span>
                    <input type="text"className='text2' />
                </div>

                <div className="input">
                    <span>Détails supplémentaires</span>
                    <input type="text" />
                </div>
                <div className="click">
                    <button type="button" className='save'>Enregistrer</button>
                </div>

            </div>

            <div className="cloche">
                    <FontAwesomeIcon icon={faBell} />
                    <circle className="badge1">1</circle>
            </div>

        </div>
    )
}

export default Signalement;