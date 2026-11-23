# Route Restriction Component :id=api-route-restriction

`MFRouteRestriction` class

### Public Member Functions :id=api-route-restriction-public-member-functions

####  :id=api-route-restriction-

```objc
/* Restriction point */
- (instancetype)initWithLocation:(MFLocationComponent *)location;
```

Tạo đối tượng `MFRouteRestriction` với vị trí cần giới hạn.

####  :id=api-route-restriction-1

```objc
/* Restriction circle area */
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius;
```

Tạo đối tượng `MFRouteRestriction` với vị trí và radius cần giới hạn.

####  :id=api-route-restriction-2

```objc
/* Restriction rectangle area */
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox;
```

Tạo đối tượng `MFRouteRestriction` với khu vực hình chữ nhật cần giới hạn.

####  :id=api-route-restriction-3

```objc
/* Restriction polygon area */
- (instancetype)initWithPath:(NSArray<MFLocationComponent *> *)path;
```

Tạo đối tượng `MFRouteRestriction` với khu vực polygon bất kỳ cần giới hạn.

####  :id=api-route-restriction-4

```objc
/* Restriction route type */
- (instancetype)initWithRouteType:(MFRouteType)type;
```

Tạo đối tượng `MFRouteRestriction` với loại đường cần giới hạn.

####  :id=api-route-restriction-5

```objc
/* Add route type restriction */
- (void)avoidRouteType:(MFRouteType)type;
```

Thêm loại đường [MFRouteType](/guides/route-type.md?id=api-route-type) giới hạn vào đối tượng `MFRouteRestriction`


### Properties :id=api-route-restriction-properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](/guides/location-component.md?id=api-location-component)          |                                                                                    |
| radius      | NSUInteger                                                      |                                                                                    |
| viewbox     | [MFViewboxComponent](/guides/viewbox-component.md?id=api-viewbox-component)            |                                                                                    |
| path        | NSArray<[MFLocationComponent](/guides/location-component.md?id=api-location-component)> |                                                                                    |
