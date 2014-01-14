<?php
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);


//SI BEUG COMMENTER CE CODE :
$requete="SELECT COUNT(*), ROUND(AVG(note),0) AS avgnote FROM retro_note_utilisateur";
$resultavgmark = mysql_query($requete) or die ("Query error: " . mysql_error());
$avgmark = array();

$row = mysql_fetch_assoc($resultavgmark);
$avgmark[] = $row;
	
echo $_GET['jsoncallback'] . '(' . json_encode($avgmark) . ');';


mysql_close($con);
?>