# Tile Overlay

> Tile Overlay là một loại overlay cho phép người dùng hiển thị các tile map khác nhau từ nhiều nguồn khác nhau lên trên tile map có sẵn của Map4D

## Add Tile overlay

Để thêm 1 tile overlay vào map cần tạo mới 1 đối tượng của lớp [MFTileOverlay](MFTileOverlay) sau đó truyền cho [MFMapView](MFMapView).  
Map4dMap plugin cung cấp sẵn một phương thức static `MFTileOverlay.newWithUrlPattern` để tạo đối tượng tile overlay với url pattern.  
Cấu trúc url pattern:

```
https://domain.com/{zoom}/{x}/{y}/tile.png
```

Trong đó:
* zoom: là mức zoom của tile
* x, y: là tọa độ của tile

> Đoạn code bên dưới hướng dẫn cách thêm/xóa tile overlay trên Map4d. Tile được lấy từ <https://opentopomap.org>

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
      title: 'Hello Tile Overlay',
      home: TileOverlaySample(),
    );
  }
}

class TileOverlaySample extends StatefulWidget {
  @override
  _TileOverlaySampleState createState() => _TileOverlaySampleState();
}

class _TileOverlaySampleState extends State<TileOverlaySample> {
  MFTileOverlay? _tileOverlay;

  void _addRemoveTileOverlay() {
    MFTileOverlay? newTileOverlay;
    if (_tileOverlay == null) {
      newTileOverlay = MFTileOverlay.newWithUrlPattern(
        MFTileOverlayId('opentopomap_overlay'),
        'https://a.tile.opentopomap.org/{zoom}/{x}/{y}.png',
      );
    }
    setState(() {
      _tileOverlay = newTileOverlay;
    });
  }

  @override
  Widget build(BuildContext context) {
    Set<MFTileOverlay> overlays = <MFTileOverlay>{
      if (_tileOverlay != null) _tileOverlay!,
    };
    return Scaffold(
      body: MFMapView(
        tileOverlays: overlays,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addRemoveTileOverlay,
        child: overlays.isEmpty ? Icon(Icons.add) : Icon(Icons.remove),
      ),
    );
  }
}
```

## MFTileOverlay

### Properties

| No. | Name | Type | Description |
|:-:|-|-|-|
| 1 | tileOverlayId | [MFTileOverlayId](//pub.dev/documentation/map4d_map/latest/map4d_map/MFTileOverlayId-class.html) | Id của tile overlay |
| 2 | visible | bool | Ẩn/hiện tile overlay trên map |
| 3 | zIndex | int | Giá trị zIndex của tile overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |

### Methods

| No. | Name | Return Type | Arguments | Description |
|:-:|-|-|-|-|
| 1 | clone | [MFTileOverlay](//pub.dev/documentation/map4d_map/latest/map4d_map/MFTileOverlay-class.html) |  | Clone đối tượng MFTileOverlay |
| 2 | copyWith | [MFTileOverlay](//pub.dev/documentation/map4d_map/latest/map4d_map/MFTileOverlay-class.html) | int? `zIndexParam`<br>bool? `visibleParam` | Clone đối tượng MFTileOverlay với giá trị `zIndex`, `visible` mới. |
| 3 | zIndex | int | Giá trị zIndex của tile overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |  |