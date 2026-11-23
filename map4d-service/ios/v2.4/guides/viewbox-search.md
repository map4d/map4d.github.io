# Viewbox Search

iPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_viewbox_search>

> Tìm các địa điểm trong khu vực địa lý hình chữ nhật.

### Usage

- Service: [MFPlacesService](guides/viewbox-search.md?id=reference-places-service)
- Params: [MFViewboxSearchParams](guides/viewbox-search.md?id=reference-viewbox-search-params)
- Return: [MFServiceTask](guides/viewbox-search.md?id=reference-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](guides/viewbox-search.md?id=reference-place-result)
  + Error: [MFServiceError](guides/viewbox-search.md?id=reference-service-error)

### Example

```swift
let viewbox = MFViewboxComponent(southwest: CLLocationCoordinate2DMake(16.056453967981348,108.19387435913086),
                                 northeast: CLLocationCoordinate2DMake(16.093031550262133,108.25927734375))
let params = MFViewboxSearchParams(viewbox: viewbox, text: "bank")

let service = MFPlacesService()
service.searchViewbox(with: params) { results, error in
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

<a id="reference-viewbox-search-params"></a>

## Viewbox Search Params

`MFViewboxSearchParams` class

### Public Member Functions

#### initWithViewbox: text:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox text:(NSString *)text;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và text.

#### initWithViewbox: types:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox types:(NSArray<NSString *> *)types;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và types.

#### initWithViewbox: tags:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox tags:(NSArray<NSString *> *)tags;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và tags.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| viewbox     | [MFViewboxComponent](guides/viewbox-search.md?id=reference-viewbox-component)            | Khu vực muốn tìm kiếm.                                                             |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |

<a id="reference-viewbox-component"></a>

## Viewbox Component

`MFViewboxComponent` class

### Public Member Functions

#### initWithSouthwest: northeast:

```objc
- (instancetype)initWithSouthwest:(CLLocationCoordinate2D)southwest northeast:(CLLocationCoordinate2D)northeast;
```

Tạo đối tượng `MFViewboxComponent` bằng 2 vị trí southwest và northeast.


### Properties

| Name        | Type                   | Description                                             |
|-------------|------------------------|---------------------------------------------------------|
| southwest   | CLLocationCoordinate2D | Tọa độ kinh độ, vĩ độ tây nam của viewbox trên bản đồ.  |
| northeast   | CLLocationCoordinate2D | Tọa độ kinh độ, vĩ độ đông bắt của viewbox trên bản đồ. |

<a id="reference-place-result"></a>

## Place Result

`MFPlaceResult` protocol

### Properties

| Name              | Type                                                    | Description                                                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)  | Ví trí của địa điểm                                                                         |
| name              | NSString                                                | Tên của địa điểm.                                                                           |
| address           | NSString                                                | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                     | Danh sách các kiểu của địa điểm.                                                            |
