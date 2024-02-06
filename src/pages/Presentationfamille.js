
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

export default Presentationfamille;