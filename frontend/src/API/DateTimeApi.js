//Imports
import React from "react";
import DateTime from "../components/DateTime";
import axios from "axios";

//Url et la clef 
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/?";

class DateTimeApi extends React.Component {
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
      const {current_datetime} = data.context
      const liste =[current_datetime]          
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
            return <DateTime key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default DateTimeApi;