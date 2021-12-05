Projet DashBoard SNCF LARNAUDIE et CONSTANTIN

Ce projet a pour but d'afficher les horaires des 6 prochains trains :
-départ Poissy, direction Marne-la-Vallée ou Boissy, arrêt CDG-Etoile (RER A)
-départ CDG-Etoile, direction Poissy (RER A)
-départ Poissy, direction Paris Saint-Lazare (Ligne J)
-départ Paris Saint-Lazare, direction Mantes-la-Jolie, arrêt Poissy (Ligne J)

## Organisation de la page

1- Ecran fixe
2- Barre de navigation
2- Contenu de la page
3- Side barre
3- Zone pour afficher des données
4- Colonne 80% de la zone
5- Titre
5- Data API
4- Colonne 20% de la zone
5- Bloc 50% en hauteur de la colonne
6- Titre
6- Graphique ou swap clé API
5- Bloc 50% en hauteur de la colonne
6- Titre
6- API MongoDB ou Incidents

Notre barre de navigation superieur est un composant bootstrap qui est seulement graphique, nous avons choisis d'utiliser une side barre pour la navigation entre nos pages.
Notre side barre est un composant react.

Nous avons choisis d'utiliser la librairie MUI pour nos logos pour sa simplicité.

La documentation de l'API est disponible sur : http://doc.navitia.io/#getting-started et grâce au playground : http://canaltp.github.io/navitia-playground/play.html?request=https%3A%2F%2Fapi.sncf.com%2Fv1%2Fcoverage%2Fsncf%2F%3F&token=841d6f9d-c2de-4b6c-8a4d-047b0c8816a7
Ce site nous permet de tester les requettes API (comme sur Postman) mais avec des fonctionnalités supplementaires très utiles pour créer nos requettes.

## Lancer le projet

Dans le terminal :
cd .\frontend\
npm start

Sur votre navigateur :
http://localhost:3000/ ou http://192.168.1.54:3000/

Pour la partie Backend:
cd.\backend\
npm start

sur votre navigateur:
http://localhost:5000/ ou http://127.0.0.1:5000
pensez à activé l'extension chrome mode développeur

## Bugs et problèmes et décisions

Toutes les clés API ont la même date de fin d'utilisation, cette date se met à jour à 00h01 (heure serveur) et s'incrémente.
Leur MAJ sur le frontend du dashboard s'effectue mais les data ne change pas car elles sont similaires. Cependant, dans l'outil de dev, une erreur apparaît si la clé ne fonctionne pas.

Nous avons choisis de ne pas utiliser bootstrap pour l'arrengement de notre interface car le css natif dispose des mêmes fonctionnalités que bootstrap 5.
Par manque de connaissance nous avons quand même importé la totalité de la librairie bootstrap mais nous ne l'utilisons que pour notre barre supérieur.
Bootstrap est une librairie lourde qui n'est pas forcément utile quand son utilisation peut être remplacer par le css natif.
