<!DOCTYPE html>
<html>
<head>
  <title>Giriş Başarılı</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f8f9fa;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
    }

    .container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center; /* Center text within the container */
    }

    h2 {
      color: #28a745; /* Green color for success */
      margin-bottom: 20px;
    }
  </style>
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
