# Text Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFTextSearchParams](/guides/text-search.md?id=api-text-search-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](/guides/place-result.md?id=api-place-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

<!-- tabs:start -->
#### ** Swift **
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

#### ** Objective-C **
```objc
MFTextSearchParams *params = [[MFTextSearchParams alloc] initWithText:@"Vietcombank"];
MFPlacesService* service = [[MFPlacesService alloc] init];
[service searchTextWithParams:params completionHandler:^(NSArray<id<MFPlaceResult>> * _Nullable results, id<MFServiceError>  _Nullable error) {
  if (error != nil) {
    NSLog(@"Error code: %@, message: %@", error.code, error.message);
  }
  
  if (results != nil) {
    NSLog(@"Results count: %lu", results.count);
  }
}];
```
<!-- tabs:end -->

---

## Text Search Params :id=api-text-search-params

`MFTextSearchParams` class

#### Public Member Functions :id=api-text-search-params-public-member-functions

##### initWithText: :id=api-text-search-params-initwithtext

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFTextSearchParams` với text tìm kiếm.

#### Properties :id=api-text-search-params-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.                   |
