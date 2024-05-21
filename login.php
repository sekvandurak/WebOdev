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
          header("Location: index.html"); // Redirect to the index page
          exit;
        } else {
          header("Location: login.html?error=1"); // Redirect back to login with error
          exit;
        }
      }
    ?>
  </div>
</body>
</html>
