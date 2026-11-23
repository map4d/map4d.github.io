# Distance Matrix Params

`MFDistanceMatrixParams` class

### Public Member Functions

#### initWithOrigins: destinations:

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins destinations:(NSArray<MFLocationComponent *> *)destinations;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins và destinations

#### initWithOrigins: destinations: mode: weighting:

```objc
- (instancetype)initWithOrigins:(NSArray<MFLocationComponent *> *)origins
                   destinations:(NSArray<MFLocationComponent *> *)destinations
                           mode:(MFTravelMode)mode
                      weighting:(MFRouteWeighting)weighting;
```

Tạo đối tượng `MFDistanceMatrixParams` với 2 mảng các địa điểm origins, destinations cùng với mode và weighting

### Properties

| Name         | Type                                                            | Description                                                                        |
|--------------|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| origins      | NSArray<[MFLocationComponent](reference/location-component.md)> | Vị trí các điểm bắt đầu dùng để tính toán ma trận                                  |
| destinations | NSArray<[MFLocationComponent](reference/location-component.md)> | Vị trí các điểm kết thúc dùng để tính toán ma trận                                 |
| mode         | [MFTravelMode](reference/travel-mode.md)                        | Phương thức di chuyển.                                                             |
| weighting    | [MFRouteWeighting](reference/route-weighting.md)                | Thuộc tính tìm kiếm (đường ngắn nhất, nhanh nhất hay cân bằng).                    |
| restriction  | [MFRouteRestriction](reference/route-restriction.md)            | Điểm, khu vực, loại đường bị loại bỏ mà tuyến đường được tìm kiếm sẽ không đi qua. |
| language     | [MFLanguageResult](reference/language-result.md)                | Ngôn ngữ dùng để chỉ đường.                                                        |