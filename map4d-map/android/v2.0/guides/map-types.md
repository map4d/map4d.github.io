# Map Type

## Giới thiệu

>IpostMap Android SDK cho phép tùy chỉnh kiểu hiển thị của Tile bản đồ theo hai chế độ (Raster và Roadmap).

### Các loại bản đồ

IPostMap Map SDK hiện cung cấp 2 loại bản đồ tùy chỉnh thông qua đối tượng `MFMapType` như bên dưới:

| No. | Name    | Description                                                                                                                                                           |
|:---:|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | ROADMAP | Giá trị: `MFMapType.ROADMAP`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của IpostMap SDK |
|  2  | RASTER  | Giá trị: `MFMapType.RASTER`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh đã được dựng sẵn, tốc độ tải và hiển thị nhanh hơn so với Roadmap.                |

|                 ROADMAP                         | RASTER                                         |
|:-----------------------------------------------:|:----------------------------------------------:|
| ![MapType](../../resources/maptype-roadmap.png) | ![MapType](../../resources/maptype-raster.png) |

### Thay đổi kiểu bản đồ

Để thay kiểu bản đồ, ta gọi hàm `setMapType(MFMapType mapType)` thông qua đối tượng `IPostMap`  
Ví dụ: để hiển thị bản đồ dạng Raster:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

ipostmap.setMapType(MFMapType.RASTER);
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

ipostmap.setMapType(MFMapType.RASTER)
```
<!-- tabs:end -->

### Get kiểu bản đồ hiện tại

Để get kiểu bản đồ hiện tại ta có thể gọi hàm `getMapType()` thông qua đối tượng `IPostMap`. Giá trị trả về sẽ là một kiểu
của `MFMapType`

Ví dụ:

<!-- tabs:start -->
#### ** Java **

```java
private IPostMap map4D;

MFMapType mapType = ipostmap.getMapType();
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: IPostMap

val mapType = ipostmap.getMapType()
```
<!-- tabs:end -->

