# Map4dMap React Native
[![map4d](https://img.shields.io/badge/map4d-map-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-reactnative-61dafb.svg)](https://reactnative.dev/)
[![npm](https://img.shields.io/npm/v/react-native-map4d-map)](https://www.npmjs.com/package/react-native-map4d-map)


> **Map4dMap React Native** cung cấp Map4dMap SDK cho cả thiết bị Android và iOS, cho phép tùy chỉnh bản đồ với nội dung để hiển thị trên các thiết bị di động.  
> Thư viện dựa trên cơ chế của React Native để bổ sung các màn hình hiển thị cho Android và iOS.

## Getting Started

### Installation

Để sử dụng Map4dMap Rect Native, chạy lệnh sau để thêm `react-native-map4d-map` vào file package.json

```shell
npm i react-native-map4d-map
```

Import `react-native-map4d-map` vào project files.

```js
import {
  MFMapView,
  MFMarker,
  MFCircle,
  MFPolyline,
  MFPolygon,
  MFPOI,
  MFDirectionsRenderer
} from 'react-native-map4d-map'
```

### Phiên bản Android/iOS hỗ trợ

* Android: yêu cầu `Android SDK 21` trở lên
* iOS: yêu cầu phiên bản `iOS 13.0` trở lên

### API key

API key là một chuỗi ký tự dùng để xác thực các yêu cầu liên quan đến project của bạn dùng cho các mục đích sử dụng bản đồ.  
Bạn phải có ít nhất một API key liên kết với project của mình

Tạo API key tại trang nhà phát triển của Map4D <https://map.map4d.vn/developer/key/> *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*

#### Thiết lập API key cho Android

Chỉnh sửa file `android/app/src/main/AndroidManifest.xml` và thêm API key của bạn cho Android. Khóa cấu hình là `vn.map4d.map.ACCESS_KEY`

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application>
        <meta-data
            android:name="vn.map4d.map.ACCESS_KEY"
            android:value="YOUR_KEY_HERE"/>
    </application>
</manifest>
```
- *Thay thế `YOUR_KEY_HERE` bằng access lấy từ [Map4D Developer](https://map.map4d.vn/developer/key)*.

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

Thêm Access Key vào `Info.plist` của app target. Tên khóa cấu hình là `Map4dMapAccessKey`.

```xml
<key>Map4dMapAccessKey</key>
<string>YOUR_KEY_HERE</string>
```
- *Thay thế `YOUR_KEY_HERE` bằng access lấy từ [Map4D Developer](https://map.map4d.vn/developer/key)*.

### Sử dụng

Map React Native cung cấp component [MFMapView](./guides/mapview) để hiển thị bản đồ. Bạn có thể thêm `MFMapView` vào view và set style cho nó để hiển thị.

### Ví dụ

```js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import {MFMapView} from 'react-native-map4d-map';

function App() {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <MFMapView style={styles.container}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
```

> Chú ý: Cần set style quy định kích thước cho `MFMapView`
