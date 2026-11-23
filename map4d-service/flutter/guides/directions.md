# Directions

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_route>

> API đùng để tìm đường đi giữa các địa điểm.

### Usage

#### Method

Để tìm đường đi giữa các địa điểm, ta gọi method `fetchDirections` của đối tượng  [MFRoutesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFRoutesService-class.html)

```dart
Future<MFDirectionsResult> fetchDirections(
  MFLocationComponent origin,
  MFLocationComponent destination,
  {List<MFLocationComponent>? waypoints,
  MFTravelMode mode = MFTravelMode.car,
  MFRouteWeighting weighting = MFRouteWeighting.fastest,
  MFLanguageResult language = MFLanguageResult.vi,
  MFRouteRestriction? restriction}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchDirections() async {
  List<MFRouteType> routeTypes = <MFRouteType>[MFRouteType.motorway, MFRouteType.tunnel];
  List<MFLocationComponent> waypoints = <MFLocationComponent>[
    const MFLocationComponent(latitude: 16.081126855919138, longitude: 108.21412717916483)
  ];
  MFRouteRestriction restriction = MFRouteRestriction.restrictCircleArea(
    const MFLocationComponent(latitude: 16.080611, longitude: 108.218113),
    30,
    types: routeTypes
  );
  try {
    final directions = await MFServices.routes.fetchDirections(
      const MFLocationComponent(latitude: 16.08116088350121, longitude: 108.21979357460582),
      const MFLocationComponent(latitude: 16.08334260545329, longitude: 108.21651589082553),
      waypoints: waypoints,
      restriction: restriction
    );
    print('Directions: $directions');
  } on MFServiceError catch (error) {
    print('Directions Error: ${error.code}, ${error.message}');
  }
}
```
