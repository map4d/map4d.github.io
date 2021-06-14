# Building

Điểm khác biệt giữa nền tảng bản đồ **map4d** với các nền tảng bản đồ khác đó là chế độ bản đồ 3D. Chế độ này sẽ có các đối
tượng 3D mô phỏng lại các tòa nhà, cây cối, các cây cầu cũng như các công trình kiến trúc khác, ... Ngoài những đối tượng building
3D có sẵn của bản đồ, bạn còn có thể tự tạo và thêm đối tượng 3D của bạn lên bản đồ thông qua đối tượng **map4d.Building**

**Chú ý: Những đối tượng Building này chỉ được vẽ trong chế độ 3D của bản đồ, nó không được vẽ trong chế độ 2D.**

### 1. Thêm một Building

Hàm khởi tạo của lớp **map4d.Building** cần truyền vào một đối tượng **map4d.BuildingOptions** để định nghĩa các thuộc
tính ban đầu của Buidling.

Đối tượng **BuildingOptions** được định nghĩa như sau:

```javascript
interface BuildingOptions {
    position?: ILatLng
    name?: string
    scale?: number
    bearing?: number
    elevation?: number
    height?: number
    model?:  string
    texture?: string
    coordinates?: ILatLng[]
    visible?: boolean
    draggable?: boolean
    userInteractionEnabled?: boolean
    selected?: boolean
    growUp?: boolean
}
```

Các thuộc tính của **BuildingOptions** :
- **position** (bắt buộc): chỉ định một **ILatLng** để xác định vị trí của Building.
- **name** (tùy chọn): chỉ định tên của Building mà bạn tạo. Tên mặc định sẽ là **Unknown name**
- **scale** (tùy chọn): chỉ định tỉ lệ của Building được vẽ ra ở trên bản đồ so với tỉ lệ thật của nó. Ví dụ khi giá trị **scale**
là 0.5 thì Building sẽ nhỏ hơn một nửa so với kích thước thật của nó. Giá trị mặc định là **1**.
- **bearing** (tùy chọn): chỉ định góc quay của Building khi được vẽ ra trên bản đồ theo đơn vị là Độ. Bình thường giá
trị mặc định của nó là **0**. Khi bạn muốn quay Building theo một hướng nào đó thì bạn chỉ cần set lại giá  trị **bearing**
trong khoảng từ 0 đến 360 độ.
- **elevation** (tùy chọn): chỉ định độ cao của Building so với mực nước biển theo đơn vị mét. Giá trị mặc định là **0**
- **height** (tùy chọn): chỉ định chiều cao của Building theo đơn vị là mét. Thuộc tính này chỉ có tác dụng khi Building của
bạn được tạo từ một mảng ILatLng thông qua thuộc tính **coordinates** (hay còn gọi là Extrude Building). Nó không có tác
dụng với Building được vẽ bằng Model và Texture. Giá trị mặc định là **1**.
- **model** (tùy chọn): chỉ định một đường dẫn URL để lấy dữ liệu model cho Building.
- **texture** (tùy chọn): chỉ định một đường dẫn URL để lấy dữ liệu texture cho Building. Thuộc tính này chỉ được dùng khi
thuộc tính **model** được set giá trị. Nó sẽ map texture này vào **model** mà bạn đã set cho Building. Nếu bạn không set giá
trị **texture** khi đã set giá trị **model** thì bản đồ sẽ vẽ một building màu trắng.
- **coordinates** (tùy chọn): chỉ định một mảng vị trí **ILatLng** để tạo một Building hình khối với mặt đáy của hình khối
là mảng vị trí này. Nó kết hợp với thuộc tính **height** để tạo chiều cao cho hình khối đó (building này được gọi là Extrude
Building). Trường hợp dùng **coordinates** thì sẽ không dùng đến thuộc tính **texture**. Nếu set giá trị cho **coordinates**
và cả **model** đồng thời thì sẽ ưu tiên lấy giá trị của **model**để tạo Building.
- **visible** (tùy chọn): xác định Building có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **draggable** (tùy chọn): cho phép người dùng có thể kéo Building trên bản đồ hay không. Giá trị mặc định là **false**
- **userInteractionEnabled** (tùy chọn): cho phép người dùng có thể tương tác được với Building hay không. Giá trị mặc định
là true. Khi không cho phép người dùng tương tác với Building thì tất cả các sự kiện liên quan tới Building từ phía người dùng
sẽ không có tác dụng.
- **selected** (tùy chọn): chỉ định Building có được hightlight hay không. Khi nó được set là **true** thì Building sẽ được
vẽ một đường viền màu đỏ xung quanh để giúp người dùng dễ nhận biết. Còn khi nó được set giá trị là **false** thì nó sẽ được
vẽ như một Building bình thường. Giá trị mặc định là **false**.
- **growUp** (tùy chọn): quy định Building có hiệu ứng mọc hay không. Hiệu ứng này tạo cảm giác đẹp mắt hơn khi Building
vừa được load lên bản đồ. Giá trị mặc định là **true**.

Ví dụ sau đây thêm một Building là một cây cầu bằng Model và Texture vào bản đồ:

<iframe src="//jsfiddle.net/duydung2007/eaku2dq8/embedded/" style="min-width: 960px;" height="470px"></iframe>

Hoặc ta cũng có thể thêm một Building bằng một mảng **coordinates** như sau:

<iframe src="//jsfiddle.net/duydung2007/szuq2nyc/embedded/" style="min-width: 960px;" height="540px"></iframe>

### 2. Xóa Building khỏi bản đồ

Để xóa một Building ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào đối số __null__

```javascript
building.setMap(null)
```

