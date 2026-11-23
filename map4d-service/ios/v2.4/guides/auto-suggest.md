# Auto Suggestion

IPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_autosuggest>

> Auto Suggestion sẽ tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh, hỗ trợ tìm kiếm với chuỗi ký tự viết tắt.

### Usage

- Service: [MFPlacesService](guides/auto-suggest.md?id=reference-places-service)
- Params: [MFSuggestionParams](guides/auto-suggest.md?id=reference-suggestion-params)
- Return: [MFServiceTask](guides/auto-suggest.md?id=reference-service-task)
- Callback:
  + Result: Array of [MFSuggestionResult](guides/auto-suggest.md?id=reference-suggestion-result)
  + Error: [MFServiceError](guides/auto-suggest.md?id=reference-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
```swift
let params = MFSuggestionParams(text: "Đà Nẵng")
let service = MFPlacesService()
service.fetchSuggestion(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

#### ** Objective-C **
```objc
MFSuggestionParams* params = [[MFSuggestionParams alloc] initWithText:text location:location];
MFPlacesService* service = [[MFPlacesService alloc] init];
[service fetchSuggestionWithParams:params
                 completionHandler:^(NSArray<id<MFSuggestionResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
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

<a id="reference-suggestion-params"></a>

## Suggestion Params

`MFSuggestionParams` class

### Public Member Functions

#### initWithText:

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm,.

#### initWithText: location:

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm.

#### initWithText: acronym:

```objc
- (instancetype)initWithText:(NSString *)text acronym:(BOOL)acronym;
```
Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm và xác định từ khóa có phải từ viết tắt.

#### initWithText: location: acronym:

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location acronym:(BOOL)acronym;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm và xác định từ khóa có phải từ viết tắt.

### Properties

| Name        | Type                                                            | Description                                                                  |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------|
| text        | NSString                                                        | Chuỗi tìm kiếm.                                                              |
| location    | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.             |
| acronym     | BOOL                                                            | Set `true` nếu chuỗi tìm kiếm là từ viết tắt, chỉ hỗ trợ viết tắt ở địa chỉ. |

<a id="reference-suggestion-result"></a>

## Suggestion Result

`MFSuggestionResult` protocol

### Properties

| Name              | Type                                                    | Description                                                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)  | Ví trí của địa điểm                                                                         |
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
