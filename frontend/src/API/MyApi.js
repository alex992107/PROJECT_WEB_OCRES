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
  callAPI = Nvxnom => {
    axios
    .get(`${URL}`)
    .then(({ data }) => {
        console.log(Nvxnom);
      const {_id} = data[0]
      console.log(data)
      // Recupere la propriété data.context
      const liste =[_id]
      // On met la valeur current_datetime dans une liste pour utiliser le même template pour toutes les API
      this.setState({ liste });
    })
    .catch(console.error);
   };
  
  // Lance un appel au lancement du component
  componentDidMount(){
    const {Nvxnom} = this.props;
    this.callAPI(Nvxnom);
     };

  // A chaque update relance l'api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champ de la clé
    if (nextProps.Nvxnom !== this.props.Nvxnom) {
    this.callAPI(nextProps.Nvxnom);
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