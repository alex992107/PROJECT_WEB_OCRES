import React, { Component } from "react";

class DateKey extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence jusqu'a la branche stop_date_time et on sélectionne departure_date_time
    const end_production_date = data
    const year = end_production_date.slice(0,4)
    const month = end_production_date.slice(4,6)
    const day = end_production_date.slice(6,8)
   
    return (
      <div>
          La clé prendra fin le : <br/>{day}/{month}/{year}
      </div>
    )
  }
}

export default DateKey;
