# POI

Hiện tại trên bản đồ đã có những điểm đánh dấu địa điểm có sẵn (như địa danh công cộng, quán cà phê, nhà hàng, bến xe, ...)
và chúng chỉ hiển thị khi bản đồ ở chế độ 2D. Khi bạn cần một đối tượng để đánh dấu một địa điểm trên bản đồ tương tự như
những điểm có sẵn đó thì bạn có thể dùng lớp **ipostmap.POI**. Các đối tượng **ipostmap.POI** bạn thêm vào bản đồ có thể hiện thị
ở **cả 2 chế độ 2D và 3D**.

### 1. Thêm một POI

Hàm khởi tạo của lớp **ipostmap.POI** cần truyền vào một đối tượng **ipostmap.POIOptions** để định nghĩa các thuộc tính ban đầu của
POI.

Đối tượng **POIOptions** được định nghĩa như sau:

```javascript
interface POIOptions {
    position: ILatLng
    title?: string
    subtitle?: string
    color?: string
    type?: string
    icon?: string
    elevation?: number
    zIndex?: number
    visible?: boolean
    draggable?: boolean
    userInteractionEnabled?: boolean
}
```

Các thuộc tính của **POIOptions** :
- **position** (bắt buộc): chỉ định một **ILatLng** để xác định vị trí ban đầu của POI.
- **title** (tùy chọn): chỉ định tiêu đề của POI. Tiêu đề sẽ hiển thị thông tin của POI mà bạn muốn hiển thị cho người dùng.
- **subtitle** (tùy chọn): chỉ định thông tin mô tả của POI.
- ~**titleColor** (tùy chọn): chỉ định màu tiêu đề của POI theo mã HEX (ví dụ **"#5B9AFF"**). Giá trị mặc định là **"#FF0000"**~
- **color** (tùy chọn): chỉ định màu cho tiêu đề và màu icon (nếu sử dụng thuộc tính `type`) của POI
- **type** (tùy chọn): chỉ định kiểu của POI, tùy thuộc vào kiểu mà icon của POI sẽ có hình ảnh tương ứng. Phụ thuộc vào kind được quy định trong file [style](//map.ipostmap.vn/user/platform/map-style/list)
- **icon** (tùy chọn): chỉ định một đường dẫn URL để lấy hình ảnh cho POI. Nếu option này được set giá trị thì hình ảnh của POI sẽ lấy theo URL này mà không cần quan tâm tới option **type**. Giá trị mặc định là **null**
- **elevation** (tùy chọn): chỉ định độ cao của POI so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**.
- **zIndex** (tùy chọn): chỉ định thứ tự chồng nhau giữa các POI với nhau, nó không dùng để xác định thứ tự chồng nhau
so với các đối tượng khác. Giá trị mặc định là **0**.
- **visible** (tùy chọn): xác định POI có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.
- **draggable** (tùy chọn): cho phép người dùng có thể kéo POI trên bản đồ hay không. Giá trị mặc định là **false**
- **userInteractionEnabled** (tùy chọn): cho phép người dùng có thể tương tác được với POI hay không. Giá trị mặc định
là true. Khi không cho phép người dùng tương tác với POI thì tất cả các sự kiện liên quan tới POI từ phía người dùng
sẽ không có tác dụng.

Ví dụ sau đây thêm một POI vào bản đồ với kiểu là **cafe** và tiêu đề là **Demo POI cafe**

<iframe src="//jsfiddle.net/duydung2007/eydj4op6/embedded/" style="min-width: 914px;" height="400px"></iframe>

### 2. Xóa POI khỏi bản đồ

Để xóa một POI ra khỏi bản đồ, hãy gọi phương thức **setMap()** và truyền vào đối số __null__

```javascript
poi.setMap(null)
```

Lưu ý rằng cách trên không xóa POI. Nó chỉ xóa POI ra khỏi bản đồ. Nếu bạn muốn xóa POI, bạn nên xóa nó khỏi bản đồ,
sau đó bạn gán **poi** bằng __null__.

### 3. Bật, tắt tính năng POI có sẵn của bản đồ

Bạn có thể bật hoặc tắt tính năng POI có sẵn của bản đồ. Mặc định thì bản đồ sẽ hiển thị các POI có sẵn của nó. Nếu bạn
muốn tắt nó đi thì sử dụng phương thức **setPOIsEnabled()** của lớp **ipostmap.Map** và truyền vào tham số **false**. Ngược
lại nếu bạn muốn bật nó lên thì bạn truyền vào tham số là **true**.

Ví dụ để tắt tính năng POI có sẵn của bản đồ:

```javascript
map.setPOIsEnabled(false)
```

Ngoài ra để kiểm tra tính năng POI có sẵn có được bật hay không bạn cũng có thể sử dụng phương thức **isPOIsEnabled()**
của lớp **ipostmap.Map**. Phương thức này sẽ trả về một giá trị **boolean** tương ứng với tính năng có được bật hay không.

```javascript
let isPOIsEnabled = map.isPOIsEnabled()
```

### 4. Hiển thị POI theo filter

Đôi lúc bạn không muốn hiển thị tất cả các POI mặc định của bản đồ mà chỉ muốn hiển thị theo một số type mà bạn muốn.
Phương thức **setFilterPOIs()** của lớp **Map** sẽ giúp bạn thực hiện điều đó. Bạn cần truyền một mảng string chứa các
**type** mà bạn muốn hiển thị trên bản đồ (các **type** này bạn có thể xem lại ở thuộc tính **type** của **POIOptions**
ở mục **1**).

Ví dụ: Để cho phép bản đồ chỉ hiển thị những POI có type là **cafe**, **bank** và **atm**

```javascript
map.setFilterPOIs(["cafe", "bank", "atm"])
```

Nếu bạn gọi phương thức **setFilterPOIs()** nhiều lần thì mảng danh sách mà bạn set cuối cùng sẽ được filter.

Để hiển thị lại tất cả các POI mặc định của bản đồ mà không filter thì bạn có thể gọi lại phương thức **setFilterPOIs()**
với tham số truyền vào là **null** hoặc một một mảng rỗng ([])

Ví dụ:

```javascript
map.setFilterPOIs(null)
```

hoặc

```javascript
map.setFilterPOIs([])
```

Để kiểm tra các **type** nào đang được filter bạn có thể sử dụng phương thức **getFilterPOIs()** của lớp Map. Phương
thức này sẽ trả về một mảng string chứa các **type**

Ví dụ:

```javascript
let filterTypes = map.getFilterPOIs()
```

### 5. Các sự kiện trên POI

Để lắng nghe các sự kiện xảy ra trên POI, bạn hãy dùng phương thức **addListener()** của lớp **Map** với tham số **EventOptions**
là đối tượng **{poi: true}** hoặc/và **{mappoi: true}**.

- **{poi: true}**: là EventOptions cho **POI mà bạn tự thêm vào**.
- **{mappoi: true}**: là EventOptions cho **POI có sẵn trên bản đồ**.

Các sự kiện có thể lắng nghe trên POI là: **click, dblClick, longClick, rightClick, hover, drag, dragStart, dragEnd**

Mô tả các sự kiện này tương tự như mô tả của **Map Event**. Các bạn có thể tham khảo [tại đây](guides/map-events.md)

Ví dụ để lắng nghe sự kiện **click** cho POI ta thực hiện như sau:

```javascript
let clickEvent = map.addListener("click", (args) => {
  console.log("POI clicked: ")
  console.log(args)
}, {poi: true})
```

Tham số **args** trả về khi có sự kiện xảy ra sẽ bao gồm các thông tin chính như sau:
- poi: là đối tượng POI mà người dùng **click**.
- location: là tọa độ click trên bản đồ theo latitude và longitude.
- pixel: là tọa độ pixel mà người dùng click trên màn hình.

## API Reference

<a id="reference-poi"></a>

## POI reference

## POI Class

`ipostmap.POI` class

**Constructor**

Tạo POI với các options được chỉ định

```js
POI(options)
```

- Parameters:
  - options: [POIOptions](/guides/poi?id=poi-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/guides/map-options?id=map-class)      | `none`       | Thêm polygon vào map, nếu set map là **null** thì polygon sẽ bị xóa khỏi map           |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà polygon được thêm vào                                             |
| **setTitle**                 | string                                  | `none`       | Set tiêu đề cho POI                                                                    |
| **getTitle**                 | `none`                                  | string       | Get tiêu đề của POI                                                                    |
| **setPosition**              |[ILatLng](/guides/coordinates?id=ilatlng)| `none`    | Set vị trí tọa độ trên bản đồ cho POI                                                  |
| **getPosition**              | `none` | [LatLng](/guides/coordinates?id=latlng)    | Get vị trí tọa độ của POI                                                              |
| ~**setTitleColor**~          | ~string~                                | ~`none`~     | ~Set màu cho tiêu đề của POI theo mã HEX (ví dụ: **"#0F4DA9"**)~                       |
| ~**getTitleColor**~          | ~`none`~                                | ~string~     | ~Get màu tiêu đề của POI~                                                              |
| **setColor**                 | string                                  | `none`       | Set màu cho icon (nếu sử dụng `type`) và tiêu đề của POI                               |
| **getColor**                 | `none`                                  | string       | Get màu tiêu đề và icon (nếu sử dụng `type`) của POI                                   |
| **setSubtitle**              | string                                  | `none`       | Set thông tin mô tả cho POI                                                            |
| **getSubtitle**              | `none`                                  | string       | Get thông tin mô tả của POI                                                            |
| **setType**                  | string                                  | `none`       | Set kiểu cho POI                                                                       |
| **getType**                  | `none`                                  | string       | Get kiểu của POI                                                                       |
| **setIcon**                  | string                                  | `none`       | Set đường dẫn URL để lấy hình ảnh thay thế ảnh mặc định của POI                        |
| **getIcon**                  | `none`                                  | string       | Get đường dẫn URL hình ảnh của POI                                                     |
| **setVisible**               | boolean                                 | `none`       | Ẩn/hiện POI trên map hay không                                                         |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của POI                                                         |
| **setDraggable**             | boolean                                 | `none`       | Cho phép POI có được kéo trên bản đồ hay không                                         |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem POI có thể kéo trên bản đồ hay không                                      |
| **setZIndex**                | number                                  | `none`       | Set giá trị zIndex cho POI                                                             |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của POI                                                    |
| **setElevation**             | number                                  | `none`       | Set giá trị độ cao cho POI theo đơn vị mét                                             |
| **getElevation**             | `none`                                  | number       | Get giá trị độ cao của POI theo đơn vị mét                                             |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho POI                                           |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho POI                                         |
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra POI có thể tương tác bởi người dùng hay không                                 |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép POI có thể tương tác bởi người dùng hay không                                 |

## POI Options

`ipostmap.POIOptions` interface

Đối tượng POIOptions dùng để xác định các thuộc tính dùng cho POI.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *required*      |[ILatLng](/guides/coordinates?id=ilatlng)| chỉ định một **ILatLng** để xác định vị trí ban đầu của POI.                                                                                   |
| **title** *optional*         | string              | chỉ định tiêu đề của POI. Tiêu đề sẽ hiển thị thông tin của POI mà bạn muốn hiển thị cho người dùng.                                                                  |
| **subtitle** *optional*      | string              | chỉ định thông tin mô tả của POI.                                                                                                                                     |
| ~**titleColor** *optional*~  | ~string~            | ~chỉ định màu tiêu đề của POI theo mã HEX (ví dụ **"#5B9AFF"**). Giá trị mặc định là **"#FF0000"**~                                                                   |
| **color** *optional*         | string              | chỉ định màu tiêu đề và icon ((nếu sử dụng `type`)) của POI theo mã HEX (ví dụ **"#5B9AFF"**). Giá trị mặc định là **"#FF0000"**                                      |
| **type** *optional*          | string              | chỉ định kiểu của POI, tùy thuộc vào kiểu mà icon của POI sẽ có hình ảnh tương ứng. Phụ thuộc vào kind được quy định trong file [style](//map.ipostmap.vn/user/platform/map-style/list) |
| **icon** *optional*          | string              | chỉ định một đường dẫn URL để lấy hình ảnh cho POI. Nếu option này được set giá trị thì hình ảnh của POI sẽ lấy theo URL này mà không cần quan tâm tới option **type**. Giá trị mặc định là **null**.|
| **elevation** *optional*     | number              | chỉ định độ cao của POI so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                                |
| **zIndex** *optional*        | number              | chỉ định thứ tự chồng nhau giữa các POI với nhau, nó không dùng để xác định thứ tự chồng nhau so với các đối tượng khác. Giá trị mặc định là **0**.                   |
| **visible** *optional*       | boolean             | xác định POI có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                            |
| **draggable** *optional*     | boolean             | cho phép người dùng có thể kéo POI trên bản đồ hay không. Giá trị mặc định là **false**.                                                                              |
| **userInteractionEnabled** *optional*| boolean     | cho phép người dùng có thể tương tác được với POI hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với POI thì tất cả các sự kiện liên quan tới POI từ phía người dùng sẽ không có tác dụng.|
