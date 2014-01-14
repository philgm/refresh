<?php

$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);

//on enregistre les données en POST
$recherche = mysql_real_escape_string($_GET["recherche"]);
//$recherche = $_GET["recherche"];

if(isset($_GET['recherche']) && $_GET['recherche'] != NULL) // on vérifie d'abord l'existence du POST et aussi si la requete n'est pas vide.
{

$recherche = htmlspecialchars($_GET['recherche']); // on crée une variable $requete pour faciliter l'écriture de la requête SQL, mais aussi pour empêcher les éventuels malins qui utiliseraient du PHP ou du JS, avec la fonction htmlspecialchars().



//requête avec du GET : on sélectionne
$query = mysql_query("SELECT id, prenom, nom FROM retro_personnage WHERE prenom LIKE '%fr%' OR nom LIKE '%fr%' ORDER BY prenom") or die (mysql_error()); // la requête, que vous devez maintenant comprendre ;)
$nb_resultats = mysql_num_rows($query); // on utilise la fonction mysql_num_rows pour compter les résultats pour vérifier par après
if($nb_resultats != 0) // si le nombre de résultats est supérieur à 0, on continue
{
	// maintenant, on va afficher les résultats et la page qui les donne ainsi que leur nombre, avec un peu de code HTML pour faciliter la tâche.

	$findperso = array();
	// on fait un while pour afficher la liste des fonctions trouvées, ainsi que l'id qui permettra de faire le lien vers la page de la fonction

	$row = mysql_fetch_assoc($query);
	$findperso[] = $row;
	
	echo $_GET['jsoncallback'] . '(' . json_encode($findperso) . ');';
	
}

mysql_close($con);


?>