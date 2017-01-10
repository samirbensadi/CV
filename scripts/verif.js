function surligne(champ, erreur)
{
	if(erreur)
		champ.style.backgroundColor = "red";
	else
		champ.style.backgroundColor = "";
}

function verifNom(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifObjet(champ)
{
	if(champ.value.length < 2 || champ.value.length > 100)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMessage(champ)
{
	if(champ.value.length < 2 || champ.value.length > 500)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f) 
{
	var nomOK = verifNom(f.nom);
    var mailOK = verifMail(f.email);
    var objetOK = verifObjet(f.objet);
    var messageOK = verifMessage(f.message);

    if(nomOK && mailOK && objetOK && messageOK)
        return true;
    else
    {
        alert("Veuillez remplir correctement le formulaire")
        return false;
    }
}