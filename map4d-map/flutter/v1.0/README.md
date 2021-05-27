# Map4dMap Flutter
[![map4d](https://img.shields.io/badge/map4d-map-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-flutter-45d2fd.svg)](https://flutter.dev/)
[![pub package](https://img.shields.io/pub/v/map4d_map.svg)](https://pub.dev/packages/map4d_map)

> **Map4dMap Flutter package** cung cấp Map4dMap SDK cho cả thiết bị Android và iOS, cho phép tùy chỉnh bản đồ với nội dung để hiển thị trên các thiết bị di động.  
> Map4dMap plugin dựa trên cơ chế của Flutter để bổ sung các màn hình hiển thị cho Android và iOS.

## Getting Started

### Installation

Để sử dụng Map4dMap plugin, thêm `map4d_map` vào mục **dependencies** trong file `pubspec.yaml` của Flutter project.

```yaml
dependencies:
  map4d_map: ^1.0.0
```

Import `map4d_map` vào project

```dart
import 'package:map4d_map/map4d_map.dart';
```

### Phiên bản Android/iOS hỗ trợ

* Android: yêu cầu Android SDK 21 trở lên
* iOS: yêu cầu phiên bản iOS 9.0 trở lên

### API key

API key là một chuỗi ký tự dùng để xác thực các yêu cầu liên quan đến project của bạn dùng cho các mục đích sử dụng Map4dMap SDK.  
Bạn phải có ít nhất một API key liên kết với project của mình

Tạo API key tại địa chỉ: <https://map.map4d.vn/user/access-key/>

#### Thiết lập API key cho Android

Chỉnh sửa file `android/app/src/main/AndroidManifest.xml` và thêm API key của bạn cho Android:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application>
        <meta-data
            android:name="vn.map4d.map.ACCESS_KEY"
            android:value="YOUR_KEY_HERE"/>
    </application>
</manifest>
```

#### Thiết lập API key cho iOS

Chỉnh sửa file `ios/Runner/Info.plist` và thêm API key của bạn cho iOS:

```xml
<key>Map4dMapAccessKey</key>
<string>YOUR_KEY_HERE</string>
```

### Sử dụng

Map4dMap Flutter cung cấp `MFMapView` widget để hiển thị Map4d, bạn có thể thêm `MFMapView` widget vào widget tree của bạn.  
Bản đồ có thể được điều khiển với `MFMapViewController` được truyền cho `MFMapView` khi hàm `onMapCreated` được gọi lại.

### Ví dụ

```dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:map4d_map/map4d_map.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Map4D Map',
      home: Map4dSample(),
    );
  }
}

class Map4dSample extends StatefulWidget {
  @override
  _Map4dSampleState createState() => _Map4dSampleState();
}

class _Map4dSampleState extends State<Map4dSample> {
  
  Completer<MFMapViewController> _controller = Completer();
  bool _is3dMode = false;

  static final MFLatLng _kLandmark81 = MFLatLng(10.794630856464138, 106.72229460050636);
  static final MFCameraPosition _kInitialCameraPosition = MFCameraPosition(target: _kLandmark81, zoom: 16);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: MFMapView(
        initialCameraPosition: _kInitialCameraPosition,
        onMapCreated: (MFMapViewController controller) {
          _controller.complete(controller);
        },
        onPOITap: _onPOITap,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _switch3dMode,
        tooltip: '3D Mode',
        child: Icon(Icons.threed_rotation),
      ),
    );
  }

  void _onPOITap(String placeId, String name, MFLatLng location) {
    print('Tap on place: $placeId, name: $name, location: $location');
  }

  void _switch3dMode() async {
    final MFMapViewController controller = await _controller.future;
    _is3dMode = !_is3dMode;
    controller.enable3DMode(_is3dMode);
  }
}
```

Xem thêm ví dụ tại <https://github.com/map4d/map4d-map-flutter/tree/master/example>