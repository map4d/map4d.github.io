# Viewbox Search

> Tìm các địa điểm trong khu vực địa lý hình chữ nhật.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFViewboxSearchParams](/guides/viewbox-search.md?id=api-viewbox-search-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](/guides/place-result.md?id=api-place-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let viewbox = MFViewboxComponent(southwest: CLLocationCoordinate2D(latitude: 16.056453967981348, longitude: 108.19387435913086),
                                 northeast: CLLocationCoordinate2D(latitude: 16.093031550262133, longitude: 108.25927734375))
let params = MFViewboxSearchParams(viewbox: viewbox, text: "bank")

let service = MFPlacesService()
service.searchViewbox(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  print("Results count: \(results.count)")
}
```

---

## Viewbox Search Params :id=api-viewbox-search-params

`MFViewboxSearchParams` class

#### Public Member Functions :id=api-viewbox-search-params-public-member-functions

##### `init(viewbox:text:)` :id=api-viewbox-search-params-initwithviewbox-text

```swift
init(viewbox: MFViewboxComponent, text: String)
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và text.

##### `init(viewbox:types:)` :id=api-viewbox-search-params-initwithviewbox-types

```swift
init(viewbox: MFViewboxComponent, types: [String])
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và types.

##### `init(viewbox:tags:)` :id=api-viewbox-search-params-initwithviewbox-tags

```swift
init(viewbox: MFViewboxComponent, tags: [String])
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và tags.

#### Properties :id=api-viewbox-search-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| viewbox | MFViewboxComponent | Đọc/ghi | Khu vực muốn tìm kiếm. |
| text | String? | Đọc/ghi | Nội dung muốn tìm kiếm. |
| types | [String]? | Đọc/ghi | Loại đối tượng của địa điểm. VD: cafe, restaurant, ... |
| typeSearchMatching | MFTypeSearchMatching | Đọc/ghi | Cách khớp types: .all (mặc định) hoặc .onlyOne. |
| tags | [String]? | Đọc/ghi | Nhãn của địa điểm. |
| datetime | Date? | Đọc/ghi | Thời gian địa điểm vẫn còn tồn tại. |

Thuộc tính `typeSearchMatching` áp dụng cho danh sách `types`: `.all` khớp tất cả loại, `.onlyOne` khớp ít nhất một loại.
