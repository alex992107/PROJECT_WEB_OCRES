import React, { Component } from "react";

class API extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence et on sélectionne current_datetime
    const current_datetime = data
    const heure = current_datetime.slice(9,11)
    const min = current_datetime.slice(11,13)
    const sec = current_datetime.slice(13,15)
    //On sépare la chaine de caractère en 3 strings, heure, min et sec avant de les afficher
    
    return (
      <div>
          Heure utilisé : <br/>{heure}:{min}:{sec}
      </div>
    )
  }
}

export default API;
