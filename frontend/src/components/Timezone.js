import React, { Component } from "react";

class Timezone extends Component {
  render() {
    //On récupère les données de l'API
    const { data } = this.props;
    if (!data) return null;

    //On parcoure l'arborescence et on sélectionne timezone 

    const timezone = data
   
    return (
      <div>
          Fuseau horaire utilisé : <br/>{timezone}
          {//On affiche le fuseau horaire 
          }
      </div>
    )
  }
}

export default Timezone;
