<?php

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $login = $data->user;
    $senha = $data->password;

    //$connect = mysqli_connect('root@localhost','root','@lg@r@!1');
    //$db = mysqli_select_db($connect, 'techline');
    $connect = mysqli_connect('mysql08.redehost.com.br:3306','alexandre','2#a8X3uU?#');
    $db = mysqli_select_db($connect, 'techline');


    $verifica = mysqli_query( $connect, "SELECT * FROM login WHERE login = '$login' AND senha = '$senha'");
      
    if (mysqli_num_rows($verifica) <= 0) {

        $ret = 0;
        echo $ret; 
    }  
    else {
        $ret = 1;
        echo $ret;
    }
?>