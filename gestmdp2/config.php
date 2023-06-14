<?php
    try 
    {
        $bdd = new PDO('mysql:host=mysql-akoz.alwaysdata.net;dbname=akoz_a;charset=utf8','akoz_a','sosumidu13');
    }catch(Exception $e)
    {
        die('Erreur'.$e ->getMessage());
    }