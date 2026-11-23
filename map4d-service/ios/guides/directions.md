# Directions

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_route>

> API đùng để tìm đường đi giữa các địa điểm.

### Usage

- Service: [MFDirectionsService](/guides/directions-service.md?id=api-directions-service)
- Params: [MFDirectionsParams](/guides/directions.md?id=api-directions-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: [MFDirectionsResult](/guides/directions.md?id=api-directions-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let origin = MFLocationComponent(latitude: 16.024634, longitude: 108.209217)
let destination = MFLocationComponent(latitude: 16.020179, longitude: 108.211212)
let params = MFDirectionsParams(origin: origin, destination: destination)
let service = MFDirectionsService()

service.fetchDirections(with: params) { result, error in
  guard let result = result else {
    print("Error: \(error!.message)")
    return
  }

  // ...
}
```

#### ** Objective-C **
```objc
MFLocationComponent *origin = [[MFLocationComponent alloc] initWithLatitude:16.073765 longitude:108.211724];
MFLocationComponent *destination = [[MFLocationComponent alloc] initWithLatitude:16.073486 longitude:108.211813];
MFDirectionsParams *params = [[MFDirectionsParams alloc] initWithOrigin:origin destination:destination];
MFDirectionsService* service = [[MFDirectionsService alloc] init];

[service fetchDirectionsWithParams:params
                 completionHandler:^(id<MFDirectionsResult>  _Nullable result, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (result != nil) {
    // ...
  }
}];
```
<!-- tabs:end -->

---

## Directions Params :id=api-directions-params

`MFDirectionsParams` class

#### Public Member Functions :id=api-directions-params-public-member-functions

##### initWithOrigin: destination: :id=api-directions-params-initwithorigin-destination

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin destination:(MFLocationComponent *)destination;
```

Tạo đối tượng `MFDirectionsParams` với 2 địa điểm origin và destination.

##### initWithOrigin: destination: mode: weighting: :id=api-directions-params-initwithorigin-destination-mode-weighting

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin
                   destination:(MFLocationComponent *)destination
                          mode:(MFTravelMode)mode
                     weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDirectionsParams` với các tham số: origin, destination, mode và weighting.

#### Properties :id=api-directions-params-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origin      | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Vị trí bắt đầu dùng để tìm đường.                                                  |
| destination | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Vị trí đích.                                                                       |
| waypoints   | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)> | Các điểm sẽ đi qua.                                                                |
| mode        | [MFTravelMode](/guides/travel-mode.md?id=api-travel-mode)                        | Phương thức di chuyển.                                                             |
| weighting   | [MFRouteWeighting](/guides/route-weighting.md?id=api-route-weighting)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction | [MFRouteRestriction](/guides/route-restriction.md?id=api-route-restriction)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language    | [MFLanguageResult](/guides/language-result.md?id=api-language-result)                | Ngôn ngữ dùng để chỉ đường.                                                        |

---

## Directions Result :id=api-directions-result

`MFDirectionsResult` protocol

#### Properties :id=api-directions-result-properties

| Name        | Type                                                | Description             |
|-------------|-----------------------------------------------------|-------------------------|
| routes      | NSArray<[MFRouteResult](/guides/directions.md?id=api-route-result)> | Danh sách các đường đi. |

---

## Route Description Result :id=api-route-description-result

`MFRouteDescriptionResult` protocol

#### Properties :id=api-route-description-result-properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| text              | NSString  |                                       |
| value             | double    |                                       |

---

## Route Leg Result :id=api-route-leg-result

`MFRouteLegResult` protocol

#### Properties :id=api-route-leg-result-properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| steps           | NSArray<[MFRouteStepResult](/guides/directions.md?id=api-route-step-result)>               | Danh sách các bước cần thực hiện                                                                                                         |
| distance        | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startAddress    | NSString                                                                   | Địa chỉ bắt đầu                                                                                                                          |
| endAddress      | NSString                                                                   | Địa chỉ kết thúc                                                                                                                         |
| startLocation   | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                     | Điểm kết thúc                                                                                                                            |

---

## Route Result :id=api-route-result

`MFRouteResult` protocol

#### Public Member Functions :id=api-route-result-public-member-functions

##### polyline: :id=api-route-result-polyline

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

#### Properties :id=api-route-result-properties

| Name             | Type                                                                       | Description                                                                                                                              |
|------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| legs             | NSArray<[MFRouteLegResult](/guides/directions.md?id=api-route-leg-result)>                 | Danh sách đoạn đường để đi qua điểm trung gian                                                                                           |
| summary          | NSString                                                                   | Tóm lược đường đi                                                                                                                        |
| distance         | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration         | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| encodedPolyline  | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| snappedLocations | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)>            | Danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc                                               |

---

## Route Step Result :id=api-route-step-result

`MFRouteStepResult` protocol

#### Public Member Functions :id=api-route-step-result-public-member-functions

##### polyline: :id=api-route-step-result-polyline

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

#### Properties :id=api-route-step-result-properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| distance        | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startLocation   | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                     | Điểm kết thúc                                                                                                                            |
| instructions    | NSString                                                                   | Mô tả bước cần thực hiện dạng html                                                                                                       |
| maneuver        | NSString                                                                   | Hướng chuyển đổi                                                                                                                         |
| encodedPolyline | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| streetName      | NSString                                                                   | Tên đường                                                                                                                                |
| mode            | [MFTravelMode](/guides/travel-mode.md?id=api-travel-mode)                                   | Phương tiện di chuyển                                                                                                                    |
