# Geocode Params

`MFGeocodeParams` class

### Public Member Functions

#### initWithLocation:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location;
```

Tạo đối tượng `MFGeocodeParams` với địa điểm.

#### initWithAddress:

```objc
- (instancetype)initWithAddress:(NSString *)address;
```

Tạo đối tượng `MFDirectionsParams` với địa chỉ.

### Properties

| Name        | Type                                                            | Description                                       |
|-------------|-----------------------------------------------------------------|---------------------------------------------------|
| location    | [MFLocationComponent](reference/location-component.md)          | Ví trí dùng để phân giải địa chỉ.                 |
| address     | NSString                                                        | Địa chỉ của địa điểm dùng để phân giải (địa chỉ). |
| viewbox     | [MFViewboxComponent](reference/viewbox-component.md)            | Khu vực tìm kiếm.                                 |
