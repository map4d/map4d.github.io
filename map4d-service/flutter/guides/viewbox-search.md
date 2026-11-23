# Viewbox Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_viewbox_search>

> Tìm các địa điểm trong khu vực địa lý hình chữ nhật.

### Usage

#### Method

Để lấy tự động đề xuất, ta gọi method `fetchViewboxSearch` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<List<MFPlaceResult>> fetchViewboxSearch(
  MFViewboxComponent viewbox,
  {String? text,
  List<String>? types,
  List<String>? tags,
  DateTime? datetime}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchViewboxSearch() async {
  try {
    final places = await MFServices.places.fetchViewboxSearch(
      const MFViewboxComponent(southwest: MFLocationComponent(latitude: 16.056453967981348, longitude: 108.19387435913086),
                              northeast: MFLocationComponent(latitude: 16.093031550262133, longitude: 108.25927734375)),
      text: 'a',
      // tags: ['Coopmart'],
      types: ['atm'],
      datetime: DateTime.now(),
    );
    print('Viewbox Search: $places');
  } on MFServiceError catch (error) {
    print('Viewbox Search Error: ${error.code}, ${error.message}');
  }
}
```
