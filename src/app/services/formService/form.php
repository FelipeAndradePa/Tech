<?php

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $name = $data->name;
    $company = $data->company;
    $email = $data->email;
    $subject = $data->subject;
    $help = $data->help;

    $connect = mysqli_connect(,'alexandre','2#a8X3uU?#'); 
    $db = mysqli_select_db($connect, 'techline');

    $insert = "INSERT INTO chamados (name,company,email,assunto,help) VALUES ('$name', '$company', '$email', '$subject', '$help')";
    $insertQuery = mysqli_query($connect, $insert);
    
    //configura e envia o email

    $dest = "suporte@techlinetelecom.com.br";

    $body = "Você recebeu uma mensagem através do Sistema de Chamados"."\n\n";
    $body = $body." nome: ".$name."\n";
    $body = $body." empresa: ".$company."\n";
    $body = $body." assunto: ".$subject."\n";
    $body = $body." conteúdo da mensagem: ".$help."\n\n";

    $header = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
    $header = $header."From: $email"."\r\n";

    mail($dest, $subject, $body, $header);
?>