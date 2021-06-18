<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail-> Charset = 'UTF-8';
$mail-> setlanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setForm('adm@' .$_SERVER['HTTP_HOST'], 'Строительство и отделка');
//Кому отправить
$mail->addAddress('79279091727@yandex.ru');
//Тема письма
$mail->Subject = 'Заявка с сайта';

//Тело письма
$body = '<h1>Заявка с сайта</h1>'

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['tel'].'</p>';
} 
    
//Отправляем
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$responce = ['message' => $message];

header('Content-type: application/json');
echo json_encode($responce);
?>