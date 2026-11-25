# Nearby Search

> Tìm kiếm các địa điểm lân cận.

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFNearbySearchParams](/guides/nearby-search.md?id=api-nearby-search-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFPlaceResult](/guides/place-result.md?id=api-place-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let params = MFNearbySearchParams(location: MFLocationComponent(latitude: 16.036461, longitude: 108.218159), radius: 500, text: "coffe")
let service = MFPlacesService()
service.searchNearby(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  print("Results count: \(results.count)")
}
```

---

## Nearby Search Params :id=api-nearby-search-params

`MFNearbySearchParams` class

#### Public Member Functions :id=api-nearby-search-params-public-member-functions

##### `init(location:radius:text:)` :id=api-nearby-search-params-initwithlocation-radius-text

```swift
init(location: MFLocationComponent, radius: UInt, text: String)
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và text.

##### `init(location:radius:types:)` :id=api-nearby-search-params-initwithlocation-radius-types

```swift
init(location: MFLocationComponent, radius: UInt, types: [String])
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và types.

##### `init(location:radius:tags:)` :id=api-nearby-search-params-initwithlocation-radius-tags

```swift
init(location: MFLocationComponent, radius: UInt, tags: [String])
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và tags.

#### Properties :id=api-nearby-search-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| location | MFLocationComponent | Đọc/ghi | Vị trí địa điểm muốn tìm kiếm. |
| radius | UInt | Đọc/ghi | Bán kính tìm dữ liệu xung quanh đơn vị là mét. Tối đa 50 000 mét. |
| text | String? | Đọc/ghi | Nội dung muốn tìm kiếm. |
| types | [String]? | Đọc/ghi | Loại đối tượng của địa điểm. VD: cafe, restaurant, ... |
| typeSearchMatching | MFTypeSearchMatching | Đọc/ghi | Cách khớp types: .all (mặc định) hoặc .onlyOne. |
| tags | [String]? | Đọc/ghi | Nhãn của địa điểm. |
| datetime | Date? | Đọc/ghi | Thời gian địa điểm vẫn còn tồn tại. |

Thuộc tính `typeSearchMatching` áp dụng cho danh sách `types`: `.all` khớp tất cả loại, `.onlyOne` khớp ít nhất một loại.
