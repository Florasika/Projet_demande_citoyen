import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route}  from 'react-router-dom';
import '../src/Components/Citoyen_auth/Citoyen';
import Citoyen from '../src/Components/Citoyen_auth/Citoyen.jsx';
import Demande from '../src/Components/Demande_citoyen/Demande.jsx';
import Signalement from '../src/Components/Signalement_citoyen/Signalement.jsx';
import Lieu from '../src/Components/Signalement_lieu/Lieu.jsx';
import Gestion from '../src/Components/Gestion_agent/Gestion.jsx';
import Tab from '../src/Components/Tab_agent/Tab.jsx';
import Rapport from '../src/Components/Rapport/Rapport.jsx';
import Communication from '../src/Components/Communication/Communication.jsx';
import Admin from '../src/Components/Admin/Admin.jsx';
import Ajout from '../src/Components/Gestion_ajou/Ajout.jsx';
import React from 'react';


  function App() {
    return (
        /*role,
        handleChange,*/
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Citoyen/>}/>
            <Route path='/auth_citoyen' element={<Citoyen/>}/>
            <Route path='/demande_citoyen' element={<Demande/>}/>
            <Route path='/signalement_citoyen' element={<Signalement/>}/>
            <Route path='/localisation_signalement' element={<Lieu/>}/>
            <Route path='/gestion_agent' element={<Gestion/>}/>
            <Route path='/tab_agent' element={<Tab/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/rapport' element={<Rapport/>}/>
            <Route path='/communication' element={<Communication/>}/>
            <Route path='/gestion_ajout' element={<Ajout/>}/>



          </Routes>
        </BrowserRouter>
      </div>



);
}

export default App ;
