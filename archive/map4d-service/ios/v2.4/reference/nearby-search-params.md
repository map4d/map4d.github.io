# Nearby Search Params

`MFNearbySearchParams` class

### Public Member Functions

#### initWithLocation: radius: text:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius text:(NSString *)text;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và text.

#### initWithLocation: radius: types:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius types:(NSArray<NSString *> *)types;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và types.

#### initWithLocation: radius: tags:

```objc
- (instancetype)initWithLocation:(MFLocationComponent *)location radius:(NSUInteger)radius tags:(NSArray<NSString *> *)tags;
```

Tạo đối tượng `MFNearbySearchParams` với địa điểm, bán kính và tags.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| location    | [MFLocationComponent](reference/location-component.md)          | Vị trí địa điểm muốn tìm kiếm.                                                     |
| radius      | NSUInteger                                                      | Bán kính tìm dữ liệu xung quanh đơn vị là mét. Tối đa 50 000 mét.                  |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
