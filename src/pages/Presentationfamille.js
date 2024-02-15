<<<<<<< HEAD

const Presentationfamille = (props) => {

    return (
        <div className='presentationfamille' >
            <div className="titrepresfamille" style={{backgroundColor:props.recup.couleur}}>
             {props.recup.affiche} {props.nombre} 
            </div>

            <div className="listeatomecolonne" style={{columnCount : props.recup.idserie === 'transition' ? '6' : '', fontSize : props.recup.idserie === 'transition' ? '14px' : ''}}>
           {props.liste.map((atome) =>
                         (
   
                    <div key={atome.id} >
                        <li>{atome.nom_francais}</li>
                    </div>
                ))}   
             
             </div>
        </div>
    );
};

=======

const Presentationfamille = (props) => {

    return (
        <div className='presentationfamille' >
            <div className="titrepresfamille" style={{backgroundColor:props.recup.couleur}}>
             {props.recup.affiche} {props.nombre} 
            </div>

            <div className="listeatomecolonne" style={{overflowX : props.recup.idserie === 'transition' ? 'scroll' : 'hidden'}}>
           {props.liste.map((atome) =>
                         (
   
                    <div key={atome.id} >
                        <li>{atome.nom_francais}</li>
                    </div>
                ))}   
             
             </div>
        </div>
    );
};

>>>>>>> 3584c84def0286cb40d5a56706833511535dbc8f
export default Presentationfamille;