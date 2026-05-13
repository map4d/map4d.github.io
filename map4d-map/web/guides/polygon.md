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
    clickable?: boolean
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
- **clickable** (tùy chọn): cho phép người dùng có thể tương tác được với Polygon hay không. Giá trị mặc định
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
let clickEvent = map.addListener("click", (args) => {
  console.log("Polygon clicked: ")
  console.log(args)
}, {polygon: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- polygon: là đối tượng polygon mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.


## Reference

### Polygon Class

`map4d.Polygon` class

**Constructor** 

Tạo Polygon với các options được chỉ định

```js
Polygon(options)
```

- Parameters:
  - options: [PolygonOptions](/reference/polygon?id=polygon-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm polygon vào map, nếu set map là **null** thì polygon sẽ bị xóa khỏi map           |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà polygon được thêm vào                                             |
| **setPath**                  |[ILatLng](/reference/coordinates?id=ilatlng)[][]| `none`| Set mảng 2 chiều các điểm tọa độ của polygon                                           |
| **getPath**                  | `none` | [LatLng](/reference/coordinates?id=latlng)[][]| Get mảng 2 chiều các điểm tọa độ tâm của polygon                                       |
| **setFillColor**             | string                                  | `none`       | Set màu cho polygon theo mã HEX (ví dụ: **"#0F4DA9"**)                                 |
| **getFillColor**             | `none`                                  | string       | Get màu của polygon                                                                    |
| **setFillOpacity**           | number                                  | `none`       | Set độ trong suốt cho màu của polygon (giá trị từ 0.0 đến 1.0)                         |
| **getFillOpacity**           | `none`                                  | number       | Get độ trong suốt của polygon                                                          |
| **setStrokeColor**           | string                                  | `none`       | Set màu cho đường viền của polygon theo mã HEX (ví dụ: **"#0F4DA9"**)                  |
| **getStrokeColor**           | `none`                                  | string       | Get màu đường viền của polygon                                                         |
| **setStrokeWidth**           | number                                  | `none`       | Set độ rộng cho đường viền của polygon theo đơn vị point                               |
| **getStrokeWidth**           | `none`                                  | number       | Get độ rộng đường viền của polygon theo đơn vị point                                   |
| **setVisible**               | boolean                                 | `none`       | Ẩn/hiện polygon trên map hay không                                                     |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của polygon                                                     |
| **setDraggable**             | boolean                                 | `none`       | Cho phép polygon có được kéo trên bản đồ hay không                                     |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem polygon có thể kéo trên bản đồ hay không                                  |
| **setZIndex**                | number                                  | `none`       | Set giá trị zIndex cho polygon                                                         |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của polygon                                                |
| **setElevation**             | number                                  | `none`       | Set giá trị độ cao cho polygon theo đơn vị mét                                         |
| **getElevation**             | `none`                                  | number       | Get giá trị độ cao của polygon theo đơn vị mét                                         |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho polygon                                       |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho polygon                                     |
| **isClickable**              | `none`                                  | boolean      | Kiểm tra polygon có thể tương tác bởi người dùng hay không                             |
| **setClickable**             | boolean                                 | `none`       | Cho phép polygon có thể tương tác bởi người dùng hay không                             |

### Polygon Options

`map4d.PolygonOptions` interface

Đối tượng PolygonOptions dùng để xác định các thuộc tính dùng cho Polygon.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **path** *required*          |[ILatLng](/reference/coordinates?id=ilatlng)[][]| truyền vào một mảng chứa các mảng tọa độ **ILatLng** để tạo Polygon. Nếu bạn muốn tạo các Polygon có lỗ ở bên trong thì bạn cần truyền ít nhất 2 mảng tọa độ, còn nếu không có lỗ thì chỉ cần truyền một mảng vào tham số này.|
| **fillColor** *optional*     | string              | chỉ định màu tô phía trong của Polygon theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc định là **"#0000FF**                                                            |
| **fillOpacity** *optional*   | number              | chỉ định độ trong suốt của màu tô phía trong Polygon, khoảng giá trị của nó nằm trong khoảng từ 0.0 đến 1.0. Giá trị mặc định là **1**.                               |
| **visible** *optional*       | boolean             | xác định Polygon có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                        |
| **strokeColor** *optional*   | string              | chỉ định màu sắc đường viền ngoài cùng của Polygon theo mã HEX. Giá trị mặc định là **"#0000FF"**.                                                                    |
| **strokeWidth** *required*   | number              | chỉ định độ rộng đường viền của Polygon theo đơn vị point.                                                                                                            |
| **draggable** *optional*     | boolean             | cho phép người dùng có thể kéo Polygon trên bản đồ hay không. Giá trị mặc định là **false**.                                                                          |
| **zIndex** *optional*        | number              | chỉ định thứ tự chồng nhau giữa các Polygon với nhau hoặc giữa Polygon với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**.                                 |
| **elevation** *optional*     | number              | chỉ định độ cao của Polygon so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                            |
| **clickable** *optional*| boolean     | cho phép người dùng có thể tương tác được với Polygon hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với Polygon thì tất cả các sự kiện liên quan tới Polygon từ phía người dùng sẽ không có tác dụng.|
