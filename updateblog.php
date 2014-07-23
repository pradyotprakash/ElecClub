<?php
session_start();
if(empty($_SESSION['id']) || empty($_SESSION['pwd'])){
?>
<script>
//window.location.assign('login.php');
</script>
<?php
}
$con = mysqli_connect($_SERVER['SERVER_ADDR'],'root','','BLOG');
if(!$_SESSION['loggedin']){
?>
<script>
window.location.assign('login.php');
</script>
<?php
}
else
{
$tablename = $_POST['topicname'];
$data = $_POST["TA".$tablename];
$user = $_SESSION['id'];
$res = mysqli_fetch_array(mysqli_query($con,"SELECT Username FROM Authenticate WHERE Email='$user'"));
$user = $res['Username'];
date_default_timezone_set('Asia/Kolkata');
$date = date('d/m/Y h:i:s a', time())." IST";
$db = "INSERT INTO ".$tablename." VALUES ('$user','$data','$date')";
mysqli_query($con,$db);
echo '
	<script>
	window.location.assign("blog.php#'.$tablename.'");
	</script>';
}
?>
