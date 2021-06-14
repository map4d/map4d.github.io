# Circle

Nếu bạn muốn vẽ một hình tròn lên bản đồ, thì Map4D SDK cung cấp cho bạn lớp **map4d.Circle** để thực hiện điều đó.

### 1. Thêm một Circle

Để tạo một đối tượng **Circle** bạn cần truyền một đối tượng **map4d.CircleOptions** vào hàm khởi tạo của lớp **map4d.Circle**.
Đối tượng **CircleOptions** này chứa các thông tin về tọa độ tâm, màu sắc, bán kính, độ trong suốt và đường viền cũng như
màu đường viền của Circle.

Đối tượng **CircleOptions** được định nghĩa như sau:

```javascript
interface CircleOptions {
    center: ILatLng
    radius: number
    fillColor?: string
    fillOpacity?: number
    visible?: boolean
    strokeColor?: string
    strokeWidth?: number
    draggable?: boolean
    zIndex?: number
    elevation?: number
    userInteractionEnabled?: boolean
}
```

Các thuộc tính của **CircleOptions** :

- **center** (bắt buộc): một điểm tọa độ **ILatLng** để xác định tâm của Circle.
- **radius** (bắt buộc): chỉ định bán kính của Circle theo đơn vị **mét**.
- **fillColor** (tùy chọn): chỉ định màu sắc của Circle theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc định là **"#0000FF"**.
- **fillOpacity** (tùy chọn): chỉ định độ trong suốt màu của Circle, khoảng giá trị của nó nằm trong khoảng từ 0.0 đến 1.0.
Giá trị mặc định là **1**.
- **visible** (tùy chọn): xác định Circle có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **strokeColor** (tùy chọn): chỉ định màu sắc của **đường viền Circle** theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc
định là **"#00FF00"**.
- **strokeWidth** (tùy chọn): chỉ định độ lớn của **đường viền Circle** theo đơn vị **point**.
- **draggable** (tùy chọn): cho phép người dùng có thể kéo Circle trên bản đồ hay không. Giá trị mặc định là **false**.
- **zIndex** (tùy chọn): chỉ định thứ tự chồng nhau giữa các Circle với nhau hoặc giữa Circle với các đối tượng khác trên
bản đồ. Giá trị mặc định là **0**.
- **elevation** (tùy chọn): chỉ định độ cao của Circle so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**
- **userInteractionEnabled** (tùy chọn): cho phép người dùng có thể tương tác được với Circle hay không. Giá trị mặc định
là **true**. Khi không cho phép người dùng tương tác với Circle thì tất cả các sự kiện liên quan tới Circle từ phía người dùng
sẽ không có tác dụng.

Ví dụ sau đây sẽ thêm một Circle vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/q7nxey1t/embedded/" style="min-width: 914px;" height="390px"></iframe>

### 2. Xóa Circle khỏi bản đồ

Để xóa một Circle ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào tham số **null**

```javascript
circle.setMap(null)
```

Lưu ý rằng cách trên không xóa Circle. Nó chỉ xóa Circle ra khỏi bản đồ. Nếu bạn muốn xóa Circle, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **circle** bằng **null**.

### 3. Tạo một Circle có thể kéo được trên bản đồ

Bạn có thể cho người dùng kéo Circle từ vị trí này đến vị trí khác trên bản đồ bằng cách chỉ định thuộc tính **draggable**
bằng **true** ở trong **CircleOptions** khi tạo **Circle**

<iframe src="//jsfiddle.net/duydung2007/hw23sub5/embedded/" style="min-width: 914px;" height="360px"></iframe>

Ngoài ra bạn có thể gọi phương thức **setDraggable()** của đối tượng **Circle** và truyền vào tham số **true** để bật
tính năng draggable của Circle hoặc truyền vào tham số **false** để tắt tính năng draggable.

### 4. Các sự kiện trên Circle

Để lắng nghe các sự kiện xảy ra trên Circle, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{circle: true}**.

Các sự kiện có thể lắng nghe trên Polyline là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Circle ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
  console.log("Circle clicked: ")
  console.log(args)
}, {circle: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- circle: là đối tượng circle mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.


