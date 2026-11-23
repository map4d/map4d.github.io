# Geocode

IPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

### Usage

- Service: [MFPlacesService](guides/geocode.md?id=reference-places-service)
- Params: [MFGeocodeParams](guides/geocode.md?id=reference-geocode-params)
- Return: [MFServiceTask](guides/geocode.md?id=reference-service-task)
- Callback:
  + Result: Array of [MFGeocodeResult](guides/geocode.md?id=reference-geocode-result)
  + Error: [MFServiceError](guides/geocode.md?id=reference-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let params = MFGeocodeParams(location: MFLocationComponent(latitude: 16.024634, longitude: 108.209217))
let service = MFPlacesService()
service.geocoding(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

#### ** Objective-C **
```objc
MFGeocodeParams *params = [[MFGeocodeParams alloc] initWithAddress:@"271 Tran Hung Dao, Da Nang"];
MFPlacesService* service = [[MFPlacesService alloc] init];
[service geocodingWithParams:params completionHandler:^(NSArray<id<MFGeocodeResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }

  if (results != nil) {
    NSLog(@"Results count: %lu", results.count);
  }
}];
```
<!-- tabs:end -->

## API Reference

<a id="reference-places-service"></a>

## Place Service

`MFPlacesService` class

### Types

#### MFSuggestionCallback

```objc
typedef void(^MFSuggestionCallback)(NSArray<id<MFSuggestionResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```
#### MFPlaceDetailCallback

```objc
typedef void(^MFPlaceDetailCallback)(id<MFPlaceDetailResult> _Nullable result, id<MFServiceError> _Nullable error);
```

#### MFTextSearchCallback

```objc
typedef void(^MFTextSearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFNearbySearchCallback

```objc
typedef void(^MFNearbySearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFViewboxSearchCallback

```objc
typedef void(^MFViewboxSearchCallback)(NSArray<id<MFPlaceResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

#### MFGeocodeCallback

```objc
typedef void(^MFGeocodeCallback)(NSArray<id<MFGeocodeResult>> *_Nullable results, id<MFServiceError> _Nullable error);
```

### Public Member Functions

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchSuggestionWithParams:(MFSuggestionParams *)params
                             completionHandler:(MFSuggestionCallback)completionHandler;
```

Lấy gợi ý tìm kiếm địa điểm.

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)fetchPlaceDetailWithPlaceId:(NSString *)placeId
                               completionHandler:(MFPlaceDetailCallback)completionHandler;
```

Lấy thông tin chi tiết của địa điểm.

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)searchTextWithParams:(MFTextSearchParams *)params
                        completionHandler:(MFTextSearchCallback)completionHandler;
```

Tìm kiếm địa điểm bằng chuỗi ký tự.

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)searchNearbyWithParams:(MFNearbySearchParams *)params
                          completionHandler:(MFNearbySearchCallback)completionHandler;
```

Tìm kiếm địa điểm lân cận vị trí nào đó.

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)searchViewboxWithParams:(MFViewboxSearchParams *)params
                           completionHandler:(MFViewboxSearchCallback)completionHandler;
```

Tìm kiếm địa điểm trong một khu vực xác định.

#### fetchSuggestionWithParams: completionHandler:

```objc
- (id<MFServiceTask>)geocodingWithParams:(MFGeocodeParams *)params
                       completionHandler:(MFGeocodeCallback)completionHandler;
```

Phân giải địa chỉ của địa điểm.

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

<a id="reference-geocode-params"></a>

## Geocode Params

`MFGeocodeParams` class

### Public Member Functions

#### initWithLocation:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location;
```

Tạo đối tượng `MFGeocodeParams` với địa điểm.

#### initWithAddress:

```objc
- (instancetype)initWithAddress:(NSString *)address;
```

Tạo đối tượng `MFDirectionsParams` với địa chỉ.

### Properties

| Name        | Type                                                            | Description                                       |
|-------------|-----------------------------------------------------------------|---------------------------------------------------|
| location    | [MFLocationComponent](guides/geocode.md?id=reference-location-component)          | Ví trí dùng để phân giải địa chỉ.                 |
| address     | NSString                                                        | Địa chỉ của địa điểm dùng để phân giải (địa chỉ). |
| viewbox     | [MFViewboxComponent](guides/viewbox-search.md?id=reference-viewbox-component)            | Khu vực tìm kiếm.                                 |

<a id="reference-geocode-result"></a>

## Geocode Result

`MFGeocodeResult` protocol

### Properties

| Name              | Type                                                                                   | Description                           |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                   |
| location          | [MFLocationComponent](guides/geocode.md?id=reference-location-component)                                 | Ví trí của địa điểm                   |
| name              | NSString                                                                               | Tên của địa điểm.                     |
| address           | NSString                                                                               | Địa chỉ địa điểm.                     |
| types             | NSArray\<NSString\>                                                                    | Loại đối tượng của địa điểm.          |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](guides/geocode.md?id=reference-place-address-component-result)>  | Danh sách các thành phần của địa chỉ. |

<a id="reference-location-component"></a>

## Location Component

`MFLocationComponent` class

### Public Member Functions

#### initWithCoordinate:

```objc
- (instancetype)initWithCoordinate:(CLLocationCoordinate2D)coordinate;
```

Tạo đối tượng `MFLocationComponent` bằng coordinate.

#### initWithCoordinate: alias:

```objc
- (instancetype)initWithCoordinate:(CLLocationCoordinate2D)coordinate alias:(NSString *_Nullable)alias;
```

Tạo đối tượng `MFLocationComponent` bằng coordinate và alias.

#### initWithLatitude: longitude:

```objc
- (instancetype)initWithLatitude:(CLLocationDegrees)latitude longitude:(CLLocationDegrees)longitude;
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude.

#### initWithLatitude: longitude: alias:

```objc
- (instancetype)initWithLatitude:(CLLocationDegrees)latitude longitude:(CLLocationDegrees)longitude alias:(NSString *_Nullable)alias;
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude và alias.

#### isValidCoordinate

```objc
- (BOOL)isValidCoordinate;
```

Kiểm tra location có hợp lệ hay không.

### Properties

| Name        | Type                   | Description                        |
|-------------|------------------------|------------------------------------|
| coordinate  | CLLocationCoordinate2D | Tọa độ kinh độ, vĩ độ trên bản đồ. |
| alias       | NSString               | Biệt danh cho vị trí.              |

<a id="reference-place-address-component-result"></a>

## Place Address Component Result

`MFPlaceAddressComponentResult` protocol

### Properties

| Name        | Type                | Description                      |
|-------------|---------------------|----------------------------------|
| name        | NSString            | Tên của địa chỉ.                 |
| types       | NSArray\<NSString\> | Các loại đối tượng của địa điểm. |
