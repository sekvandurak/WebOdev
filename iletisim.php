<!DOCTYPE html>
<html>
<body>

<?php



$a="Bilgiler alındı...";
echo "bHoşgeldiniz , ".$a."<br><br>";

$email =$_GET["email"];
echo "Öğrenci Numaranız: ".$_GET["email"]."<br><br>";

$pwd =$_GET["pwd"];
echo "Şifreniz: ".$_GET["pwd"]."<br><br>";

$sehir =$_GET["sehir"];
echo "Şehriniz: ".$_GET["sehir"]."<br><br>";

$exampleRadios2 =$_GET["takim"];
echo "Tuttuğunuz Takım: ".$_GET["takim"]."<br><br>";


$exampleRadios1 =$_GET["cinsiyet"];
echo "Cinsiyetiniz: ".$_GET["cinsiyet"]."<br><br>";


$exampleRadios2 =$_GET["takim"];
echo "Tuttuğunuz Takım: ".$_GET["takim"]."<br><br>";


$renk =$_GET["renk"];
echo "En sevdiğiniz renk: ".$_GET["renk"]."<br><br>";


echo "Giriş Başarılı ".$email;



?>



</body>
</html>
