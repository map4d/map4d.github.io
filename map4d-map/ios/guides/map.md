# Map :id=api-map

## MFMapView :id=api-map-mfmapview

### 1. Constructor  :id=api-map-_1-constructor

<!-- tabs:start -->
#### ** Swift ** :id=api-map-swift-

```swift
let mapView = MFMapView(frame: self.view.frame)
let mapView = MFMapView(frame: self.view.frame, mapID: MFMapID(identifier: "map_id"))
```

#### ** Objective C ** :id=api-map-objective-c-

```objc
MFMapView *mapView = [[MFMapView alloc] initWithFrame:self.view.frame];
MFMapView *mapView = [[MFMapView alloc] initWithFrame:self.view.frame identifier:[MFMapID mapIDWithIdentifier:@"map_id"]];
```
<!-- tabs:end -->

### 2. Properties :id=api-map-_2-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **delegate**               | [MFMapViewDelegate](/guides/map-events?id=Map-events)                           |
| **projection**             | [MFProjection](/guides/projection?id=Projection)                                |
| **camera**                 | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)                          | 
| **settings**               | [MFUISettings](/guides/map.md?id=api-map-mfuisettings)                                  |
| **mapType**                | [MFMapType](/guides/map.md?id=api-map-mfmaptype)                                  |
| **nativeScale**            | CGFloat                                                                         |


### 3. Methods :id=api-map-_3-methods

| Name                       | Parameters              | Return value         | Description                                                                                                             |
|----------------------------|-------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------|
| **setMyLocationEnabled**   | BOOL                    | void                 | Bật vị trí của thiết bị                                                                                                 |
| **getMyLocation**          | none                    | CLLocation           | Lấy vị trí của thiết bị                                                                                                 |
| **setPOIsEnabled**         | BOOL                    | void                 | Cho phép hiển thị các **POI** có sẵn của **map** hay không                                                              |
| **isPOIsEnabled**          | none                    | BOOL                 | Kiểm tra các **POI** có sẵn của **map** được phép hiển thị hay không.                                                   |
| **setBuildingsEnabled**    | BOOL                    | void                 | Cho phép hiển thị các **Building** có sẵn của **map** trong chế độ 3D hay không.                                        |
| **isBuildingsEnabled**     | none                    | BOOL                 | Kiểm tra các **Building** có sẵn của **map** được phép hiển thị trong chế độ 3D hay không.                              |
| **setSelectedBuildings**   | [NSString]?             | void                 | **Set** **high light** cho các **Building** có **id** nằm trong danh sách tham số truyền vào trong chế độ 3D.           |
| **setMaxNativeZoom**       | Double                  | void                 | **Set** mức **zoom** lớn nhất mà **map** **request tile** từ **server**.                                                |
| **setTileUrl**             | NSString                | void                 | **Set** một đường dẫn **url** để tải **tile** từ **server** thay thế cho **url** mặc định của SDK.                      |
| **setMinZoom**             | Double, Double          | void                 | **Set** mức **zoom** nhỏ nhất và lớn nhất mà **map** có thể hiển thị.                                                   |
| **clear**                  | BOOL                    | void                 | Xoá mọi thứ mà người dùng **add** vào như **Markers**, **Polylines**, **POI**, **Building**.       |
| **setTime**                | Double, Double          | void                 | **Set** thời gian hiển thị cho **map**.                                                                                 |
| **enableWaterEffect**      | BOOL                    | void                 | Bật hoặc tắt hiệu ứng nước khi set map type là 3D của **map**..                                                         |
| **cameraForBounds**        | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds)                 | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **cameraForBounds**        | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds) , UIEdgeInsets  | [MFCameraPosition](/guides/map.md?id=api-map-mfcameraposition)   | Tạo ra một thông tin **Camera** từ các tham số bạn truyền vào. |
| **animateCamera**          | [MFCameraUpdate](/guides/map.md?id=api-map-mfcameraupdate)                         | none                 | **Animate** **camera** đến vị trí theo camera bạn truyền vào.        |
| **moveCamera**             | [MFCameraUpdate](/guides/map.md?id=api-map-mfcameraupdate)                         | none                 | **Move** **camera** đến vị trí theo camera bạn truyền vào.           |
| **getBounds**              | none         | [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds)                 | Lấy khu vực hiển thị của map hiện tại.                               |
| **metersForPoints**        | double                  | double               | Convert giá trị từ point sang mét |
| **pointsForMeters**        | double                  | double               | Convert giá trị từ mét sang point |
| **setMapID**               | [MFMapID](/guides/map.md?id=api-map-mfmapid) | void    | Set Map ID |

