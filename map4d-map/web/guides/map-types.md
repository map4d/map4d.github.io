# Map Type

> Map JS SDK cho phép tùy chỉnh kiểu hiển thị của bản đồ.

### Các loại bản đồ

Map JS SDK  hiện cung cấp 3 loại bản đồ tùy chỉnh thông qua đối tượng `ipostmap.MapType` như bên dưới:

| No. | Name      | Description                                                                                                                                                                                 |
|:---:|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | ROADMAP   | Giá trị:`ipostmap.MapType.roadmap` hoặc `"roadmap"`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của Map JS SDK |
|  2  | SATELLITE | Giá trị:`ipostmap.MapType.satellite` hoặc `"satellite"`<br> Bản đồ hiển thị dưới dạng hình ảnh vệ tinh, không bao gồm đường sá, địa điểm |
|  3  | HYBRID    | Giá trị:`ipostmap.MapType.hybrid` hoặc `"hybrid"`<br> Bản đồ hiển thị dưới dạng hình ảnh vệ tinh, bao gồm thông tin đường sá, địa điểm   |


| <div style="width:450px">ROADMAP</div>                                                    | <div style="width:450px">SATELLITE</div>                                                  | <div style="width:450px">HYBRID</div>                                                                 |
|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| <iframe src="./html/maptype-roadmap.html" class="is-fullwidth" height="900px"></iframe>   | <iframe src="./html/maptype-satellite.html" class="is-fullwidth" height="900px"></iframe> | <iframe src="./html/maptype-hybrid.html" class="is-fullwidth" width="400px" height="900px"></iframe>  |


### Thiết lập kiểu bản đồ

#### Thiết lập khi khởi tạo bản đồ

Khi khởi tạo đối tượng bản đồ, có thể set giá trị `mapType` trong [map options](guides/map-options.md) để quy định kiểu bản đồ hiển thị ban đầu.

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
