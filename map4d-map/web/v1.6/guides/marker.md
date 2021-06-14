# Marker

Marker dùng để xác định một vị trí trên bản đồ. Cho phép người dùng thêm một điểm ghim trên bản đồ ở một vị trí xác định.

### 1. Thêm một marker

Hàm khởi tạo của lớp **map4d.Marker** cần truyền vào một đối tượng **map4d.MarkerOptions** để định nghĩa các thuộc tính ban đầu của
Marker. 

Đối tượng **MarkerOptions** được định nghĩa như sau:

```javascript
interface MarkerOptions {
    position: ILatLng
    visible?: boolean
    anchor?: IPoint
    labelAnchor?: IPoint
    icon?: Icon | string
    elevation?: number
    rotation?: number
    title?: string
    snippet?: string
    windowAnchor?: IPoint
    zIndex?: number
    label?: string | MarkerLabel
    draggable?: boolean
    iconView?: string | Node
    userInteractionEnabled?: boolean
  }
```

Các thuộc tính của **Marker Options** :
- **position** (bắt buộc) : chỉ định một **ILatLng** để xác định vị trí ban đầu của Marker. 
- **visible** (tùy chọn) : xác định Marker có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **anchor** (tùy chọn) : chỉ định một **IPoint** để xác định điểm neo cho Marker. Giá trị mặc định là **{x: 0.5, y: 1.0}**
- **labelAnchor** (tùy chọn) : chỉ định một **IPoint** để xác định điểm neo của Label so với Marker. Giá trị mặc định là **{x: 0.5, y: 0.5}**
- **icon** (tùy chọn) : tùy chỉnh icon cho Marker. Có thể truyền vào là một **Icon** hoặc là một **Url**
- **elevation** (tùy chọn) : chỉ định độ cao của Marker so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**
- **rotation** (tùy chọn) : chỉ định góc quay của Marker theo đơn vị là Độ. Giá trị mặc định là **0**
- **title** (tùy chọn) : chỉ định tiêu đề của Marker. Tiêu đề sẽ được hiển thị ở dòng đầu tiên của bảng thông tin Marker.
- **snippet** (tùy chọn) : mô tả thông tin ngắn gọn cho Marker. Snippet sẽ được hiển thị ở bẳng thông tin của Marker và
phía dưới dòng tiêu đề.
- **windowAnchor** (tùy chọn) : chỉ định một **IPoint** để xác định điểm neo bảng thông tin của Marker. Bảng thông tin này
sẽ hiện lên khi click vào Marker. Giá trị mặc định là **{x: 0.5, y: 0.0}**
- **zIndex** (tùy chọn) : chỉ định thứ tự chồng nhau giữa các Marker với nhau hoặc giữa Marker với các đối tượng khác trên
bản đồ. Giá trị mặc định là **0**
- **label** (tùy chọn) : chỉ định label của Marker. Label sẽ được hiển thị ở tâm của Marker.
- **draggable** (tùy chọn) : cho phép người dùng có thể kéo Marker trên bản đồ hay không. Giá trị mặc định là **false**
- **iconView** (tùy chọn) : cho phép thêm node HTML vào và thay thế icon mặc định của Marker.
- **userInteractionEnabled** (tùy chọn) : cho phép người dùng có thể tương tác được với Marker hay không. Giá trị mặc định
là true. Khi không cho phép người dùng tương tác với Marker thì tất cả các sự kiện liên quan tới Marker từ phía người dùng
sẽ không có tác dụng.

Ví dụ sau đây thêm một Marker đơn giản vào bản đồ tại Bình Thạnh, Thành phố Hồ Chí Minh:

<iframe src="//jsfiddle.net/duydung2007/zxg1evLt/embedded/" style="min-width: 914px;" height="360px"></iframe>

### 2. Xóa Marker khỏi bản đồ

Để xóa một Marker ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào đối số __null__

```javascript
marker.setMap(null)
```

Lưu ý rằng cách trên không xóa Marker. Nó chỉ xóa Marker ra khỏi bản đồ. Nếu bạn muốn xóa Marker, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **marker** bằng __null__.

