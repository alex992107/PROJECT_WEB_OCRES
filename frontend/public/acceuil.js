function Banner() {
    const title = "SNCF"
      return (<h1>{title}</h1>)
    }
    
    function Cart() {
    const Paris= 8h30
    const Lyon = 10h20
    const Marseille = 15h10
    return (<div>
        <h2>Panier</h2>
        <ul>
        <li>Votre train pour Paris partira à : {Paris}</li>
         <li>Votre train pour Lyon partira à {Lyon}</li>
         <li>Votre train pour Marseille partira à {Marseille}</li>
        </ul>
          </div>)
    }
    ReactDOM.render(<div><Banner /><Cart /></div>, document.getElementById('root'))