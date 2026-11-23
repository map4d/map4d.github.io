# Place Detail

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

### Usage

Để lấy tự động đề xuất, ta gọi method `fetchPlaceDetail` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<MFPlaceDetailResult> fetchPlaceDetail(
  String id
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void getPlaceDetail() async {
  MFServices.places.fetchPlaceDetail('5c88df71d2c05acd14848f9e')
  .then((detail) => {
    print('Place Detail: $detail')
  })
  .onError<MFServiceError>((error, stackTrace) => {
    print('Place Detail Error: ${error.code}, ${error.message}')
  });
}
```