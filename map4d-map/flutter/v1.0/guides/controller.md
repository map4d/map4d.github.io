# Map4D Controller

> **Map4dMap Flutter** cung cấp `MFMapViewController`, là bộ điều khiển [MFMapView](./guides/mapview.md) instance.
> Giá trị `MFMapViewController` được trả về thông qua hàm callback `MFMapView.onMapCreated`.

## Methods

| No. | Name | Return Type | Arguments | Description |
|:-:|-|-|-|-|
| 1 | moveCamera | Future\<void\> | [MFCameraUpdate](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraUpdate-class.html) `cameraUpdate` | Di chuyển camera đến vị trí `cameraUpdate` ngay lập tức. |
| 2 | animateCamera | Future\<void\> | [MFCameraUpdate](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraUpdate-class.html) `cameraUpdate` | Di chuyển camera đến vị trí `cameraUpdate` với hiệu ứng di chuyển. |
| 3 | getZoomLevel | Future\<double\> |  | Lấy giá trị mức zoom hiện tại của bản đồ. |
| 4 | getCameraPosition | [Future\<MFCameraPosition\>](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraPosition-class.html) |  | Lấy giá trị camera hiện tại của bản đồ. |
| 5 | cameraForBounds | [Future\<MFCameraPosition\>](//pub.dev/documentation/map4d_map/latest/map4d_map/MFCameraPosition-class.html) | [MFLatLngBounds](//pub.dev/documentation/map4d_map/latest/map4d_map/MFLatLngBounds-class.html) `bounds`<br>{ double `padding` } | Lấy giá trị camera đối với `bounds` (và `padding`). |
| 6 | fitBounds | Future\<void\> | [MFLatLngBounds](//pub.dev/documentation/map4d_map/latest/map4d_map/MFLatLngBounds-class.html) `bounds`<br>{ double `padding` } | Di chuyển camera đến ví trí thích hợp với `bounds` (và `padding`). |
| 7 | enable3DMode | Future\<void\> | bool `isEnable` | Set chế độ 2D, 3D cho bản đồ, `true` thì sẽ hiển thị bản đồ ở chế độ 3D. |
| 8 | clearTileCache | Future\<void\> | [MFTileOverlayId](//pub.dev/documentation/map4d_map/latest/map4d_map/MFTileOverlayId-class.html) `tileOverlayId` | Xóa cache của [tile overlay](./guides/tile-overlay.md). |

### API Reference

<https://pub.dev/documentation/map4d_map/latest/map4d_map/MFMapViewController-class.html>