import React from 'react';
import '../Communication/Communication.css';


const Chat = () => {
    return(
        <div className='communication'>
            <span>Communication</span>
                <h1>Agent</h1>
                <h2>Equipes municipales</h2>
            <div className="tape">
                <input type="text" placeholder='chat'/>
            </div>


            <div className="tape1">
                <input type="text" placeholder='reponse'/>
            </div>

            <div className='ligne-vertical'></div>
            <button type='button' className='B'>Enregistrer</button>
        </div>
    )
}

export default Chat;