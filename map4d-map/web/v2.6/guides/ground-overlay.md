# Ground Overlay

Ground Overlay cho phép người dùng thực hiện việc thay thế tile ở một khu vực nào đó bằng tile từ những nguồn khác.<br>
Ground Overlay tương tự với Tile Overlay nhưng cho phép người dùng quy định 1 khu vực cụ thể gắn với kinh độ/vĩ độ, ngoài ra con cho phép người dùng loại bỏ việc hiển thị tile và các đối tượng thuộc tile của iPostMap SDK

<iframe src="./html/ground-overlay.html" style="min-width: 900px;" height="600px"></iframe>

## Add Ground Overlay

Để thêm 1 ground overlay vào map cần tạo mới 1 đối tượng [GroundOverlay](/guides/ground-overlay?id=groundoverlay-class) và set `map` cho ground overlay đó

Hàm khởi tạo của lớp [GroundOverlay](/guides/ground-overlay?id=groundoverlay-class) nhận vào 1 đối tượng [GroundOverlayOptions](/guides/ground-overlay?id=groundoverlayoptions-interface) như sau:

|  No | Property | Type                                                     | Requied | Default Value | Description                                                                                             |
| :-: | -------- | -------------------------------------------------------- | :-----: | :-----------: | ------------------------------------------------------------------------------------------------------- |
|  1  | bounds   | [ILatLngBounds](/guides/coordinates?id=ilatlngbounds) |   YES   |               | Vùng hiển thị của ground overlay                                                                        |
|  2  | getUrl   | function                                                 |   YES   |               | Hàm nhận vào 4 giá trị `x`, `y`, `zoom`, `is3dMode`và trả về đường dẫn đến map tile                     |
|  3  | override | boolean                                                  |    NO   |    `false`    | Nếu `true` thì sẽ không hiển thị iPostMap tile và các đối tượng cảu iPostMap trong khu vực của ground overlay |
|  4  | visible  | boolean                                                  |    NO   |     `true`    | Nếu là `true` thì ground overlay sẽ được hiển thị                                                       |
|  5  | zIndex   | number                                                   |    NO   |      `0`      | Thứ tự hiển thị của ground overlay                                                                      |
|  6  | opacity  | number                                                   |    NO   |      `1`      | Độ trong suốt của ground overlay. Có giá trị từ 0 đến 1                                                 |


### Tạo mới Ground overlay

```js
let overlayOptions = {
  getUrl: function (x, y, zoom, is3dMode) {
    return `https://a.tile.opentopomap.org/${zoom}/${x}/${y}.png`
  },
  bounds: [{lng: 108.22125434875488, lat: 16.059547034047146}, {lng: 108.23086738586424, lat: 16.075630202564316}],
  override: true
}
overlay = new ipostmap.GroundOverlay(overlayOptions)
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

Gọi hàm `setVisible(boolean)` để ẩn/hiện ground overlay.<br>
Chú ý:
- Mặc dù ground overlay không hiển thị nhưng quá trình tải các tile vẫn diễn ra khi kéo map đến khu vực quy định cho ground overlay
- Trong trường hợp set `override` là `true` nhưng lại `setVisible` là `false` thì ground không được hiển thị và khu vực đó cũng không hề hiển thị dữ liệu của iPostMap

```js
overlay.setVisible(false)
```

### Thay đổi opacity

Gọi hàm `setOpacity(number)` để thay đổi giá trị opacity của ground overlay.
Chú ý: Giá trị opacity nằm trong khoảng từ 0 đến 1.

```js
overlay.setOpacity(0.8)
```

## API Reference

<a id="reference-ground-overlay"></a>

## Ground Overlay References

## GroundOverlay class

`ipostmap.GroundOverlay` class

**Constructor**

Tạo GroundOverlay với các options được chỉ định

```js
GroundOverlay(options)
```

- Parameters:
  - options: [GroundOverlayOptions](/guides/ground-overlay?id=groundoverlayoptions-interface) *required*


**Methods**

| Name           | Parameters                              | Return Value | Description                                                                                |
|----------------|-----------------------------------------|:------------:|--------------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/guides/map-options?id=map-class) | `none`       | Hiển thị ground overlay lên map, nếu set map là null thì ground overlay sẽ bị xóa khỏi map |
| **setVisible** | visibility: boolean                     | `none`       | Ẩn/hiện ground overlay trên map                                                            |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của overlay                                                         |
| **setZIndex**  | zIndex: number                          | `none`       | Set giá trị zIndex                                                                         |
| **getZIndex**  | `none`                                  | number       | Get giá trị zIndex hiện tại của overlay                                                    |
| **setOpacity** | number                                  | `none`       | Set giá trị opacity cho overlay. Giá trị opacity từ 0 đến 1                                |
| **getOpacity** | `none`                                  | number       | Get giá trị opacity hiện tại của overlay                                                   |

## GroundOverlayOptions interface

`ipostmap.GroundOverlayOptions` interface

Đối tượng GroundOverlayOptions đùng để xác định các thuộc tính dùng cho TileOverlay.

**Properties**

| Name                    | Type                                                     | Description                                                                                                          |
|-------------------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| **getUrl** *required*   | function                                                 | Hàm nhận vào 4 giá trị `x`, `y`, `zoom`, `is3dMode` và trả về đường dẫn đến map tile                                 |
| **bounds** *required*   | [ILatLngBounds](/guides/coordinates?id=ilatlngbounds) | Vùng hiển thị ground overlay                                                                                         |
| **override** *optional* | boolean                                                  | Cho phép hiển thị ground overlay đè hoàn toàn lên iPostMap, vùng hiển thị ground overlay sẽ không tải dữ liệu của iPostMap |
| **visible** *optional*  | boolean                                                  | Nếu là true thì ground overlay sẽ được hiển thị                                                                      |
| **zIndex** *optional*   | number                                                   | Thứ tự hiển thị của ground overlay (đối với ground overlay khác và tile overlay)                                     |
| **opacity** *optional*  | number                                                   | Độ trong suốt của ground overlay. Có giá trị từ 0 đến 1                                                              |
