<!DOCTYPE html>
<html>
<head>
  <title>Giriş Başarılı</title>
   <link rel="stylesheet" href="stiller/login.css">
</head>
<body>
  <div class="container">
    <?php
      if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];

        if ($email == "sekvan.durak@ogr.sakarya.edu.tr" && $pwd == "123456") {
          echo "<h2>Başarıyla giriş yapıldı!</h2>";
          echo "<p>Hoşgeldin, $email</p>";
        } else {
          header("Location: login.html?error=1");
          exit;
        }
      }
    ?>
  </div>
</body>
</html>
