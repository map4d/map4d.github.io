# Marker Cluster

Khi bạn thêm rất nhiều marker lên bản đồ thì việc gom các marker gần nhau lại thành từng nhóm theo từng mức zoom sẽ giúp
việc hiển thị được rõ ràng và đỡ rối rắm hơn cho người xem. Và để thực hiện điều đó thì **Map4D SDK** cung cấp cho bạn một
lớp là **MarkerClusterer**

### 1. Thêm một Marker Clusterer

Hàm khởi tạo của lớp **map4d.MarkerClusterer** cần truyền vào 2 đối tượng là:

- Mảng các marker cần đưa vào MarkerClusterer.
- **map4d.MarkerClusterOptions** để định nghĩa các thuộc tính ban đầu của MarkerClusterer. 

Đối tượng **MarkerClusterOptions** được định nghĩa như sau:

```javascript
interface MarkerClusterOptions {
    minZoom?: number
    maxZoom?: number
    radius?: number
    zoomOnClick?: boolean
}
```

Các thuộc tính của **MarkerClusterOptions** :
- **minZoom** (tùy chọn) : chỉ định mức zoom nhỏ nhất mà các marker có thể hiển thị theo từng nhóm. Giá trị mặc định là **0** 
- **maxZoom** (tùy chọn) : chỉ định mức zoom lớn nhất mà các marker có thể hiển thị theo từng nhóm. Giá trị mặc định là **22**
- **radius** (tùy chọn) : chỉ định bán kính của cluster theo đơn vị pixel. Giá trị mặc định là 100.
- **zoomOnClick** (tùy chọn) : chỉ định bản đồ có thể zoom khi người dùng click vào đối tượng **MarkerClusterer** không.
Giá trị mặc định là **true**

Ví dụ sau đây thêm một MarkerClusterer vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/b1d0x8nm/embedded/" style="min-width: 914px;" height="690px"></iframe>

Ví dụ trên như một minh họa đơn giản cho MarkerClusterer. Trước tiên nó sẽ tạo một mảng các **markers** từ mảng **locations**,
sau đó sẽ khởi tạo đối tượng **MarkerClusterer** từ mảng marker này.

Số trên các nhóm MarkerClusterer cho biết nó chứa bao nhiêu Marker. Khi bạn phóng to vào bất kỳ nhóm nào thì số trên nhóm
sẽ giảm và các Marker riêng lẻ sẽ hiện ra trên bản đồ, khi bạn thu nhỏ thì ngược lại.

Nếu bạn set **zoomOnClick** là **true** thì khi bạn click vào đối tượng MarkerClusterer thì nó sẽ hiển thị các Marker trong
nhóm đó thành các Marker riêng lẻ trên bản đồ với mức zoom phù hợp.

### 2. Xóa Marker Clusterer khỏi bản đồ

Để xóa một MarkerClusterer ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào đối số __null__

```javascript
markerClusterer.setMap(null)
```

Lưu ý rằng cách trên không xóa MarkerClusterer. Nó chỉ xóa MarkerClusterer ra khỏi bản đồ. Nếu bạn muốn xóa MarkerClusterer,
bạn nên xóa nó khỏi bản đồ, sau đó bạn gán **marker** bằng __null__.


