# Directions

> API dùng để tìm đường đi giữa các địa điểm.

### Usage

- Service: [MFDirectionsService](/guides/directions-service.md?id=api-directions-service)
- Params: [MFDirectionsParams](/guides/directions.md?id=api-directions-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: [MFDirectionsResult](/guides/directions.md?id=api-directions-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let origin = MFLocationComponent(latitude: 16.024634, longitude: 108.209217)
let destination = MFLocationComponent(latitude: 16.020179, longitude: 108.211212)
let params = MFDirectionsParams(origin: origin, destination: destination)
let service = MFDirectionsService()

service.fetchDirections(with: params) { result, error in
  guard let result = result else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  for route in result.routes ?? [] {
    print("Distance: \(route.distance.value) m")
    print("Duration: \(route.duration.value) s")
  }
}
```

---

## Directions Params :id=api-directions-params

`MFDirectionsParams` class

#### Public Member Functions :id=api-directions-params-public-member-functions

##### `init(origin:destination:)` :id=api-directions-params-initwithorigin-destination

```swift
init(origin: MFLocationComponent, destination: MFLocationComponent)
```

Tạo đối tượng `MFDirectionsParams` với 2 địa điểm origin và destination.

##### `init(origin:destination:mode:weighting:)` :id=api-directions-params-initwithorigin-destination-mode-weighting

```swift
init(origin: MFLocationComponent,
     destination: MFLocationComponent,
     mode: MFTravelMode,
     weighting: MFRouteWeighting)
```

Tạo đối tượng `MFDirectionsParams` với các tham số: origin, destination, mode và weighting.

#### Properties :id=api-directions-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| origin | MFLocationComponent | Đọc/ghi | Vị trí bắt đầu dùng để tìm đường. |
| destination | MFLocationComponent | Đọc/ghi | Vị trí đích. |
| waypoints | [MFLocationComponent]? | Đọc/ghi | Các điểm sẽ đi qua. |
| mode | MFTravelMode | Đọc/ghi | Phương thức di chuyển, mặc định .car. |
| language | MFLanguageResult | Đọc/ghi | Ngôn ngữ kết quả, mặc định .vietnamese. |
| weighting | MFRouteWeighting | Đọc/ghi | Thuộc tính tìm kiếm (.shortest, .fastest hoặc .balance), mặc định .fastest. |
| restriction | MFRouteRestriction? | Đọc/ghi | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| departureTime | Date? | Đọc/ghi | Thời điểm khởi hành; nil khi không chỉ định. |

---

## Directions Result :id=api-directions-result

`MFDirectionsResult` class

#### Properties :id=api-directions-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| routes | [MFRouteResult]? | Chỉ đọc | Danh sách các đường đi. |

---

## Route Description Result :id=api-route-description-result

`MFRouteDescriptionResult` class

#### Properties :id=api-route-description-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| text | String | Chỉ đọc | Nội dung mô tả. |
| value | Double | Chỉ đọc | Giá trị số: mét với khoảng cách, giây với thời gian. |

---

## Route Leg Result :id=api-route-leg-result

`MFRouteLegResult` class

#### Properties :id=api-route-leg-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| steps | [MFRouteStepResult] | Chỉ đọc | Danh sách các bước cần thực hiện |
| distance | MFRouteDescriptionResult | Chỉ đọc | Khoảng cách; value tính bằng mét. |
| duration | MFRouteDescriptionResult | Chỉ đọc | Thời gian di chuyển; value tính bằng giây. |
| startAddress | String? | Chỉ đọc | Địa chỉ bắt đầu |
| endAddress | String? | Chỉ đọc | Địa chỉ kết thúc |
| startLocation | MFLocationComponent | Chỉ đọc | Điểm bắt đầu |
| endLocation | MFLocationComponent | Chỉ đọc | Điểm kết thúc |

---

## Route Result :id=api-route-result

`MFRouteResult` class

#### Public Member Functions :id=api-route-result-public-member-functions

##### polyline: :id=api-route-result-polyline

```swift
func polyline() -> [MFLocationComponent]
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

#### Properties :id=api-route-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| legs | [MFRouteLegResult] | Chỉ đọc | Danh sách đoạn đường để đi qua điểm trung gian |
| encodedPolyline | String | Chỉ đọc | Đường đi từng điểm dưới dạng mã hóa |
| summary | String | Chỉ đọc | Tóm lược đường đi |
| distance | MFRouteDescriptionResult | Chỉ đọc | Khoảng cách; value tính bằng mét. |
| duration | MFRouteDescriptionResult | Chỉ đọc | Thời gian di chuyển; value tính bằng giây. |
| snappedLocations | [MFLocationComponent] | Chỉ đọc | Danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc |

---

## Route Step Result :id=api-route-step-result

`MFRouteStepResult` class

#### Public Member Functions :id=api-route-step-result-public-member-functions

##### polyline: :id=api-route-step-result-polyline

```swift
func polyline() -> [MFLocationComponent]
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

#### Properties :id=api-route-step-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| distance | MFRouteDescriptionResult | Chỉ đọc | Khoảng cách; value tính bằng mét. |
| duration | MFRouteDescriptionResult | Chỉ đọc | Thời gian di chuyển; value tính bằng giây. |
| startLocation | MFLocationComponent | Chỉ đọc | Điểm bắt đầu |
| endLocation | MFLocationComponent | Chỉ đọc | Điểm kết thúc |
| instructions | String | Chỉ đọc | Mô tả bước cần thực hiện dạng html |
| maneuver | String | Chỉ đọc | Hướng chuyển đổi |
| encodedPolyline | String | Chỉ đọc | Đường đi từng điểm dưới dạng mã hóa |
| streetName | String | Chỉ đọc | Tên đường |
| mode | MFTravelMode | Chỉ đọc | Phương tiện di chuyển |
