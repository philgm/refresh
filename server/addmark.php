<?php
$server = "mysql51-104.perso";
$username = "argosappsql";
$password = "ilest11h29";
$database = "argosappsql";

$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());

mysql_select_db($database, $con);


$note = mysql_real_escape_string($_POST["manote"]);

$sqlmark = "INSERT INTO retro_note_utilisateur (note) VALUES ('$note')";

if (!mysql_query($sqlmark, $con)) {
        die('Error: ' . mysql_error());
} else {
        echo "Note ajoutée";
}

mysql_close($con);
?>