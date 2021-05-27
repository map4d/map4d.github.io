# Ground Overlay

Ground Overlay cho phép người dùng thực hiện việc thay thế tile ở một khu vực nào đó bằng tile từ những nguồn khác.  
Ground Overlay tương tự với Tile Overlay nhưng cho phép người dùng quy định 1 khu vực cụ thể gắn với kinh độ/vĩ độ, ngoài ra con cho phép người dùng loại bỏ việc hiển thị tile và các đối tượng thuộc tile của Map4D SDK

<iframe src="./html/ground-overlay.html" style="min-width: 900px;" height="600px"></iframe>

## Add Ground Overlay

Để thêm 1 ground overlay vào map cần tạo mới 1 đối tượng [GroundOverlay](/reference/ground-overlay?id=groundoverlay-class) và set `map` cho ground overlay đó

Hàm khởi tạo của lớp [GroundOverlay](/reference/ground-overlay?id=groundoverlay-class) nhận vào 1 đối tượng [GroundOverlayOptions](/reference/ground-overlay?id=groundoverlayoptions-interface) như sau:

|  No | Property | Type                                                     | Requied | Default Value | Description                                                                                             |
| :-: | -------- | -------------------------------------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------- |
|  1  | bounds   | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds) |   YES   |               | Vùng hiển thị của ground overlay                                                                        |
|  2  | getUrl   | function                                                 |   YES   |               | Hàm nhận vào 4 giá trị `x`, `y`, `zoom`, `is3dMode`và trả về đường dẫn đến map tile                     |
|  3  | override | boolean                                                  |    NO   |    `false`    | Nếu `true` thì sẽ không hiển thị Map4D tile và các đối tượng cảu Map4D trong khu vực của ground overlay |
|  4  | visible  | boolean                                                  |    NO   |     `true`    |                                                                                                         |
|  5  | zIndex   | number                                                   |    NO   |      `0`      |                                                                                                         |


### Tạo mới Ground overlay

```js
let overlayOptions = {
  getUrl: function (x, y, zoom, is3dMode) {
    return `https://a.tile.opentopomap.org/${zoom}/${x}/${y}.png`
  },
  bounds: [{lng: 108.22125434875488, lat: 16.059547034047146}, {lng: 108.23086738586424, lat: 16.075630202564316}],
  override: true
}
overlay = new map4d.GroundOverlay(overlayOptions)
```

### Add Ground overlay lên map

Để vẽ Ground overlay lên map, ta set map cho tile overlay bằng hàm `setMap`

```js
overlay.setMap(map)
```

### Remove tile overlay
Để xóa Ground overlay khỏi map, ta gọi hàm `setMap` và truyền vào giá trị `null`

```js
overlay.setMap(null)
```

### Thay đổi zIndex

Gọi hàm `setZIndex(number)` để thay đổi giá trị zIndex của ground overlay

```js
overlay.setZIndex(10)
```

### Ẩn/Hiện Ground overlay

Gọi hàm `setVisible(boolean)` để ẩn/hiện ground overlay.  
Chú ý:
- Mặc dù ground overlay không hiển thị nhưng quá trình tải các tile vẫn diễn ra khi kéo map đến khu vực quy định cho ground overlay
- Trong trường hợp set `override` là `true` nhưng lại `setVisible` là `false` thì ground không được hiển thị và khu vực đó cũng không hề hiển thị dữ liệu của Map4D

```js
overlay.setVisible(false)
```