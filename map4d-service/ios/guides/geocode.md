# Geocode

> Chuyển địa chỉ thành tọa độ (geocode) hoặc tọa độ thành địa chỉ (reverse geocode).

### Usage

- Service: [MFPlacesService](/guides/places-service.md?id=api-places-service)
- Params: [MFGeocodeParams](/guides/geocode.md?id=api-geocode-params)
- Return: [MFServiceTask](/guides/service-task.md?id=api-service-task)
- Callback:
  + Result: Array of [MFGeocodeResult](/guides/geocode.md?id=api-geocode-result)
  + Error: [MFServiceError](/guides/service-error.md?id=api-service-error)

### Example

```swift
let params = MFGeocodeParams(location: MFLocationComponent(latitude: 16.024634, longitude: 108.209217))
let service = MFPlacesService()
service.geocoding(with: params) { results, error in
  guard let results = results else {
    print("Error: \(error?.message ?? "Không có kết quả")")
    return
  }

  print("Results count: \(results.count)")
}
```

Để chuyển một địa chỉ thành tọa độ, tạo `MFGeocodeParams(address: "địa chỉ cần tìm")` và gọi cùng phương thức `geocoding(with:completionHandler:)`. `viewbox` cho phép giới hạn vùng tìm kiếm.

---

## Geocode Params :id=api-geocode-params

`MFGeocodeParams` class

#### Public Member Functions :id=api-geocode-params-public-member-functions

##### initWithLocation: :id=api-geocode-params-initwithlocation

```swift
init(location: MFLocationComponent)
```

Tạo đối tượng `MFGeocodeParams` với địa điểm.

##### initWithAddress: :id=api-geocode-params-initwithaddress

```swift
init(address: String)
```

Tạo đối tượng `MFGeocodeParams` với địa chỉ.

#### Properties :id=api-geocode-params-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| location | MFLocationComponent? | Đọc/ghi | Ví trí dùng để phân giải địa chỉ. |
| address | String? | Đọc/ghi | Địa chỉ của địa điểm dùng để phân giải (địa chỉ). |
| viewbox | MFViewboxComponent? | Đọc/ghi | Khu vực tìm kiếm. |

---

## Geocode Result :id=api-geocode-result

`MFGeocodeResult` class

#### Properties :id=api-geocode-result-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| id | String? | Chỉ đọc | Mã id của địa điểm. |
| location | MFLocationComponent | Chỉ đọc | Ví trí của địa điểm |
| name | String | Chỉ đọc | Tên của địa điểm. |
| address | String | Chỉ đọc | Địa chỉ địa điểm. |
| oldAddress | String | Chỉ đọc | Địa chỉ cũ của địa điểm. |
| types | [String] | Chỉ đọc | Loại đối tượng của địa điểm. |
| addressComponents | [MFPlaceAddressComponentResult]? | Chỉ đọc | Danh sách các thành phần của địa chỉ. |
| oldAddressComponents | [MFPlaceAddressComponentResult]? | Chỉ đọc | Các thành phần của địa chỉ cũ. |
