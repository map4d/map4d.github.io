# Suggestion Params

`MFSuggestionParams` class

### Public Member Functions

#### initWithText:

```objc
- (instancetype)initWithText:(NSString *)text;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm,.

#### initWithText: location:

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm.

#### initWithText: acronym:

```objc
- (instancetype)initWithText:(NSString *)text acronym:(BOOL)acronym;
```
Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm và xác định từ khóa có phải từ viết tắt.

#### initWithText: location: acronym:

```objc
- (instancetype)initWithText:(NSString *)text location:(MFLocationComponent *)location acronym:(BOOL)acronym;
```

Tạo đối tượng `MFSuggestionParams` với từ khóa tìm kiếm, vị trí ưu tiên tìm kiếm và xác định từ khóa có phải từ viết tắt.

### Properties

| Name        | Type                                                            | Description                                                                  |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------|
| text        | NSString                                                        | Chuỗi tìm kiếm.                                                              |
| location    | [MFLocationComponent](reference/location-component.md)          | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn.             |
| acronym     | BOOL                                                            | Set `true` nếu chuỗi tìm kiếm là từ viết tắt, chỉ hỗ trợ viết tắt ở địa chỉ. |
