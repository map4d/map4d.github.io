# Text Search Params

`MFTextSearchParams` class

### Public Member Functions

#### initWithText:

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFTextSearchParams` với text tìm kiếm.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| text        | NSString                                                        | Nội dung muốn tìm kiếm.                                                            |
| types       | NSArray\<NSString\>                                             | Loại đối tượng của địa điểm. VD: cafe, restaurant, ...                             |
| datetime    | NSDate                                                          | Thời gian địa điểm vẫn còn tồn tại.                                                |
| location    | [MFLocationComponent](reference/location-component.md)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.                   |
