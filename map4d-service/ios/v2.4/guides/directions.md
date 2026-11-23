# Directions

iPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_route>

> API đùng để tìm đường đi giữa các địa điểm.

### Usage

- Service: [MFDirectionsService](guides/directions.md?id=reference-directions-service)
- Params: [MFDirectionsParams](guides/directions.md?id=reference-directions-params)
- Return: [MFServiceTask](guides/directions.md?id=reference-service-task)
- Callback:
  + Result: [MFDirectionsResult](guides/directions.md?id=reference-directions-result)
  + Error: [MFServiceError](guides/directions.md?id=reference-service-error)

### Example

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

Thêm loại đường [MFRouteType](guides/directions.md?id=reference-route-type) giới hạn vào đối tượng `MFRouteRestriction`


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

Định nghĩa các loại đường sử dụng cho việc giới hạn *([MFRouteRestriction](guides/directions.md?id=reference-route-restriction))* tìm kiếm, tính toán chỉ đường.

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

<a id="reference-directions-params"></a>

## Directions Params

`MFDirectionsParams` class

### Public Member Functions

#### initWithOrigin: destination:

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin destination:(MFLocationComponent *)destination;
```

Tạo đối tượng `MFDirectionsParams` với 2 địa điểm origin và destination.

#### initWithOrigin: destination: mode: weighting:

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin
                   destination:(MFLocationComponent *)destination
                          mode:(MFTravelMode)mode
                     weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDirectionsParams` với các tham số: origin, destination, mode và weighting.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origin      | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)          | Vị trí bắt đầu dùng để tìm đường.                                                  |
| destination | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)          | Vị trí đích.                                                                       |
| waypoints   | NSArray<[MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)> | Các điểm sẽ đi qua.                                                                |
| mode        | [MFTravelMode](guides/directions.md?id=reference-travel-mode)                        | Phương thức di chuyển.                                                             |
| weighting   | [MFRouteWeighting](guides/directions.md?id=reference-route-weighting)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction | [MFRouteRestriction](guides/directions.md?id=reference-route-restriction)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language    | [MFLanguageResult](guides/directions.md?id=reference-language-result)                | Ngôn ngữ dùng để chỉ đường.                                                        |

<a id="reference-directions-result"></a>

## Directions Result

`MFDirectionsResult` protocol

### Properties

| Name        | Type                                                | Description             |
|-------------|-----------------------------------------------------|-------------------------|
| routes      | NSArray<[MFRouteResult](guides/directions.md?id=reference-route-result)> | Danh sách các đường đi. |

<a id="reference-route-result"></a>

## Route Result

`MFRouteResult` protocol

### Public Member Functions

#### polyline:

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

### Properties

| Name             | Type                                                                       | Description                                                                                                                              |
|------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| legs             | NSArray<[MFRouteLegResult](guides/directions.md?id=reference-route-leg-result)>                 | Danh sách đoạn đường để đi qua điểm trung gian                                                                                           |
| summary          | NSString                                                                   | Tóm lược đường đi                                                                                                                        |
| distance         | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration         | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| encodedPolyline  | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| snappedLocations | NSArray<[MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)>            | Danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc                                               |

<a id="reference-route-description-result"></a>

## Route Description Result

`MFRouteDescriptionResult` protocol

### Properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| text              | NSString  |                                       |
| value             | double    |                                       |

<a id="reference-route-leg-result"></a>

## Route Leg Result

`MFRouteLegResult` protocol

### Properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| steps           | NSArray<[MFRouteStepResult](guides/directions.md?id=reference-route-step-result)>               | Danh sách các bước cần thực hiện                                                                                                         |
| distance        | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startAddress    | NSString                                                                   | Địa chỉ bắt đầu                                                                                                                          |
| endAddress      | NSString                                                                   | Địa chỉ kết thúc                                                                                                                         |
| startLocation   | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)                     | Điểm kết thúc                                                                                                                            |

<a id="reference-route-step-result"></a>

## Route Step Result

`MFRouteStepResult` protocol

### Public Member Functions

#### polyline:

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

### Properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| distance        | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](guides/directions.md?id=reference-route-description-result)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startLocation   | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)                     | Điểm kết thúc                                                                                                                            |
| instructions    | NSString                                                                   | Mô tả bước cần thực hiện dạng html                                                                                                       |
| maneuver        | NSString                                                                   | Hướng chuyển đổi                                                                                                                         |
| encodedPolyline | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| streetName      | NSString                                                                   | Tên đường                                                                                                                                |
| mode            | [MFTravelMode](guides/directions.md?id=reference-travel-mode)                                   | Phương tiện di chuyển                                                                                                                    |
