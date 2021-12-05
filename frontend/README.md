Projet DashBoard SNCF LARNAUDIE et CONSTANTIN

Ce projet a pour but d'afficher les horaires des 6 prochains trains :
-départ Poissy, direction Marne-la-Vallée ou Boissy, arrêt CDG-Etoile (RER A)
-départ CDG-Etoile, direction Poissy (RER A)
-départ Poissy, direction Paris Saint-Lazare (Ligne J)
-départ Paris Saint-Lazare, direction Mantes-la-Jolie, arrêt Poissy (Ligne J)

## Organisation de la page

1- Ecran fixe <br/>
2- Barre de navigation <br/>
2- Contenu de la page <br/>
3- Side barre <br/>
3- Zone pour afficher des données <br/>
4- Colonne 80% de la zone <br/>
5- Titre <br/>
5- Data API <br/>
4- Colonne 20% de la zone <br/>
5- Bloc 50% en hauteur de la colonne <br/>
6- Titre <br/>
6- Graphique ou swap clé API <br/>
5- Bloc 50% en hauteur de la colonne <br/>
6- Titre <br/>
6- API MongoDB ou Incidents <br/>

Notre barre de navigation superieur est un composant bootstrap qui est seulement graphique, nous avons choisis d'utiliser une side barre pour la navigation entre nos pages.
Notre side barre est un composant react.

Nous avons choisis d'utiliser la librairie MUI pour nos logos pour sa simplicité.

La documentation de l'API est disponible sur : http://doc.navitia.io/#getting-started et grâce au playground : http://canaltp.github.io/navitia-playground/play.html?request=https%3A%2F%2Fapi.sncf.com%2Fv1%2Fcoverage%2Fsncf%2F%3F&token=841d6f9d-c2de-4b6c-8a4d-047b0c8816a7
Ce site nous permet de tester les requettes API (comme sur Postman) mais avec des fonctionnalités supplementaires très utiles pour créer nos requettes.

## Lancer le projet

Dans le terminal :<br/>
cd .\frontend\
npm start

Sur votre navigateur :
http://localhost:3000/ ou http://192.168.1.54:3000/

Pour la partie Backend:<br/>
cd.\backend\
npm start

Sur votre navigateur:
http://localhost:5000/ ou http://127.0.0.1:5000
pensez à activé l'extension chrome mode développeur

## Bugs et problèmes et décisions

Toutes les clés API ont la même date de fin d'utilisation, cette date se met à jour à 00h01 (heure serveur) et s'incrémente.
Leur MAJ sur le frontend du dashboard s'effectue mais les data ne change pas car elles sont similaires. Cependant, dans l'outil de dev, une erreur apparaît si la clé ne fonctionne pas.

Nous avons choisis de ne pas utiliser bootstrap pour l'arrengement de notre interface car le css natif dispose des mêmes fonctionnalités que bootstrap 5.
Par manque de connaissance nous avons quand même importé la totalité de la librairie bootstrap mais nous ne l'utilisons que pour notre barre supérieur.
Bootstrap est une librairie lourde qui n'est pas forcément utile quand son utilisation peut être remplacer par le css natif.

Relflexion de l'interface sur Figma :
https://www.figma.com/file/3sWKzwr1VT9i5OcA12Hg7N/Web-Dashboard?node-id=0%3A1
Inspiration d'un dashboard existant mais nous n'avons finalement repris (l'idée graphique et pas le code) que la side bar

Pas d'utilisation de Trello, nous avons essayé de fonctionner en gestion Agile comme étudié en cours.
Début de travaille 1 mois avant le rendu, réunion sprint ts les 3 jours max + tous les jours 1 semaine et demi avant le rendu
Boucle scrum en fonction des capacités et des dispo du binôme sur les différents points :<br/>
1er semaine : Création des blocs en CSS pour le binôme <br/>
2nd semaine : Création des routes et de la side bar pour Clément, responsive - mediaquerry pour Alexandre <br/>
3ème semaine : Création des requêtes API et début des widgets pour Clément, création backend MongoDB et express<br/>
4ème semaine : Finalisation des widgets, création du widget changement de clé et du graphique pour Clément, finilisation du backend pour Alexandre
