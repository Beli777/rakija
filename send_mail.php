<html>
 <head>
  <title>PHP Test</title>
 </head>
 <body>
  <?php
  use PHPMailer\PHPMailer\PHPMailer;
  require 'PHPMailer.php';
  require 'SMTP.php';
  require 'Exception.php';

  $mail = new PHPMailer;

  $mail->From = "test@markova-destilerija.com";
  $mail->FromName = "Markova Rakija";
  $mail->addAddress($_POST["address"]);

  $mail->Subject = $_POST["subject"];
  $mail->Body = $_POST["body"];

  if(!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
    echo "Mail je uspešno poslat";
  }

  ?>
 </body>
</html>
