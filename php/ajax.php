<?php
require_once('bdd.php');
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
// header('Content-Type: application/json');

// $name = json_decode($_POST['name']);
$sql = 'SELECT * FROM arts_martiaux WHERE prenom_nom LIKE ?';
$query = $db->prepare($sql);
$search = "%" . $_POST["name"]  . "%";
$query->execute(array($search));
$result = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($result);

// Retourne les valeurs en JSON
echo(json_encode($result));


