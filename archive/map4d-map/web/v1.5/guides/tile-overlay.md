# Tile Overlay

Tile Overlay là một loại overlay cho phép người dùng hiển thị các tile map khác nhau từ nhiều nguồn khác nhau lên trên tile map có sẵn của Map4D

<iframe src="./html/tile-overlay.html" style="min-width: 900px;" height="520px"></iframe>

## Add Tile overlay

Để thêm 1 tile overlay vào map cần tạo mới 1 đối tượng của lớp [TileOverlay](reference/tile-overlay?id=tileoverlay-class) sau đó set `map` cho tile overlay đó.

Hàm khởi tạo của lớp [TileOverlay](reference/tile-overlay?id=tileoverlay-class) nhận vào một đối tượng [TileOverlayOptions](reference/tile-overlay?id=tileoverlayoptions-interface) có các tham số như sau:

| No | Property | Type     | Requied | Description                                                                             |
|:--:|----------|----------|:-------:|-----------------------------------------------------------------------------------------|
|  1 | getUrl   | function |   YES   | Hàm nhận vào 4 giá trị `x`, `y`, `zoom`, `is3dMode`<br>và trả về đường dẫn đến map tile |
|  2 | visible  | boolean  |    NO   | Nếu là `true` thì tile overlay sẽ được hiển thị                                         |
|  3 | zIndex   | number   |    NO   | Thứ tự hiển thị                                                                         |

### Tạo mới Tile overlay

```js
let options = {
  getUrl: function (x, y, zoom, is3dMode) {
    return `https://tile.openstreetmap.de/${zoom}/${x}/${y}.png`
  },
  visible: true,
  zIndex: 1
}
let overlay = new map4d.TileOverlay(options)
```

### Add tile overlay lên Map

Để vẽ Tile overlay lên map, ta set map cho tile overlay bằng hàm `setMap`

```js
overlay.setMap(map)
```

### Remove tile overlay

Để xóa Tile overlay khỏi map, ta gọi hàm `setMap` và truyền vào giá trị `null`

```js
overlay.setMap(null)
```

### Thay đổi zIndex

Gọi hàm `setZIndex(number)` để thay đổi giá trị zIndex của tile overlay

```js
overlay.setZIndex(10)
```

### Ẩn/Hiện Tile Overlay

Gọi hàm `setVisible(boolean)` để ẩn/hiện tile overlay.  
Chú ý: Mặc dù tile overlay không hiển thị nhưng quá trình tải các tile vẫn diễn ra

```js
overlay.setVisible(false)
```


