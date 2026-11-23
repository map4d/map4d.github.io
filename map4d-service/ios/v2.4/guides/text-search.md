# Text Search

IPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

- Service: [MFPlacesService](guides/text-search.md?id=reference-places-service)
- Params: [MFTextSearchParams](guides/text-search.md?id=reference-text-search-params)
- Return: [MFServiceTask](guides/text-search.md?id=reference-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](guides/text-search.md?id=reference-place-result)
  + Error: [MFServiceError](guides/text-search.md?id=reference-service-error)

### Example

```swift
let params = MFTextSearchParams(text: "Vietcombank")
let service = MFPlacesService()
service.searchText(with: params) { results, error in
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

<a id="reference-text-search-params"></a>

## Text Search Params

`MFTextSearchParams` class

### Public Member Functions

#### initWithText:

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFTextSearchParams` với text tìm kiếm.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
| location    | [MFLocationComponent](guides/text-search.md?id=reference-location-component)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.                   |

<a id="reference-place-result"></a>

## Place Result

`MFPlaceResult` protocol

### Properties

| Name              | Type                                                    | Description                                                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](guides/text-search.md?id=reference-location-component)  | Ví trí của địa điểm                                                                         |
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
