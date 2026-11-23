# Image Overlay References

## MFImageOverlay class

`MFImageOverlay` class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setVisible** | boolean                                 | `none`       | Ẩn/hiện Image Overlay trên map                                                         |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của Image Overlay                                               |
| **setOpacity** | float                                   | `none`       | Set độ trong suốt của Image Overlay (giá trị trong khoảng từ 0 tới 1)                  |
| **getOpacity** | `none`                                  | float        | Get độ trong suốt hiện tại của Image Overlay                                           |

## MFImageOverlayOptions class

`MFImageOverlayOptions` class

**Constructor**

Để tạo một đối tượng `MFImageOverlayOptions` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
MFImageOverlayOptions options = new MFImageOverlayOptions()
```

#### ** Kotlin **

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
