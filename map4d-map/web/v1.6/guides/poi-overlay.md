# POI Overlay

POI overlay là một loại overlay cho phép người dùng hiển thị các POI từ nhiều nguồn khác nhau lên bản đồ.  
Các POI của POI overlay được ưu tiên hiển thị so với POI của Map4D và chỉ hiển thị ở chế độ 2D.

## Add POI overlay

Để thêm 1 POI overlay vào map cần tạo mới 1 đối tượng của lớp [POIOverlay](reference/poi-overlay?id=poioverlay-class) sau đó set `map` cho POI overlay đó.  
Hàm khởi tạo của lớp [POIOverlay](reference/poi-overlay?id=poioverlay-class) nhận vào một đối tượng [POIOverlayOptions](reference/poi-overlay?id=poioverlayoptions-interface) có các tham số như sau:

| No | Property   | Type     | Requied | Description                                                                                                                                                    |
|:--:|------------|----------|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1 | getUrl     | function |   YES   | Hàm nhận vào 3 giá trị `x`, `y`, `zoom` và trả về đường dẫn đến POIs                                                                                           |
|  2 | parserData | function |   YES   | Hàm nhận vào response data từ api của `getUrl` và parser thành mảng các [POIData](/reference/poi-overlay?id=poidata-interface)                                 |
|  3 | prefixId   | string   |    NO   | Giá trị được thêm vào trước id của những POI thuộc POI overlay.<br>Dùng để tránh nhầm lẫn trong trường hợp trùng id với POI của Map4D hay các POI overlay khác |
|  4 | visible    | boolean  |    NO   | Nếu `true` thì POI overlay sẽ được hiển thị                                                                                                                    |


### Tạo mới POI overlay

```js
let options = {
  getUrl: function (x, y, zoom) {
    return `rest-api-get-poi-from-tile-coordinate`
  },
  parserData: function(response) {
    let poiDatas = []
    /**
     * parser data from response ...
     */
    return poiDatas
  },
  prefixId: "prefix"
  visible: true
}
let overlay = new map4d.POIOverlay(options)
```

### Add POI overlay lên Map

Để vẽ POI overlay lên map, ta set map cho POI overlay bằng hàm `setMap`

```js
overlay.setMap(map)
```

### Remove POI overlay

Để xóa POI overlay khỏi map, ta gọi hàm `setMap` và truyền vào giá trị `null`

```js
overlay.setMap(null)
```

### Ẩn/Hiện POI Overlay

Gọi hàm `setVisible(boolean)` để ẩn/hiện POI overlay.  
**Chú ý:** Mặc dù POI overlay không hiển thị nhưng quá trình tải các POI vẫn diễn ra

```js
overlay.setVisible(false)
```

## Sự kiện đối với POI thuộc POI overlay

Khi người dùng click POI thuộc POI overlay thì sẽ phát sinh sự kiện tương tự với POI của Map4D, việc xử lý được diễn ra ngay tại hàm xử lý sự kiện của Map4D. Xem [Events](/guides/map-events)

## Example

Ví dụ dưới đây ẩn tất cả POI của Map4D và hiển thị POI overlay với các poi được lấy từ `https://poi-random.herokuapp.com/`

<iframe width="100%" height="800" src="//jsfiddle.net/huydang/w1qhzonk/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>