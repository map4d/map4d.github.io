# Image Overlay

Image Overlay là một loại overlay cho phép người dùng hiển thị một hình ảnh có sẵn lên một vùng tọa độ xác định trên bản đồ.

![Image Overlay](../resources/image-overlay.png)

## Add Image overlay

Để thêm 1 image overlay vào map cần tạo mới 1 đối tượng của lớp [MFImageOverlay](/guides/image-overlay.md?id=api-image-overlay-mfimageoverlay-class) sau đó set `map` cho đối tượng đó.  

### Tạo mới Image overlay

Đoạn code bên dưới hướng dẫn cách sử dụng [MFImageOverlay](/guides/image-overlay.md?id=api-image-overlay-mfimageoverlay-class) để hiển thị một hình ảnh lên bản đồ:

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

Để thay đổi độ trong suốt của hình ảnh, ta set giá trị `opacity` cho đối tượng image overlay.  
Chú ý: opacity chỉ nhận giá trị trong khoảng 0 -> 1

```swift
imageOverlay.opacity = 0.5
```

---

## API Reference :id=api-image-overlay

### MFImageOverlay class :id=api-image-overlay-mfimageoverlay-class

`MFImageOverlay` class

**Constructor** 

Lớp `MFImageOverlay` cung cấp một phương thức static để tạo đối tượng *MFImageOverlay* một cách tiện lợi
```swift
let imageOverlay = MFImageOverlay(image: image, bounds: bounds)
```

- Parameters:
  - image: **UIImage**: hình ảnh dùng để hiển thị trên bản đồ
  - bounds: [MFCoordinateBounds](/guides/coordinates.md?id=api-coordinates-mfcoordinatebounds): vùng tọa độ hiển thị hình ảnh trên bản đồ

Sử dụng

```swift
let imageOverlay = MFImageOverlay(image: image, bounds: bounds)
```

**Properties**

| Name         | Type      | Description                                                                            |
|--------------|-----------|----------------------------------------------------------------------------------------|
| **image** | UIImage (chỉ đọc) | Hình ảnh của overlay. |
| **bounds** | MFCoordinateBounds (chỉ đọc) | Vùng hiển thị overlay. |
| **map**      | [MFMapView](/guides/map.md?id=api-map-mfmapview) | Map view sẽ hiển thị image overlay                 |
| **isHidden** | bool                                           | Ẩn/hiện image overlay trên map                     |
| **opacity**  | CGFloat                                          | Độ trong suốt của image (mặc đinh là: 1.0)   |
| **zIndex**   | float                                          | Giá trị zIndex của image overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |
