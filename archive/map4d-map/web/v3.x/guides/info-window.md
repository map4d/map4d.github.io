# InfoWindow

**InfoWindow** hiển thị nội dung (thường là văn bản hoặc hình ảnh) trong cửa sổ bật lên phía trên bản đồ, tại một vị trí nhất định. Cửa sổ thông tin xuất hiện dưới dạng Hộp thoại đối với trình đọc màn hình.

Thông thường sẽ đính kèm một cửa sổ thông tin vào một **marker**, nhưng cũng có thể đính kèm một cửa sổ thông tin vào một **ILatLng** cụ thể.

### 1. Thêm một InfoWindow

Hàm khởi tạo của lớp **map4d.InfoWindow** cần truyền vào một đối tượng **map4d.InfoWindowOptions** để định nghĩa các thuộc tính ban đầu của
InfoWindow. 

Đối tượng **InfoWindowOptions** được định nghĩa như sau:

```javascript
interface InfoWindowOptions {
    ariaLabel?: string
    content?: string
    maxWidth?: number
    minWidth?: number
    position?: ILatLng
    zIndex?: number
  }
```

Các thuộc tính của **InfoWindow Options** :
- **ariaLabel** (tùy chọn) : ariaLabel sẽ gán cho InfoWindow.
- **content** (tùy chọn) : nội dung để hiển thị trong InfoWindow. Đó có thể là một phần tử HTML, một chuỗi văn bản thuần túy hoặc một chuỗi chứa HTML.
- **maxWidth** (tùy chọn) : chiều rộng tối đa của InfoWindow, bất kể chiều rộng của nội dung. Giá trị này chỉ được xem xét nếu được đặt trước khi gọi open()
- **minWidth** (tùy chọn) : chiều rộng tối thiểu của InfoWindow, bất kể chiều rộng của nội dung. Khi sử dụng thuộc tính này, bạn nên đặt minWidth thành một giá trị nhỏ hơn chiều rộng của bản đồ (tính bằng pixel).
- **position** (tùy chọn) : chỉ định một **ILatLng** để xác định vị trí ban đầu của InfoWindow. Nếu InfoWindow được mở bằng anchor, vị trí của anchor sẽ được sử dụng thay thế. 
- **zIndex** (tùy chọn) : chỉ định thứ tự chồng nhau giữa các InfoWindow với nhau hoặc giữa InfoWindow với các đối tượng khác trên
bản đồ. Giá trị mặc định là **0**

### 2. Mở một InfoWindow

Khi bạn tạo một **InfoWindow**, cửa sổ đó sẽ không tự động xuất hiện trên bản đồ. Để hiển thị cửa sổ thông tin, bạn phải gọi phương thức **open()** trên **InfoWindow**, chuyển một đối tượng [InfoWindowOpenOptions](/reference/info-window?id=infowindow-open-options) chỉ định các tùy chọn sau:

```javascript
interface InfoWindowOpenOptions {
    map?: Map
    anchor?: Marker
  }
```

Các thuộc tính của **InfoWindowOpenOptions** :
- **map** (tùy chọn) : bản đồ để hiển thị InfoWindow này.
- **anchor** (tùy chọn) : chứa điểm anchor point (ví dụ: **Marker**). Nếu tuỳ chọn **anchor** là **null** hoặc undefined, cửa sổ thông tin sẽ lấy giá trị của **position** property.

```javascript
infoWindow.open({
      anchor: marker,
      map,
    });
```

Ví dụ thêm 1 InfoWindow
<iframe src="//jsfiddle.net/vantn/g7d8k3yb/21/embedded/" style="min-width: 914px;" height="400px"></iframe>

### 3. Đóng một InfoWindow

Theo mặc định, một cửa sổ thông tin vẫn mở cho đến khi người dùng nhấp vào nút điều khiển đóng (nút close ở trên cùng bên phải cửa sổ thông tin). Bạn cũng có thể đóng cửa sổ thông tin một cách rõ ràng bằng cách gọi phương thức close().

```javascript
infoWindow.close()
```

### 4. Di chuyển một InfoWindow

Có một số cách để thay đổi vị trí của cửa sổ thông tin:
- Call **setPosition()** ở InfoWindow hoặc
- Đính kèm **InfoWindow** vào điểm đánh dấu mới bằng phương thức **InfoWindow.open()**. Lưu ý: Nếu bạn gọi **open()** mà không chuyển điểm marker, InfoWindow sẽ sử dụng vị trí được chỉ định khi xây dựng thông qua giá trị cố định **InfoWindowOptions**