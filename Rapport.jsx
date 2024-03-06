import React from "react";
import '../Rapport/Rapport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Rapport = () => {
    return(
        <div className="div ">
            <h1>Rapports et analyses</h1>
            <div className="A">
                    <table>
                        <thead>
                        <tr>
                            <th>Types demandes/inscription</th>
                            <th>Délais de résolution</th>
                            <th>Performances des équipes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Exemple de demandes/inscription</td>
                            <td>Exemple de delais</td>
                            <td>Exemple de performances</td>

                            <td>  
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <FontAwesomeIcon className="flêche" icon={faArrowLeftLong} />
        </div>
    )
}

export default Rapport;