//Imports
import React from "react";
import TaffRerA from "../components/TaffRerA";
import axios from "axios";

//API RER A Etoile - Poissy


//Url
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/stop_areas/stop_area%3ASNCF%3A87758003/terminus_schedules?";

class TaffApiRerA extends React.Component {
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
          const {date_times} = data.terminus_schedules[2];
          // Recupere la propriété terminus_schedules[2], direction Poissy
          const liste =[date_times[0],date_times[1],date_times[2],date_times[3],date_times[4],date_times[5]]
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
                return <TaffRerA key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default TaffApiRerA;