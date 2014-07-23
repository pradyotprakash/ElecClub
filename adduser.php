<?php
session_start();
if(!(isset($_POST["captcha"])&&$_POST["captcha"]!=""&&$_SESSION["code"]==$_POST["captcha"]))
{
	echo '
		<script>
		window.location.assign("login.php?x=2&name='.$_POST['signupname'].'&email='.$_POST['signupemailaddr'].'");
		</script>
		';
}
else
{
	$con = mysqli_connect($_SERVER['SERVER_ADDR'],'root','','BLOG');
	$emailaddr = $_POST['signupemailaddr'];
	$c = mysqli_fetch_array(mysqli_query($con,"SELECT COUNT(*) FROM Authenticate WHERE Email='$emailaddr'"))[0];
	if(!$c){
		$_SESSION['signupname'] = $_POST['signupname'];
		$_SESSION['signupemailaddr'] = $emailaddr;
		$_SESSION['signuppwd'] = $_POST['signuppwd'];
		$rand = rand(100000,999999);
		$authcode = substr(sha1($rand.$_POST['signupname'].$rand.$emailaddr.$rand.$_POST['signuppwd'].$rand),5,20);
		$db = "INSERT INTO AuthCode VALUES ('$authcode','$emailaddr')";
		mysqli_query($con,$db);
		$message = "Your unique code for the blog of Electronics Club, IITB is ".$authcode."\n";
		$message = wordwrap($message, 70);
    	mail($emailaddr,"Electronics Club, IITB",$message,"From: pp2105@gmail.com");
?>
<script>
window.location.assign('signupauth.php');
</script>
<?php
}
else {
?>
<script>
	window.location.assign("login.php?x=3");
</script>
<?php
	}
}
?>