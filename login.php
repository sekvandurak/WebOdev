<!DOCTYPE html>
<html>
<body>



<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    if ($email == "sekvan.durak@ogr.sakarya.edu.tr" && $pwd == "b231210373")
     {
        echo "Başarıyla giriş yapıldı!..Hoşgeldin ".$email;
    } 
    else {
		
		header("Location: loginn.html?error=1");
		exit;
	}
   
}
?>



</body>
</html>