import React from 'react';

const Detailelement = (props) => {

    
   
    return (
        <div className='detailelement'style={{backgroundColor:props.couleur}}>
            <div id='masseatomique'>{props.recup.masse_atomique}</div>
            <div id='numeroatomique'>{props.recup.id}</div>
            <div id='symbole'>{props.recup.symbole}</div>
            <div id='lenom'>{props.recup.nom_francais}</div>
            <div id='laserie'>{props.recup.serie}</div>
            
        </div>
    );
};

export default Detailelement;