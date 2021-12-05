//Imports
import React from "react";
import DateKey from "../components/DateKey";
import axios from "axios";

//Url et la clef 
const URL= "https://api.sncf.com/v1/coverage/sncf/?";

class DateKeyApi extends React.Component {
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
      const {end_production_date} = data.regions[0]
      const liste =[end_production_date]          
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
            return <DateKey key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default DateKeyApi;