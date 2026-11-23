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

<!-- tabs:start -->
#### ** Swift **
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
    print("Error: \(error!.message)")
    return
  }

  // ...
}
```

#### ** Objective-C **
```objc
MFLocationComponent *origin = [[MFLocationComponent alloc] initWithLatitude:16.024634 longitude:108.209217];
MFLocationComponent *destination = [[MFLocationComponent alloc] initWithLatitude:16.020179 longitude:108.211212];
MFDistanceMatrixParams *params = [[MFDistanceMatrixParams alloc] initWithOrigins:[NSArray arrayWithObject:origin]
                                                                    destinations:[NSArray arrayWithObject:destination]
                                                                            mode:MFTravelModeBike
                                                                       weighting:MFRouteWeightingBalance];
MFPlacesService* service = [[MFDirectionsService alloc] init];

[service fetchDistanceMatrixWithParams:params
                     completionHandler:^(id<MFDistanceMatrixResult>  _Nullable result, id<MFServiceError>  _Nullable error) {
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

## Distance Matrix Element Result :id=api-distance-matrix-element-result

`MFDistanceMatrixElementResult` protocol

#### Properties :id=api-distance-matrix-element-result-properties

| Name        | Type                                                                       | Description                                                                                                                              |
|-------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| distance    | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration    | NSArray<[MFRouteDescriptionResult](/guides/directions.md?id=api-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |

---

## Distance Matrix Params :id=api-distance-matrix-params

`MFDistanceMatrixParams` class

#### Public Member Functions :id=api-distance-matrix-params-public-member-functions

##### initWithOrigins: destinations: :id=api-distance-matrix-params-initwithorigins-destinations

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins destinations:(NSArray<MFLocationComponent *> *)destinations;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins và destinations

##### initWithOrigins: destinations: mode: weighting: :id=api-distance-matrix-params-initwithorigins-destinations-mode-weighting

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins
                   destinations:(NSArray<MFLocationComponent *> *)destinations
                           mode:(MFTravelMode)mode
                      weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins, destinations cùng với mode và weighting

#### Properties :id=api-distance-matrix-params-properties

| Name         | Type                                                            | Description                                                                        |
|--------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origins      | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)> | Vị trí các điểm bắt đầu dùng để tính toán ma trận                                  |
| destinations | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)> | Vị trí các điểm kết thúc dùng để tính toán ma trận                                 |
| mode         | [MFTravelMode](/guides/travel-mode.md?id=api-travel-mode)                        | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](/guides/route-weighting.md?id=api-route-weighting)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction  | [MFRouteRestriction](/guides/route-restriction.md?id=api-route-restriction)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language     | [MFLanguageResult](/guides/language-result.md?id=api-language-result)                | Ngôn ngữ dùng để chỉ đường.                                                        |

---

## Distance Matrix Result :id=api-distance-matrix-result

`MFDistanceMatrixResult` protocol

| Name         | Type                                                                          | Description                                                                        |
|--------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| rows         | NSArray<[MFDistanceMatrixRowResult](/guides/distance-matrix.md?id=api-distance-matrix-row-result)> |                                                                                    |

---

## Distance Matrix Row Result :id=api-distance-matrix-row-result

`MFDistanceMatrixRowResult` protocol

| Name         | Type                                                                                  | Description                                                                        |
|--------------|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| elements     | NSArray<[MFDistanceMatrixElementResult](/guides/distance-matrix.md?id=api-distance-matrix-element-result)> |                                                                                    |
