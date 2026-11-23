# Map4dServices Flutter SDK
[![map4d](https://img.shields.io/badge/map4d-services-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-flutter-45d2fd.svg)](https://flutter.dev/)
[![pub package](https://img.shields.io/pub/v/map4d_services.svg)](https://pub.dev/packages/map4d_services)

> **Map4dServices Flutter SDK** cung cấp [Map4D Services API](https://docs.map4d.vn/map4d-service/api) wrapper sử dụng cho nhiều mục đích khác nhau như tìm kiếm địa điểm, chỉ đường, phân giải địa chỉ, ...  
> **Map4dServices Flutter SDK** cho phép hạn chế ứng dụng sử dụng khóa API của bạn thông qua bundle id.  

## Requirement

* Android: Android SDK 21+
* iOS:iOS 11.0+

## Installation

Để sử dụng Map4dMap plugin, thêm `map4d_services` vào mục **dependencies** trong file `pubspec.yaml` của Flutter project.

```yaml
dependencies:
  map4d_services: ^1.2.0
```

Hoặc chạy lệnh sau:

```shell
flutter pub add map4d_services
```

## API key

API key là một chuỗi ký tự dùng để xác thực các yêu cầu liên quan đến project của bạn dùng cho các mục đích sử dụng Map4dServices SDK.  
Bạn phải có ít nhất một API key liên kết với project của mình

Tạo API key tại địa chỉ: <https://map.map4d.vn/user/>

#### Thiết lập API key cho Android

Chỉnh sửa file `android/app/src/main/AndroidManifest.xml` và thêm API key của bạn cho Android:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application>
        <meta-data
            android:name="vn.map4d.services.ACCESS_KEY"
            android:value="YOUR_KEY_HERE"/>
    </application>
</manifest>
```

##### Chỉnh sửa file build.gradle cho Android

Chỉnh sửa file **build.gradle** (Project) như sau:
```
allprojects {
    repositories {
        // ...
        maven {
            url = "https://packages.map4d.vn/repository/maven-public"
        }
    }
}

```

Chỉnh sửa file **build.gradle** (App) như sau:
```
android {
    // ...
    packagingOptions {
        pickFirst 'lib/x86/libc++_shared.so'
        pickFirst 'lib/armeabi-v7a/libc++_shared.so'
        pickFirst 'lib/arm64-v8a/libc++_shared.so'
        pickFirst 'lib/x86_64/libc++_shared.so'
    }
}
```

#### Thiết lập API key cho iOS

Chỉnh sửa file `ios/Runner/Info.plist` và thêm API key của bạn cho iOS:

```xml
<key>Map4dServicesAccessKey</key>
<string>YOUR_SERVICES_ACCESS_KEY</string>
```

## Using

Import `map4d_services` vào project

```dart
import 'package:map4d_services/map4d_services.dart';
```

E.g: Get place detail

```dart
void getPlaceDetail() async {
  MFServices.places.fetchPlaceDetail('5c88df71d2c05acd14848f9e')
  .then((place) => {
    print('Place Detail: ${place.name}')
  })
  .onError<MFServiceError>((error, stackTrace) => {
    print('Place Detail Error: ${error.code}, ${error.message}')
  });
}
```


