# Polygon

### 1. Tạo một Polygon

Hàm khởi tạo của lớp **map4d.Polygon** cần truyền vào một đối tượng **map4d.PolygonOptions** để xác định các thuộc tính
ban đầu của Polygon.

Một Polygon thể hiện cho một khu vực được bao quanh bởi một đường khép kín, được xác định bởi một mảng các tọa độ ILatLng.
Các đối tượng Polygon bao gồm một mảng các tọa độ theo một trình tự có thứ tự. Polygon được vẽ bằng một nét và tô màu ở
phía trong. Bạn có thể định nghĩa màu sắc, độ rộng cho cạnh của Polygon và màu cũng độ trong suốt cho vùng tô màu ở phía
trong Polygon thông qua đối tượng **PolygonOptions**. Ngoài ra bạn có thể vẽ Polygon có lỗ (hole) ở phía trong nó.

Đối tượng **PolygonOptions** được định nghĩa như sau:

```javascript
interface PolygonOptions {
    paths: ILatLng[][]
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

Các thuộc tính của **PolygonOptions** :

- **paths** (bắt buộc): truyền vào một mảng chứa các mảng tọa độ **ILatLng** để tạo Polygon. Nếu bạn muốn tạo các Polygon
có lỗ ở bên trong thì bạn cần truyền ít nhất 2 mảng tọa độ, còn nếu không có lỗ thì chỉ cần truyền một mảng vào tham số này. 
- **fillColor** (tùy chọn): chỉ định màu tô phía trong của Polygon theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc định
là **"#0000FF**
- **fillOpacity** (tùy chọn): chỉ định độ trong suốt của màu tô phía trong Polygon, khoảng giá trị của nó nằm trong khoảng
từ 0.0 đến 1.0. Giá trị mặc định là **1**.
- **visible** (tùy chọn): xác định Polygon có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **strokeColor** (tùy chọn): chỉ định màu sắc đường viền ngoài cùng của Polygon theo mã HEX. Giá trị mặc định là **"#0000FF"**.
- **strokeWidth** (tùy chọn): chỉ định độ rộng đường viền của Polygon theo đơn vị point.
- **draggable** (tùy chọn): cho phép người dùng có thể kéo Polygon trên bản đồ hay không. Giá trị mặc định là **false**.
- **zIndex** (tùy chọn): chỉ định thứ tự chồng nhau giữa các Polygon với nhau hoặc giữa Polygon với các đối tượng khác
trên bản đồ. Giá trị mặc định là **0**.
- **elevation** (tùy chọn): chỉ định độ cao của Polygon so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**.
- **userInteractionEnabled** (tùy chọn): cho phép người dùng có thể tương tác được với Polygon hay không. Giá trị mặc định
là **true**. Khi không cho phép người dùng tương tác với Polygon thì tất cả các sự kiện liên quan tới Polygon từ phía người dùng
sẽ không có tác dụng.

Ví dụ sau đây sẽ thêm một Polygon vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/wbdxe4av/embedded/" style="min-width: 914px;" height="490px"></iframe>

### 2. Xóa Polygon khỏi bản đồ

Để xóa một Polygon ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào tham số **null**

```javascript
polygon.setMap(null)
```

Lưu ý rằng cách trên không xóa Polygon. Nó chỉ xóa Polygon ra khỏi bản đồ. Nếu bạn muốn xóa Polygon, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **polygon** bằng **null**.

### 3. Tạo một Polygon có lỗ (hole) ở bên trong

Nếu bạn muốn tạo Polygon với các lỗ ở bên trong, bạn cần truyền vào tham số **path** là một mảng chứa các mảng ILatLng.
Với mảng đầu tiên chứa các tọa độ của để tạo Polygon, các mảng tiếp theo sẽ tương ứng là tọa độ của các lỗ.

Ví dụ sau đây sẽ tạo một Polygon với lỗ ở bên trong:

<iframe src="//jsfiddle.net/duydung2007/cmgs6k03/embedded/" style="min-width: 914px;" height="620px"></iframe>

### 4. Tạo một Polygon có thể kéo được trên bản đồ

Bạn có thể cho người dùng kéo Polygon từ vị trí này đến vị trí khác trên bản đồ bằng cách chỉ định thuộc tính **draggable**
bằng **true** ở trong **PolygonOptions** khi tạo **Polygon**

<iframe src="//jsfiddle.net/duydung2007/m1scuhnv/embedded/" style="min-width: 914px;" height="490px"></iframe>

Ngoài ra bạn có thể gọi phương thức **setDraggable()** của đối tượng **Polygon** và truyền vào tham số **true** để bật
tính năng draggable của Polygon hoặc truyền vào tham số **false** để tắt tính năng draggable.

### 5. Các sự kiện trên Polygon

Để lắng nghe các sự kiện xảy ra trên Polygon, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{polygon: true}**.

Các sự kiện có thể lắng nghe trên Polygon là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Polygon ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
  console.log("Polygon clicked: ")
  console.log(args)
}, {polygon: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- polygon: là đối tượng polygon mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.


