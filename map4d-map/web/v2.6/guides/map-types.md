# Map Type

> iPostMap Web SDK cho phép tùy chỉnh kiểu hiển thị của bản đồ.

### Các loại bản đồ

iPostMap Web SDK  hiện cung cấp 4 loại bản đồ tùy chỉnh thông qua đối tượng `ipostmap.MapType` như bên dưới:

| No. | Name      | Description                                                                                                                                                                                 |
|:---:|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | ROADMAP   | Giá trị:`ipostmap.MapType.roadmap` hoặc `"roadmap"`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của iPostMap Web SDK |
|  2  | RASTER    | Giá trị:`ipostmap.MapType.raster `hoặc `"raster"`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh đã được dựng sẵn, tốc độ tải và hiển thị nhanh hơn so với roadmap, nhưng không chi tiết bằng |
|  3  | SATELLITE | Giá trị:`ipostmap.MapType.satellite` hoặc `"satellite"`<br> Bản đồ hiển thị dưới dạng hình ảnh vệ tinh |
|  4  | MAP3D     | Giá trị:`ipostmap.MapType.map3d` hoặc `"map3d"`<br> Bản đồ hiển thị ở chế độ 3D |


| <div style="width:400px">ROADMAP</div>                                                    | <div style="width:400px">RASTER</div>                                                                |
|:-----------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| <iframe src="./html/maptype-roadmap.html" class="is-fullwidth" height="400px"></iframe>   | <iframe src="./html/maptype-raster.html" class="is-fullwidth" width="400px" height="400px"></iframe> |

| <div style="width:400px">SATELLITE</div>                                                  | <div style="width:400px">MAP3D</div>                                                                 |
|:-----------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
| <iframe src="./html/maptype-satellite.html" class="is-fullwidth" height="400px"></iframe> | <iframe src="./html/maptype-map3d.html" class="is-fullwidth" width="400px" height="400px"></iframe>  |

### Thiết lập kiểu bản đồ

#### Thiết lập khi khởi tạo bản đồ

Khi khởi tạo đối tượng bản đồ map4d, có thể set giá trị `mapType` trong [map options](guides/map-options.md) để quy định kiểu bản đồ hiển thị ban đầu.

Ví dụ: khởi tạo bản đồ với type map là satellite:

```js
function initMap() {
  let options = {
    center: {lat: 16.072163491469226, lng: 108.22690536081757},
    zoom: 15,
    mapType: "satellite"
  }
  let map = new ipostmap.Map(document.getElementById("map"), options)
}
```

#### Thay đổi kiểu bản đồ

Để thay kiểu bản đồ, ta gọi hàm `setMapType(mapType: IMapType)` thông qua đối tượng `ipostmap.Map`

Ví dụ:
<iframe style="min-width: 900px;" height="500px" src="//jsfiddle.net/duydung2007/axnp2ebj//embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


#### Get kiểu bản đồ hiện tại

Để get kiểu bản đồ hiện tại ta có thể gọi hàm `getMapType()` thông qua đối tượng `ipostmap.Map`. Giá trị trả về sẽ là một kiểu
của `ipostmap.MapType`

```javascript
map.getMapType()
```
