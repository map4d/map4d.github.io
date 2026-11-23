# Distance Matrix

> Tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến.

### Usage

#### Method

Để tìm đường đi giữa các địa điểm, ta gọi method `fetchDistanceMatrix` của đối tượng  [MFRoutesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFRoutesService-class.html)

```dart
Future<MFDistanceMatrixResult> fetchDistanceMatrix(
  List<MFLocationComponent> origins,
  List<MFLocationComponent> destinations,
  {MFTravelMode mode = MFTravelMode.car,
  MFRouteWeighting weighting = MFRouteWeighting.fastest,
  MFLanguageResult language = MFLanguageResult.vi,
  MFRouteRestriction? restriction}
)
```

### Example

````dart
import 'package:map4d_services/map4d_services.dart';

void fetchDistanceMatrix() async {
  List<MFRouteType> routeTypes = <MFRouteType>[MFRouteType.motorway, MFRouteType.tunnel];
  List<MFLocationComponent> origins = <MFLocationComponent>[
    const MFLocationComponent(latitude: 16.024634, longitude: 108.209217),
    const MFLocationComponent(latitude: 16.0717664, longitude: 108.2236151)
  ];

  List<MFLocationComponent> destinations = <MFLocationComponent>[
    const MFLocationComponent(latitude: 16.0717664, longitude: 108.2236151),
    const MFLocationComponent(latitude: 16.06104, longitude: 108.2167)
  ];

  MFRouteRestriction restriction = MFRouteRestriction.restrictCircleArea(
    const MFLocationComponent(latitude: 16.080611, longitude: 108.218113),
    30,
    types: routeTypes);

  MFServices.routes.fetchDistanceMatrix(
    origins,
    destinations,
    restriction: restriction
  )
  .then((matrix) => print('Matrix: $matrix'))
  .onError<MFServiceError>((error, stackTrace) => print('Matrix Error: ${error.code}, ${error.message}'));
}
```
