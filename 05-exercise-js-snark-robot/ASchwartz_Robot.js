  var faveNumber = parseInt (prompt('What is your favorite number?'));
  console.log(faveNumber);
 if (faveNumber > 42)
   { console.log("LAME. That number is too large!");}
  else if (faveNumber < 42)
    { console.log("Eh, that's OK but " + (faveNumber + 1) + " would be even better.");}
    else 
    { console.log("Yay! That's my favorite too!");}