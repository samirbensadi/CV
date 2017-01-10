<?php

try 
{ 
	//on se connecte à la base de donnée MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=Contact;charset=utf8','root','coda');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
	die('Erreur :' . $e->getMessage());
}

//si tout va bien, on peut continuer
?>