<?php

if(isset($_POST['submit_btn']))
{
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $text = $name . "," . $phone . "," . $email. "\n";
  $fp = fopen('img/contactdata.txt', 'a+');

  if(fwrite($fp, $text))  {
    echo 'saved';

  }
  fclose ($fp);
}
?>
