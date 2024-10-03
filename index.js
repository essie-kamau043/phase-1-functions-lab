function distanceFromHqInBlocks(location){
  const hqLocation=42;
  return Math.abs(location -hqLocation);
}

function distanceFromHqInFeet(location){
  const blocks=distanceFromHqInBlocks(location)
  return blocks * 264
}


  function distanceTravelledInFeet(uptown, dowmtown){
return Math.abs(uptown - dowmtown) * 264;

  }

  function calculatesFarePrice(uptown, downtown){
    const distanceTravelledInFeet=Math.abs(uptown - downtown) *264;
    
    if(distanceTravelledInFeet<=400){
    return 0;
  }
   else if(distanceTravelledInFeet>400 && distanceTravelledInFeet<=2000){
    return (distanceTravelledInFeet-400) * 0.02;

   }
   else if(distanceTravelledInFeet>2000 && distanceTravelledInFeet<=2500){
    return 25;

   }
   else{
    return 'cannot travel that far';
   }
}