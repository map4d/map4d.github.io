# Map4D Service Android
[![map4d](https://img.shields.io/badge/map4d-service-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-android-brightgreen.svg)](https://www.android.com/)

Map4D Service Android API cung cấp thư viện gọi API cho Android, được viết bằng ngôn ngữ Java.

> Map4D Service Android API cho phép bạn gọi các API của Map4D để thực hiện các chức năng như tìm kiếm địa điểm, dẫn đường, geocode, ... để hỗ trợ cho
ứng dụng bản đồ của bạn.


## 2. Danh sách API
1. Tự động đề xuất chuỗi tìm kiếm [AutoSuggest](guides/api_autosuggest.md)
2. Tìm kiếm geocode của địa điểm [GeoCode](guides/api_geocode.md)
3. Tìm thông tin chi tiết của place [Place Detail](guides/api_place_detail.md)
4. Tìm kiếm các địa điểm bằng text [TextSearch](guides/api_text_search.md)
5. Tìm kiếm các địa điểm lân cận [NearbySearch](guides/api_nearby_search.md)
6. Tìm kiếm các địa điểm trong một vùng địa lý viewbox [ViewboxSearch](guides/api_viewbox_search.md)
7. Tìm đường đi giữa các địa điểm [Route](guides/api_route.md)
8. Tìm khoảng cách và thời gian di chuyển cho một ma trận gồm các điểm xuất phát và các điểm đến [Matrix](guides/api_matrix.md)

## 3. Installation

Nếu dự án của bạn dùng Gradle thì trước hết cần khai báo url cho maven trong file gradle project.

```xml
allprojects {
  repositories {
    maven {
      url = "https://packages.map4d.vn/repository/maven-public"
    }
  }
}
```

Thêm vào dependencies:

```xml
dependencies {
  implementation 'vn.map4d:Map4dServices:2.0.0'
}
```

Cung cấp access key trong file AndroidManifest:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  <application
    <meta-data
      android:name="vn.map4d.services.ACCESS_KEY"
      android:value="TYPE_YOUR_KEY_HERE"/>
  </application>
</manifest>

```
