# Route Weighting

`MFRouteWeighting` enum

```objc
typedef NS_ENUM(NSUInteger, MFRouteWeighting) {
  MFRouteWeightingShortest = 0,
  MFRouteWeightingFastest = 1,
  MFRouteWeightingBalance = 2,
};
```

Định nghĩa các thuộc tính dùng để tìm đường:
  - MFRouteWeightingShortest: tìm đường đi ngắn nhất
  - MFRouteWeightingFastest: tìm đường đi nhanh nhất
  - MFRouteWeightingBalance: tìm đường đi cân bằng giữa ngắn nhất và nhanh nhất

  