# Location Component :id=api-location-component

`MFLocationComponent` class

### Public Member Functions :id=api-location-component-public-member-functions

#### initWithCoordinate: :id=api-location-component-initwithcoordinate

```swift
init(coordinate: CLLocationCoordinate2D)
```

Tạo đối tượng `MFLocationComponent` bằng coordinate.

#### initWithCoordinate: alias: :id=api-location-component-initwithcoordinate-alias

```swift
init(coordinate: CLLocationCoordinate2D, alias: String?)
```

Tạo đối tượng `MFLocationComponent` bằng coordinate và alias.

#### initWithLatitude: longitude: :id=api-location-component-initwithlatitude-longitude

```swift
init(latitude: CLLocationDegrees, longitude: CLLocationDegrees)
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude.

#### initWithLatitude: longitude: alias: :id=api-location-component-initwithlatitude-longitude-alias

```swift
init(latitude: CLLocationDegrees, longitude: CLLocationDegrees, alias: String?)
```

Tạo đối tượng `MFLocationComponent` bằng latitude, longitude và alias.

#### isValidCoordinate :id=api-location-component-isvalidcoordinate

```swift
func isValidCoordinate() -> Bool
```

Kiểm tra location có hợp lệ hay không.

### Lấy kinh độ và vĩ độ

| Phương thức Swift | Trả về | Mô tả |
|---|---|---|
| `latitude()` | CLLocationDegrees | Vĩ độ của vị trí. |
| `longitude()` | CLLocationDegrees | Kinh độ của vị trí. |

### Properties :id=api-location-component-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| coordinate | CLLocationCoordinate2D | Chỉ đọc | Tọa độ kinh độ, vĩ độ trên bản đồ. |
| alias | String? | Chỉ đọc | Biệt danh cho vị trí. |
