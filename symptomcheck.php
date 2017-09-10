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
    $symptomarray = array_map('str_getcsv', file("resources/symptoms_index.csv"));
    $sum = 0;

    for($i=0; $i < $N; $i++)
    {
      //Adding id instead of danger level
      $sum += $symptomarray[$symptom[$i]][1];
      echo($sum . " ");
      //echo($symptom[$i] . " ");
    }

    if ($sum >= "3") {
      echo("You fucked");
    } elseif ($sum > 1) {
      echo("You might be fucked");
    } else {
      echo ("You ain't fucked");
    }
    
  }
?>

</body>
</html>