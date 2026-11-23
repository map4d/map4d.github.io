# Heatmap Overlay

Từ **iPostMap 3.1.0**, `MFHeatmapOverlay` cho phép biểu diễn mật độ dữ liệu bằng màu sắc. Mỗi điểm có tọa độ và trọng số được mô tả bằng `MFWeightedLocation`.

## 1. Tạo và hiển thị Heatmap

Sau khi [cài đặt SDK](/), import `iPostMap` và tạo overlay với các điểm dữ liệu:

```swift
import UIKit
import CoreLocation
import iPostMap

let points = [
  MFWeightedLocation(
    coordinate: CLLocationCoordinate2D(latitude: 16.066154, longitude: 108.207276),
    weight: 1
  ),
  MFWeightedLocation(
    coordinate: CLLocationCoordinate2D(latitude: 16.067243, longitude: 108.214077),
    weight: 3
  )
]

let heatmap = MFHeatmapOverlay(data: points)
heatmap.radius = 30
heatmap.opacity = 0.8
heatmap.map = mapView
```

`mapView` là đối tượng `MFMapView` đã được thêm vào giao diện. Điểm có trọng số lớn hơn đóng góp nhiều hơn vào mật độ; trọng số nhỏ hơn hoặc bằng `0` không có tác dụng.

Heatmap hiển thị phía trên nhãn, Tile Overlay và Image Overlay, phía dưới building 3D và marker. Trong các heatmap, `zIndex` lớn hơn được vẽ phía trên.

## 2. Cập nhật dữ liệu

Gán `data` để thay thế toàn bộ dữ liệu hoặc dùng `addData(_:)` để thêm điểm:

```swift
heatmap.data = points

heatmap.addData([
  MFWeightedLocation(
    coordinate: CLLocationCoordinate2D(latitude: 16.065419, longitude: 108.214576),
    weight: 2
  )
])
```

## 3. Sử dụng GeoJSON

`setGeoJson(_:weightProperty:)` nhận chuỗi GeoJSON dạng FeatureCollection, Feature hoặc Geometry. SDK sử dụng các geometry `Point` và `MultiPoint` làm dữ liệu heatmap:

```swift
let geoJSON = """
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [108.207276, 16.066154]
      },
      "properties": { "weight": 3 }
    }
  ]
}
"""

heatmap.setGeoJson(geoJSON, weightProperty: "weight")
```

Tọa độ GeoJSON theo thứ tự **kinh độ, vĩ độ**. Truyền `nil` cho `weightProperty`, hoặc gọi `setGeoJson(_:)`, để dùng trọng số `1`.

Gọi `setGeoJson` sẽ thay thế dữ liệu trước đó. Gán `data` sẽ xóa GeoJSON đã đặt. Các điểm từ GeoJSON chỉ được trả về qua `data` khi overlay đang gắn với bản đồ; tọa độ không hợp lệ không được trả về.

## 4. Tùy chỉnh hiển thị

```swift
heatmap.radius = 40
heatmap.intensity = 1.5
heatmap.maxIntensity = 10
heatmap.gradient = [.blue, .green, .yellow, .red]
heatmap.minZoom = 5
heatmap.maxZoom = 20
```

Mặc định `isDissipating` là `true`: bán kính tính bằng point và giữ nguyên kích thước khi zoom. Đặt `false` để tính bán kính bằng mét:

```swift
heatmap.isDissipating = false
heatmap.radius = 500
```

## 5. Ẩn hoặc xóa Heatmap

```swift
heatmap.isHidden = true
heatmap.isHidden = false

// Gỡ overlay khỏi bản đồ.
heatmap.map = nil
```

## API Reference

### MFWeightedLocation

```swift
let point = MFWeightedLocation(coordinate: coordinate)
let weightedPoint = MFWeightedLocation(coordinate: coordinate, weight: 2)
```

| Thuộc tính | Kiểu | Mô tả |
|------------|------|-------|
| `coordinate` | CLLocationCoordinate2D | Tọa độ điểm, chỉ đọc. |
| `weight` | Double | Trọng số, chỉ đọc. Mặc định `1`. Giá trị `<= 0` không có tác dụng. |

### MFHeatmapOverlay

```swift
let emptyHeatmap = MFHeatmapOverlay()
let heatmap = MFHeatmapOverlay(data: points)
```

| Thuộc tính | Kiểu | Mặc định | Mô tả |
|------------|------|----------|-------|
| `data` | [MFWeightedLocation] | — | Dữ liệu điểm của heatmap. |
| `radius` | CGFloat | `20` | Bán kính theo point hoặc mét, tùy `isDissipating`. |
| `intensity` | CGFloat | `1` | Cường độ heatmap. |
| `maxIntensity` | CGFloat | `0` | Mật độ ứng với màu cuối của gradient. Giá trị `<= 0` tự căn theo mật độ lớn nhất tại mức zoom hiện tại. |
| `gradient` | [UIColor]? | `nil` | Màu từ mật độ thấp đến cao. `nil` hoặc mảng rỗng dùng gradient mặc định. |
| `isDissipating` | Bool | `true` | Giữ bán kính theo point khi zoom; `false` dùng mét. |
| `opacity` | CGFloat | `0.8` | Độ trong suốt của overlay. |
| `minZoom` | Double | `2` | Mức zoom nhỏ nhất để vẽ heatmap. |
| `maxZoom` | Double | `22` | Mức zoom lớn nhất để vẽ heatmap. |
| `map` | MFMapView? | — | Bản đồ hiển thị overlay; gán `nil` để gỡ. Kế thừa từ MFOverlay. |
| `isHidden` | Bool | — | Ẩn hoặc hiện overlay. Kế thừa từ MFOverlay. |
| `zIndex` | Float | — | Thứ tự hiển thị. Kế thừa từ MFOverlay. |

| Phương thức Swift | Mô tả |
|-------------------|-------|
| `addData(_:)` | Thêm mảng điểm vào heatmap. |
| `setGeoJson(_:)` | Thay dữ liệu bằng các điểm GeoJSON với trọng số `1`. |
| `setGeoJson(_:weightProperty:)` | Thay dữ liệu bằng GeoJSON và chọn thuộc tính dùng làm trọng số. |

Đối chiếu theo header `MFHeatmapOverlay.h` và `MFWeightedLocation.h` trong [bản phát hành iPostMap 3.1.0](https://github.com/map4d/ipostmap-ios-sdk/releases/tag/3.1.0).
