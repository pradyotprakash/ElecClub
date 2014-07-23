<?php
session_start();
$email = $_POST['signupemailverify'];
$code = $_POST['signupcodeverify'];
$con = mysqli_connect($_SERVER['SERVER_ADDR'],'root','','BLOG');
$db = "SELECT COUNT(*) FROM AuthCode WHERE (Code='$code' AND Email='$email')";
$c = mysqli_fetch_array(mysqli_query($con,$db))[0];
if($c){
	$db = "DELETE FROM AuthCode WHERE Email='$email'";
	mysqli_query($con,$db);
	$usrname = $_SESSION['signupname'];
	$pwd = $_SESSION['signuppwd'];
	$db = "INSERT INTO Authenticate VALUES ('$usrname','$pwd','$email')";	
	mysqli_query($con,$db);
	$_SESSION['UserName'] = $usrname;
	$_SESSION['loggedin'] = true;
	$_SESSION['id'] = $email;
	$_SESSION['pwd'] = $pwd;
?>
<script>
window.location.assign('blog.php');
</script>
<?php
}
else {
?>
<script>
window.location.assign('signupauth.php?x=1');
</script>
<?php } ?>