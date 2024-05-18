<!DOCTYPE html>
<html>
<head>
  <title>Kayıt Bilgileri</title>
  <link rel = "stylesheet"  href = "stiller/iletisimPHP.css" />
</head>
<body>
  <div class="container">
    <?php
      $a = "Bilgiler alındı...";
      echo "<h2>Hoşgeldiniz, $a</h2>";

      $email = $_GET["email"];
      $pwd = $_GET["pwd"];
      $sehir = $_GET["sehir"];
      $takim = $_GET["takim"];
      $cinsiyet = $_GET["cinsiyet"];
      $renk = $_GET["renk"];

      echo "<p><strong>Öğrenci Numaranız:</strong> $email</p>";
      echo "<p><strong>Şifreniz:</strong> $pwd</p>";
      echo "<p><strong>Şehriniz:</strong> $sehir</p>";
      echo "<p><strong>Tuttuğunuz Takım:</strong> $takim</p>";
      echo "<p><strong>Cinsiyetiniz:</strong> $cinsiyet</p>";
      echo "<p><strong>En sevdiğiniz renk:</strong> $renk</p>";

      echo "<h3>Giriş Başarılı $email</h3>";
    ?>
  </div>
</body>
</html>
