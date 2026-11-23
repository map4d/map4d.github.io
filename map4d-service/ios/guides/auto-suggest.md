# Auto Suggestion

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_autosuggest>

> Auto Suggestion sẽ tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh, hỗ trợ tìm kiếm với chuỗi ký tự viết tắt.

### Usage

- Service: [MFPlacesService](reference/places-service.md)
- Params: [MFSuggestionParams](reference/suggestion-params.md)
- Return: [MFServiceTask](reference/service-task.md)
- Callback:
  + Result: Array of [MFSuggestionResult](reference/suggestion-result.md)
  + Error: [MFServiceError](reference/service-error.md)

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
