# Map Types

> Map type xác định cách hiển thị và trình bày các tiles trong bản đồ. Bạn có thể tùy chỉnh bản đồ của mình bằng một số loại mà IPostMap Map SDK cung cấp

### Các loại bản đồ

IPostMap Map SDK hiện cung cấp 4 loại bản đồ tùy chỉnh:

| No. | Name      | Description                                                                                                                                                           |
|:---:|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | Roadmap   | Giá trị: `MFMapTypeRoadmap`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của IpostMap SDK |
|  3  | Satellite | Giá trị: `MFMapTypeSatellite`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh vệ tinh. Không có thông tin về đường sá.                                       |
|  4  | Hybrid    | Giá trị: `MFMapTypeMap3D`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh vệ tinh, kết hợp thông tin về đường sá                                             |

|                 ROADMAP                            | SATELLITE                                             |                 HYBRID                            |
|:--------------------------------------------------:|:-----------------------------------------------------:|:-------------------------------------------------:|
| ![MapType](../../resources/maptype_roadmap.jpg) | ![MapType](../../resources/maptype_satelllite.jpg) | ![MapType](../../resources/maptype_hybrid.jpg) |

### Thay đổi loại bản đồ

Để thay đổi loại bản đồ, ta gán một giá trị cho property `mapType` của class [MFMapView](/guides/map-options?id=mfmapview-class)<br>
Ví dụ: để hiển thị bản đồ dạng kết hợp ảnh vệ tinh và thông tin đường sá:

<!-- tabs:start -->

#### ** Swift **

```swift
mapView.mapType = .hybrid
```

#### ** Objective C **

```objc
mapView.mapType = MFMapTypeHybrid;
```

<!-- tabs:end -->
