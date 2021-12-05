//Imports
import React from "react";
import API from "../components/API";
import axios from "axios";

//API affichage de l'heure 

//Url 
const URL = "http://localhost:5000/users/";

class MyApi extends React.Component {
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
    .get(`${URL}`)
    .then(({ data }) => {
        console.log(data);
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
            return <API key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default MyApi;