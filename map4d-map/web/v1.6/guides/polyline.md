# Polyline

Để vẽ đường thẳng trên bản đồ thì ta sử dụng đối tượng Polyline. Một đối tượng Polyline bao gồm một mảng các điểm ILatLng
và tạo ra các đoạn thẳng nối các vị trí đó theo một trình tự có thứ tự.

### 1. Thêm một Polyline

Hàm khởi tạo của lớp **map4d.Polyline** cần truyền vào một đối tượng **map4d.PolylineOptions** để xác định các thuộc tính
ban đầu của Polyline.

Các đối tượng **Polyline** được vẽ dưới dạng các đoạn thẳng trên bản đồ nối các điểm mà bạn truyền vào thông qua tham số
**path** trong đối tượng **PolylineOptions**. Ngoài ra bạn cũng có thể chỉ định nhiều thuộc tính khác như màu sắc, độ rộng,
độ trong suốt, kiểu (nét liền hay nét đứt)... thông qua đối tượng **PolylineOptions**.

Đối tượng **PolylineOptions** được định nghĩa như sau:

```javascript
interface PolylineOptions {
    path: ILatLng[]
    strokeWidth: number
    strokeColor?: string
    strokeOpacity?: number
    visible?: boolean
    closed?: boolean
    draggable?: boolean
    zIndex?: number
    elevation?: number
    style?: string
    userInteractionEnabled?: boolean
}
```

Các thuộc tính của **PolylineOptions** :

- **path** (bắt buộc): truyền vào một mảng các tọa độ **ILatLng** để tạo Polyline.
- **strokeWidth** (bắt buộc): chỉ định độ rộng của Polyline theo đơn vị point.
- **strokeColor** (tùy chọn): chỉ định màu sắc của Polyline theo mã HEX (ví dụ **"#FF0000"**). Tham số này không hỗ trợ
chỉ định màu theo tên (ví dụ: red, green, blue, ...). Giá trị mặc định là **"#0000FF"**.
- **strokeOpacity** (tùy chọn): chỉ định độ trong suốt của Polyline, khoảng giá trị của nó nằm trong khoảng từ 0.0 đến 1.0.
Giá trị mặc định là **1.0**
- **visible** (tùy chọn): xác định Polyline có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **closed** (tùy chọn): chỉ định Polyline có nối điểm đầu và điểm cuối lại với nhau hay không. Giá trị mặc định là **false**.
Nếu bạn chỉ định thuộc tính này bằng **true** thì bạn sẽ được một hình đa giác.
- **draggable** (tùy chọn): cho phép người dùng có thể kéo Polyline trên bản đồ hay không. Giá trị mặc định là **false**.
- **zIndex** (tùy chọn): chỉ định thứ tự chồng nhau giữa các Polyline với nhau hoặc giữa Polyline với các đối tượng khác
trên bản đồ. Giá trị mặc định là **0**.
- **elevation** (tùy chọn): chỉ định độ cao của Polyline so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**
- **style** (tùy chọn): chỉ định Polyline là loại nét liền (**"solid"**) hay nét đứt (**"dotted"**). Giá trị mặc định là **"solid"**
- **userInteractionEnabled** (tùy chọn): cho phép người dùng có thể tương tác được với Polyline hay không. Giá trị mặc định
là **true**. Khi không cho phép người dùng tương tác với Polyline thì tất cả các sự kiện liên quan tới Polyline từ phía người dùng
sẽ không có tác dụng.

Ví dụ sau đây sẽ thêm một Polyline vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/rmp5tykd/embedded/" style="min-width: 914px;" height="490px"></iframe>

### 2. Xóa Polyline khỏi bản đồ

Để xóa một Polyline ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào tham số **null**

```javascript
polyline.setMap(null)
```

Lưu ý rằng cách trên không xóa Polyline. Nó chỉ xóa Polyline ra khỏi bản đồ. Nếu bạn muốn xóa Polyline, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **polyline** bằng **null**.

### 3. Tạo một Polyline có thể kéo được trên bản đồ

Bạn có thể cho người dùng kéo Polyline từ vị trí này đến vị trí khác trên bản đồ bằng cách chỉ định thuộc tính **draggable**
bằng **true** ở trong **PolylineOptions** khi tạo **Polyline**

<iframe src="//jsfiddle.net/duydung2007/b4zx6gws/embedded/" style="min-width: 914px;" height="490px"></iframe>

Ngoài ra bạn có thể gọi phương thức **setDraggable()** của đối tượng **Polyline** và truyền vào tham số **true** để bật
tính năng draggable của Polyline hoặc truyền vào tham số **false** để tắt tính năng draggable.

### 4. Các sự kiện trên Polyline

Để lắng nghe các sự kiện xảy ra trên Polyline, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{polyline: true}**.

Các sự kiện có thể lắng nghe trên Polyline là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Polyline ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
  console.log("Polyline clicked: ")
  console.log(args)
}, {polyline: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- polyline: là đối tượng polyline mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.


