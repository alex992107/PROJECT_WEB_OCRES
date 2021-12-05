//Imports
import React from "react";
import HomeRerA from "../components/HomeRerA";
import axios from "axios";
 
//API RER A Poissy - Etoile
 
 //Url
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/stop_areas/stop_area%3ASNCF%3A87386573/departures?";

class HomeApiRerA extends React.Component {
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
          console.log(data)      
          const { departures } = data;
          // Recupere la propriété departures
          const liste = [departures[0], departures[1], departures[2], departures[3], departures[4],departures[5]];
          // On prend les valeurs des 6 prochains départs dans la liste
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
                return <HomeRerA key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default HomeApiRerA;