# Directions Renderer

`MFDirectionsRenderer` class

### Constructor

<!-- tabs:start -->
#### ** Swift **

```swift 
let renderer = MFDirectionsRenderer()
```

#### ** Objective C **

```objc 
MFDirectionsRenderer *renderer = [[MFDirectionsRenderer alloc] init];
```

<!-- tabs:end -->

### Properties

| Name                    | Type                                                  | Description                                                                                    |
|-------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------|
| map                     | [MFMapView](/reference/map?id=mfmapview)              | Chỉ định map view sẽ hiển thị các chỉ đường hoặc xóa chỉ đường khỏi map (set bằng nil).        |
| routes                  | [NSArray\<MFPath\>](/reference/coordinates?id=mfpath) | Mảng các MFPath xác định các chỉ đường cho Directions Renderer.                                |
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

### Methods

| Name              | Parameters        | Return value | Description                                                                     |
|-------------------|-------------------|--------------|---------------------------------------------------------------------------------|
| setRoutesWithJson | NSString          | `void`       | Set các chỉ đường bằng dữ liệu dạng json (lấy từ Map4D API /sdk/route).         |
| setDatas          | NSArray\<NSData\> | `void`       | Set các chỉ đường bằng dữ liệu dạng binary data (lấy từ Map4D Service MFRoute). |

### Delegate

Map4D SDK cung cấp delegate trong `MFMapViewDelegate` để ứng dụng có thể xác định được khi nào người dùng chạm vào Directions Renderer.  
Delegate cung cấp đối tượng Directions Renderer phát sinh sự kiện vào route index mà người dùng chạm vào.  
Để sử dụng Directions Renderer delegate, ta implement phương thức từ protocol `MFMapViewDelegate`.

  <!-- tabs:start -->

  #### ** Swift **

  ```swift 
  func mapView(_ mapView: MFMapView?, didTap renderer: MFDirectionsRenderer?, routeIndex: Int) {}
  ```

  #### ** Objective C **

  ```objc 
  - (void)mapView:(MFMapView*)mapView didTapDirectionsRenderer:(MFDirectionsRenderer*)renderer routeIndex:(NSUInteger)routeIndex {}
  ```

  <!-- tabs:end -->