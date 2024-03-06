import React from 'react';
import '../Signalement_lieu/Lieu.css';
import Maps from '../Images/Maps.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Lieu = () => {
    return(
        <div>
            <div className="lieu">
              <img src={Maps} alt="Maps" /> {/* Use the imported image directly */}
              <FontAwesomeIcon icon={faLocationDot}className='map' />
                <div className="search-container">
                    <input className="search-input" type="text" placeholder="Recherche | Lieu..." />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>


            <div className="click">
                    <button type="button" className='cancel'><a href="/auth_citoyen">Appliquer</a></button>
                </div>
        </div>
    )
}

export default Lieu;
