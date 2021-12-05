//Imports
import React from "react";
import CreationDate from "../components/CreationDate";
import axios from "axios";

//Url et la clef 
const URL = "https://api.sncf.com/v1/coverage/sncf/?"

class CreationDateApi extends React.Component {
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
      const {dataset_created_at} = data.regions[0]
      const liste =[dataset_created_at]           
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
          {liste.map((ListeData, index) => {
            return <CreationDate key={index} data={ListeData} />;
          })}
      </div>
    );
  }
    }
    
export default CreationDateApi;