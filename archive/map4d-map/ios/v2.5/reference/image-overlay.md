# Image Overlay References

## MFImageOverlay class

`MFImageOverlay` class

**Constructor** 

Lớp `MFImageOverlay` cung cấp một phương thức static để tạo đối tượng *MFImageOverlay* một cách tiện lợi
```objc
+ (instancetype)imageOverlayWithImage:(UIImage *)image bounds:(MFCoordinateBounds *)bounds;
```

- Parameters:
  - image: **UIImage**: hình ảnh dùng để hiển thị trên bản đồ
  - bounds: [MFCoordinateBounds](/reference/coordinates?id=MFCoordinateBounds): vùng tọa độ hiển thị hình ảnh trên Map4D

Sử dụng
<!-- tabs:start -->
#### ** Swift **
```swift
let imageOverlay = MFImageOverlay(image: image, bounds: bounds)
```
#### ** Objective-C **
```objc
MFImageOverlay *imageOverlay = [MFImageOverlay imageOverlayWithImage:image bounds:bounds];
```
<!-- tabs:end -->

**Properties**

| Name         | Type      | Description                                                                            |
|--------------|-----------|----------------------------------------------------------------------------------------|
| **map**      | [MFMapView](/reference/map?id=mfmapview-class) | Map view sẽ hiển thị image overlay                 |
| **isHidden** | bool                                           | Ẩn/hiện image overlay trên map                     |
| **opacity**  | float                                          | Độ trong suốt của image (mặc đinh là: 1.0)   |
| **zIndex**   | float                                          | Giá trị zIndex của image overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |
