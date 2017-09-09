var x = document.getElementById("demo");
window.onload = getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var latlon = position.coords.latitude + ',' + position.coords.longitude;
	var img_url = "https://maps.googleapis.com/maps/staticmap?center="+latlon+"&zoom=15&size=400x400&key=AIzaSyCqSEnjvBcdSxPtrZP7wSkcCuiz8aPUdrE";
	document.getElementById("demo").innerHTML = "<imgsrc='"+img_url+"'>";
}
