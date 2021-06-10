# Map4dMap React Native
[![map4d](https://img.shields.io/badge/map4d-map-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-reactnative-61dafb.svg)](https://reactnative.dev/)
[![npm](https://img.shields.io/npm/v/react-native-map4d-map)](https://www.npmjs.com/package/react-native-map4d-map)


> **Map4dMap React Native** cung cấp Map4dMap SDK cho cả thiết bị [Android](https://docs.map4d.vn/map4d-map/android/) và [iOS](https://docs.map4d.vn/map4d-map/android/), cho phép tùy chỉnh bản đồ với nội dung để hiển thị trên các thiết bị di động.  
> Map4dMap React Native dựa trên cơ chế của React Native để bổ sung các màn hình hiển thị cho Android và iOS.

## Getting Started

### Installation

Để sử dụng Map4dMap Rect Native, chạy lệnh sau để thêm `react-native-map4d-map` vào file package.json

```shell
npm install react-native-map4d-map --save
```

Import `react-native-map4d-map` vào project files.

```js
import {MFMapView, MFMarker, MFCircle, MFPolyline, MFPolygon, MFPOI} from 'react-native-map4d-map'
```

### Phiên bản Android/iOS hỗ trợ

* Android: yêu cầu Android SDK 21 trở lên
* iOS: yêu cầu phiên bản iOS 9.0 trở lên
  * Đối với `react-native-map4d-map` version từ `1.0.9` trở về trước yêu cầu iOS 10.0  trở lên

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

##### Chỉnh sửa file build.gradle cho Android

Chỉnh sửa file **build.gradle** (Project) như sau:
```
buildscript {
    ext {
        // ...
        RNNKotlinVersion = "1.3.61" // Or any version above 1.3.x
        RNNKotlinStdlib = "kotlin-stdlib-jdk8"
    }
    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.3.61"
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
<key>Map4dMapAccessKey</key>
<string>YOUR_KEY_HERE</string>
```

### Sử dụng

Map4dMap React Native cung cấp component [MFMapView](./guides/mapview) để hiển thị bản đồ Map4D. Bạn có thể thêm `MFMapView` vào view và set style cho nó để hiển thị Map4D.

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
