# Heatmap Overlay

Có từ **3.4.0**, `MFHeatmapOverlay` hiển thị mật độ của các tọa độ có trọng số. Lớp này kế thừa `MFOverlay`.

## Thêm và xóa Heatmap

```swift
let locations = [
  MFWeightedLocation(coordinate: CLLocationCoordinate2D(latitude: 16.0721, longitude: 108.2262), weight: 2),
  MFWeightedLocation(coordinate: CLLocationCoordinate2D(latitude: 16.0730, longitude: 108.2270), weight: 1)
]
let heatmap = MFHeatmapOverlay(data: locations)
heatmap.radius = 30
heatmap.opacity = 0.8
heatmap.gradient = [.blue, .green, .yellow, .red]
heatmap.map = mapView

// Xóa khỏi bản đồ:
heatmap.map = nil
```

`MFWeightedLocation` có `coordinate` và `weight` chỉ đọc. `init(coordinate:)` dùng trọng số mặc định 1; trọng số nhỏ hơn hoặc bằng 0 không có tác dụng.

## Cấu hình

| Thuộc tính | Kiểu Swift | Ý nghĩa / mặc định |
|---|---|---|
| `data` | [MFWeightedLocation] | Dữ liệu điểm; gán lại sẽ xóa GeoJSON đã thiết lập. Tọa độ không hợp lệ không được trả về. Điểm từ GeoJSON chỉ được trả về khi overlay đã gắn vào map. |
| `radius` | CGFloat | Bán kính: point nếu `isDissipating` là true, mét nếu false. Mặc định 20. |
| `intensity` | CGFloat | Cường độ, mặc định 1. |
| `maxIntensity` | CGFloat | Mật độ ứng với màu cuối của gradient. Giá trị <= 0 tự điều chỉnh theo mật độ lớn nhất ở mức zoom hiện tại; mặc định 0. |
| `gradient` | [UIColor]? | Màu từ mật độ thấp đến cao; nil hoặc mảng rỗng dùng gradient mặc định. |
| `isDissipating` | Bool | Mặc định true: bán kính theo point không đổi khi zoom. False: bán kính theo mét. |
| `opacity` | CGFloat | Độ trong suốt, mặc định 0.8. |
| `minZoom` / `maxZoom` | Double | Khoảng zoom hiển thị, mặc định 2 / 22. |
| `map` | MFMapView? | Bản đồ hiển thị; nil để xóa overlay. |
| `isHidden` | Bool | Ẩn/hiện overlay. |
| `zIndex` | Float | Thứ tự hiển thị giữa các heatmap. |
| `Id` | UInt32 | ID chỉ đọc, kế thừa từ MFOverlay. |
| `userData` | NSObject? | Dữ liệu tùy chỉnh, kế thừa từ MFOverlay. |

## Cập nhật dữ liệu và GeoJSON

```swift
heatmap.data = locations
heatmap.addData(locations)

// geoJSONString là chuỗi FeatureCollection, Feature hoặc Geometry.
heatmap.setGeoJson(geoJSONString)
heatmap.setGeoJson(geoJSONString, weightProperty: "weight")
```

`setGeoJson` thay thế dữ liệu bằng các geometry `Point` và `MultiPoint`. `weightProperty` chọn thuộc tính feature làm trọng số; nil dùng trọng số 1.

Heatmap nằm trên nhãn, tile overlay và image overlay, dưới building 3D và marker. Trong nhóm heatmap, zIndex cao hơn được vẽ phía trên.

Xem khai báo gốc của [MFHeatmapOverlay và MFWeightedLocation](api-reference.md).
