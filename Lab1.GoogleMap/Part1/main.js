<!-- Code Lab step 4 -->
var gMap = document.querySelector('google-map');
gMap.addEventListener('api-load', function(e) {
    document.querySelector('google-map-directions').map = this.map;
});