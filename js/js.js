/* affix the navbar after scroll below header */
$(document).ready(function(){
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$(document).ready(function(){
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})
});

/* smooth scrolling for nav sections */
$(document).ready(function(){
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top+20;
  $('body,html').animate({scrollTop:posi},700);
})
});


/* google maps */

// enable the visual refresh
google.maps.visualRefresh = true;

var map;
function initialize() {
map = new google.maps.Map(document.getElementById("map-canvas"), {
      zoom: 19,
      center: new google.maps.LatLng(48.858565, 2.347198),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

if (navigator.geolocation)
var watchId = navigator.geolocation.watchPosition(successCallback,
                          null,
                          {enableHighAccuracy:true});
else
alert("Votre navigateur ne prend pas en compte la géolocalisation HTML5");

function successCallback(position){
map.panTo(new google.maps.LatLng(50.2859168, 2.787747299999978));
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(50.2859168, 2.787747299999978),
  map: map,
  title: 'Les faucons Rouges'
});
}
google.maps.event.addDomListener(window, 'load', initialize);
