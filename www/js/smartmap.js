/**
 * Created by kojo on 26/11/15.
 */

    var map;
    var accra = new google.maps.LatLng(5.1230, 0.1234);

    function initialize() {

      var roadAtlasStyles = [
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            { hue: '#39AA85' },
            { saturation: 60 },
            { lightness: -20 }
          ]
        },{
          featureType: 'road.arterial',
          elementType: 'all',
          stylers: [
            { hue: '#2200ff' },
            { lightness: -40 },
            { visibility: 'simplified' },
            { saturation: 30 }
          ]
        },{
          featureType: 'road.local',
          elementType: 'all',
          stylers: [
            { hue: '#f6ff00' },
            { saturation: 50 },
            { gamma: 0.7 },
            { visibility: 'simplified' }
          ]
        },{
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            { saturation: 40 },
            { lightness: 40 }
          ]
        },{
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            { visibility: 'on' },
            { saturation: 98 }
          ]
        },{
          featureType: 'administrative.locality',
          elementType: 'labels',
          stylers: [
            { hue: '#0022ff' },
            { saturation: 50 },
            { lightness: -10 },
            { gamma: 0.90 }
          ]
        },{
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            { hue: '#39AA85' },
            { visibility: 'on' },
            { lightness: -70 }
          ]
        }
      ];

      var mapOptions = {
        zoom: 12,
        center: accra,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'ghanaroadatlas']
        }
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

      var styledMapOptions = {
        name: 'Ghana Road Atlas'
      };

      var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

      map.mapTypes.set('ghanaroadatlas', usRoadMapType);
      map.setMapTypeId('ghanaroadatlas');
    }

    google.maps.event.addDomListener(window, 'load', initialize);


