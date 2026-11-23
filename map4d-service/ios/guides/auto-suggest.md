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

---

## Suggestion Params :id=api-suggestion-params

`MFSuggestionParams` class

#### Public Member Functions :id=api-suggestion-params-public-member-functions

##### initWithText: :id=api-suggestion-params-initwithtext

```swift
init(text: String)
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm,.

##### initWithText: location: :id=api-suggestion-params-initwithtext-location

```swift
init(text: String, location: MFLocationComponent)
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm.

##### initWithText: acronym: :id=api-suggestion-params-initwithtext-acronym

```swift
init(text: String, acronym: Bool)
```
Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm và xác định từ khóa có phải từ viết tắt.

##### initWithText: location: acronym: :id=api-suggestion-params-initwithtext-location-acronym

```swift
init(text: String, location: MFLocationComponent, acronym: Bool)
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
