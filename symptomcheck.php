<html>
<body>

<?php
  $symptom = $_POST['symptom'];
  if(empty($symptom)) 
  {
    echo("You ain't fucked.");
  } 
  else
  {
    $N = count($symptom);

    for($i=0; $i < $N; $i++)
    {
      echo($symptom[$i] . " ");
    }
    echo("You fucked");
  }
?>

</body>
</html>