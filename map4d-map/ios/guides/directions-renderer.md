# Directions Renderer

> Map4D Map SDK cung cấp lớp [MFDirectionsRenderer](/guides/directions-renderer.md?id=api-directions-renderer) để dễ dàng hiển thị các chỉ đường lên bản đồ.

### 1. Thêm một Directions Renderer vào bản đồ

Để thêm 1 Directions Renderer vào bản đồ, ta tạo mới một đối tượng `MFDirectionsRenderer` và set map cho đối tượng đó.  
Đoạn code sau vẽ một Directions Renderer có 2 route lên bản đồ:

```swift
let renderer = MFDirectionsRenderer();

let route0 = MFMutablePath()
route0.add(CLLocationCoordinate2DMake(16.078814, 108.221592))
route0.add(CLLocationCoordinate2DMake(16.078972, 108.223034))
route0.add(CLLocationCoordinate2DMake(16.075353, 108.223513))

let route1 = MFMutablePath()
route1.add(CLLocationCoordinate2DMake(16.078814, 108.221592))
route1.add(CLLocationCoordinate2DMake(16.077491, 108.221735))
route1.add(CLLocationCoordinate2DMake(16.077659, 108.223212))
route1.add(CLLocationCoordinate2DMake(16.075353, 108.223513))

renderer.routes = [route0, route1]
renderer.originPosition = CLLocationCoordinate2DMake(16.079264, 108.220959)
renderer.originTitle = "Begin Location"
renderer.originTitleColor = .red
renderer.destinationTitle = "End Location"
renderer.destinationTitleColor = .brown

renderer.map = mapView
```

![Directions Renderer](../resources/directions-renderer.jpg) 

### 2. Xóa Directions Renderer khỏi bản đồ

Để xóa **Directions Renderer** khỏi bản đồ, chúng ta **set** thuộc tính **map** bằng **nil**

```swift
renderer.map = nil
```

### 3. Tùy chỉnh cho Directions Renderer

Bạn có thể dễ dàng tuỳ chỉnh **Directions Renderer** thông qua các thuộc tính mà **MFDirectionsRenderer** cung cấp như sau:

| Name                    | Description                                                                                    |
|-------------------------|------------------------------------------------------------------------------------------------|
| routes                  | Tùy chỉnh các chỉ đường cho Directions Renderer.                                               |
| activedIndex            | Chọn index của chỉ đường chính (trong trường hợp có nhiều chỉ đường).                          |
| hideOriginPOI           | Ẩn hiện POI đánh dấu vị trí bắt đầu.                                                           |
| originPosition          | Vị trí bắt đầu (nếu không thiết lập thì vị trí bắt đầu trùng với vị trí đầu của chỉ đường).    |
| originIcon              | Icon cho vị trí bắt đầu (set nil thì lấy giá trị mặc định).                                    |
| originGroundAnchor      | Xác định điểm neo cho icon của vị trí bắt đầu                                                  |
| originTitle             | Title cho vị trí bắt đầu.                                                                      |
| originTitleColor        | Màu sắc của title cho vị trí bắt đầu.                                                          |
| hideDestinationPOI      | Ẩn/hiện POI đánh dấu vị trí kết thúc.                                                          |
| destinationPosition     | Vị trí kết thúc (nếu không thiết lập thì vị trí kết thúc trùng với vị trí cuối của chỉ đường). |
| destinationIcon         | Icon cho vị trí kết thúc (set nil thì lấy giá trị mặc định).                                   |
| destinationGroundAnchor | Xác định điểm neo cho icon của vị trí kết thúc                                                 |
| destinationTitle        | Title cho vị trí kết thúc.                                                                     |
| destinationTitleColor   | Màu sắc của title cho vị trí kết thúc.                                                         |
| activeStrokeWidth       | Chiều rộng chỉ đường của đường chính (được set activeIndex).                                   |
| activeStrokeColor       | Màu của chỉ đường chính.                                                                       |
| activeOutlineWidth      | Chiều rộng viền của đường chính.                                                               |
| activeOutlineColor      | Màu viền của đường chính.                                                                      |
| inactiveStrokeWidth     | Chiều rộng của đường phụ (có index khác với activeIndex).                                      |
| inactiveStrokeColor     | Màu của đường phụ.                                                                             |
| inactiveOutlineWidth    | Chiều rộng viền của đường phụ.                                                                 |
| inactiveOutlineColor    | Màu viền của đường phụ.                                                                        |

### 4. Sự kiện tap on Directions Renderer

Map4D SDK cung cấp delegate trong `MFMapViewDelegate` để ứng dụng có thể xác định được khi nào người dùng chạm vào Directions Renderer.  
Delegate cung cấp đối tượng Directions Renderer phát sinh sự kiện vào route index mà người dùng chạm vào.  
Để sử dụng Directions Renderer delegate, ta implement phương thức từ protocol `MFMapViewDelegate`.

  ```swift 
  func mapView(_ mapView: MFMapView?, didTap renderer: MFDirectionsRenderer?, routeIndex: UInt) {}
  ```

