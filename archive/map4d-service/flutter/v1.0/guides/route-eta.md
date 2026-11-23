# Route ETA

> Tính toán thời gian dự kiến các đường đi giữa các địa điểm.

### Usage

#### Method

Để tìm đường đi giữa các địa điểm, ta gọi method `fetchRouteETA` của đối tượng  [MFRoutesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFRoutesService-class.html)

```dart
Future<List<MFRouteETAResult>> fetchRouteETA(
  List<MFLocationComponent> origins,
  MFLocationComponent destination,
  {MFTravelMode mode = MFTravelMode.car,
  MFRouteWeighting weighting = MFRouteWeighting.fastest,
  MFLanguageResult language = MFLanguageResult.vi,
  MFRouteRestriction? restriction}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchRouteETA() async {
  List<MFRouteType> routeTypes = <MFRouteType>[MFRouteType.motorway, MFRouteType.tunnel];
  List<MFLocationComponent> origins = <MFLocationComponent>[
    const MFLocationComponent(latitude: 16.039173, longitude: 108.210912, alias: "alias1"),
    const MFLocationComponent(latitude: 16.039402, longitude: 108.211080, alias: 'alias2')
  ];

  MFRouteRestriction restriction = MFRouteRestriction.restrictCircleArea(
    const MFLocationComponent(latitude: 16.044597, longitude: 108.217263),
    30,
    types: routeTypes);

  try {
    final etas = await MFServices.routes.fetchRouteETA(
      origins,
      const MFLocationComponent(latitude: 16.0825981, longitude: 108.2219887),
      restriction: restriction
    );
    print('ETAs: $etas');
  } on MFServiceError catch (error) {
    print('Route ETA Error: ${error.code}, ${error.message}');
  }
}
```