### MFCameraPosition :id=api-map-mfcameraposition

#### 1. Constructor  :id=api-map-_1-constructor-1

<!-- tabs:start -->
#### ** Swift ** :id=api-map-swift-1

```swift
init(target: CLLocationCoordinate2D, zoom: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, bearing: Double) {}
init(target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) {}
```

#### ** Objective C ** :id=api-map-objective-c-1

```objc  
- (instancetype)initWithTarget:(CLLocationCoordinate2D) target zoom: (double) zoom;
- (instancetype)initWithTarget:(CLLocationCoordinate2D) target zoom: (double) zoom tilt :(double) tilt ;
- (instancetype)initWithTarget:(CLLocationCoordinate2D) target zoom: (double) zoom bearing: (double) bearing;
- (instancetype)initWithTarget:(CLLocationCoordinate2D) target zoom: (double) zoom tilt :(double) tilt bearing: (double) bearing;
```
<!-- tabs:end -->

#### 2. Properties :id=api-map-_2-properties-1

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **target**                 | CLLocationCoordinate2D                                                          |
| **zoom**                   | double                                                                          |
| **bearing**                | double                                                                          | 
| **tilt**                   | double                                                                          |

### MFCameraUpdate :id=api-map-mfcameraupdate

#### Public static member functions  :id=api-map-public-static-member-functions

<!-- tabs:start -->
#### ** Swift ** :id=api-map-swift-2

```swift
class func fit(_ bounds: MFCoordinateBounds?) -> MFCameraUpdate? {}
class func fit(_ bounds: MFCoordinateBounds?, with edgeInsets: UIEdgeInsets) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, bearing: Double) -> MFCameraUpdate? {}
class func setTarget(_ target: CLLocationCoordinate2D, zoom: Double, tilt: Double, bearing: Double) -> MFCameraUpdate? {}
class func setCamera(_ camera: MFCameraPosition?) -> MFCameraUpdate? {}
```

#### ** Objective C ** :id=api-map-objective-c-2

```objc  
+ (MFCameraUpdate *) fitBounds: (MFCoordinateBounds *) _bounds;
+ (MFCameraUpdate *) fitBounds:(MFCoordinateBounds *) _bounds withEdgeInsets:(UIEdgeInsets) _edgeInsets;
+ (MFCameraUpdate *)setTarget:(CLLocationCoordinate2D) target;
+ (MFCameraUpdate *)setTarget:(CLLocationCoordinate2D) target zoom: (double) zoom;
+ (MFCameraUpdate *)setTarget:(CLLocationCoordinate2D) target zoom: (double) zoom tilt :(double) tilt;
+ (MFCameraUpdate *)setTarget:(CLLocationCoordinate2D) target zoom: (double) zoom bearing: (double) bearing;
+ (MFCameraUpdate *)setTarget:(CLLocationCoordinate2D) target zoom: (double) zoom tilt :(double) tilt bearing: (double) bearing;
+ (MFCameraUpdate *)setCamera:(MFCameraPosition *) camera;
```
<!-- tabs:end -->

### MFUISettings :id=api-map-mfuisettings

#### 1. Properties :id=api-map-_1-properties

| Name                       | Type                                                                            |
|----------------------------|:--------------------------------------------------------------------------------|
| **myLocationButton**       | CLLocationCoordinate2D                                                          |
| **scrollGestures**         | double                                                                          |
| **zoomGestures**           | double                                                                          | 
| **tiltGestures**           | double                                                                          |
| **rotateGestures**         | double                                                                          |

#### 3. Methods :id=api-map-_3-methods-1

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

```objc
/** Creates a new mapID with the given string value. */
+ (instancetype)mapIDWithIdentifier:(NSString *)identifier NS_SWIFT_UNAVAILABLE("Use initializer instead");
```
