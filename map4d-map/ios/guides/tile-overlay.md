# Tile Overlay

Tile Overlay là một loại overlay cho phép người dùng hiển thị các tile map khác nhau từ nhiều nguồn khác nhau lên trên tile map có sẵn

![Tile Overlay](../resources/v1.5/tile-overlay.png)

## Add Tile overlay

Để thêm 1 tile overlay vào map cần tạo mới 1 đối tượng của lớp [MFURLTileLayer](/guides/tile-overlay.md?id=api-tile-overlay-mfurltilelayer-class) sau đó set `map` cho đối tượng đó.  
Cần phải implement [MFTileURLConstructor](/guides/tile-overlay.md?id=api-tile-overlay-mftileurlconstructor-protocol)

### Tạo mới Tile overlay

Đoạn code bên dưới hướng dẫn cách sử dụng implement [MFTileURLConstructor](/guides/tile-overlay.md?id=api-tile-overlay-mftileurlconstructor-protocol) và sử dụng [MFURLTileLayer](/guides/tile-overlay.md?id=api-tile-overlay-mfurltilelayer-class) để hiển thị lớp tile từ `openstreetmap`

Implement **MFTileURLConstructor**
```swift
class TileURLConstructor : NSObject, MFTileURLConstructor {
    func getTileUrlWith(x: UInt, y: UInt, zoom: UInt) -> URL? {
    let url = "https://tile.openstreetmap.de/\(zoom)/\(x)/\(y).png"
    return URL(string: url)
    }
}
```

Tạo đối tượng **MFURLTileLayer** và set `map`
```swift
let urlConstructor = TileURLConstructor()
let tileOverlay = MFURLTileLayer(urlConstructor: urlConstructor)
tileOverlay.map = mapView
```

### Remove title overlay

Để xoá tile overlay khỏi map, ta set đối tượng `map` của tile overlay về rỗng

```swift
tileOverlay.map = nil
```

### Ẩn/Hiện Tile Overlay
Set giá trị cho thuộc tính `isHidden` để ẩn/hiện tile overlay.  
Chú ý: Mặc dù tile overlay không hiển thị nhưng quá trình tải các tile vẫn diễn ra

```swift
tileOverlay.isHidden = true
```

---

## API Reference :id=api-tile-overlay

### MFURLTileLayer class :id=api-tile-overlay-mfurltilelayer-class

`MFURLTileLayer` class

**Constructor** 

Lớp `MFURLTileLayer` cung cấp một phương thức static để tạo đối tượng *MFURLTileLayer* một cách tiện lợi
```swift
convenience init(urlConstructor: MFTileURLConstructor)
```

- Parameters:
  - urlConstructor: [MFTileURLConstructor](/guides/tile-overlay.md?id=api-tile-overlay-mftileurlconstructor-protocol) *required*

Sử dụng

```swift
let tileOverlay = MFURLTileLayer(urlConstructor: urlConstructor)
```

**Methods**

| Name               | Parameters  | Return Value | Description                                                              |
|--------------------|-------------|--------------|--------------------------------------------------------------------------|
| **clearTileCache** | `none`      | `none`       | Xoá cache của đối tượng tile overlay và load lại hình ảnh tile từ server |

**Properties**

| Name         | Type      | Description                                                                            |
|--------------|-----------|----------------------------------------------------------------------------------------|
| **map**      | [MFMapView](/guides/map.md?id=api-map-mfmapview) | Map view sẽ hiển thị tile overlay                 |
| **isHidden** | bool                                           | Ẩn/hiện tile overlay trên map                     |
| **opacity**  | CGFloat                                          | Độ trong suốt của tile layer (mặc đinh là: 1.0)   |
| **zIndex**   | float                                          | Giá trị zIndex của tile overlay cao hơn sẽ hiển thị trên tile overlay có giá trị zIndex nhỏ hơn |

### MFTileURLConstructor protocol :id=api-tile-overlay-mftileurlconstructor-protocol

`MFTileURLConstructor` protocol

MFTileURLConstructor là một protocol, định nghĩa sẵn phương thức dùng để xác định URL trỏ đến hình ảnh tile tương ứng với mỗi toạ độ và mức zoom

```swift
func getTileUrlWith(x: UInt, y: UInt, zoom: UInt) -> URL?
```

Cần phải implement protocol này trước khi tạo đối tượng `MFURLTileLayer`
