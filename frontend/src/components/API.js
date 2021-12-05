import React, { Component } from "react";

class API extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence et on sélectionne current_datetime
    const _id = data
    
    //On sépare la chaine de caractère en 3 strings, heure, min et sec avant de les afficher
    
    return (
      <div>
          UsersID <br/>{_id}
      </div>
    )
  }
}

export default API;
