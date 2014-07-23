<?php
session_start();
if(empty($_SESSION['id']) || empty($_SESSION['pwd'])){
?>
<script>
window.location.assign('login.php');
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
	$topicname = $_POST['topicname'];
	$table = sha1($topicname);
	$db = "INSERT INTO Topics VALUES ('$topicname','$table')";
	mysqli_query($con,$db);
	$db = "CREATE TABLE ".$table." (Author text, Data text, Time text)";
	mysqli_query($con,$db);
	echo '
	<script>
	window.location.assign("blog.php#'.$table.'");
	</script>';
}
?>