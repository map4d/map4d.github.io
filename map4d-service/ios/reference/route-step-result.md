# Route Step Result

`MFRouteStepResult` protocol

### Public Member Functions

#### polyline:

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

### Properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| distance        | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startLocation   | [MFLocationComponent](reference/location-component.md)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](reference/location-component.md)                     | Điểm kết thúc                                                                                                                            |
| instructions    | NSString                                                                   | Mô tả bước cần thực hiện dạng html                                                                                                       |
| maneuver        | NSString                                                                   | Hướng chuyển đổi                                                                                                                         |
| encodedPolyline | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| streetName      | NSString                                                                   | Tên đường                                                                                                                                |
| mode            | [MFTravelMode](reference/travel-mode.md)                                   | Phương tiện di chuyển                                                                                                                    |
