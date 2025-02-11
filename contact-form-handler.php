<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure Composer's autoload file is included

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Define the log file path
$log_file = 'error_log.txt';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  file_put_contents($log_file, "Form submitted.\n", FILE_APPEND);

  // 1. Collect form data
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $phone = strip_tags(trim($_POST["phone"]));
  $carModel = strip_tags(trim($_POST["carModel"]));
  $location = strip_tags(trim($_POST["location"]));
  $message = strip_tags(trim($_POST["message"]));

  file_put_contents($log_file, "Form data collected.\n", FILE_APPEND);

  // 2. Validate form data (basic checks)
  if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    file_put_contents($log_file, "Validation failed. Name, message, or email is invalid.\n", FILE_APPEND);
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
      file_put_contents($log_file, "Attempting to send email.\n", FILE_APPEND);
      // Server settings
      $mail->isSMTP();
      $mail->Host       = 'smtp.ionos.com'; // Your SMTP server
      $mail->SMTPAuth   = true;
      $mail->Username   = 'xxxx@lovelaceautodetailing.com'; // Your SMTP username
      $mail->Password   = 'xxxx'; // Your SMTP password
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port       = 587; // SMTP port

      // Recipients
      $mail->setFrom('contact@lovelaceautodetailing.com', $name);
      $mail->addAddress($to);
      $mail->addReplyTo($email, $name);

      // Content
      $mail->isHTML(false);
      $mail->Subject = $subject;
      $mail->Body    = $body;

      $mail->send();
      file_put_contents($log_file, "Email sent successfully.\n", FILE_APPEND);
      http_response_code(200);
      echo "Thank you! Your message has been sent.";
  } catch (Exception $e) {
      file_put_contents($log_file, "Mailer Error: " . $mail->ErrorInfo . "\n", FILE_APPEND);
      http_response_code(500);
      echo "Oops! Something went wrong and we couldn't send your message. Mailer Error: {$mail->ErrorInfo}";
  }

} else {
  file_put_contents($log_file, "Invalid request method: " . $_SERVER["REQUEST_METHOD"] . "\n", FILE_APPEND);
  // Not a POST request, return an error
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
?>
