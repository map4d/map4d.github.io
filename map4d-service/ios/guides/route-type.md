# Route Type Restriction :id=api-route-type

`MFRouteType` là một `OptionSet` trong Swift, cho phép kết hợp nhiều loại đường cần tránh.

| Giá trị Swift | Raw value | Loại đường |
|---|---|---|
| `[]` | 0 | Không giới hạn loại đường. |
| `.motorway` | 1 | Cao tốc. |
| `.trunk` | 2 | Trục đường chính. |
| `.ferry` | 4 | Phà. |
| `.bridge` | 8 | Cầu. |
| `.tunnel` | 16 | Hầm. |
| `.toll` | 32 | Đường có thu phí. |

```swift
let restriction = MFRouteRestriction(routeTypes: [.motorway, .toll])
restriction.routeTypes = []
```

Dùng với `routeTypes` của [MFRouteRestriction](route-restriction.md).
