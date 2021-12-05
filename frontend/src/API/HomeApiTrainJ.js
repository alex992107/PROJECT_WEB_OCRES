import React from "react";
import HomeTrainJ from "../components/HomeTrainJ";
import axios from "axios";

//API Train J Poissy - St Laz

//Url
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AJ/stop_points/stop_point%3ASNCF%3A87386573%3ARapidTransit/terminus_schedules?";

class HomeApiTrainJ extends React.Component {
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
          const {date_times} = data.terminus_schedules[0];
          // Recupere la propriété terminus_schedules[0], terminus St-Laz
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
      if (nextProps.Nvlkey !== this.props.Nvlkey) {
      // Ici on verifie que la mise à jour concerne bien le champ de la clé
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
                return <HomeTrainJ key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default HomeApiTrainJ;