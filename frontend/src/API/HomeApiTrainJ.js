import React from "react";
import HomeTrainJ from "../components/HomeTrainJ";
import axios from "axios";

//Url et la clef 
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AJ/stop_points/stop_point%3ASNCF%3A87386573%3ARapidTransit/terminus_schedules?";

class HomeApiTrainJ extends React.Component {
    //On initialise le constructeur 
    constructor(props) {
        super(props);
        this.state = {
          liste: null
        };
      }

      callAPI = Nvlkey => {
        axios
        .get(`${URL}key=${Nvlkey}`)
        .then(({ data }) => {           
          const {date_times} = data.terminus_schedules[0];
          const liste =[date_times[0],date_times[1],date_times[2],date_times[3],date_times[4],date_times[5]]
          this.setState({ liste });
        })
        .catch(console.error);
       };
      
      componentDidMount(){
        const {Nvlkey} = this.props;
        this.callAPI(Nvlkey);
         };

      componentDidUpdate(nextProps) {
      if (nextProps.Nvlkey !== this.props.Nvlkey) {
        this.callAPI(nextProps.Nvlkey);
        }
      }
      
    
      
           
      render() {
        const { liste } = this.state;
        if (!liste) return <p>Loading...</p>;
        return (
          <div>
              {/* On envoie les données de chaque liste de départ a la classe Home */}
              {liste.map((ListeData, index) => {
                return <HomeTrainJ key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default HomeApiTrainJ;