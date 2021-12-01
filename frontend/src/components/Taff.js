import React, { Component } from "react";

class Taff extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    console.log(data.date_time);
    const date_time = data.date_time ;
    const heure = date_time.slice(9,11);
    const min = date_time.slice(11,13);
    const sec = date_time.slice(13,15);
    return (
      <div>
        <h4>{heure}:{min}:{sec}</h4>
        <br/>
      </div>
    );
  }
}

export default Taff;
