# Nearby Search

iPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

### Usage

- Service: [MFPlacesService](guides/nearby-search.md?id=reference-places-service)
- Params: [MFNearbySearchParams](guides/nearby-search.md?id=reference-nearby-search-params)
- Return: [MFServiceTask](guides/nearby-search.md?id=reference-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](guides/nearby-search.md?id=reference-place-result)
  + Error: [MFServiceError](guides/nearby-search.md?id=reference-service-error)

### Example

```swift
let params = MFNearbySearchParams(location: MFLocationComponent(latitude: 16.036461, longitude: 108.218159), radius: 500, text: "coffe")
let service = MFPlacesService()
service.searchNearby(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

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

<a id="reference-nearby-search-params"></a>

## Nearby Search Params

`MFNearbySearchParams` class

### Public Member Functions

#### initWithLocation: radius: text:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius text:(NSString *)text;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và text.

#### initWithLocation: radius: types:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius types:(NSArray<NSString *> *)types;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và types.

#### initWithLocation: radius: tags:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius tags:(NSArray<NSString *> *)tags;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và tags.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](guides/nearby-search.md?id=reference-location-component)          | Vị trí địa điểm muốn tìm kiếm.                                                     |
| radius      | NSUInteger                                                      | Bán kính tìm dữ liệu xung quanh đơn vị là mét. Tối đa 50 000 mét.                  |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |

<a id="reference-place-result"></a>

## Place Result

`MFPlaceResult` protocol

### Properties

| Name              | Type                                                    | Description                                                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](guides/nearby-search.md?id=reference-location-component)  | Ví trí của địa điểm                                                                         |
| name              | NSString                                                | Tên của địa điểm.                                                                           |
| address           | NSString                                                | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                     | Danh sách các kiểu của địa điểm.                                                            |

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
