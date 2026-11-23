# Geocode

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

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
    print("Error: \(error!.message)")
    return
  }

  print("Results count: \(results.count)")
}
```

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

Tạo đối tượng `MFDirectionsParams` với địa chỉ.

#### Properties :id=api-geocode-params-properties

| Name        | Type                                                            | Description                                       |
|-------------|-----------------------------------------------------------------|---------------------------------------------------|
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          | Ví trí dùng để phân giải địa chỉ.                 |
| address     | NSString                                                        | Địa chỉ của địa điểm dùng để phân giải (địa chỉ). |
| viewbox     | [MFViewboxComponent](/guides/viewbox-component.md?id=api-viewbox-component)            | Khu vực tìm kiếm.                                 |

---

## Geocode Result :id=api-geocode-result

`MFGeocodeResult` protocol

#### Properties :id=api-geocode-result-properties

| Name              | Type                                                                                   | Description                           |
|-------------------|----------------------------------------------------------------------------------------|---------------------------------------|
| id                | NSString                                                                               | Mã id của địa điểm.                   |
| location          | [MFLocationComponent](/guides/location-component.md?id=api-location-component)                                 | Ví trí của địa điểm                   |
| name              | NSString                                                                               | Tên của địa điểm.                     |
| address           | NSString                                                                               | Địa chỉ địa điểm.                     |
| types             | NSArray\<NSString\>                                                                    | Loại đối tượng của địa điểm.          |
| addressComponents | NSArray<[MFPlaceAddressComponentResult](/guides/place-detail.md?id=api-place-address-component-result)>  | Danh sách các thành phần của địa chỉ. |
