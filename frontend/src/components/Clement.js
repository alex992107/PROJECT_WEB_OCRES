import React, { Component } from "react";

class Clement extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    console.log("data", data);
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    const { departure_date_time } = data.stop_date_time;
    console.log(departure_date_time)
    return (
      //On affiche
      <div>
        {departure_date_time}
      </div>
    );
  }
}

export default Clement;
