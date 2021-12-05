import React, { Component } from "react";

class DateTime extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    const current_datetime = data
    const heure = current_datetime.slice(9,11)
    const min = current_datetime.slice(11,13)
    const sec = current_datetime.slice(13,15)
    return (
      <div>
          Heure utilisé : <br/>{heure}:{min}:{sec}
      </div>
    )
  }
}

export default DateTime;
