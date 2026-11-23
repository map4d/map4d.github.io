# Map4dServices React Native SDK
[![map4d](https://img.shields.io/badge/map4d-services-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-reactnative-61dafb.svg)](https://reactnative.dev/)
[![npm](https://img.shields.io/npm/v/react-native-map4d-services)](https://www.npmjs.com/package/react-native-map4d-services)

> **Map4dServices React Native** cung cấp [Map4D Services API](https://docs.map4d.vn/map4d-service/api) wrapper sử dụng cho nhiều mục đích khác nhau như tìm kiếm địa điểm, chỉ đường, phân giải địa chỉ, ...  
> **Map4dServices React Native** cho phép hạn chế ứng dụng sử dụng khóa API của bạn thông qua bundle id.  

## Requirement

* Android: Android SDK 21+
* iOS:iOS 11.0+

## Installation

```shell
npm i react-native-map4d-services
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

**Map4dServices React Native** cung cấp các hàm để sử dụng Map4d Web Services API:

- Places Services:
  + [fetchSuggestion](guides/auto-suggest.md): tự động đề xuất các địa điểm dựa trên chuỗi tìm kiếm hoàn chỉnh hoặc chưa hoàn chỉnh
  + [fetchPlaceDetail](guides/place-detail.md): lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó
  + [fetchTextSearch](guides/text-search.md)): tìm kiếm các địa điểm bằng chuỗi ký tự
  + [fetchNearbySearch](guides/nearby-search.md): tìm kiếm các địa điểm lân cận
  + [fetchViewboxSearch](guides/viewbox-search.md): tìm các địa điểm trong khu vực địa lý hình chữ nhật
  + [fetchGeocode](guides/geocode.md): phân giải địa điểm ra tọa độ địa lý

- Directions Services:
  + [fetchDirections](guides/directions.md): tìm đường đi giữa các địa điểm
  + [fetchRouteETA](guides/route-eta.md): tính toán thời gian dự kiến các đường đi giữa các địa điểm
  + [fetchDistanceMatrix](guides/distance-matrix.md): tính toán khoảng cách và thời gian di chuyển cho ma trận các điểm xuất phát và các điểm đến
  + [fetchGraphRoute](guides/graph-route.md): tìm biểu đồ tuyến đường giữa các địa điểm

Ví dụ: Lấy tự động đề xuất với `fetchSuggestion`

```js
import { fetchSuggestion } from "react-native-map4d-services";

// ...

fetchSuggestion({text: 'abc'})
.then(result => {
  console.log('Suggestion:', result);
})
```