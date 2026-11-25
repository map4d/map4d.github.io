# Map :id=api-map

## MFMapView :id=api-map-mfmapview

### 1. Constructor  :id=api-map-_1-constructor

```swift
let mapView = MFMapView(frame: self.view.frame)
let mapView = MFMapView(frame: self.view.frame, mapID: MFMapID(identifier: "map_id"))
```

### 2. Properties :id=api-map-_2-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **delegate**               | [MFMapViewDelegate](/guides/map-events.md)                           |
| **projection**             | [MFProjection](/guides/projection?id=Projection)                                |
| **camera**                 | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)                          | 
| **settings**               | [MFUISettings](/guides/map.md?id=api-map-mfuisettings)                                  |
| **mapType**                | [MFMapType](/guides/map.md?id=api-map-mfmaptype)                                  |
| **mapStyle** | MFMapStyle? |
| **mapStyleJSON** | String? (chỉ đọc) |
| **nativeScale**            | CGFloat                                                                         |

### 3. Methods :id=api-map-_3-methods

| Name                       | Parameters              | Return value         | Description                                                                                                             |
|----------------------------|-------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| **setMyLocationEnabled**   | BOOL                    | void                 | Bật vị trí của thiết bị                                                                                                 |
| **getMyLocation**          | none                    | CLLocation           | Lấy vị trí của thiết bị                                                                                                 |
| **setPOIsEnabled**         | BOOL                    | void                 | Cho phép hiển thị các **POI** có sẵn của **map** hay không                                                              |
| **isPOIsEnabled**          | none                    | BOOL                 | Kiểm tra các **POI** có sẵn của **map** được phép hiển thị hay không.                                                   |
| **setBuildingsEnabled**    | BOOL                    | void                 | Cho phép hiển thị các **Building** có sẵn của **map** trong chế độ 3D hay không.                                        |
| **setBuildingsFallbackColor** | UIColor | void | Màu đối tượng 3D khi chưa tải được hoặc không có texture. |
| **isBuildingsEnabled**     | none                    | BOOL                 | Kiểm tra các **Building** có sẵn của **map** được phép hiển thị trong chế độ 3D hay không.                              |
| **setSelectedBuildings**   | [NSString]?             | void                 | **Set** **high light** cho các **Building** có **id** nằm trong danh sách tham số truyền vào trong chế độ 3D.           |
| **setMinZoom**             | Double, Double          | void                 | **Set** mức **zoom** nhỏ nhất và lớn nhất mà **map** có thể hiển thị.                                                   |
| **clear**                  | none                    | void                 | Xoá mọi thứ mà người dùng **add** vào như **Markers**, **Polylines**, **POI**, **Building**.       |
| **setTime**                | Date?          | void                 | **Set** thời gian hiển thị cho **map**.                                                                                 |
| **enableWaterEffect**      | BOOL                    | void                 | Bật hoặc tắt hiệu ứng mặt nước.                                                         |
| **cameraForBounds**        | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds)                 | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **cameraForBounds(_:insets:)** | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds), UIEdgeInsets  | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **animateCamera**          | [MFCameraUpdate](/guides/map.md?id=api-map-mfcameraupdate)                         | none                 | **Animate** **camera** đến vị trí theo camera bạn truyền vào.        |
| **moveCamera**             | [MFCameraUpdate](/guides/map.md?id=api-map-mfcameraupdate)                         | none                 | **Move** **camera** đến vị trí theo camera bạn truyền vào.           |
| **moveCamera(_:duration:)** | MFCameraUpdate, TimeInterval | void | Di chuyển camera với thời gian tính bằng giây. |
| **getBounds**              | none         | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds)                 | Lấy khu vực hiển thị của map hiện tại.                               |
| **metersForPoints**        | double                  | double               | Convert giá trị từ point sang mét |
| **pointsForMeters**        | double                  | double               | Convert giá trị từ mét sang point |
| **setMapID**               | [MFMapID](/guides/map.md?id=api-map-mfmapid) | void    | Set Map ID |
| **setMapID(_:completion:)** | MFMapID, @escaping (String?, Error?) -> Void | void | Thiết lập Map ID và nhận dữ liệu hoặc lỗi qua callback. |

### MFCameraPosition :id=api-map-mfcameraposition

#### 1. Constructor  :id=api-map-_1-constructor-1

```swift
init(target: CLLocationCoordinate2D, zoom: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, padding: UIEdgeInsets) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, bearing: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double, padding: UIEdgeInsets) {}
```

#### 2. Properties :id=api-map-_2-properties-1

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **target**                 | CLLocationCoordinate2D                                                          |
| **zoom**                   | double                                                                          |
| **bearing**                | double                                                                          | 
| **padding**                | UIEdgeInsets |
| **tilt**                   | double                                                                          |

### MFCameraUpdate :id=api-map-mfcameraupdate

#### Public static member functions  :id=api-map-public-static-member-functions

```swift
class func fit(_ bounds: MFCoordinateBounds?) -> MFCameraUpdate? {}
class func fit(_ bounds: MFCoordinateBounds?, with edgeInsets: UIEdgeInsets) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, padding: UIEdgeInsets) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, bearing: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double, padding: UIEdgeInsets) -> MFCameraUpdate? {}
class func setCamera(_ camera: MFCameraPosition?) -> MFCameraUpdate? {}
```

### MFUISettings :id=api-map-mfuisettings

#### 1. Properties :id=api-map-_1-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **myLocationButton**       | Bool |
| **scrollGestures**         | Bool |
| **zoomGestures**           | Bool |
| **tiltGestures**           | Bool |
| **rotateGestures**         | Bool |

#### 2. Methods :id=api-map-_3-methods-1

| Name                       | Parameters                | Return value         | Description                                                                         |
|----------------------------|:-------------------------:|:--------------------:|-------------------------------------------------------------------------------------|
| **setAllGesturesEnabled**  | BOOL                      | void                 | Bật hoặc tắt tất cả cử chỉ tương tác với **map**                                    |

### MFMapType :id=api-map-mfmaptype

`MFMapType` enum

| Name                       | Description                                                                     |
|----------------------------|:--------------------------------------------------------------------------------|
| **MFMapTypeRoadmap**       | Map hiển thị tiles ở dạng vector                                                |
| **MFMapTypeSatellite**     | Map hiển thị tiles ở dạng hình ảnh vệ tinh, không bao gồm thông tin đường sá    |
| **MFMapTypeHybrid**        | Map hiển thị tiles ở dạng hình ảnh vệ tinh, kết hợp thông tin đường sá          |

### MFMapID :id=api-map-mfmapid

`MFMapID` class

#### Public static member functions :id=api-map-public-static-member-functions-1

```swift
// Creates a new map ID with the given string value.
init(identifier: String)
```
