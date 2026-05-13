# Image Overlay

Image Overlay là một loại overlay cho phép hiển thị một hình ảnh có sẵn lên một vùng tọa độ xác định trên Map4D.

![CocoaPods](../resources/imageOverlay.png)

## Thêm Image Overlay

Để thêm 1 image overlay vào map cần tạo 1 đối tượng của lớp [MFImageOverlayOptions](reference/image-overlay?id=mfimageoverlayoptions-class) và set các options cần thiết
trên đối tượng đó. Sau đó gọi hàm `addImageOverlay` của lớp Map4D.

<!-- tabs:start -->
#### ** Java **

```java
private Map4D map4D;

MFImageOverlayOptions options = new MFImageOverlayOptions()
    .bounds(new MFCoordinateBounds(
        new MFLocationCoordinate(16.057814922971613, 108.22065353393553),
        new MFLocationCoordinate(16.064289641988594, 108.2324981689453)))
    .image(MFBitmapDescriptorFactory.fromResource(R.drawable.default_overlay))
    .visible(true)
    .zIndex(2)
    .opacity(0.5f);
MFImageOverlay imageOverlay = map4D.addImageOverlay(options);
```

#### ** Kotlin **

```kotlin
private lateinit var map4D: Map4D

val options = MFImageOverlayOptions()
    .bounds(
        MFCoordinateBounds(
            MFLocationCoordinate(16.057814922971613, 108.22065353393553),
            MFLocationCoordinate(16.064289641988594, 108.2324981689453)
        )
    )
    .image(MFBitmapDescriptorFactory.fromResource(R.drawable.default_overlay))
    .visible(true)
    .zIndex(2.0)
    .opacity(0.5f)
val imageOverlay = map4D.addImageOverlay(options)
```
<!-- tabs:end -->

### Xóa Image Overlay

Để xoá image overlay khỏi map, ta gọi phương thức `MFImageOverlay.remove()`

<!-- tabs:start -->
#### ** Java **

```java
imageOverlay.remove()
```

#### ** Kotlin **

```kotlin
imageOverlay.remove()
```
<!-- tabs:end -->

### Ẩn/Hiện Image Overlay

Gọi phương thức `MFImageOverlay.setVisible()` để ẩn/hiện Tile Overlay.

<!-- tabs:start -->
#### ** Java **

```java
imageOverlay.setVisible(false)
```

#### ** Kotlin **

```kotlin
imageOverlay.setVisible(false)
```
<!-- tabs:end -->

### Thay đổi độ trong suốt của Image Overlay

Để thay đổi độ trong suốt của hình ảnh, ta gọi phương thức `setOpacity(float)` cho đối tượng `MFImageOverlay`

Chú ý: opacity chỉ nhận giá trị trong khoảng 0 -> 1

<!-- tabs:start -->
#### ** Java **

```java
imageOverlay.setOpacity(0.5f)
```

#### ** Kotlin **

```kotlin
imageOverlay.opacity = 0.5f
```
<!-- tabs:end -->

## References

### MFImageOverlay class

`MFImageOverlay` class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setVisible** | boolean                                 | `none`       | Ẩn/hiện Image Overlay trên map                                                         |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của Image Overlay                                               |
| **setOpacity** | float                                   | `none`       | Set độ trong suốt của Image Overlay (giá trị trong khoảng từ 0 tới 1)                  |
| **getOpacity** | `none`                                  | float        | Get độ trong suốt hiện tại của Image Overlay                                           |

### MFImageOverlayOptions class

`MFImageOverlayOptions` class

**Constructor**

Để tạo một đối tượng `MFImageOverlayOptions` ta làm như sau:

<!-- tabs:start -->
##### ** Java **

```java
MFImageOverlayOptions options = new MFImageOverlayOptions()
```

##### ** Kotlin **

```kotlin
var options = MFImageOverlayOptions()
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                             |
|----------------|-----------------------------------------|--------------|-----------------------------------------------------------------------------------------|
| **bounds**     | MFCoordinateBounds                      |MFImageOverlayOptions| set giá trị bounds cho MFImageOverlayOptions                                     |
| **image**      |[MFBitmapDescriptor](/reference/marker?id=MFBitmapDescriptor)|MFImageOverlayOptions| set hình ảnh cho cho MFImageOverlayOptions                   |
| **visible**    | boolean                                 |MFImageOverlayOptions| set giá trị visible cho MFImageOverlayOptions. Giá trị mặc định là `true`        |
| **zIndex**     | double                                  |MFImageOverlayOptions| set giá trị zIndex cho MFImageOverlayOptions, quy định zIndex giữa các Image Overlay với nhau. Giá trị mặc định là 0 |
| **opacity**    | float                                   |MFImageOverlayOptions| set độ trong suốt cho MFImageOverlayOptions (giá trị từ 0 tới 1). Giá trị mặc định là 1|
