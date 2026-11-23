# Map Type

## Giới thiệu

>Map4dMap Android SDK cho phép tùy chỉnh kiểu hiển thị của Tile bản đồ theo hai chế độ (Raster và Roadmap).

### Các loại bản đồ

Map4D Map SDK hiện cung cấp 2 loại bản đồ tùy chỉnh thông qua đối tượng `MFMapType` như bên dưới:

| No. | Name    | Description                                                                                                                                                           |
|:---:|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | ROADMAP | Giá trị: `MFMapType.ROADMAP`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của Map4dMap SDK |
|  2  | RASTER  | Giá trị: `MFMapType.RASTER`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh đã được dựng sẵn, tốc độ tải và hiển thị nhanh hơn so với Roadmap.                |

|                 ROADMAP                         | RASTER                                         |
|:-----------------------------------------------:|:----------------------------------------------:|
| ![MapType](/map4d-map/android/resources/maptype-roadmap.png) | ![MapType](/map4d-map/android/resources/maptype-raster.png) |

### Thay đổi kiểu bản đồ

Để thay kiểu bản đồ, ta gọi hàm `setMapType(MFMapType mapType)` thông qua đối tượng `Map4D`  
Ví dụ: để hiển thị bản đồ dạng Raster:

<!-- tabs:start -->
#### ** Java **

```java
private Map4D map4D;

map4D.setMapType(MFMapType.RASTER);
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: Map4D

map4D.setMapType(MFMapType.RASTER)
```
<!-- tabs:end -->

### Get kiểu bản đồ hiện tại

Để get kiểu bản đồ hiện tại ta có thể gọi hàm `getMapType()` thông qua đối tượng `Map4D`. Giá trị trả về sẽ là một kiểu
của `MFMapType`

Ví dụ:

<!-- tabs:start -->
#### ** Java **

```java
private Map4D map4D;

MFMapType mapType = map4D.getMapType();
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: Map4D

val mapType = map4D.getMapType()
```
<!-- tabs:end -->

