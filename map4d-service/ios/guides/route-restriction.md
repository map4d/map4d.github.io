# Route Restriction Component :id=api-route-restriction

`MFRouteRestriction` class

Giới hạn vị trí, vùng hoặc loại đường mà tuyến đường cần tránh. Gán đối tượng này cho `restriction` của `MFDirectionsParams` hoặc `MFDistanceMatrixParams`.

### Public Member Functions :id=api-route-restriction-public-member-functions

| Khởi tạo Swift | Mô tả |
|---|---|
| `init(location: MFLocationComponent)` | Tránh một vị trí. |
| `init(location: MFLocationComponent, radius: UInt)` | Tránh vùng tròn quanh vị trí, bán kính tính bằng mét. |
| `init(viewbox: MFViewboxComponent)` | Tránh vùng chữ nhật. |
| `init(path: [MFLocationComponent])` | Tránh vùng polygon. |
| `init(routeTypes: MFRouteType)` | Tránh tập hợp loại đường. |

### Properties :id=api-route-restriction-properties

| Name | Type (Swift) | Access | Description |
|---|---|---|---|
| location | MFLocationComponent? | Chỉ đọc | Vị trí giới hạn. |
| radius | UInt | Chỉ đọc | Bán kính tính bằng mét. |
| viewbox | MFViewboxComponent? | Chỉ đọc | Vùng chữ nhật giới hạn. |
| path | [MFLocationComponent]? | Chỉ đọc | Các vị trí tạo vùng polygon giới hạn. |
| routeTypes | MFRouteType | Đọc/ghi | Tập hợp [loại đường](route-type.md) cần tránh. |

```swift
let restriction = MFRouteRestriction(routeTypes: [.motorway, .toll])
restriction.routeTypes = [.ferry, .tunnel]
params.restriction = restriction
```

`params` là đối tượng tham số của request tìm đường hoặc distance matrix. Có thể gán `routeTypes` cho restriction được khởi tạo bằng một vùng để kết hợp giới hạn vùng và loại đường.