---

## API Reference :id=api-directions-renderer

`MFDirectionsRenderer` class

#### Constructor :id=api-directions-renderer-constructor

```swift 
let renderer = MFDirectionsRenderer()
```

#### Properties :id=api-directions-renderer-properties

| Name                    | Type                                                  | Description                                                                                    |
|-------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------|
| map                     | [MFMapView](/guides/map.md?id=api-map-mfmapview)              | Chỉ định map view sẽ hiển thị các chỉ đường hoặc xóa chỉ đường khỏi map (set bằng nil).        |
| zIndex                  | Float | Thứ tự hiển thị của Directions Renderer. |
| routes                  | [NSArray\<MFPath\>](/guides/coordinates.md?id=api-coordinates-mfpath) | Mảng các MFPath xác định các chỉ đường cho Directions Renderer.                                |
| activedIndex            | NSUInteger                                            | Chọn index của chỉ đường chính (trong trường hợp có nhiều chỉ đường).                          |
| hideOriginPOI           | BOOL                                                  | Ẩn/hiện POI vị trí bắt đầu.                                                                    |
| originPosition          | CLLocationCoordinate2D                                | Vị trí bắt đầu (nếu không thiết lập thì vị trí bắt đầu trùng với vị trí đầu của chỉ đường).    |
| originIcon              | UIImage                                               | Icon cho vị trí bắt đầu (set nil thì lấy giá trị mặc định).                                    |
| originGroundAnchor      | CGPoint                                               | Xác định điểm neo cho icon của vị trí bắt đầu                                                  |
| originTitle             | NSString                                              | Title cho vị trí bắt đầu.                                                                      |
| originTitleColor        | UIColor                                               | Màu sắc của title cho vị trí bắt đầu.                                                          |
| hideDestinationPOI      | BOOL                                                  | Ẩn/hiện POI vị trí kết thúc                                                                    |
| destinationPosition     | CLLocationCoordinate2D                                | Vị trí kết thúc (nếu không thiết lập thì vị trí kết thúc trùng với vị trí cuối của chỉ đường). |
| destinationIcon         | UIImage                                               | Icon cho vị trí kết thúc (set nil thì lấy giá trị mặc định).                                   |
| destinationGroundAnchor | CGPoint                                               | Xác định điểm neo cho icon của vị trí kết thúc                                                 |
| destinationTitle        | NSString                                              | Title cho vị trí kết thúc.                                                                     |
| destinationTitleColor   | UIColor                                               | Màu sắc của title cho vị trí kết thúc.                                                         |
| activeStrokeWidth       | CGFloat                                               | Chiều rộng chỉ đường của đường chính (được set activeIndex).                                   |
| activeStrokeColor       | UIColor                                               | Màu của chỉ đường chính.                                                                       |
| activeOutlineWidth      | CGFloat                                               | Chiều rộng viền của đường chính.                                                               |
| activeOutlineColor      | UIColor                                               | Màu viền của đường chính.                                                                      |
| inactiveStrokeWidth     | CGFloat                                               | Chiều rộng của đường phụ (có index khác với activeIndex).                                      |
| inactiveStrokeColor     | UIColor                                               | Màu của đường phụ.                                                                             |
| inactiveOutlineWidth    | CGFloat                                               | Chiều rộng viền của đường phụ.                                                                 |
| inactiveOutlineColor    | UIColor                                               | Màu viền của đường phụ.                                                                        |

#### Methods :id=api-directions-renderer-methods

| Name              | Parameters        | Return value | Description                                                                     |
|-------------------|-------------------|--------------|---------------------------------------------------------------------------------|
| setRoutesWithJson | NSString          | `void`       | Set các chỉ đường bằng dữ liệu dạng json (lấy từ Map4D API /sdk/route).         |
| setDatas          | NSArray\<NSData\> | `void`       | Set các chỉ đường bằng dữ liệu dạng binary data (lấy từ Map4D Service MFRoute). |

#### Delegate :id=api-directions-renderer-delegate

Map4D SDK cung cấp delegate trong `MFMapViewDelegate` để ứng dụng có thể xác định được khi nào người dùng chạm vào Directions Renderer.  
Delegate cung cấp đối tượng Directions Renderer phát sinh sự kiện vào route index mà người dùng chạm vào.  
Để sử dụng Directions Renderer delegate, ta implement phương thức từ protocol `MFMapViewDelegate`.

  ```swift 
  func mapView(_ mapView: MFMapView?, didTap renderer: MFDirectionsRenderer?, routeIndex: UInt) {}
  ```

