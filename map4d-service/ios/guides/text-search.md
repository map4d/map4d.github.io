# Text Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: [MFTextSearchParams](reference/text-search-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: Array of [MFPlaceResult](reference/place-result.md)
  + Error: [MFServiceError](reference/service-error.md)

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
