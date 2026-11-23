# Directions Renderer

Để vẽ chỉ đường giữa các địa điểm trên Map thì ta sử dụng đối tượng Directions Renderer thay cho việc vẽ nhiều Polyline một cách thủ công.

### 1. Thêm một Directions Renderer

Hàm khởi tạo của lớp **map4d.DirectionsRenderer** cần truyền vào một đối tượng **map4d.DirectionsRendererOptions** để xác định các thuộc tính
ban đầu của DirectionsRenderer.

Các đối tượng **DirectionsRenderer** sẽ vẽ các polyline thẳng trên bản đồ dựa theo các route mà bạn truyền vào thông qua tham số
**routes** hoặc tham số **directions** trong đối tượng **DirectionsRendererOptions**. Ngoài ra bạn cũng có thể chỉ định nhiều thuộc
tính khác như màu sắc, độ rộng, outline ... thông qua đối tượng **DirectionsRendererOptions**.

Đối tượng **DirectionsRendererOptions** được định nghĩa như sau:

```javascript
interface DirectionsRendererOptions {
    routes?: string | RouteOptions | ILatLng[][]
    activedIndex?: number
    activeStrokeWidth?: number  
    activeStrokeColor?: string
    activeOutlineWidth?: number
    activeOutlineColor?: string
    activeStrokePattern?: PatternItem
    inactiveStrokeWidth?: number
    inactiveStrokeColor?: string
    inactiveOutlineWidth?: number
    inactiveOutlineColor?: string
    inactiveStrokePattern?: PatternItem
    originMarkerOptions?: MarkerOptions
    destinationMarkerOptions?: MarkerOptions
    waypointMarkerOptions?: MarkerOptions[]
    onMarkerDragEnd?: Function
}
```

Các thuộc tính của **DirectionsRendererOptions** :

- **routes** (tùy chọn): truyền vào một mảng 2 chiều các tọa độ ILatLng hoặc dữ liệu Route bằng JSON string trả về từ [Map4D SDK API Route](https://docs.map4d.vn/map4d-service/api/v1.1/#/api_route)
hoặc một đối tượng [RouteOptions](/reference/directions-renderer?id=routeoptions) để tạo Directions Renderer.
- **activedIndex** (tùy chọn): chỉ định index cho route được active trong Directions Renderer.
- **activeStrokeWidth** (tùy chọn): chỉ định độ rộng của active line theo đơn vị point. 
- **activeStrokeColor** (tùy chọn): chỉ định màu sắc của active line theo mã HEX (ví dụ "#FF0000").
- **activeOutlineWidth** (tùy chọn): chỉ định độ rộng của active outline theo đơn vị point. 
- **activeOutlineColor** (tùy chọn): chỉ định màu sắc của active outline theo mã HEX (ví dụ "#FF0000").
- **activeStrokePattern** (tùy chọn): chỉ định pattern của active line. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)
- **inactiveStrokeWidth** (tùy chọn): chỉ định độ rộng của inactive line theo đơn vị point.
- **inactiveStrokeColor** (tùy chọn): chỉ định màu sắc của inactive line theo mã HEX (ví dụ "#FF0000").
- **inactiveOutlineWidth** (tùy chọn): chỉ định độ rộng của inactive outline theo đơn vị point.
- **inactiveOutlineColor** (tùy chọn): chỉ định màu sắc của inactive outline theo mã HEX (ví dụ "#FF0000").
- **inactiveStrokePattern** (tùy chọn): chỉ định pattern của inactive outline. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)
- **originMarkerOptions** (tùy chọn): chỉ định các options cho marker bắt đầu.
- **destinationMarkerOptions** (tùy chọn): chỉ định các options cho marker kết thúc.
- **waypointMarkerOptions** (tùy chọn): là mảng marker option chỉ định các marker waypoint. Các marker waypoint này có vị trí nằm ngoài route **Chú ý:** <span style="color:red">Để có đường polyline nối marker
waypoint với routes thì routes phải chứa các điểm waypoint. Muốn vậy thì chúng ta phải set routes bằng JSON string hoặc RouteOptions. Trường hợp set routes bằng JSON string thì Map4D SDK tự nhận được các điểm waypoint này.</span>
Xem chi tiết ở các ví dụ bên dưới.
- **onMarkerDragEnd** (tùy chọn): chỉ định options callback sau khi thực hiện việc kéo Marker. Callback được gọi với tham số `args` là đối tượng
chứa tọa độ LatLng của các Marker trong Directions Renderer.

Ví dụ sau đây sẽ thêm một Directions Renderer vào bản đồ với **routes** là mảng hai chiều các tọa độ `ILatLng`:

<iframe src="//jsfiddle.net/duydung2007/fnjhr8x0/embedded/" style="min-width: 914px;" height="490px"></iframe>

Thêm một Directions Renderer vào bản đồ với **routes** là JSON String trả về từ [Map4D SDK API Route](https://docs.map4d.vn/map4d-service/api/v1.1/#/api_route). Route này có chứa
2 điểm waypoint:

<iframe src="//jsfiddle.net/duydung2007/zkv0rujd/embedded/" style="min-width: 914px;" height="490px"></iframe>

Ví dụ tiếp theo là chúng ta sẽ thêm một Directions Renderer vào bản đồ với một đối tượng `RouteOptions` với 2 điểm waypoint:

<iframe src="//jsfiddle.net/duydung2007/vhn4sb2q/embedded/" style="min-width: 914px;" height="490px"></iframe>

### 2. Xóa Directions Renderer khỏi bản đồ

Để xóa một Directions Renderer ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào tham số **null**

```javascript
directionsRenderer.setMap(null)
```

Lưu ý rằng cách trên không xóa Directions Renderer. Nó chỉ remove Directions Renderer ra khỏi bản đồ. Nếu bạn muốn xóa Directions Renderer, bạn nên remove nó khỏi bản đồ,
sau đó bạn gán **directionsRenderer** bằng **null**.

### 3. Các sự kiện trên Directions Renderer

Để lắng nghe các sự kiện xảy ra trên Directions Renderer, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{directions: true}**.

Các sự kiện có thể lắng nghe trên Directions Renderer là: **click, dblClick, longClick, rightClick, hover**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Directions Renderer ta thực hiện như sau:

```javascript
let clickEvent = map.addListener("click", (args) => {
  console.log("Directions Renderer clicked: ")
  let directionsRenderer = args.renderer
  directionsRenderer.setActivedIndex(args.routeIndex)
}, {directions: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- renderer: là đối tượng Directions Renderer mà người dùng **click**.
- routeIndex: là index của route được người dùng **click**
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.

