# Text Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi ký tự.

### Usage

#### Method

Để lấy tự động đề xuất, ta gọi method `fetchTextSearch` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<List<MFPlaceResult>> fetchTextSearch(
  String text,
  {List<String>? types,
  DateTime? datetime,
  MFLocationComponent? location}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchTextSearch() async {
  final places = await MFServices.places.fetchTextSearch('abc',
    types: ['atm'],
    datetime: DateTime.now(),
    location: const MFLocationComponent(latitude: 16.075177, longitude: 108.220228)
  );
  //textSearch['result'][0]['name'];
  print('Text Search: $places');
}
```
