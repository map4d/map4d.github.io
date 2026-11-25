# iPostMap Flutter
[![ipostmap](https://img.shields.io/badge/ipostmap-map-orange)](https://ipostmap.vn/)
[![platform](https://img.shields.io/badge/platform-flutter-45d2fd.svg)](https://flutter.dev/)
[![pub package](https://img.shields.io/pub/v/ipostmap_flutter.svg)](https://pub.dev/packages/ipostmap_flutter)

> **iPostMap Flutter package** cung cấp iPostMap SDK cho cả thiết bị Android và iOS, cho phép tùy chỉnh bản đồ với nội dung để hiển thị trên các thiết bị di động.  
> iPostMap plugin dựa trên cơ chế của Flutter để bổ sung các màn hình hiển thị cho Android và iOS.

## Getting Started

### Installation

Để sử dụng iPostMap plugin, thêm `ipostmap_flutter` vào mục **dependencies** trong file `pubspec.yaml` của Flutter project.

```yaml
dependencies:
  ipostmap_flutter: ^3.0.0
```

Import `ipostmap_flutter` vào project

```dart
import 'package:ipostmap_flutter/ipostmap.dart';
```

### Phiên bản Android/iOS hỗ trợ

* Android: yêu cầu Android SDK 21 trở lên
* iOS: yêu cầu phiên bản iOS 12.0 trở lên

### API key

API key là một chuỗi ký tự dùng để xác thực các yêu cầu liên quan đến project của bạn dùng cho các mục đích sử dụng iPostMap SDK.  
Bạn phải có ít nhất một API key liên kết với project của mình

Tạo API key tại trang nhà phát triển của iPostMap <https://map.ipostmap.vn/developer/key/> *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*

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

Map Flutter plugin cung cấp `MFMapView` widget để hiển thị bản đồ, bạn có thể thêm `MFMapView` widget vào widget tree của bạn.  
Bản đồ có thể được điều khiển với `MFMapViewController` được truyền cho `MFMapView` khi hàm `onMapCreated` được gọi lại.

### Ví dụ

```dart
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:ipostmap_flutter/ipostmap.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Bản đồ',
      home: MapSample(),
    );
  }
}

class MapSample extends StatefulWidget {
  @override
  _MapSampleState createState() => _MapSampleState();
}

class _MapSampleState extends State<MapSample> {
  
  Completer<MFMapViewController> _controller = Completer();
  bool _buildingsEnabled = true;

  static final MFLatLng _kLandmark81 = MFLatLng(10.794630856464138, 106.72229460050636);
  static final MFCameraPosition _kInitialCameraPosition = MFCameraPosition(target: _kLandmark81, zoom: 16);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: MFMapView(
        initialCameraPosition: _kInitialCameraPosition,
        buildingsEnabled: _buildingsEnabled,
        onMapCreated: (MFMapViewController controller) {
          _controller.complete(controller);
        },
        onPOITap: _onPOITap,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _buildingsEnabledToggler,
        tooltip: '3D',
        child: Icon(Icons.threed_rotation),
      ),
    );
  }

  void _onPOITap(String placeId, String name, MFLatLng location) {
    print('Tap on place: $placeId, name: $name, location: $location');
  }

  void _buildingsEnabledToggler() async {
    setState(() {
      _buildingsEnabled = !_buildingsEnabled;
    });
  }
}
```

Xem thêm ví dụ tại <https://github.com/map4d/map4d-map-flutter/tree/ipostmap/example>