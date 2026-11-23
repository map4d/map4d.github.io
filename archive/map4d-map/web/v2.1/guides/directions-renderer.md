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
    routes?: ILatLng[][]
    directions?: string
    activedIndex?: number
    activeStrokeWidth?: number  
    activeStrokeColor?: string
    activeOutlineWidth?: number
    activeOutlineColor?: string
    inactiveStrokeWidth?: number
    inactiveStrokeColor?: string
    inactiveOutlineWidth?: number
    inactiveOutlineColor?: string
    originMarkerOptions?: MarkerOptions
    destinationMarkerOptions?: MarkerOptions
}
```

Các thuộc tính của **DirectionsRendererOptions** :

- **routes** (bắt buộc): truyền vào một mảng 2 chiều các tọa độ ILatLng để tạo Directions Renderer. Mỗi mảng một chiều tương ứng là một route.
- **directions** (bắt buộc): chỉ định dữ liệu các route cho Directions Renderer bằng JSON.
- **activedIndex** (tùy chọn): chỉ định index cho route được active trong Directions Renderer.
- **activeStrokeWidth** (tùy chọn): chỉ định độ rộng của active line theo đơn vị point. 
- **activeStrokeColor** (tùy chọn): chỉ định màu sắc của active line theo mã HEX (ví dụ "#FF0000").
- **activeOutlineWidth** (tùy chọn): chỉ định độ rộng của active outline theo đơn vị point. 
- **activeOutlineColor** (tùy chọn): chỉ định màu sắc của active outline theo mã HEX (ví dụ "#FF0000").
- **inactiveStrokeWidth** (tùy chọn): chỉ định độ rộng của inactive line theo đơn vị point.
- **inactiveStrokeColor** (tùy chọn): chỉ định màu sắc của inactive line theo mã HEX (ví dụ "#FF0000").
- **inactiveOutlineWidth** (tùy chọn): chỉ định độ rộng của inactive outline theo đơn vị point.
- **inactiveOutlineColor** (tùy chọn): chỉ định màu sắc của inactive outline theo mã HEX (ví dụ "#FF0000").
- **originMarkerOptions** (tùy chọn): chỉ định các options cho marker bắt đầu.
- **destinationMarkerOptions** (tùy chọn): chỉ định các options cho marker kết thúc.

Ví dụ sau đây sẽ thêm một Directions Renderer vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/fnjhr8x0/embedded/" style="min-width: 914px;" height="490px"></iframe>

### 2. Xóa Directions Renderer khỏi bản đồ

Để xóa một Directions Renderer ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào tham số **null**

```javascript
directionsRenderer.setMap(null)
```

Lưu ý rằng cách trên không xóa Directions Renderer. Nó chỉ remove Directions Renderer ra khỏi bản đồ. Nếu bạn muốn xóa Directions Renderer, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **directionsRenderer** bằng **null**.

### 3. Các sự kiện trên Directions Renderer

Để lắng nghe các sự kiện xảy ra trên Directions Renderer, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{directions: true}**.

Các sự kiện có thể lắng nghe trên Directions Renderer là: **click, dblClick, longClick, rightClick, hover**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Directions Renderer ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
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


