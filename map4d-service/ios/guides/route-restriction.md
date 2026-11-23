# Route Restriction Component :id=api-route-restriction

`MFRouteRestriction` class

### Public Member Functions :id=api-route-restriction-public-member-functions

####  :id=api-route-restriction-

```swift
// Restriction point
init(location: MFLocationComponent)
```

Tạo đối tượng `MFRouteRestriction` với vị trí cần giới hạn.

####  :id=api-route-restriction-1

```swift
// Restriction circle area
init(location: MFLocationComponent, radius: UInt)
```

Tạo đối tượng `MFRouteRestriction` với vị trí và radius cần giới hạn.

####  :id=api-route-restriction-2

```swift
// Restriction rectangle area
init(viewbox: MFViewboxComponent)
```

Tạo đối tượng `MFRouteRestriction` với khu vực hình chữ nhật cần giới hạn.

####  :id=api-route-restriction-3

```swift
// Restriction polygon area
init(path: [MFLocationComponent])
```

Tạo đối tượng `MFRouteRestriction` với khu vực polygon bất kỳ cần giới hạn.

####  :id=api-route-restriction-4

```swift
// Restriction route type
init(routeType type: MFRouteType)
```

Tạo đối tượng `MFRouteRestriction` với loại đường cần giới hạn.

####  :id=api-route-restriction-5

```swift
// Add route type restriction
func avoidRouteType(_ type: MFRouteType)
```

Thêm loại đường [MFRouteType](/guides/route-type.md?id=api-route-type) giới hạn vào đối tượng `MFRouteRestriction`


### Properties :id=api-route-restriction-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          |                                                                                    |
| radius      | NSUInteger                                                      |                                                                                    |
| viewbox     | [MFViewboxComponent](/guides/viewbox-component.md?id=api-viewbox-component)            |                                                                                    |
| path        | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)> |                                                                                    |
