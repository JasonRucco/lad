<?php
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
  $email_from = $email;

  // 4. Compose the email message
  $body = "Name: $name\n\nEmail: $email\n\nPhone: $phone\n\nCar Model: $carModel\n\nLocation: $location\n\nMessage:\n$message";

  $headers = "From: $email_from\r\n";
  $headers .= "Reply-To: $email\r\n";

  // 5.  Attempt to send the email (CONFIGURE SMTP - THIS IS JUST A PLACEHOLDER)
  // IMPORTANT:  You'll need to configure your PHP installation to use an SMTP server.
  // This usually involves editing the php.ini file.
  // The following is a VERY BASIC example and might not work without proper SMTP setup.

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Thank you! Your message has been sent.";
  } else {
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't send your message.";
  }

} else {
  // Not a POST request, return a error
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
?>
