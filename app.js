  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good morning 😀😇";
  } else if (time < 20) {
    greeting = "Good day 😎";
  } else if (time < 24){
    greeting = "Good evening 🥱";
  }else{
  	greeting = "Dont Stress me 😂🤣"
  }
  document.getElementById("demo").innerHTML = greeting;
  
  var day;
  switch (new Date().getDay()){
  	case 0:
	day='Sunday';
	break;
	case 1:
	day='Monday';
	break;
	case 2:
	day='Tuesday';
	break;
	case 3:
	day='Wednesday';
	break;
	case 4:
	day='Thursday';
	break;
	case 5:
	day='Friday';
	break;
	case 6:
	day='Saturday';
	break;
	}
	document.getElementById("day").innerHTML = day;