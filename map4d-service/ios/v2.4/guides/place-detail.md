# Place Detail

IPostMap Services API: <https://docs.ipostmap.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

- Service: [MFPlacesService](guides/place-detail.md?id=reference-places-service)
- Params: place id *(string)*
- Return: [MFServiceTask](guides/place-detail.md?id=reference-service-task)
- Callback:
  + Result: [MFPlaceDetailResult](guides/place-detail.md?id=reference-place-detail-result)
  + Error: [MFServiceError](guides/place-detail.md?id=reference-service-error)

### Example

```swift
let service = MFPlacesService()
service.fetchPlaceDetail(withPlaceId: "5c9845df814a9df9d67e5598") { result, error in
  guard let results = results else {
    print("Error: \(error!.message)")
    return
  }

  print("Name: \(result.name)")
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

<a id="reference-place-detail-result"></a>

## Place Detail Result

`MFPlaceDetailResult` protocol

### Properties

| Name              | Type                                                                                   | Description                                                                                 |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](guides/auto-suggest.md?id=reference-location-component)                                 | Ví trí của địa điểm                                                                         |
| name              | NSString                                                                               | Tên của địa điểm.                                                                           |
| address           | NSString                                                                               | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                                                    | Danh sách các kiểu của địa điểm.                                                            |
| tags              | NSArray\<NSString\>                                                                    | Danh sách các nhãn của địa điểm.                                                            |
| desc              | NSString                                                                               | Mô tả thêm về địa điểm.                                                                     |
| metadatas         | NSArray<[MFPlaceMetadataResult](guides/place-detail.md?id=reference-place-metadata-result)>                   | Danh sách thông tin liên quan đến địa điểm.                                                 |
| photos            | NSArray<[MFPlacePhotoResult](guides/place-detail.md?id=reference-place-photo-result)>                         | Danh sách thông tin hình ảnh về địa điểm.                                                   |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](guides/place-detail.md?id=reference-place-address-component-result)>  | Danh sách các thành phần của địa chỉ.                                                       |
| objectId          | NSString                                                                               | Đối tượng của địa điểm đó (ví dụ như địa điểm nó thuộc tòa nhà nào - tòa nhà là đối tượng). |

<a id="reference-place-metadata-result"></a>

## Place Metadata Result

`MFPlaceMetadataResult` protocol

### Properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| id                | NSString  |                                       |
| name              | NSString  |                                       |
| type              | NSString  |                                       |
| content           | NSString  |                                       |
| order             | NSInteger |                                       |

<a id="reference-place-photo-result"></a>

## Place Photo Result

`MFPlacePhotoResult` protocol

### Properties

| Name              | Type      | Description                           |
|-------------------|-----------|---------------------------------------|
| url               | NSString  |                                       |
| name              | NSString  |                                       |

<a id="reference-place-address-component-result"></a>

## Place Address Component Result

`MFPlaceAddressComponentResult` protocol

### Properties

| Name        | Type                | Description                      |
|-------------|---------------------|----------------------------------|
| name        | NSString            | Tên của địa chỉ.                 |
| types       | NSArray\<NSString\> | Các loại đối tượng của địa điểm. |
