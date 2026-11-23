# Geocode

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

### Usage

#### Method

Để lấy tự động đề xuất, ta gọi method `fetchSuggestion` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<List<MFGeocodeResult>> fetchGeocode(
  {MFLocationComponent? location,
  String? address,
  MFViewboxComponent? viewbox}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void fetchGeocode() async {
  try {
    final geos = await MFServices.places.fetchGeocode(
      location: const MFLocationComponent(latitude: 16.024634, longitude: 108.209217),
      address: '31 Lê Văn Duyệt',
      viewbox: const MFViewboxComponent(southwest: MFLocationComponent(latitude: 16.056453967981348, longitude: 108.19387435913086),
                                        northeast: MFLocationComponent(latitude: 16.093031550262133, longitude: 108.25927734375))
    );
    print('Geocode: $geos');
  } on MFServiceError catch (error) {
    print('Geocode Error: ${error.code}, ${error.message}');
  }
}
```
