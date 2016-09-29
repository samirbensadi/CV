$(document).ready(function(){

	$("aside").hide(); //cache toutes les aside de base
	$(" .corps ul").hide();//cache le contenu liste des aside

	$("#btnInfo").click(function(){ //on défini la fonction du bouton info
		$("aside").toggle("slow"); //chaque aside apparait sans son contenu

	});
//on défini la fonction du click sur chaque titre de aside
	$("#formation").click(function(){
		$(".corps #formation ul").slideToggle("fast");
	})

	$("#competences").click(function(){
		$(".corps #competences ul").slideToggle("fast");
	})

	$("#experience_pro").click(function(){
		$(".corps #experience_pro ul").slideToggle("fast");
	})

	$("#divers").click(function(){
		$(".corps #divers ul").slideToggle("fast");
	})




























});