# Graph Route

> Tìm biểu đồ tuyến đường giữa các địa điểm.

### Usage

#### Method

Để tìm đường đi giữa các địa điểm, ta gọi method `fetchGraphRoute` của đối tượng  [MFRoutesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFRoutesService-class.html)

```dart
Future<List<MFGraphRouteResult>> fetchGraphRoute(
  List<MFLocationComponent> locations,
  {MFTravelMode mode = MFTravelMode.car,
  MFRouteWeighting weighting = MFRouteWeighting.fastest,
  MFLanguageResult language = MFLanguageResult.vi,
  MFRouteRestriction? restriction}
)
```

### Example

````dart
import 'package:map4d_services/map4d_services.dart';

void fetchGraphRoute() async {
  List<MFRouteType> routeTypes = <MFRouteType>[MFRouteType.motorway, MFRouteType.tunnel];
  List<MFLocationComponent> points = <MFLocationComponent>[
    const MFLocationComponent(latitude: 16.08116088350121, longitude: 108.21979357460582),
    const MFLocationComponent(latitude: 16.08334260545329, longitude: 108.21651589082553)
  ];
  MFRouteRestriction restriction = MFRouteRestriction.restrictCircleArea(
    const MFLocationComponent(latitude: 16.080611, longitude: 108.218113),
    30,
    types: routeTypes
  );
  try {
    final graph = await MFServices.routes.fetchGraphRoute(
      points,
      restriction: restriction
    );
    print('Graph: $graph');
  } on MFServiceError catch (error) {
    print('Graph Route Error: ${error.code}, ${error.message}');
  }  
}
```
