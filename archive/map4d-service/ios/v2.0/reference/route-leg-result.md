# Route Leg Result

`MFRouteLegResult` protocol

### Properties

| Name            | Type                                                                       | Description                                                                                                                              |
|-----------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| steps           | NSArray<[MFRouteStepResult](reference/route-step-result.md)>               | Danh sách các bước cần thực hiện                                                                                                         |
| distance        | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về km mỗi địa điểm đi qua (khoảng cách dưới dạng text, còn value là giá trị đơn vị là mét)                                   |
| duration        | NSArray<[MFRouteDescriptionResult](reference/route-description-result.md)> | Khoảng cách về thời gian mỗi địa điểm đi qua (thời gian dưới dạng text, còn value là thời gian khi đi trên đoạn đường đó đơn vị là giây) |
| startAddress    | NSString                                                                   | Địa chỉ bắt đầu                                                                                                                          |
| endAddress      | NSString                                                                   | Địa chỉ kết thúc                                                                                                                         |
| startLocation   | [MFLocationComponent](reference/location-component.md)                     | Điểm bắt đầu                                                                                                                             |
| endLocation     | [MFLocationComponent](reference/location-component.md)                     | Điểm kết thúc                                                                                                                            |