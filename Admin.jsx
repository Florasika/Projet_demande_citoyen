import React from "react";
import '../Admin/Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Admin = () => {
    return (
        <div className="t2">
                <h1 className="sta">Statistiques</h1>
                <span>Rapport mensuels</span>

                <div className="T">
                    <table>
                        <thead>
                        <tr>
                            <th>Délais de résolution</th>
                            <th>Performance des équipes</th>
                            <th>Tendances</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Exemple de delais</td>
                            <td>Exemple de equipes</td>
                            <td>Exemple de tendances</td>

                            <td>  
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <button className="filtre" type="button">Filtrer</button>

                <div className="clicked">
                            <select className="one">
                                <option value="cat1">Categorie 1</option>
                                <option value="cat2">Categorie 2</option>
                            </select>
                            <select className="two">
                                <option value="temps1">Période de temps1</option>
                                <option value="temps2">Période de temps2</option>
                            </select>
                            <select className="three">
                                <option value="zone1">Zone géographique 1</option>
                                <option value="zone2">Zone géographique 2</option>
                            </select>
                    
                </div>  

        </div>
    )
}

export default Admin;