import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Atomegenerale from './Atomegenerale';
import Detailelement from './Detailelement';
import Presentationfamille from './Presentationfamille';


const Tableaugeneral = (props) => {
    var tableauserie = props.tabserie;
    
    const[dataatome, setDataatome] = useState([]);
    const[toutcouleur, setToucouleur] = useState(0);
    const[recu, setRecu] = useState(0);
    const[couleur, setCouleur] = useState(0);
    const[seriechange, setSeriechange] = useState(0);
    const[nbrelementserie, setNbrelementserie] = useState();
    const[listeatome, setListeatome] = useState([]);
    
    const clickdetail = (pararecu) => {
            setRecu(pararecu);
            setSeriechange(0);
            setToucouleur(0);
            let recherchecouleur = tableauserie.find(x => x.idserie === pararecu.serie);
            let indexrch = tableauserie.indexOf(recherchecouleur);
            let couleurtransmise = tableauserie[indexrch].couleur;
        setCouleur(couleurtransmise);
        setNbrelementserie();
        setListeatome([]);
        };
    
    const clickserie = (serierecu) => {
        setSeriechange(serierecu);
        setListeatome(dataatome.filter(x => x.serie === serierecu.idserie));
        setNbrelementserie(dataatome.filter(x => x.serie === serierecu.idserie).length+' éléments chimiques');
        setRecu(0);
        setCouleur('');
        setToucouleur(0);
        
        };    
    const affichenoirblanc = () => {
        setSeriechange(0);
        setRecu(0);
        setCouleur('');
        setToucouleur(0);
        setNbrelementserie();
        setListeatome([]);

    }
    const affichecouleur = () => {
        setSeriechange(0);
        setRecu(0);
        setCouleur('');
        setToucouleur(1);
        setNbrelementserie();
        setListeatome([]);
        
    }

    useEffect(() => {
        axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_classification_generale.php/dataatome/')
        .then((response) => setDataatome(response.data)
        );
        
        }, []);    
    return (
        
        <div className='tableaugeneral' id='letableau'>

            

            <div className='listefamille'>
            <h3>ELEMENTS CHIMIQUES PAR FAMILLE</h3>
            <hr></hr>
               
            {tableauserie.map((serie) => (
                    <div onClick={() => clickserie(serie)} style={{ backgroundColor: seriechange.idserie === serie.idserie ? seriechange.couleur : "white",marginTop:'12px',}}>
                        <div style={{backgroundColor: recu.serie === serie.idserie ? couleur : ""}}>
                           <div key={serie.id} style={{backgroundColor: toutcouleur === 1 ? serie.couleur : ""}} >{serie.affiche}</div> 
                        </div>
                    </div>

                ))}
             
            
            </div>
            <div className='btnNoirBlanc' onClick={affichenoirblanc}>
                NOIR/BLANC
            </div>
            <div className='btnCouleur' onClick={affichecouleur}>
                COULEUR
            </div>
            <h1>TABLEAU PERIODIQUE DES ELEMENTS</h1>

            <br></br>
            <div id='atome-liste'>
            
                <div>
                      
                {dataatome.map((atome) =>
                         (
   
                    <div key={atome.id} onClick={() => clickdetail(atome)}><Atomegenerale atome={atome} couleur={couleur} idclick={recu.id} serieclick={seriechange.idserie} seriecouleur={seriechange.couleur} ttcoul={toutcouleur} /></div>
                ))}
                </div>
                <Detailelement recup={recu} couleur={couleur} />
                <Presentationfamille recup={seriechange} nombre={nbrelementserie} 
                liste={listeatome} />
            </div> 
              
        </div>
    );
};

export default Tableaugeneral;