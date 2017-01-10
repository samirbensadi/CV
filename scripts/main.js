$(document).ready(function(){

	$("aside").hide(); //cache toutes les aside de base
	$(" .corps ul").hide();//cache le contenu liste des aside
	$("form").hide();//cache le formulaire de contact





	$("#btnInfo").click(function(){ //on défini la fonction du bouton info
		$("aside").toggle("slow"); //chaque aside apparait sans son contenu


	});



//on défini la fonction du click sur chaque titre de aside
	$("#btnFormation").click(function(){
		$(".corps #formation ul").slideToggle("fast");

	})

	$("#btnComp").click(function(){
		$(".corps #competences ul").slideToggle("fast");
		$()

	})

	$("#btnExp").click(function(){
		$(".corps #experience_pro ul").slideToggle("fast");
	})

	$("#btnDivers").click(function(){
		$(".corps #divers ul").slideToggle("fast");
	})

	$("#btnContact").click(function(){
		$("form").slideToggle("fast");
	})




























});