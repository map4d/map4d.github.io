# Map4D SDK

Map4D SDK for Web, written in Javascript.

[![Map4D Web SDK](https://raw.githubusercontent.com/map4d/map4d-web-sdk/master/sdk/map4dweb.png)](https://map4d.vn) 

## Installation

```JavaScript
<script defer
  src="https://api.map4d.vn/sdk/map/js?version={SDK_VERSION}&key={API_KEY}&callback={FUNCTION}"></script>
```

## Using

```HTML
<!DOCTYPE html>
<html>
<head>
  <script defer
    src="https://api.map4d.vn/sdk/map/js?version={SDK_VERSION}&key={API_KEY}&callback={FUNCTION}"></script>
</head>
<body>
  <div id="map" style="width:100%;height:250px;"></div>
  <script>
    function initMap() {
      let options = {
        center: {lat: 16.072163491469226, lng: 108.22690536081757},
        zoom: 15,
        controls: true
      }
      let map = new map4d.Map(document.getElementById("map"), options)
    }
  </script>
</body>
</html>
```
## Document references
[1. Getting started](0-getting-started.md) 

[2. Map user interaction](1-map-user-interaction.md) 

[3. Type](2-type.md)

[4. Map events](3-map-events.md)

[5. Marker](4-marker.md)

[6. Marker cluster](5-marker-cluster.md)

[7. Polyline](6-polyline.md)

[8. Polygon](7-polygon.md)

[9. Circle](8-circle.md)

[10. 3D objects](9-3d-objects.md)

[11. Tile area](10-tile-area.md)

[12. Effect](11-effect-map.md)

[13. LatLngBounds](12-lat-lng-bounds.md)

[14. Map utils](13-map-utils.md)

[15. Data layer](14-data-layer.md)

[16. Leaflet Integrated](15-leaflet-integrated.md)

[17. Place](16-place.md)

[18. Tile Overlay](17-tile-overlay.md)

[19. Building Overlay](18-building-overlay.md)

[20. POI Overlay](19-poi-overlay.md)