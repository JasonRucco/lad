<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure Composer's autoload file is included

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // 1. Collect form data
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $phone = strip_tags(trim($_POST["phone"]));
  $carModel = strip_tags(trim($_POST["carModel"]));
  $location = strip_tags(trim($_POST["location"]));
  $message = strip_tags(trim($_POST["message"]));

  // 2. Validate form data (basic checks)
  if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please complete the form and enter a valid email address.";
    exit;
  }

  // 3. Email details (FILL IN THESE DETAILS)
  $to = "contact@lovelaceautodetailing.com";
  $subject = "New Contact Form Submission";

  // 4. Compose the email message
  $body = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nCar Model: $carModel\n\nLocation: $location\n\nMessage:\n$message";

  // 5. Attempt to send the email using PHPMailer
  $mail = new PHPMailer(true);

  try {
      // Server settings
      $mail->isSMTP();
      $mail->Host       = 'smtp.yourserver.com'; // Your SMTP server
      $mail->SMTPAuth   = true;
      $mail->Username   = 'your_username'; // Your SMTP username
      $mail->Password   = 'your_password'; // Your SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port       = 587; // SMTP port

      // Recipients
      $mail->setFrom($email, $name);
      $mail->addAddress($to);

      // Content
      $mail->isHTML(false);
      $mail->Subject = $subject;
      $mail->Body    = $body;

      $mail->send();
      http_response_code(200);
      echo "Thank you! Your message has been sent.";
  } catch (Exception $e) {
      http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message. Mailer Error: {$mail->ErrorInfo}";
  }

} else {
  // Not a POST request, return an error
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
?>
