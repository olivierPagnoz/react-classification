import Tableaugeneral from './Tableaugeneral';



const Classification = () => {
    var tableauserie = [
        { idserie: 'alcalin', couleur:'#FFC0BA', affiche:'ALCALINS'},
        { idserie: 'alcalino', couleur:'#FEFFAC', affiche:'ALCALINO-TERREUX'},
        { idserie: 'transition', couleur:'#cfe2f3', affiche:'TRANSITION'},
        { idserie: 'nonmetal', couleur:'#C1F894', affiche:' NON METAUX'},
        { idserie: 'metalloide', couleur:'#BDD5D9', affiche:'METALLOIDES'},
        { idserie: 'gaznoble', couleur:'#f9cb9c', affiche:'GAZ NOBLES'},
        { idserie: 'metalpauvre', couleur:'#FFD1E3', affiche:'METAUX PAUVRES'},
        { idserie: 'lanthanide', couleur:'#d2a5d2', affiche:'LANTHANIDES'},
        { idserie: 'actinide', couleur:'#DADADA', affiche:'ACTINIDES'},
        { idserie: 'inconnu', couleur:'#ea9999', affiche:'INCONNU'},
    ];
 
    return (
        <div className='classification'>
           
            <div className="containerclassification">
                <Tableaugeneral tabserie={tableauserie} />
           </div>
           <hr></hr>
        </div>
    );
};

export default Classification;