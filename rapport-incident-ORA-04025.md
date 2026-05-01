# Rapport d'incident : ORA-04025

## 1. Contexte
Le log `catalina.out` contient une erreur récurrente lors de l'accès à la base Oracle.
Cette erreur survient pendant la phase de validation ou d'établissement d'une connexion JDBC.

## 2. Erreur identifiée
- Code Oracle : `ORA-04025`
- Message : `le nombre maximal de verrous d'objet de bibliothèque autorisé a été alloué pour select 1 from dual`

## 3. Localisation exacte de l'incident
L'analyse des logs montre que l'erreur se produit dans les composants suivants :

- `connection.ConnectionBDD` dans la méthode `getConnection`
- `connection.EnvoiMail` dans la méthode `senddMail` (alerte de l'erreur)

Ces éléments indiquent que la panne se situe dans la couche de connexion Oracle/JDBC du service backend Java.

## 4. Interprétation technique
- `select 1 from dual` est une requête de validation de connexion Oracle.
- L'erreur `ORA-04025` indique que la base Oracle a atteint la limite de verrous de bibliothèque autorisés.
- Cela correspond typiquement à une saturation du cache de curseurs ou à une fuite de ressources JDBC.

## 5. Causes probables
1. Connexions Oracle ouvertes et non fermées correctement.
2. Statements / ResultSet non fermés après exécution.
3. Pool de connexions mal configuré ou trop de connexions simultanées.
4. Paramétrage Oracle (`OPEN_CURSORS`, `SHARED_POOL_SIZE`, `SESSION_CACHED_CURSORS`, etc.) insuffisant pour la charge.

## 6. Impact observé
- Échec de récupération de connexion via JDBC.
- Blocage potentiel des fonctionnalités reliant l'application à Oracle.
- Envoi massif d'alertes/mail fatals (`EnvoiMail`) indiquant la répétition de l'erreur.

## 7. Conclusion pour le DSI
Le problème n'est pas dans le code de l'application front-end/Nest.js de ce workspace.
Il s'agit d'un incident dans le service Java backend qui utilise Oracle.
La panne se manifeste précisément au niveau de la gestion de connexions Oracle :
`connection.ConnectionBDD.getConnection` ne peut pas valider la connexion à cause de l'épuisement des verrous de bibliothèque Oracle.

## 8. Recommandations immédiates
1. Vérifier le code Java de `connection.ConnectionBDD` pour s'assurer que toutes les connexions, statements et resultsets sont fermés.
2. Vérifier la configuration du pool JDBC (taille du pool, validation de connexion, timeouts).
3. Inspecter les paramètres Oracle liés au cache partagé et aux curseurs.
4. Si nécessaire, redémarrer le service backend Java pour libérer les ressources Oracle.
5. Mettre en place une surveillance du nombre de verrous de bibliothèque et des curseurs ouverts.

---

*Document généré à partir de l'analyse du log `catalina.out` du 14/04/2026.*
