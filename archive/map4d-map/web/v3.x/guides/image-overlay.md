# Image Overlay

Image Overlay là một loại overlay cho phép người dùng hiển thị một image lên trên map của Map4D trong một khu vực/vùng cụ thể gắn với kinh độ và vĩ độ.

<iframe src="./html/image-overlay.html" style="min-width: 900px;" height="520px"></iframe>

## Add Image overlay

Để thêm 1 image overlay vào map cần tạo mới 1 đối tượng của lớp [ImageOverlay](reference/image-overlay?id=imageoverlay-class) sau đó set `map` cho image overlay đó.

Hàm khởi tạo của lớp [ImageOverlay](reference/image-overlay?id=imageoverlay-class) nhận vào một đối tượng [ImageOverlayOptions](reference/image-overlay?id=imageoverlayoptions-interface) có các tham số như sau:

| No | Property | Type     | Requied | Description                                                                             |
|:--:|----------|----------|:-------:|-----------------------------------------------------------------------------------------|
|  1 | url      | string   |   YES   | Đường dẫn url của image                                                                 |
|  2 | bounds   | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds)|YES| Vùng hiển thị của Image Overlay                |
|  3 | visible  | boolean  |    NO   | Nếu là `true` thì Image Overlay sẽ được hiển thị                                        |
|  4 | zIndex   | number   |    NO   | Thứ tự hiển thị giữa các Image Overlay với nhau. Tất cả các Image overlay được hiển thị đè lên trên bản đồ và các điểm Place của bản đồ|
|  5 | opacity  | number   |    NO   | Độ trong suốt của Image Overlay. Có giá trị từ 0 đến 1                                  |

### Tạo mới Image Overlay

```js
let options = {
  url: `https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189`,
  bounds: [{lng: 108.214421, lat: 16.061733}, {lng: 108.23086738586424, lat: 16.075630202564316}],
  zIndex: 1
}
let overlay = new map4d.ImageOverlay(options)
```

### Add Image Overlay lên Map

Để vẽ Image Overlay lên map, ta set map cho Image Overlay bằng hàm `setMap`

```js
overlay.setMap(map)
```

### Remove Image Overlay

Để xóa Image Overlay khỏi map, ta gọi hàm `setMap` và truyền vào giá trị `null`

```js
overlay.setMap(null)
```

### Ẩn/Hiện Image Overlay

Gọi hàm `setVisible(boolean)` để ẩn/hiện Image Overlay.  

```js
overlay.setVisible(false)
```

### Thay đổi opacity

Gọi hàm `setOpacity(number)` để thay đổi giá trị opacity của image overlay.
Chú ý: Giá trị opacity nằm trong khoảng từ 0 đến 1.

```js
overlay.setOpacity(0.8)
```


