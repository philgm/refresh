<?php
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);


//test pour les notes ////////////////

$requetee="SELECT `note` FROM retro_note_utilisateur ORDER BY id DESC LIMIT 0, 1";
$resultmark = mysql_query($requetee) or die ("Query error: " . mysql_error());
$mark = array();

$row = mysql_fetch_assoc($resultmark);
	$mark[] = $row;
	
	echo $_GET['jsoncallback'] . '(' . json_encode($mark) . ');';


		//dynamique


//$requetee="select id,note from retro_note_utilisateur";
	//	$result=mysql_query($requetee,$connexion);
		//while($row=mysql_fetch_array($result)){
		//echo "<option value=".$row['id'].">".$row['note']."</option>";
		//}
		//dynamique
		
//		SELECT COUNT(*), AVG(note) FROM retro_note_utilisateur






mysql_close($con);
?>