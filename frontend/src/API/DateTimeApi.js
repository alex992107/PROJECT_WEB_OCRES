//Imports
import React from "react";
import DateTime from "../components/DateTime";
import axios from "axios";

//API affichage de l'heure 

//Url 
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/?";

class DateTimeApi extends React.Component {
   //On initialise le constructeur 
   constructor(props) {
    super(props);
    this.state = {
      liste: null
    };
  }
  //Call API
  callAPI = Nvlkey => {
    axios
    .get(`${URL}key=${Nvlkey}`)
    .then(({ data }) => {
      const {current_datetime} = data.context
      // Recupere la propriété data.context
      const liste =[current_datetime]
      // On met la valeur current_datetime dans une liste pour utiliser le même template pour toutes les API
      this.setState({ liste });
    })
    .catch(console.error);
   };
  
  // Lance un appel au lancement du component
  componentDidMount(){
    const {Nvlkey} = this.props;
    this.callAPI(Nvlkey);
     };

  // A chaque update relance l'api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champ de la clé
    if (nextProps.Nvlkey !== this.props.Nvlkey) {
    this.callAPI(nextProps.Nvlkey);
    }
  }

  render() {
    const { liste } = this.state;
    if (!liste) return <p>Loading...</p>;
    return (
      <div>
          {/* On envoie les données de la liste de départ*/}
          {liste.map((ListeData, index) => {
            return <DateTime key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default DateTimeApi;