# Viewbox Search Params

`MFViewboxSearchParams` class

### Public Member Functions

#### initWithViewbox: text:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox text:(NSString *)text;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và text.

#### initWithViewbox: types:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox types:(NSArray<NSString *> *)types;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và types.

#### initWithViewbox: tags:

```objc
- (instancetype)initWithViewbox:(MFViewboxComponent *)viewbox tags:(NSArray<NSString *> *)tags;
```

Tạo đối tượng `MFViewboxSearchParams` với khu vực tìm kiếm và tags.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| viewbox     | [MFViewboxComponent](reference/viewbox-component.md)            | Khu vực muốn tìm kiếm.                                                             |
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| tags        | NSArray\<NSString\>                                             | Nhãn của địa điểm.                                                                 |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
