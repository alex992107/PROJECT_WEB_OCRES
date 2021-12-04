//Imports
import React from "react";
import '../global'
import HomeRerA from "../components/HomeRerA";
import axios from "axios";
 
 
 //Url et la clef 
const URL = "https://api.sncf.com/v1/coverage/sncf/lines/line%3ASNCF%3AA/stop_areas/stop_area%3ASNCF%3A87386573/departures?";
//const KEY = "841d6f9d-c2de-4b6c-8a4d-047b0c8816a7";

class HomeApiRerA extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          liste: null
        };
      }
      
      NewKEY = APIKEY => {
        axios
        .get(`${URL}key=${APIKEY}`)
        .then(({ data }) => {           
          const { departures } = data;
          const liste = [departures[0], departures[1], departures[2], departures[3], departures[4],departures[5]];
          this.setState({ liste });
        })
        .catch(console.error);
       };
      
      componentDidMount(){
        const {APIKEY} = this.props;
        this.NewKEY(APIKEY);
         };

      componentDidUpdate(nextProps) {
      if (nextProps.APIKEY !== this.props.APIKEY) {
        this.NewKEY(nextProps.APIKEY);
        }
      }
    
      render() {
        const { liste } = this.state;
        if (!liste) return <p>Loading...</p>;
        return (
          <div>
              {liste.map((ListeData, index) => {
                return <HomeRerA key={index} data={ListeData} />;
              })}
          </div>
        );
      }
    }
    
export default HomeApiRerA;