# Auto Suggestion

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_autosuggest>

> Auto Suggestion sẽ tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh, hỗ trợ tìm kiếm với chuỗi ký tự viết tắt.

### Usage

#### Method

Để lấy tự động đề xuất, ta gọi method `fetchSuggestion` của đối tượng [MFPlacesService](https://pub.dev/documentation/map4d_services/latest/map4d_services/MFPlacesService-class.html)

```dart
Future<List<MFSuggestionResult>> fetchSuggestion(
  String text,
  {MFLocationComponent? location,
  bool acronym = false}
)
```

### Example

```dart
import 'package:map4d_services/map4d_services.dart';

void autoSuggest() async {
  try {
    final places = await MFServices.places.fetchSuggestion(
      'Tam Giang',
      location: const MFLocationComponent(latitude: 16.575619, longitude: 107.530756),
      acronym: false,
    );
    print('Auto Suggest: $places');
  } on MFServiceError catch (error) {
    print('Auto Suggest Error: ${error.code}, ${error.message}');
  }
}
```
