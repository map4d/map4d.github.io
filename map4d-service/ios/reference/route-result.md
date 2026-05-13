# Route Result

`MFRouteResult` protocol

### Public Member Functions

#### polyline:

```objc
- (NSArray<MFLocationComponent *> *_Nonnull)polyline;
```

Lấy mảng các vị trí của chỉ đường từ `encodedPolyline`

### Properties

| Name             | Type                                                                       | Description                                                                                                                              |
|------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| legs             | NSArray<[MFRouteLegResult](reference/route-leg-result.md)>                 | Danh sách đoạn đường để đi qua điểm trung gian                                                                                           |
| summary          | NSString                                                                   | Tóm lược đường đi                                                                                                                        |
| distance         | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration         | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| encodedPolyline  | NSString                                                                   | Đường đi từng điểm dưới dạng mã hóa                                                                                                      |
| snappedLocations | NSArray<[MFLocationComponent](reference/location-component.md)>            | Danh sách các điểm đi qua trên đường, từ địa điểm bắt đầu và điểm đi qua tới điểm kết thúc                                               |
