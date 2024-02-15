
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

export default Presentationfamille;