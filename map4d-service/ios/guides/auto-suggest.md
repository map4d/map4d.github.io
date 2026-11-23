# Auto Suggestion

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_autosuggest>

> Auto Suggestion sẽ tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh, hỗ trợ tìm kiếm với chuỗi ký tự viết tắt.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFSuggestionParams](/guides/auto-suggest.md?id=api-suggestion-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFSuggestionResult](/guides/auto-suggest.md?id=api-suggestion-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

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

---

## Suggestion Params :id=api-suggestion-params

`MFSuggestionParams` class

#### Public Member Functions :id=api-suggestion-params-public-member-functions

##### initWithText: :id=api-suggestion-params-initwithtext

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm,.

##### initWithText: location: :id=api-suggestion-params-initwithtext-location

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm.

##### initWithText: acronym: :id=api-suggestion-params-initwithtext-acronym

```objc
- (instancetype)initWithText:(NSString *)text acronym:(BOOL)acronym;
```
Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm và xác định từ khóa có phải từ viết tắt.

##### initWithText: location: acronym: :id=api-suggestion-params-initwithtext-location-acronym

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location acronym:(BOOL)acronym;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm và xác định từ khóa có phải từ viết tắt.

#### Properties :id=api-suggestion-params-properties

| Name        | Type                                                            | Description                                                                  |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------|
| text        | NSString                                                        | Chuỗi tìm kiếm.                                                              |
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.             |
| acronym     | BOOL                                                            | Set `true` nếu chuỗi tìm kiếm là từ viết tắt, chỉ hỗ trợ viết tắt ở địa chỉ. |

---

## Suggestion Result :id=api-suggestion-result

`MFSuggestionResult` protocol

#### Properties :id=api-suggestion-result-properties

| Name              | Type                                                    | Description                                                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------|
| id                | NSString                                                | Mã id của địa điểm.                                                                         |
| location          | [MFLocationComponent](/guides/location-component.md?id=api-location-component)  | Ví trí của địa điểm                                                                         |
| name              | NSString                                                | Tên của địa điểm.                                                                           |
| address           | NSString                                                | Địa chỉ địa điểm.                                                                           |
| types             | NSArray\<NSString\>                                     | Danh sách các kiểu của địa điểm.                                                            |
