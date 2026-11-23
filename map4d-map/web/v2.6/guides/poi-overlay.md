# POI Overlay

POI overlay là một loại overlay cho phép người dùng hiển thị các POI từ nhiều nguồn khác nhau lên bản đồ.<br>
Các POI của POI overlay được ưu tiên hiển thị so với POI của iPostMap và chỉ hiển thị ở chế độ 2D.

## Add POI overlay

Để thêm 1 POI overlay vào map cần tạo mới 1 đối tượng của lớp [POIOverlay](guides/poi-overlay?id=poioverlay-class) sau đó set `map` cho POI overlay đó.<br>
Hàm khởi tạo của lớp [POIOverlay](guides/poi-overlay?id=poioverlay-class) nhận vào một đối tượng [POIOverlayOptions](guides/poi-overlay?id=poioverlayoptions-interface) có các tham số như sau:

| No | Property   | Type     | Requied | Description                                                                                                                                                    |
|:--:|------------|----------|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1 | getUrl     | function |   YES   | Hàm nhận vào 3 giá trị `x`, `y`, `zoom` và trả về đường dẫn đến POIs                                                                                           |
|  2 | parserData | function |   YES   | Hàm nhận vào response data từ api của `getUrl` và parser thành mảng các [POIData](/guides/poi-overlay?id=poidata-interface)                                 |
|  3 | prefixId   | string   |    NO   | Giá trị được thêm vào trước id của những POI thuộc POI overlay.<br>Dùng để tránh nhầm lẫn trong trường hợp trùng id với POI của iPostMap hay các POI overlay khác |
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
let overlay = new ipostmap.POIOverlay(options)
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

Gọi hàm `setVisible(boolean)` để ẩn/hiện POI overlay.<br>
**Chú ý:** Mặc dù POI overlay không hiển thị nhưng quá trình tải các POI vẫn diễn ra

```js
overlay.setVisible(false)
```

## Sự kiện đối với POI thuộc POI overlay

Khi người dùng click POI thuộc POI overlay thì sẽ phát sinh sự kiện tương tự với POI của iPostMap, việc xử lý được diễn ra ngay tại hàm xử lý sự kiện của iPostMap. Xem [Events](/guides/map-events)

## Example

Ví dụ dưới đây ẩn tất cả POI của iPostMap và hiển thị POI overlay với các poi được lấy từ `https://poi-random.herokuapp.com/`

<iframe width="100%" height="800" src="//jsfiddle.net/huydang/w1qhzonk/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## API Reference

<a id="reference-poi-overlay"></a>

## POI Overlay References

## POIOverlay class

`ipostmap.POIOverlay` class

**Constructor**

Tạo POIOverlay với các options được chỉ định

```js
POIOverlay(options)
```

- Parameters:
  - options: [POIOverlayOptions](/guides/poi-overlay?id=poioverlayoptions-interface) *required*

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                          |
|----------------|-----------------------------------------|--------------|--------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/guides/map-options?id=map-class) | `none`       | Hiển thị POI overlay lên map, nếu set map là null thì POI overlay sẽ bị xóa khỏi map |
| **setVisible** | visibility: boolean                     | `none`       | Ẩn/hiện POI overlay trên map                                                         |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của overlay                                                   |
| **getPrefixId**| `none`                                  | string       | Get prefixId                                                                         |


## POIOverlayOptions interface

`ipostmap.POIOverlayOptions` interface

Đối tượng POIOverlayOptions đùng để xác định các thuộc tính dùng cho POIOverlay.

**Properties**

| Name                    | Type     | Description                                                          |
|-------------------------|----------|----------------------------------------------------------------------|
| **getUrl** *required*   | function | Hàm nhận vào 3 giá trị `x`, `y`, `zoom` và trả về đường dẫn đến POIs |
| **prefixId** *optional* | string   | Giá trị được thêm vào trước id của những POI thuộc overlay.          |
| **visible** *optional*  | boolean  | Nếu là `true` thì POI overlay sẽ được hiển thị                       |


## POIData interface

`ipostmap.POIData` interface

Đối tượng POIData dùng để xác định các thuộc tính của POI

| Name                      | Type                                         | Description                                                                                                                                   |
|---------------------------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **id** *required*         | string                                       | ID của POI                                                                                                                                    |
| **position** *required*   | [ILatLng](/guides/coordinates?id=ilatlng) | Vị trí hiển thị POI trên bản đồ                                                                                                               |
| **title** *required*      | string                                       | Tiêu đề của POI                                                                                                                               |
| **type** *optional*       | string                                       | Kiểu của POI *("bank", "atm", "park", ...)*, tùy thuộc vào kiểu mà POI có icon tương ứng                                                      |
| **zIndex** *optional*     | number                                       | Độ ưu tiên hiển thị của POI đối với POI khác                                                                                                  |