Lưu ý rằng cách trên không xóa Buidling. Nó chỉ xóa Building ra khỏi bản đồ. Nếu bạn muốn xóa Building, bạn nên xóa nó
khỏi bản đồ, sau đó bạn gán **building** bằng __null__.

### 3. Hiện, ẩn những Building có sẵn của bản đồ

Bạn có thể cho phép hiện hoặc ẩn những building có sẵn của bản đồ. Mặc định thì bản đồ sẽ hiển thị tất cả các building có
sẵn của nó ở chế độ 3D. Nếu bạn muốn ẩn tất cả các building đó đi thì sử dụng phương thức **setBuildingsEnabled()** của
lớp **map4d.Map** và truyền vào tham số **false**. Ngược lại nếu bạn muốn hiện chúng lên thì bạn truyền vào tham số là **true**.

Ví dụ để ẩn các building có sẵn của bản đồ:

```javascript
map.setBuildingsEnabled(false)
```

Ngoài ra để kiểm tra các building có sẵn có được hiện trên bản đồ hay không bạn cũng có thể sử dụng phương thức **isBuildingsEnabled()**
của lớp **map4d.Map**. Phương thức này sẽ trả về một giá trị **boolean** tương ứng với các building có được hiện hay không.

```javascript
let isBuildingsEnabled = map.isBuildingsEnabled()
```

### 4. Hiển thị các building theo filter

Đôi lúc bạn không muốn hiển thị tất cả các building mặc định của bản đồ mà chỉ muốn hiển thị theo một số type mà bạn muốn.
Phương thức **setFilterBuildings()** của lớp **Map** sẽ giúp bạn thực hiện điều đó. Bạn cần truyền một mảng string chứa các
**type** của các building mà bạn muốn hiển thị trên bản đồ.
Hiện tại **map4d** hỗ trợ các type phổ biến sau cho building: **point, decoration, university, school, bank, bus_station,
stadium, cafe, restaurant, doctors, motel, shop, marketplace, museum, atm, tree, theatre, bridge, payment_centre, house,
electronics**

Số lượng các type có thể tăng lên theo thời gian nhưng chúng tôi sẽ cập nhật sớm nhất có thể.

Ví dụ: Để cho phép bản đồ chỉ hiển thị những Building có type là **motel**, **bridge** và **school**

```javascript
map.setFilterBuildings(["motel", "bridge", "school"])
```

Nếu bạn gọi phương thức **setFilterBuildings()** nhiều lần thì mảng danh sách mà bạn set cuối cùng sẽ được filter.

Để hiển thị lại tất cả các building mặc định của bản đồ mà không filter thì bạn có thể gọi lại phương thức **setFilterBuildings()**
với tham số truyền vào là **null** hoặc một một mảng rỗng ([])

Ví dụ:

```javascript
this.map.setFilterBuildings(null)
``` 

hoặc

```javascript
this.map.setFilterBuildings([])
```

Để kiểm tra các **type** nào đang được filter bạn có thể sử dụng phương thức **getFilterBuildings()** của lớp Map. Phương
thức này sẽ trả về một mảng string chứa các **type**

Ví dụ:

```javascript
let filterTypes = map.getFilterBuildings()
```

### 5. Lấy danh sách các tile chứa Building

Trong một số trường hợp bạn muốn lấy danh sách các tile chứa building (hoặc là danh sách các tile mà building vẽ đè lên trên
bản đồ) thì hãy dùng phương thức **getTileCovers(zooms: number[], completion: Function)**. Với 2 tham số như sau:
- zooms: number[]: mảng các mức zoom ta cần lấy danh sách tile bị đè bởi building. Nếu bạn chỉ cần lấy danh sách tile của
1 mức zoom thì có thể dùng mảng với 1 phần tử. <br>**Chú ý: mức zoom >= 17 (chế độ 3D thì mức zoom nhỏ nhất là 17)**
- completion: là một hàm callback để nhận kết quả trả về với cấu trúc **(tiles) => { /* Your code */ }**, trong đó **tiles**
là danh sách các tile bị đè bởi building.

```javascript
building.getTileCovers([18], (tiles) => {
    console.log(tiles)
})
```

### 6. Lấy danh sách các tọa độ bao quanh mặt chân đế của Building

Building sẽ có các hình dáng khác nhau (hình cong, hình uốn lượn, ...) nên mặt chân đế của nó cũng sẽ là những đường cong,
đường uốn lượn đó. Vậy để xác định mặt chân đế của một building ta cần lấy các điểm tọa độ bằng phương thức **getBoundsCoordinates(completion: Function)**
với 1 tham số truyền vào là:
- completion: là một hàm callback để nhận kết quả trả về với cấu trúc **(coordinates) => {/* Your code */}**. trong đó **coordinates**
là danh sách các điểm tọa độ bao quanh mặt chân đế của building

Ví dụ sau đây ta sẽ lấy các điểm tọa độ của mặt chân đế của một cây cầu và vẽ các Marker tại những điểm đó:

<iframe src="//jsfiddle.net/duydung2007/6r9L1jhu/embedded/" style="min-width: 960px;" height="710px"></iframe>

### 7. Các sự kiện trên Building

Để lắng nghe các sự kiện xảy ra trên Building, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{building: true}** hoặc/và **{mapbuilding: true}**.

- **{building: true}**: là EventOptions cho **Building mà bạn tự thêm vào**.
- **{mapbuilding: true}**: là EventOptions cho **Building có sẵn trên bản đồ**.

Các sự kiện có thể lắng nghe trên Building là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho Building ta thực hiện như sau:

```javascript
let clickEvent = this.map.addListener("click", (args) => {
  console.log("Building clicked: ")
  console.log(args)
}, {building: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- building: là đối tượng Building mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.



