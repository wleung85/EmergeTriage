var map;
var infowindow;
var x = document.getElementById("demo");
window.onload = getLocation();

function getLocation() {
    if (navigator.geolocation)	 {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	
    var myOptions = {
         zoom: 13,
         center: myLatlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
         }
      map = new google.maps.Map(document.getElementById('map'), myOptions);
      
      infowindow = new google.maps.InfoWindow();

      var marker = new google.maps.Marker({
          position: myLatlng, 
          map: map,
      title:"Current Location"
     });

      var request = {
      	location: myLatlng,
      	radius: '500',
      	type: ['hospital'],
      	keyword: ['emergency room', 'hospital']
      };

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);
}

function callback(results,status) {
	if(status==google.maps.places.PlacesServiceStatus.OK){
		for (var i = 0; i < results.length; i++){
			var place = results[i];
			createMarker(results[i]);
		}
	}
}


function createMarker(place) {
  var placeLoc = place.geometry.location;
  
        var icon = {
        url: place.icon,
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 15),
        scaledSize: new google.maps.Size(25, 25)
      };
	  
  var marker = new google.maps.Marker({
    map: map,
	icon:icon,
	title: place.name,
    position: place.geometry.location
  });
  

	  

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
