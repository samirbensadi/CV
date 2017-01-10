<?php

$nom = $_POST['nom'];
$mail = $_POST['email'];
$objet = $_POST['objet'];
$message = $_POST['message'];

include ('bdd.php');  //inétgrer le fichier de connextion à la base de données.

//je déclare les variable qui contiendrons les saisies texte de l'utilisateur du formulaire.

//je rentre les données à rentrer dans la base de données.
$req = $bdd->prepare('INSERT INTO message(nom, email, objet, message) VALUES(:nom, :email, :objet, :message)');
$req->execute(array( //j'insert (ou j'execute les données dans les colones existantes)
	'nom' => $nom,
	'email' => $mail,
	'objet' => $objet,
	'message' => $message,
	));

//on récupère tout le contenu de la table message
$reponse = $bdd->query('SELECT * FROM message');

//on affiche chaque entrée une à une avec var_dump qui précise le nbr de string saisie
while ($donnees = $reponse->fetch())
{
	var_dump('vos données ont bien été insérée !');
	echo '<br>';
	var_dump($donnees['nom']);
	echo '<br>';
	var_dump($donnees['email']);
	echo '<br>';
	var_dump($donnees['objet']);
	echo '<br>';
	var_dump($donnees['message']);
}

$reponse->closeCursor(); //termine le traitement de la requête


?>