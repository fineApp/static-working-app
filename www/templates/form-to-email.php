<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$reason = $_POST['reason'];
$hiddenName = $_POST['hiddenName'];
$projectName = $_POST['projectName'];
$fineOwnerName = $_POST['fineOwnerName'];
$todaydate = $_POST['todaydate'];
$message = $_POST['message'];
$hiddenEmail = $_POST['hiddenEmail'];

//Validate first


$email_from = 'srawal@sapient.com';//<== update the email address
$email_subject = "Your fine";
$email_body = "Your Current Project: $projectName .\n $hiddenName Your fine:$message/-.\n Reason is:'$reason'.\n Date:	$todaydate .\n Please contact to Fine owner $fineOwnerName if any query";

 
    
$to = $hiddenEmail;//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 