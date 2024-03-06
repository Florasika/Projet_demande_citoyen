import React from 'react';
import './Citoyen.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEyeSlash, faPhone, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Citoyen = () => {
    return (
        <div className="citoyen-container">
            <div className="header">
                <h1>Authentification</h1>
            </div>
            <div className="inputs">
                <div className="input-group">
                    <label htmlFor="nom">Nom</label>
                    <input id="nom" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="prenom">Prénoms</label>
                    <input id="prenom" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" />
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Numéro</label>
                    <input id="phone" type="number"/>
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input id="password" type="password" />
                    <FontAwesomeIcon icon={faEyeSlash} className="icon" />
                </div>
                <div className="input-group">
                    <label htmlFor="role">Rôles</label>
                    <select id="role">
                        <option value="">Sélectionner un rôle</option>
                        <option value="role1">Citoyen</option>
                        <option value="role2">Agent</option>
                    </select>
                </div>
            </div>
            <div className="form-actions">
               <button type="button" className="incident-btn"><a href="/signalement_citoyen">Signaler un incident</a></button>
                <button type="button" className="demande-btn"><a href="./demande_citoyen">Faire une demande</a></button>
                <button type="submit" className="btn save-btn">Enregistrer</button>
                <button type="button" className="btn cancel-btn">Annuler</button>
            </div>
        </div>
    )
}

export default Citoyen;
