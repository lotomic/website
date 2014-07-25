<html> 
<head></head> 
<body> 
  
<?php 
//funkcija za spajanje na MySQL 
if (!$spoj=@mySQL_connect("localhost", "root", "")) { 
die ("<b> Došlo je do pogreške! </b>"); 
} 
  
//funkcija za odabir baze 
if (!mySQL_select_db("baza", $spoj)) { 
die ("<b>Došlo je do pogreške pri spajanje na bazu! </b>"); 
} 
  
?> 
</body> 
</html>