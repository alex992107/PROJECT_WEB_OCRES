import React, { Component } from "react";

class CreationDate extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence et on sélectionne dataset_created_at
    const dataset_created_at = data
    const year = dataset_created_at.slice(0,4)
    const month = dataset_created_at.slice(4,6)
    const day = dataset_created_at.slice(6,8)
    //On sépare la chaine de caractère en 3 strings, jour, mois et année avant de les afficher
   
    return (
      <div>
          Les données ont été créées le : <br/>{day}/{month}/{year}
      </div>
    )
  }
}

export default CreationDate;
