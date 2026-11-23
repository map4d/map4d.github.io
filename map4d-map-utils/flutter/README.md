# Map4dMapUtils Flutter
[![Map4dMapUtils](https://img.shields.io/badge/map4d-map--utils-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-flutter-45d2fd.svg)](https://flutter.dev/)
[![pub package](https://img.shields.io/pub/v/map4d_map_utils.svg)](https://pub.dev/packages/map4d_map_utils)

> **Map4dMapUtils Flutter package** là thư viện tiện ích cho các ứng dụng sử dụng [Map4dMap SDK](https://docs.map4d.vn/map4d-map/flutter).

## Getting Started

### Installation

Để sử dụng Map4dMap plugin, thêm `map4d_map_utils` vào mục **dependencies** trong file `pubspec.yaml` của Flutter project.

```yaml
dependencies:
  map4d_map_utils: ^1.0.0
```

Hoặc sử dụng command:

```bash
flutter pub add map4d_map_utils
```

Sau đó, import `map4d_map_utils` vào source code:

```dart
import 'package:map4d_map_utils/map4d_map_utils.dart';
```

### Phiên bản Android/iOS hỗ trợ

- Android SDK 21+
- iOS 9.3+

### Các tiện ích

- [Marker clustering](guides/clustering.md): xử lý việc hiển thị một số lượng lớn các điểm lên bản đồ Map4D