<?php

session_start();
ob_start();


if(($_POST["user"]=="g231210060@sakarya.edu.tr") && ($_POST["pass"]=="g231210060"))
{

$_SESSION["login"] = "true";
$_SESSION["user"] = "g231210060@sakarya.edu.tr";
$_SESSION["pass"] = "g231210060";



echo '<h1>Hoşgeldiniz "g231210060". Giriş başarılı bir şekilde gerçekleşti. Anasayfaya yönlendiriliyorsunuz. Lütfen bekleyin...</h1><br>';
header("Refresh:4; url=../index.html");

}
else
{
echo "<h1>Kullanıcı adı veya şifre yanlış. Login sayfasına yönlendiriliyorsunuz. Lütfen tekrar deneyiniz...</h1>";
header("Refresh: 4; url=../login.html");
}


ob_end_flush();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>

    <style>

        body{
            background: rgb(0, 0, 0);
            padding-top: 6rem;
        }

        h1{
            margin-left: 5rem;
            margin-right: 3rem;
            font-size: 3vw;
            color: crimson;
        }
    </style>

</head>
<body>

</body>
</html>