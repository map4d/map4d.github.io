# Map4D Widget

> **Map4dMap Flutter** cung cấp `MFMapView` [widget](https://flutter.dev/docs/development/ui/widgets-intro) để hiển thị Map4d.  
> Để điều khiển Map4d widget, có thể sử dụng [MFMapViewController](./guides/controller.md) được truyền cho `MFMapView` khi hàm `onMapCreated` được gọi lại.

## Simple Usage

```dart
import 'package:flutter/material.dart';
import 'package:map4d_map/map4d_map.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Map4D Map',
      home: MFMapView(),
    );
  }
}
```

## MFMapView

### Constructors

```dart
const MFMapView({
    Key? key,
    this.initialCameraPosition,
    this.onMapCreated,
    this.minMaxZoomPreference = MFMinMaxZoom.unbounded,
    this.rotateGesturesEnabled = true,
    this.scrollGesturesEnabled = true,
    this.zoomGesturesEnabled = true,
    this.tiltGesturesEnabled = true,
    this.myLocationEnabled = false,
    this.myLocationButtonEnabled = false,
    this.poisEnabled = true,
    this.buildingsEnabled = true,
    this.onCameraMoveStarted,
    this.onCameraMove,
    this.onCameraIdle,
    this.onTap,
    this.onModeChange,
    this.onPOITap,
    this.onBuildingTap,
    this.markers = const <MFMarker>{},
    this.circles = const <MFCircle>{},
    this.polygons = const<MFPolygon>{},
    this.polylines = const<MFPolyline>{},
    this.pois = const<MFPOI>{},
    this.buildings = const<MFBuilding>{},
    this.tileOverlays = const <MFTileOverlay>{},
})
```

### Properties

| No. | Name | Type | Description |
|:-:|-|-|-|
| 1 | initialCameraPosition | [MFCameraPosition](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraPosition-class.html) | Vị trí ban đầu của camera trên bản đồ. |
| 2 | onMapCreated | [MFMapCreatedCallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFMapCreatedCallback.html) | Được gọi khi bản đồ sẵn sàng để sử dụng. |
| 3 | minMaxZoomPreference | [MFMinMaxZoom](//pub.dev/documentation/map4d_map/latest/map4d_map/MFMinMaxZoom-class.html) | Set mức zoom tối thiểu, tối đa cho camera. |
| 4 | rotateGesturesEnabled | `bool` | Cho phép xoay bản đồ bằng cử chỉ của người dùng. |
| 5 | scrollGesturesEnabled | `bool` | Cho phép cuộn bản đồ bằng cử chỉ của người dùng. |
| 6 | zoomGesturesEnabled | `bool` | Cho phép zoom bản đồ bằng cử chỉ của người dùng. |
| 7 | tiltGesturesEnabled | `bool` | Cho phép nghiêng bản đồ bằng cử chỉ của người dùng. |
| 8 | myLocationEnabled | `bool` | Ẩn hoặc hiển thị vị trí của tôi.<br>Bật tính năng này yêu cầu thêm quyền vị trí đối với cả Android và iOS. |
| 9 | myLocationButtonEnabled | `bool` | Ẩn hoặc hiển thị nút vị trí của tôi |
| 10 | poisEnabled | `bool` | Ẩn hoặc hiển thị các địa điểm của Map4D (ở chế độ 2D). |
| 11 | buildingsEnabled | `bool` | Ẩn hoặc hiển thị các đối tượng 3D của Map4D (ở chế độ 3D). |
| 12 | onCameraMoveStarted | `VoidCallback` | Được gọi khi camera bắt đầu di chuyển. |
| 13 | onCameraMove | [MFCameraPositionCallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraPositionCallback.html) | Được gọi liên tục khi camera di chuyển. |
| 14 | onCameraIdle | `VoidCallback` | Được gọi khi camera di chuyển kết thúc,<br>không có hoạt động nào đang chờ xử lý và người dùng đã ngừng tương tác với bản đồ. |
| 15 | onTap | [MFLatLngCallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFLatLngCallback.html) | Được gọi khi người dùng tap trên bản đồ (không phải tap vào địa điểm, building hay annotations). |
| 16 | onModeChange | [MFModeChangedCallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFModeChangedCallback.html) | Được gọi khi bản đồ chuyển từ 2D sang 3D và ngược lại. |
| 17 | onPOITap | [MFMapPOICallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFMapPOICallback.html) | Được gọi khi người dùng tap vào địa điểm trên bản đồ (không phải POI annotation) |
| 18 | onBuildingTap | [MFMapBuildingCallback](//pub.dev/documentation/map4d_map/latest/map4d_map/MFMapBuildingCallback.html) | Được gọi khi người dùng tap vào đối tượng 3D trên bản đồ (không phải building annotation) |
| 19 | markers | [Set\<MFMarker\>](./guides/marker.md) | Những marker annotation sẽ được hiển thị trên bản đồ. |
| 20 | circles | [Set\<MFCircle\>](./guides/circle.md) | Những circle annotation sẽ được hiển thị trên bản đồ. |
| 21 | polylines | [Set\<MFPolyline\>](./guides/polyline.md) | Những polyline annotation sẽ được hiển thị trên bản đồ. |
| 22 | polygons | [Set\<MFPolygon\>](./guides/polygon.md) | Những polygon annotation sẽ được hiển thị trên bản đồ. |
| 23 | pois | [Set\<MFPOI\>](./guides/poi.md) | Những POI annotation sẽ được hiển thị trên bản đồ. |
| 24 | buildings | [Set\<MFBuilding\>](./guides/building.md) | Những building annotation sẽ được hiển thị trên bản đồ. |
| 25 | tileOverlays | [Set\<MFTileOverlay\>](./guides/tile-overlay.md) | Những title overlay sẽ được hiển thị trên bản đồ. |

### API Reference

<https://pub.dev/documentation/map4d_map/latest/map4d_map/MFMapView-class.html>