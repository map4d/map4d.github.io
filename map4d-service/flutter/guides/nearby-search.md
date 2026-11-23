# Nearby Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

### Usage

#### Method

Để lấy tự động đề xuất, ta gọi method `fetchNearbySearch` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<List<MFPlaceResult>> fetchNearbySearch(
  MFLocationComponent location,
  int radius,
  {String? text,
  List<String>? types,
  List<String>? tags,
  DateTime? datetime}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchNearbySearch() async {
  try {
    final places = await MFServices.places.fetchNearbySearch(
      const MFLocationComponent(latitude: 16.075177, longitude: 108.220228),
      20000,
      text: 'Sịa',
      // tags: ['point'],
      types: ['point'],
      datetime: DateTime.now(),
    );
    print('Nearby Search: $places');
  } on MFServiceError catch (error) {
    print('Nearby Search Error: ${error.code}, ${error.message}');
  }
}
```
