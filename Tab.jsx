import React from "react";
import '../Tab_agent/Tab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faSearch} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";


const Tab=() => {
    return (
        <div className="tabs">
            <span>Tableau de bord</span>
                <h1 className="over">Demande</h1>
            <div className="search">
              <input className="recherche" type="text" placeholder="Recherche | Domaine..." />
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </div>

            <div className="table1">
                <table>
                    <thead>
                    <tr>
                        <th>Lieu</th>
                        <th>Domaine</th>
                        <th>Type</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Exemple de lieu</td>
                        <td>Exemple de domaine</td>
                        <td>Exemple de type</td>

                        <td>
                            <div className="light green-light">
                                
                            </div>
                            <div className="light yellow-light">
                                
                            </div>
                            <div className="light red-light">
                                
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <h1 className="incident">Incident</h1>
            <div className="tables">
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Localisation</th>
                        <th>Categorie</th>
                        <th>Status</th>
                    
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Exemple de Nom</td>
                        <td>Exemple de proposition</td>
                        <td>Exemple de categorie</td>
                        <td>
                            <div className="light green-light">
                                
                            </div>
                            <div className="light yellow-light">
                                
                            </div>
                            <div className="light red-light">
                                
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <FontAwesomeIcon className="arrow" icon={faArrowLeftLong} />
            <div>
                    <button type="button" className="gerer">Gérer</button>
                    <button type="button" className="actu">Actualiser</button>
            </div>

            <div className="color">
                <div className="light green-light"><h1>Résolus</h1></div>
                <div className="light yellow-light"><h1>En cours</h1></div>
                <div className="light red-light"><h1>En attente</h1></div>
            </div>

            <h2><FontAwesomeIcon icon={faSquare} type="checkbox" value="checked"/> Filtrer (outils de filtrages)</h2>

        </div>
    )
}

export default Tab;