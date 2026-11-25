# Map Options

Import `Map4dMap` trước khi sử dụng các lớp SDK. Ví dụ tạo bản đồ và đặt camera ban đầu:

```swift
import UIKit
import CoreLocation
import Map4dMap

let mapView = MFMapView(frame: view.bounds)
mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
mapView.camera = MFCameraPosition(
  target: CLLocationCoordinate2D(latitude: 16.066154, longitude: 108.207276),
  zoom: 15
)
mapView.mapType = .roadmap
view.addSubview(mapView)
```

Nếu dùng Map ID, khởi tạo bằng `MFMapView(frame:mapID:)`. Access Key được cấu hình theo [hướng dẫn cài đặt](/).

## API Reference

<a id="reference-map"></a>

## Map reference

## MFMapView

### 1. Constructor

```swift
let mapView = MFMapView(frame: self.view.frame)
// Hoặc tạo bản đồ với Map ID:
let styledMapView = MFMapView(frame: self.view.frame, mapID: MFMapID(identifier: "map_id"))
```

### 2. Properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **delegate**               | [MFMapViewDelegate](/guides/map-events?id=map-events)                           |
| **projection**             | [MFProjection](/guides/projection?id=projection)                                |
| **camera**                 | [MFCameraPosition](/guides/map-options?id=mfcameraposition)                          |
| **settings**               | [MFUISettings](/guides/map-options?id=mfuisettings)                                  |
| **mapType**                | [MFMapType](/guides/map-options?id=mfmaptype)                                  |
| **mapStyle**               | [MFMapStyle](/guides/map-options?id=mfmapstyle)? |
| **nativeScale**            | CGFloat                                                                         |


### 3. Methods

| Name                       | Parameters              | Return value         | Description                                                                                                             |
|----------------------------|-------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| **setMyLocationEnabled**   | Bool                    | void                 | Bật vị trí của thiết bị                                                                                                 |
| **getMyLocation**          | none                    | CLLocation           | Lấy vị trí của thiết bị                                                                                                 |
| **setPOIsEnabled**         | Bool                    | void                 | Cho phép hiển thị các **POI** có sẵn của **map** hay không                                                              |
| **isPOIsEnabled**          | none                    | Bool                 | Kiểm tra các **POI** có sẵn của **map** được phép hiển thị hay không.                                                   |
| **setBuildingsEnabled**    | Bool                    | void                 | Cho phép hiển thị các **Building** có sẵn của **map** trong chế độ 3D hay không.                                        |
| **isBuildingsEnabled**     | none                    | Bool                 | Kiểm tra các **Building** có sẵn của **map** được phép hiển thị trong chế độ 3D hay không.                              |
| **setSelectedBuildings**   | [String]?             | void                 | **Set** **high light** cho các **Building** có **id** nằm trong danh sách tham số truyền vào trong chế độ 3D.           |
| **setMinZoom**             | Double, Double          | void                 | **Set** mức **zoom** nhỏ nhất và lớn nhất mà **map** có thể hiển thị.                                                   |
| **clear** | none | Void | Xóa các đối tượng do ứng dụng thêm vào bản đồ. |
| **setTime** | Date? | Void | Đặt thời gian hiển thị của bản đồ; truyền `nil` để dùng thời gian hiện tại. |
| **enableWaterEffect** | Bool | Void | Bật hoặc tắt hiệu ứng nước. |
| **cameraForBounds**        | [MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds)                 | [MFCameraPosition](/guides/map-options?id=mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **cameraForBounds**        | [MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds) , UIEdgeInsets  | [MFCameraPosition](/guides/map-options?id=mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **animateCamera**          | [MFCameraUpdate](/guides/map-options?id=mfcameraupdate)                         | none                 | **Animate** **camera** đến vị trí theo camera bạn truyền vào.        |
| **moveCamera**             | [MFCameraUpdate](/guides/map-options?id=mfcameraupdate)                         | none                 | **Move** **camera** đến vị trí theo camera bạn truyền vào.           |
| **moveCamera**             | MFCameraUpdate, duration: TimeInterval | Void | Di chuyển camera với thời gian chỉ định. |
| **getBounds**              | none         | [MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds)                 | Lấy khu vực hiển thị của map hiện tại.                               |
| **metersForPoints**        | double                  | double               | Convert giá trị từ point sang mét |
| **pointsForMeters**        | double                  | double               | Convert giá trị từ mét sang point |
| **setBuildingsFallbackColor** | UIColor | Void | Đặt màu dự phòng cho building. |
| **setMapID**               | [MFMapID](/guides/map-options?id=mfmapid) | void    | Set Map ID |
| **setMapID** | MFMapID, completion: (String?, Error?) -> Void | Void | Đặt Map ID và nhận dữ liệu style hoặc lỗi qua callback. |

### MFCameraPosition

#### 1. Constructor

```swift
init(target: CLLocationCoordinate2D, zoom: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, bearing: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, padding: UIEdgeInsets) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double, padding: UIEdgeInsets) {}
```

#### 2. Properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **target**                 | CLLocationCoordinate2D                                                          |
| **zoom**                   | double                                                                          |
| **bearing**                | double                                                                          |
| **padding**                | UIEdgeInsets |
| **tilt**                   | double                                                                          |

### MFCameraUpdate

#### Public static member functions

```swift
class func fit(_ bounds: MFCoordinateBounds?) -> MFCameraUpdate? {}
class func fit(_ bounds: MFCoordinateBounds?, with edgeInsets: UIEdgeInsets) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, bearing: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, padding: UIEdgeInsets) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double, padding: UIEdgeInsets) -> MFCameraUpdate? {}
class func setCamera(_ camera: MFCameraPosition?) -> MFCameraUpdate? {}
```

### MFUISettings

#### 1. Properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **myLocationButton**       | Bool |
| **scrollGestures**         | Bool |
| **zoomGestures**           | Bool |
| **tiltGestures**           | Bool |
| **rotateGestures**         | Bool |

#### 3. Methods

| Name                       | Parameters                | Return value         | Description                                                                         |
|----------------------------|:-------------------------:|:--------------------:|-------------------------------------------------------------------------------------|
| **setAllGesturesEnabled**  | Bool                      | void                 | Bật hoặc tắt tất cả cử chỉ tương tác với **map**                                    |

### MFMapType

`MFMapType` enum

| Name                       | Description                                                                     |
|----------------------------|:--------------------------------------------------------------------------------|
| **.roadmap**       | Map hiển thị tiles ở dạng vector                                                |
| **.satellite**     | Map hiển thị tiles ở dạng hình ảnh vệ tinh, không bao gồm thông tin đường sá    |
| **.hybrid**        | Map hiển thị tiles ở dạng hình ảnh vệ tinh, kết hợp thông tin đường sá          |

### MFMapID

`MFMapID` class

#### Khởi tạo

```swift
let mapID = MFMapID(identifier: "YOUR_MAP_ID")
mapView.setMapID(mapID)
```

### MFMapStyle

Khởi tạo style từ chuỗi JSON của bạn và gán cho `mapStyle`.

```swift
let style = MFMapStyle(jsonString: styleJSON)
mapView.mapStyle = style
```

`styleJSON` là chuỗi cấu hình style bản đồ của ứng dụng.
