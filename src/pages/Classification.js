import Tableaugeneral from './Tableaugeneral';



const Classification = () => {
    var tableauserie = [
        { id: '1', idserie: 'alcalin', couleur:'#FFC0BA', affiche:'ALCALINS'},
        { id: '2', idserie: 'alcalino', couleur:'#FEFFAC', affiche:'ALCALINO-TERREUX'},
        { id: '3', idserie: 'transition', couleur:'#cfe2f3', affiche:'TRANSITION'},
        { id: '4', idserie: 'nonmetal', couleur:'#C1F894', affiche:' NON METAUX'},
        { id: '5', idserie: 'metalloide', couleur:'#BDD5D9', affiche:'METALLOIDES'},
        { id: '6', idserie: 'gaznoble', couleur:'#f9cb9c', affiche:'GAZ NOBLES'},
        { id: '7', idserie: 'metalpauvre', couleur:'#FFD1E3', affiche:'METAUX PAUVRES'},
        { id: '8', idserie: 'lanthanide', couleur:'#d2a5d2', affiche:'LANTHANIDES'},
        { id: '9', idserie: 'actinide', couleur:'#DADADA', affiche:'ACTINIDES'},
        { id: '10', idserie: 'inconnu', couleur:'#ea9999', affiche:'INCONNU'},
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