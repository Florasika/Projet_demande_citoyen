import React from 'react';
import '../Gestion_ajou/Ajout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Ajout = () => {
    return (
        <div>
            
            <div className="gestion">
                            <select className='four'>
                                <option value="r1">Ressources1</option>
                                <option value="r2">Ressources2</option>
                            </select>

                            <select className='five'>
                                <option value="p1">Priorités1</option>
                                <option value="p2">Priorités2</option>
                            </select>
            </div>
            <span className='f1'>Ressources</span>
            <span className='f2'>Priorités</span>

            <button type="button" className='ajout'>Ajouter</button>

            <h1 className='g'>Gestion</h1>

        </div>
    )
}

export default Ajout;