# Image Overlay

Image Overlay là một loại overlay cho phép người dùng hiển thị một hình ảnh có sẵn lên một vùng tọa độ xác định trên iPostMap.

![Image Overlay](.././resources/image-overlay.png)

## Add Image overlay

Để thêm 1 image overlay vào map cần tạo mới 1 đối tượng của lớp [MFImageOverlay](guides/image-overlay?id=mfimageoverlay-class) sau đó set `map` cho đối tượng đó.<br>

### Tạo mới Image overlay

Đoạn code bên dưới hướng dẫn cách sử dụng [MFImageOverlay](guides/image-overlay?id=mfimageoverlay-class) để hiển thị một hình ảnh lên iPostMap:

```swift
let bounds = MFCoordinateBounds(coordinate: CLLocationCoordinate2D(latitude: 16.066154, longitude: 108.207276),
                               coordinate: CLLocationCoordinate2D(latitude: 16.020262, longitude: 108.189487))
let image = UIImage(named: "default_overlay")
let imageOverlay = MFImageOverlay(image: image!, bounds: bounds)
imageOverlay.map = mapView
```

### Remove image overlay

Để xoá image overlay khỏi map, ta set đối tượng `map` của image overlay về rỗng
```swift
imageOverlay.map = nil
```

### Ẩn/Hiện Image Overlay
Set giá trị cho thuộc tính `isHidden` để ẩn/hiện image overlay.

```swift
imageOverlay.isHidden = true
```

### Thay đôi độ trong suốt của Image Overlay

Để thay đổi độ trong suốt của hình ảnh, ta set giá trị `opacity` cho đối tượng image overlay.<br>
Chú ý: opacity chỉ nhận giá trị trong khoảng 0 -> 1

```swift
imageOverlay.opacity = 0.5
```

## API Reference

<a id="reference-image-overlay"></a>

## Image Overlay References

## MFImageOverlay class

`MFImageOverlay` class

**Constructor**

Lớp `MFImageOverlay` cho phép tạo đối tượng trong Swift *MFImageOverlay* một cách tiện lợi
```swift
let imageOverlay = MFImageOverlay(image: image, bounds: bounds)
```

- Parameters:
  - image: **UIImage**: hình ảnh dùng để hiển thị trên bản đồ
  - bounds: [MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds): vùng tọa độ hiển thị hình ảnh trên iPostMap

Sử dụng
```swift
let imageOverlay = MFImageOverlay(image: image, bounds: bounds)
```

**Properties**

| Name         | Type      | Description                                                                            |
|--------------|-----------|----------------------------------------------------------------------------------------|
| **map**      | [MFMapView](/guides/map-options?id=mfmapview) | Map view sẽ hiển thị image overlay                 |
| **isHidden** | bool                                           | Ẩn/hiện image overlay trên map                     |
| **opacity**  | float                                          | Độ trong suốt của image (mặc đinh là: 1.0)   |
| **zIndex**   | float                                          | Giá trị zIndex của image overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |
