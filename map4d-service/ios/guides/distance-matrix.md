# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

### Usage

- Service: [MFDirectionsService](/guides/directions-service.md?id=api-directions-service)
- Params: [MFDistanceMatrixParams](/guides/distance-matrix.md?id=api-distance-matrix-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: [MFDistanceMatrixResult](/guides/distance-matrix.md?id=api-distance-matrix-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let origins = [
  MFLocationComponent(latitude: 16.024634, longitude: 108.209217),
  MFLocationComponent(latitude: 16.071766, longitude: 108.223615)
]
let destinations = [
  MFLocationComponent(latitude: 16.020179, longitude: 108.211212),
  MFLocationComponent(latitude: 16.061040, longitude: 108.216700),
  MFLocationComponent(latitude: 16.059145, longitude: 108.221297)
]

let params = MFDistanceMatrixParams(origins: origins, destinations: destinations)
let service = MFDirectionsService()

service.fetchDistanceMatrix(with: params) { result, error in
  guard let result = result else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  for (originIndex, row) in (result.rows ?? []).enumerated() {
    for (destinationIndex, element) in (row.elements ?? []).enumerated() {
      print("\(originIndex) -> \(destinationIndex): \(element.distance.value) m, \(element.duration.value) s")
    }
  }
}
```

---

## Distance Matrix Element Result :id=api-distance-matrix-element-result

`MFDistanceMatrixElementResult` class

#### Properties :id=api-distance-matrix-element-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| distance | MFRouteDescriptionResult | Chỉ đọc | Khoảng cách; value tính bằng mét. |
| duration | MFRouteDescriptionResult | Chỉ đọc | Thời gian di chuyển; value tính bằng giây. |
| status | String? | Chỉ đọc |  |

---

## Distance Matrix Params :id=api-distance-matrix-params

`MFDistanceMatrixParams` class

#### Public Member Functions :id=api-distance-matrix-params-public-member-functions

##### initWithOrigins: destinations: :id=api-distance-matrix-params-initwithorigins-destinations

```swift
init(origins: [MFLocationComponent], destinations: [MFLocationComponent])
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins và destinations

##### initWithOrigins: destinations: mode: weighting: :id=api-distance-matrix-params-initwithorigins-destinations-mode-weighting

```swift
init(origins: [MFLocationComponent],
     destinations: [MFLocationComponent],
     mode: MFTravelMode,
     weighting: MFRouteWeighting)
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins, destinations cùng với mode và weighting

#### Properties :id=api-distance-matrix-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| origins | [MFLocationComponent] | Chỉ đọc | Vị trí các điểm bắt đầu dùng để tính toán ma trận Tối đa 10 vị trí. |
| destinations | [MFLocationComponent] | Chỉ đọc | Vị trí các điểm kết thúc dùng để tính toán ma trận Tối đa 10 vị trí. |
| mode | MFTravelMode | Đọc/ghi | Phương thức di chuyển, mặc định .car. |
| language | MFLanguageResult | Đọc/ghi | Ngôn ngữ kết quả, mặc định .vietnamese. |
| weighting | MFRouteWeighting | Đọc/ghi | Thuộc tính tìm kiếm (.shortest, .fastest hoặc .balance), mặc định .fastest. |
| restriction | MFRouteRestriction? | Đọc/ghi | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| departureTime | Date? | Đọc/ghi | Thời điểm khởi hành; nil khi không chỉ định. |

---

## Distance Matrix Result :id=api-distance-matrix-result

`MFDistanceMatrixResult` class

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| rows | [CLLocation] | Chỉ đọc | Mỗi hàng ứng với một điểm xuất phát trong origins. |

---

## Distance Matrix Row Result :id=api-distance-matrix-row-result

`MFDistanceMatrixRowResult` class

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| elements | [MFDistanceMatrixElementResult]? | Chỉ đọc | Các phần tử lần lượt ứng với các điểm đến trong destinations. |
