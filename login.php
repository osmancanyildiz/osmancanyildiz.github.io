<?php

session_start();
ob_start();


if(($_POST["user"]=="g231210060@sakarya.edu.tr") && ($_POST["pass"]=="g231210060"))
{

$_SESSION["login"] = "true";
$_SESSION["user"] = "g231210060@sakarya.edu.tr";
$_SESSION["pass"] = "g231210060";

echo 'Hoşgeldiniz "G231210060". Giriş başarılı bir şekilde gerçekleşti. Anasayfaya yönlendiriliyorsunuz. Lütfen bekleyin...';
header("Refresh:4; url=index.html");

}
else
{
echo "Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyiniz...";
header("Refresh: 3; url=login.html");
}


ob_end_flush();
?>

