# Route Weighting :id=api-route-weighting

`MFRouteWeighting` enum

```swift
enum MFRouteWeighting: UInt {
    case shortest = 0
    case fastest = 1
    case balance = 2
}
```

Định nghĩa các thuộc tính dùng để tìm đường:
  - MFRouteWeightingShortest: tìm đường đi ngắn nhất
  - MFRouteWeightingFastest: tìm đường đi nhanh nhất
  - MFRouteWeightingBalance: tìm đường đi cân bằng giữa ngắn nhất và nhanh nhất
