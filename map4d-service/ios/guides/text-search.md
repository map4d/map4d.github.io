# Text Search

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFTextSearchParams](/guides/text-search.md?id=api-text-search-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](/guides/place-result.md?id=api-place-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let params = MFTextSearchParams(text: "Vietcombank")
let service = MFPlacesService()
service.searchText(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  print("Results count: \(results.count)")
}
```

---

## Text Search Params :id=api-text-search-params

`MFTextSearchParams` class

#### Public Member Functions :id=api-text-search-params-public-member-functions

##### `init(text:)` :id=api-text-search-params-initwithtext

```swift
init(text: String)
```

Tạo đối tượng `MFTextSearchParams` với text tìm kiếm.

#### Properties :id=api-text-search-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| text | String | Đọc/ghi | Nội dung muốn tìm kiếm. |
| types | [String]? | Đọc/ghi | Loại đối tượng của địa điểm. VD: cafe, restaurant, ... |
| typeSearchMatching | MFTypeSearchMatching | Đọc/ghi | Cách khớp types: .all (mặc định) hoặc .onlyOne. |
| datetime | Date? | Đọc/ghi | Thời gian địa điểm vẫn còn tồn tại. |
| location | MFLocationComponent? | Đọc/ghi | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn. |

Thuộc tính `typeSearchMatching` áp dụng cho danh sách `types`: `.all` khớp tất cả loại, `.onlyOne` khớp ít nhất một loại.
