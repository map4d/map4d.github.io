# Directions Params

`MFDirectionsParams` class

### Public Member Functions

#### initWithOrigin: destination:

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin destination:(MFLocationComponent *)destination;
```

Tạo đối tượng `MFDirectionsParams` với 2 địa điểm origin và destination.

#### initWithOrigin: destination: mode: weighting:

```objc
- (instancetype)initWithOrigin:(MFLocationComponent *)origin
                   destination:(MFLocationComponent *)destination
                          mode:(MFTravelMode)mode
                     weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDirectionsParams` với các tham số: origin, destination, mode và weighting.

### Properties

| Name        | Type                                                            | Description                                                                        |
|-------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origin      | [MFLocationComponent](reference/location-component.md)          | Vị trí bắt đầu dùng để tìm đường.                                                  |
| destination | [MFLocationComponent](reference/location-component.md)          | Vị trí đích.                                                                       |
| waypoints   | NSArray<[MFLocationComponent](reference/location-component.md)> | Các điểm sẽ đi qua.                                                                |
| mode        | [MFTravelMode](reference/travel-mode.md)                        | Phương thức di chuyển.                                                             |
| weighting   | [MFRouteWeighting](reference/route-weighting.md)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction | [MFRouteRestriction](reference/route-restriction.md)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language    | [MFLanguageResult](reference/language-result.md)                | Ngôn ngữ dùng để chỉ đường.                                                        |
