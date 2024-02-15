
import React, { useEffect, useState } from "react";

const Atomegenerale = (props) => {
    const { atome } = props;
    useEffect( () =>{
        var tableauserie = [
            { idserie: 'alcalin', couleur:'#FFC0BA'},
            { idserie: 'alcalino', couleur:'#FEFFAC'},
            { idserie: 'transition', couleur:'#cfe2f3'},
            { idserie: 'nonmetal', couleur:'#C1F894'},
            { idserie: 'metalloide', couleur:'#BDD5D9'},
            { idserie: 'gaznoble', couleur:'#f9cb9c'},
            { idserie: 'metalpauvre', couleur:'#FFD1E3'},
            { idserie: 'lanthanide', couleur:'#d2a5d2'},
            { idserie: 'actinide', couleur:'#DADADA'},
            { idserie: 'inconnu', couleur:'#ea9999'},
        ];
        let recherchecouleur = tableauserie.find(x => x.idserie === atome.serie);
        let indexrch = tableauserie.indexOf(recherchecouleur);
        let couleurtransmise = tableauserie[indexrch].couleur;
        setCouleurtransmisee(couleurtransmise);
    },[atome.serie]);

    const[couleurtransmise, setCouleurtransmisee] = useState(0);
    let color='white';
    
    if (props.ttcoul === 1 ){
        color=couleurtransmise;    
    }
   
    if (props.serieclick === atome.serie){
        color=props.seriecouleur;
    }
    if (props.idclick === atome.id){
        color=props.couleur;
    }
    return (
        <div className='atomegenerale' style={{marginTop:atome.ordonne*66, marginLeft:atome.absisse*60, backgroundColor:color}} >
            <div className={atome.serie} id={atome.nom_francais}  >
                
                <h3>{atome.id}</h3>
                <div className='symbole'>{atome.symbole}</div>
                <p>{atome.nom_francais}</p>
            
            </div>
        </div>
    );
};

export default Atomegenerale;