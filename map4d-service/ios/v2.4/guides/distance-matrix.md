# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

### Usage

- Service: [MFDirectionsService](guides/distance-matrix.md?id=reference-directions-service)
- Params: [MFDistanceMatrixParams](guides/distance-matrix.md?id=reference-distance-matrix-params)
- Return: [MFServiceTask](guides/distance-matrix.md?id=reference-service-task)
- Callback:
  + Result: [MFDistanceMatrixResult](guides/distance-matrix.md?id=reference-distance-matrix-result)
  + Error: [MFServiceError](guides/distance-matrix.md?id=reference-service-error)

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

## API Reference

<a id="reference-directions-service"></a>

## Directions Service

`MFDirectionsService` class

### Types

#### MFDirectionsCallback

```objc
typedef void(^MFDirectionsCallback)(id<MFDirectionsResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFDistanceMatrixCallback

```objc
typedef void(^MFDistanceMatrixCallback)(id<MFDistanceMatrixResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFGraphRouteCallback

```objc
typedef void(^MFGraphRouteCallback)(NSArray<id<MFGraphRouteResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFRouteETACallback

```objc
typedef void(^MFRouteETACallback)(NSArray<id<MFRouteETAResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

### Public Member Functions

#### fetchDirectionsWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchDirectionsWithParams:(MFDirectionsParams *)params
                             completionHandler:(MFDirectionsCallback)completionHandler;
```

Tìm kiếm chỉ đường giữa các địa điểm.

#### fetchRouteETAWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchRouteETAWithParams:(MFRouteETAParams *)params
                           completionHandler:(MFRouteETACallback)completionHandler;
```

Tính toán thời gian di chuyển giữa các địa điểm.

#### fetchDistanceMatrixWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchDistanceMatrixWithParams:(MFDistanceMatrixParams *)params
                                 completionHandler:(MFDistanceMatrixCallback)completionHandler;
```

Tính toán ma trận khoảng cách giữa các địa điểm.

#### fetchGraphRouteWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchGraphRouteWithParams:(MFGraphRouteParams *)params
                             completionHandler:(MFGraphRouteCallback)completionHandler;
```

Tính toán biểu đồ giữa các địa điểm.

<a id="reference-travel-mode"></a>

## Travel Mode

`MFTravelMode` enum

```objc
typedef NS_ENUM(NSUInteger, MFTravelMode) {
  MFTravelModeCar,
  MFTravelModeBike,
  MFTravelModeFoot,
  MFTravelModeMotorcycle
};
```

Định nghĩa các phương thức di chuyển được hỗ trợ:
  - MFTravelModeCar: ô tô
  - MFTravelModeBike: xe đạp
  - MFTravelModeFoot: đi bộ
  - MFTravelModeMotorcycle: xe máy

<a id="reference-route-weighting"></a>

## Route Weighting

`MFRouteWeighting` enum

```objc
typedef NS_ENUM(NSUInteger, MFRouteWeighting) {
  MFRouteWeightingShortest = 0,
  MFRouteWeightingFastest = 1,
  MFRouteWeightingBalance = 2,
};
```

Định nghĩa các thuộc tính dùng để tìm đường:
  - MFRouteWeightingShortest: tìm đường đi ngắn nhất
  - MFRouteWeightingFastest: tìm đường đi nhanh nhất
  - MFRouteWeightingBalance: tìm đường đi cân bằng giữa ngắn nhất và nhanh nhất

<a id="reference-route-restriction"></a>

## Route Restriction Component

`MFRouteRestriction` class

### Public Member Functions

####

```objc
/* Restriction point */
- (instancetype)initWithLocation:(MFLocationComponent *)location;
```

Tạo đối tượng `MFRouteRestriction` với vị trí cần giới hạn.

####

```objc
/* Restriction circle area */
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius;
```

Tạo đối tượng `MFRouteRestriction` với vị trí và radius cần giới hạn.

####

```objc
/* Restriction rectangle area */
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox;
```

Tạo đối tượng `MFRouteRestriction` với khu vực hình chữ nhật cần giới hạn.

####

```objc
/* Restriction polygon area */
- (instancetype)initWithPath:(NSArray<MFLocationComponent *> *)path;
```

Tạo đối tượng `MFRouteRestriction` với khu vực polygon bất kỳ cần giới hạn.

####

```objc
/* Restriction route type */
- (instancetype)initWithRouteType:(MFRouteType)type;
```

Tạo đối tượng `MFRouteRestriction` với loại đường cần giới hạn.

####

```objc
/* Add route type restriction */
- (void)avoidRouteType:(MFRouteType)type;
```

Thêm loại đường [MFRouteType](guides/distance-matrix.md?id=reference-route-type) giới hạn vào đối tượng `MFRouteRestriction`


### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)          |                                                                                    |
| radius      | NSUInteger                                                      |                                                                                    |
| viewbox     | [MFViewboxComponent](guides/viewbox-search.md?id=reference-viewbox-component)            |                                                                                    |
| path        | NSArray<[MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)> |                                                                                    |

<a id="reference-route-type"></a>

## Route Type Restriction

`MFRouteType` enum

```objc
typedef NS_ENUM(NSUInteger, MFRouteType) {
  MFRouteTypeMotorway,
  MFRouteTypeTrunk,
  MFRouteTypeFerry,
  MFRouteTypeBridge,
  MFRouteTypeTunnel
};
```

Định nghĩa các loại đường sử dụng cho việc giới hạn *([MFRouteRestriction](guides/distance-matrix.md?id=reference-route-restriction))* tìm kiếm, tính toán chỉ đường.

<a id="reference-service-task"></a>

## Service Task

`MFServiceTask`protocol

### Public Member Functions

#### abort

```objc
- (void)abort;
```

Hủy bỏ task đang thực hiện.

<a id="reference-service-error"></a>

## Service Error

`MFServiceError` protocol

### Properties

| Name        | Type      | Description     |
|-------------|-----------|-----------------|
| code        | NSString  | Mã lỗi.         |
| message     | NSString  | Nội dung lỗi.   |
| error       | NSError   |                 |

<a id="reference-language-result"></a>

## Language Result

`MFLanguageResult` enum

```objc
typedef NS_ENUM(NSUInteger, MFLanguageResult) {
  MFLanguageResultEnglish,
  MFLanguageResultVietnamese,
};
```

Định nghĩa các loại ngôn ngữ chỉ đường mà Map4d API hỗ trợ:
  - MFLanguageResultEnglish: tiếng Anh
  - MFLanguageResultVietnamese: tiếng Việt

<a id="reference-distance-matrix-params"></a>

## Distance Matrix Params

`MFDistanceMatrixParams` class

### Public Member Functions

#### initWithOrigins: destinations:

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins destinations:(NSArray<MFLocationComponent *> *)destinations;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins và destinations

#### initWithOrigins: destinations: mode: weighting:

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins
                   destinations:(NSArray<MFLocationComponent *> *)destinations
                           mode:(MFTravelMode)mode
                      weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins, destinations cùng với mode và weighting

### Properties

| Name         | Type                                                            | Description                                                                        |
|--------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origins      | NSArray<[MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)> | Vị trí các điểm bắt đầu dùng để tính toán ma trận                                  |
| destinations | NSArray<[MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)> | Vị trí các điểm kết thúc dùng để tính toán ma trận                                 |
| mode         | [MFTravelMode](guides/distance-matrix.md?id=reference-travel-mode)                        | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](guides/distance-matrix.md?id=reference-route-weighting)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction  | [MFRouteRestriction](guides/distance-matrix.md?id=reference-route-restriction)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language     | [MFLanguageResult](guides/distance-matrix.md?id=reference-language-result)                | Ngôn ngữ dùng để chỉ đường.                                                        |

<a id="reference-distance-matrix-result"></a>

## Distance Matrix Result

`MFDistanceMatrixResult` protocol

| Name         | Type                                                                          | Description                                                                        |
|--------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| rows         | NSArray<[MFDistanceMatrixRowResult](guides/distance-matrix.md?id=reference-distance-matrix-row-result)> |                                                                                    |

<a id="reference-distance-matrix-row-result"></a>

## Distance Matrix Row Result

`MFDistanceMatrixRowResult` protocol

| Name         | Type                                                                                  | Description                                                                        |
|--------------|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| elements     | NSArray<[MFDistanceMatrixElementResult](guides/distance-matrix.md?id=reference-distance-matrix-element-result)> |                                                                                    |

<a id="reference-distance-matrix-element-result"></a>

## Distance Matrix Element Result

`MFDistanceMatrixElementResult` protocol

### Properties

| Name        | Type                                                                       | Description                                                                                                                              |
|-------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| distance    | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration    | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
