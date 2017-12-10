function initMap() {
    var uluru = { lat: 39.3502146, lng: -76.5363897 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<strong style="font-size:1.3rem">Bay Motors</strong><br><div style="font-size:1rem">6200 Belair Rd, Baltimore, MD 21206</div>'
    });
    infowindow.open(map, marker);
}