Nếu bạn muốn quản lý một danh sách các Marker, bạn nên tạo một mảng để chứa các Marker đó. Sử dụng mảng này bạn có thể gọi phương
thức **setMap()** lần lượt từng Marker trong mảng khi bạn cần xóa các Marker.

### 3. Tùy chỉnh hình ảnh cho Marker

Nếu bạn muốn hiện thị chữ cái hoặc số trên Marker, bạn có thể sử dụng Marker có label. Nếu bạn muốn tùy chỉnh nhiều hơn,
bạn có thể chỉ định một icon hoặc một hình ảnh khác để thay thế cho hình ảnh mặc định của Marker.

Các phần bên dưới mô tả Marker với iconView, Marker có bảng thông tin, Marker có label.

#### Marker có IconView

Nếu bạn muốn thay đổi hình ảnh mặc định của Marker thành một node HTML thì bạn có thể gán thuộc tính **iconView** trong
**MarkerOptions** thành một node HTML như ví dụ dưới đây.

<iframe src="//jsfiddle.net/duydung2007/z68nu7o4/embedded/" style="min-width: 914px;" height="400px"></iframe>

#### Marker có bảng thông tin

Bạn có thể tạo marker chứa bảng thông tin bằng cách chỉ định giá trị cho **title** và **snippet** trong **MarkerOptions**
khi tạo một marker.

<iframe src="//jsfiddle.net/duydung2007/zdstvq8o/embedded/" style="min-width: 914px;" height="370px"></iframe>

Bảng thông tin sẽ được hiển thị **khi người dùng click lên marker** như hình bên dưới:

![CocoaPods](../../resources/4-marker-2.png)

Ngoài ra bạn còn có thể thay đổi nội dung bảng thông tin bằng layout mặc định của bản đồ bằng phương thức **setInfoContents()**
với đối số truyền vào là một string hoặc một HTML:

```javascript
marker.setInfoContents("có thể là string hoặc html")
```

hoặc thay đổi nội dung bảng thông tin bao gồm cả layout và nội dung bằng phương thức **setInfoWindow()** với đối số truyền
vào cũng là một string hoặc một HTML:
```javascript
marker.setInfoWindow("có thể là string hoặc html")
```

#### Marker có label

Là một marker có chữ hoặc số được vẽ ở trong Marker. Bạn có thể chỉ định label là một string hoặc một đối tượng **MarkerLabel**
(bao gồm một string và các thuộc tính khác).

Khi tạo một marker bạn có thể chỉ định thuộc tính **label** trong đối tượng MarkerOptions. Ngoài ra bạn có thể gọi phương thức
**setLabel()** của đối tượng **Marker** để thiết lập label trên đối tượng đó.

<iframe src="//jsfiddle.net/duydung2007/zgn9te67/embedded/" style="min-width: 914px;" height="380px"></iframe>

Như đoạn mã tạo maker với label ở trên, ta có label là một đối tượng **map4d.MarkerLabel** với các thuộc tính text là
**Text**, màu chữ là màu đen và kích thước là 12.

### 4. Tạo một Marker có thể kéo được trên bản đồ

Để cho phép người dùng có thể kéo một Marker tới một vị trí khác trên bản đồ, chỉ định thuộc tính **draggable** thành **true** ở trong
**MarkerOptions**

<iframe src="//jsfiddle.net/duydung2007/0rdzmpnk/embedded/" style="min-width: 914px;" height="360px"></iframe>

Ngoài ra bạn có thể gọi phương thức **setDraggable()** của đối tượng **Marker** và truyền vào tham số **true** để bật
tính năng draggable của marker hoặc truyền vào tham số **false** để tắt tính năng draggable.

### 5. Các sự kiện trên Marker

Để lắng nghe các sự kiện xảy ra trên marker, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{marker: true}**.

Các sự kiện có thể lắng nghe trên marker là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho marker ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
  console.log("Marker clicked: ")
  console.log(args)
}, {marker: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- marker: là đối tượng marker mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.


