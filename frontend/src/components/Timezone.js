import React, { Component } from "react";

class Timezone extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    const timezone = data
   
    return (
      <div>
          Fuseau horaire utilisé : <br/>{timezone}
      </div>
    )
  }
}

export default Timezone;
