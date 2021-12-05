import React, { Component } from "react";

class DateKey extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence et on sélectionne end_production_date
    const end_production_date = data
    const year = end_production_date.slice(0,4)
    const month = end_production_date.slice(4,6)
    const day = end_production_date.slice(6,8)
    //On sépare la chaine de caractère en 3 strings, jour, mois et année avant de les afficher

   
    return (
      <div>
          La clé prendra fin le : <br/>{day}/{month}/{year}
      </div>
    )
  }
}

export default DateKey;
