//Imports
import React from "react";
import DateKey from "../components/DateKey";
import axios from "axios";

//Url
const URL= "https://api.sncf.com/v1/coverage/sncf/?";

class DateKeyApi extends React.Component {
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
      const {end_production_date} = data.regions[0]
      // Recupere la propriété data.regions[0]
      const liste =[end_production_date]    
      // On met la valeur end_production_date dans une liste pour utiliser le même template pour toutes les API      
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
            return <DateKey key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default DateKeyApi;