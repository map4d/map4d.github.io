# Viewbox Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_viewbox_search>

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

---

## Viewbox Search Params :id=api-viewbox-search-params

`MFViewboxSearchParams` class

#### Public Member Functions :id=api-viewbox-search-params-public-member-functions

##### initWithViewbox: text: :id=api-viewbox-search-params-initwithviewbox-text

```swift
init(viewbox: MFViewboxComponent, text: String)
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và text.

##### initWithViewbox: types: :id=api-viewbox-search-params-initwithviewbox-types

```swift
init(viewbox: MFViewboxComponent, types: [String])
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và types.

##### initWithViewbox: tags: :id=api-viewbox-search-params-initwithviewbox-tags

```swift
init(viewbox: MFViewboxComponent, tags: [String])
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và tags.

#### Properties :id=api-viewbox-search-params-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| viewbox     | [MFViewboxComponent](/guides/viewbox-component.md?id=api-viewbox-component)            | Khu vực muốn tìm kiếm.                                                             |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
