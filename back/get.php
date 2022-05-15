<?php
header("Access-Control-Allow-Origin: *");

$datos = file_get_contents("https://www.fishwatch.gov/api/species");

/* echo $datos; */
    echo $datos;
?>
