import React, { Component } from "react";

class HomeTrainJ extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    const { departure_date_time } = data.stop_date_time;
    const heure = departure_date_time.slice(9,11);
    const min = departure_date_time.slice(11,13);
    const sec = departure_date_time.slice(13,15);
    return (
      <div>
        <h4>{heure}:{min}:{sec}</h4>
        <br/>
      </div>
    );
  }
}

export default HomeTrainJ;
