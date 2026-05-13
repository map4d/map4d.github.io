# Route Restriction Component

`MFRouteRestriction` class

### Public Member Functions

#### 

```objc
/* Restriction point */
- (instancetype)initWithLocation:(MFLocationComponent *)location;
```

Tạo đối tượng `MFRouteRestriction` với vị trí cần giới hạn.

#### 

```objc
/* Restriction circle area */
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius;
```

Tạo đối tượng `MFRouteRestriction` với vị trí và radius cần giới hạn.

#### 

```objc
/* Restriction rectangle area */
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox;
```

Tạo đối tượng `MFRouteRestriction` với khu vực hình chữ nhật cần giới hạn.

#### 

```objc
/* Restriction polygon area */
- (instancetype)initWithPath:(NSArray<MFLocationComponent *> *)path;
```

Tạo đối tượng `MFRouteRestriction` với khu vực polygon bất kỳ cần giới hạn.

#### 

```objc
/* Restriction route type */
- (instancetype)initWithRouteType:(MFRouteType)type;
```

Tạo đối tượng `MFRouteRestriction` với loại đường cần giới hạn.

#### 

```objc
/* Add route type restriction */
- (void)avoidRouteType:(MFRouteType)type;
```

Thêm loại đường [MFRouteType](reference/route-type.md) giới hạn vào đối tượng `MFRouteRestriction`


### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](reference/location-component.md)          |                                                                                    |
| radius      | NSUInteger                                                      |                                                                                    |
| viewbox     | [MFViewboxComponent](reference/viewbox-component.md)            |                                                                                    |
| path        | NSArray<[MFLocationComponent](reference/location-component.md)> |                                                                                    |
