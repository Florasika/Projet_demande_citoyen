import React from "react";
import '../Gestion_agent/Gestion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faPencilAlt , faBell, faCircleCheck } from "@fortawesome/free-solid-svg-icons";



const Gestion = () => {
    return (
        <div className="tableau">
            <h1 className="over1">Demande</h1>
            <h2><FontAwesomeIcon icon={faCircleCheck} />Voir tout</h2>
            <div className="table-cont">
                <table className="t1">
                    <thead>
                    <tr>
                        <th>Lieu</th>
                        <th>Domaine</th>
                        <th>Type</th>
                        <th className="icon-cell"><FontAwesomeIcon icon={faPencilAlt} /></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Exemple de lieu</td>
                        <td>Exemple de domaine</td>
                        <td>Exemple de type</td>
                        <td></td> {/* The edit icon is in the header, no need to repeat it here */}
                    </tr>
                    </tbody>
                </table>
            </div>


            <h1 className="incident1">Incident</h1>
            <div className="table2">
                <table className="t1">
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Proposition de résolution</th>
                        <th className="icon-cell"><FontAwesomeIcon icon={faPencilAlt} /></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Exemple de Nom</td>
                        <td>Exemple de proposition</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <FontAwesomeIcon className="arrow1" icon={faArrowLeftLong} />
            <div className="but">
                    <button type="button" className="commun">Communication</button>
                    <button type="button" className="tab-bord">Tableau de bord</button>
            </div>

            <div className="cloches">
                    <FontAwesomeIcon icon={faBell} />
                    <circle className="badge2">1</circle>
            </div>

        </div>
    )
}

export default Gestion