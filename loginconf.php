<?php
session_start();
$_SESSION['id'] = $_POST['id'];
$_SESSION['pwd'] = $_POST['pwd'];
$id = $_SESSION['id'];
$pwd = $_SESSION['pwd'];
$con = mysqli_connect($_SERVER['SERVER_ADDR'],'root','','BLOG');
$db = "SELECT COUNT(*) FROM Authenticate WHERE (Email='$id' AND Password='$pwd')";
$c = mysqli_fetch_array(mysqli_query($con,$db))[0];
if(!$c){
?>
<script>
window.location.assign('login.php?x=1');
</script>
<?php
}
else
{
	$_SESSION['UserName'] = mysqli_fetch_array(mysqli_query($con,"SELECT Username FROM Authenticate WHERE Email='$id'"))[0];
	$_SESSION['loggedin'] = true;
?>
<script>
window.location.assign('blog.php');
</script>
<?php } ?>