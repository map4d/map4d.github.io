# Building Overlay

Building overlay là một loại overlay cho phép người dùng hiển thị các building từ nhiều nguồn khác nhau lên bản đồ, kết hợp với building sẵn có của bản đồ.  
Building overlay chỉ hiển thị ở chế độ 3D.

![Building Overlay](../resources/v1.5/building-overlay.png)

## Add Building overlay

Để thêm 1 building overlay vào map cần tạo mới 1 đối tượng của lớp [MFURLBuildingLayer](/guides/building-overlay.md?id=api-building-overlay-mfurlbuildinglayer-class) sau đó set `map` cho building overlay đó.  
Hàm khởi tạo của lớp [MFURLBuildingLayer](/guides/building-overlay.md?id=api-building-overlay-mfurlbuildinglayer-class) yêu cầu đối tượng implement protocol [MFBuildingURLConstructor](/guides/building-overlay.md?id=api-building-overlay-mfbuildingurlconstructor-protocol)  

Implement **MFBuildingURLConstructor** protocol yêu cầu 2 phương thức `getBuildingUrlWith` và `parserBuildingData`.  
Trong đó:  
- getBuildingUrlWith: Nhận vào các giá trị là toạ độ x, y và mức zoom của tile, kết quả là một kiểu [URL](https://developer.apple.com/documentation/foundation/url) chỉ đến rest api cung cấp dữ liệu building theo tile.
- parserBuildingData: Nhận vào là dữ liệu được về từ api cung cấp bởi *getBuildingUrlWith*, ta sẽ phải parser dữ liệu đó thành mảng các đối tượng [MFBuildingData](/guides/building-overlay.md?id=api-building-overlay-mfbuildingdata-class)

### Tạo mới Building overlay

Đoạn code bên dưới hướng dẫn cách implement [MFBuildingURLConstructor](/guides/building-overlay.md?id=api-building-overlay-mfbuildingurlconstructor-protocol) và tạo đối tượng [MFURLBuildingLayer](/guides/building-overlay.md?id=api-building-overlay-mfurlbuildinglayer-class)

Implement **MFBuildingURLConstructor**
```swift
class BuildingURLConstructor : NSObject, MFBuildingURLConstructor {
  func getBuildingUrlWith(x: UInt, y: UInt, zoom: UInt) -> URL? {
    let url = "https://poi-random.herokuapp.com/poi/\(zoom)/\(x)/\(y)"
    return URL(string: url)
  }
  
  func parserBuildingData(_ data: String) -> [MFBuildingData]? {
    do {
      var buildingDatas:[MFBuildingData] = []
      let decoder = JSONDecoder()
      let poisJson = try decoder.decode(POIsJson.self, from: data.data(using: .utf8)!)
      
      guard let places = poisJson.pois else { return nil }
      for place in places {
        guard let placeId = place.id else { continue }
        let position = CLLocationCoordinate2D(latitude: place.position?.lat ?? 0, longitude: place.position?.lng ?? 0)
        let model = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/models/5db6b4798b4711141457d8a9.obj"
        let texture = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/textures/5db6b4798b4711141457d8ab.jpg"
        let building = MFBuildingData(id: placeId, position: position, model: model, texture: texture)
        buildingDatas.append(building)
        break;
      }
      
      return buildingDatas;
    } catch let err {
      print(err.localizedDescription)
      return nil
    }
  }
}
```

Tạo đối tượng **MFURLBuildingLayer**
```swift
let urlConstructor = BuildingURLConstructor()
let buildingOverlay = MFURLBuildingLayer(urlConstructor: urlConstructor, prefixId: "building-layer-")
```

### Add Building overlay lên Map

Để vẽ building overlay lên map, ta set map view cho property `map` của đối tượng **MFURLBuildingLayer**

```swift
buildingOverlay.map = mapView
```

### Remove Building overlay

Để xóa building overlay khỏi map, ta set property `map` của đối tượng **MFURLBuildingLayer** thành `nil`

```swift
buildingOverlay.map = nil
```

### Ẩn/Hiện Building Overlay

Set giá trị cho property `isHidden` để ẩn/hiện building overlay.  
**Chú ý**: Mặc dù building overlay không hiển thị nhưng quá trình tải các building vẫn diễn ra

```swift
buildingOverlay.isHidden = true
```

## Sự kiện đối với building thuộc building overlay

Các sự kiện đối với building thuộc building overlay phát sinh tương tự với building của bản đồ, việc xử lý được diễn ra ngay tại hàm xử lý sự kiện của bản đồ.

```swift
func mapView(_ mapView: MFMapView!, didTapBuildingWithBuildingID buildingID: String!, name: String!, location: CLLocationCoordinate2D)
```

---

## API Reference :id=api-building-overlay

### MFURLBuildingLayer class :id=api-building-overlay-mfurlbuildinglayer-class
`MFURLBuildingLayer` class

**Constructor** 

Lớp `MFURLBuildingLayer` cung cấp một số phương thức static để tạo đối tượng *MFURLBuildingLayer* một cách tiện lợi
```swift
convenience init(urlConstructor: MFBuildingURLConstructor)
convenience init(urlConstructor: MFBuildingURLConstructor, prefixId: String?)
```

- Parameters:
  - urlConstructor: [MFBuildingURLConstructor](#mfbuildingurlconstructor-protocol) *required*
  - prefixId: [String](https://developer.apple.com/documentation/swift/string)

Sử dụng

```swift
let buildingOverlay = MFURLBuildingLayer(urlConstructor: urlConstructor, prefixId: "building-layer-")
```

**Methods**

| Name              | Parameters  | Return Value | Description                                                           |
|-------------------|-------------|--------------|-----------------------------------------------------------------------|
| `clearBuildingCache()` | () | Void | Xoá cache của đối tượng building overlay và load lại dữ liệu building theo tile từ server |

**Properties**

| Name         | Type      | Description                                                                            |
|--------------|-----------|----------------------------------------------------------------------------------------|
| **map**      | [MFMapView](/guides/map.md?id=api-map-mfmapview) | Map view sẽ hiển thị building overlay |
| **isHidden** | Bool                                           | Ẩn/hiện building overlay trên map |
| **prefixId** | String                                       | Giá trị được thêm vào trước mỗi id của Builing thuộc building overlay |

### MFBuildingURLConstructor protocol :id=api-building-overlay-mfbuildingurlconstructor-protocol
`MFBuildingURLConstructor` protocol

MFBuildingURLConstructor là một protocol, định nghĩa sẵn 2 phương thức dùng để xác định URL api lấy dữ liệu building và xử lý parser data được lấy từ api.

```swift
func getBuildingUrlWith(x: UInt, y: UInt, zoom: UInt) -> URL?
func parserBuildingData(_ data: String) -> [MFBuildingData]?
```

Cần phải implement protocol này trước khi tạo đối tượng `MFURLBuildingLayer`

### MFBuildingData class :id=api-building-overlay-mfbuildingdata-class
`MFBuildingData` class

MFBuildingData là object chứa thông tin của building để iOS SDK có thể hiểu được, người sử dụng building overlay sẽ thực hiện implement phương thức `parserBuildingData` để biến đổi dữ liệu trả về từ server của mình thành mảng các building data cung cấp cho iOS SDK hiển thị lên bản đồ.

| Name           | Type      | Description                                                                            |
|----------------|-----------|----------------------------------------------------------------------------------------|
| **id**         | String               | ID của building |
| **position**   | CLLocationCoordinate2D | Vị trí hiển thị building trên bản đồ |
| **name**       | String               | Tên của building  |
| **scale**      | Double                 | Tỉ lệ hiển thị của building so với kích thước thực tế |
| **bearing**    | Float                  | Góc quay của building khi được vẽ ra trên bản đồ (đơn vị: độ) |
| **elevation**  | Double                 | Độ cao của building so với mực nước biển (đơn vị: mét) |
| **height**     | Double                 | Chiều cao của building (đơn vị: mét) |
| **model**      | String               | Đường dẫn URL để lấy dữ liệu model cho building |
| **texture**    | String               | Đường dẫn URL để lấy dữ liệu texture cho building |
| **coordinates**| [MFPath](/guides/coordinates.md?id=api-coordinates-mfpath)             | Một mảng vị trí CLLocationCoordinate2D để tạo một Building hình khối với mặt đáy của hình khối là mảng vị trí này. Kết hợp với height để tạo chiều cao |
| **startDate**  | Date                 | Ngày bắt đầu hiển thị building |
| **endDate**    | Date                 | Ngày kết thúc hiển thị building |

**Chú ý:**
- Trường hợp dùng `model` nhưng `texture` là **`nil`** thì building sẽ được tô màu trắng.
- Trường hợp dùng `model` thì sẽ không dùng đến thuộc tính `coordinates`. Nếu set giá trị cho `coordinates` và cả `model` đồng thời thì sẽ ưu tiên lấy giá trị của `model` để tạo Building
