# Marker reference

## Marker Class

`map4d.Marker` class

**Constructor** 

Tạo Marker với các options được chỉ định

```js
Marker(options)
```

- Parameters:
  - options: [MarkerOptions](/reference/marker?id=marker-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm marker vào map, nếu set map là **null** thì marker sẽ bị xóa khỏi map             |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà marker được thêm vào                                              |
| **setVisible**               | visibility: boolean                     | `none`       | Ẩn/hiện marker trên map                                                                |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của marker                                                      |
| **setZIndex**                | zIndex: number                          | `none`       | Set giá trị zIndex cho Marker                                                          |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của Marker                                                 |
| **setPosition**              | [ILatLng](/reference/coordinates?id=ilatlng)| `none`    | Set vị trí cho marker                                                                 |
| **getPosition**              | `none`                                  | ILatLng      | Get vị trí của marker                                                                  |
| **setAnchor**                | [IPoint](/reference/coordinates?id=ipoint)| `none`      | Set điểm neo cho Marker                                                               |
| **getAnchor**                | `none`                                  | IPoint       | Get điểm neo đã set cho Marker                                                         |
| **setLabelAnchor**           | [IPoint](/reference/coordinates?id=ipoint)| `none`      | Set điểm neo cho chữ vẽ trong marker                                                  |
| **getLabelAnchor**           | `none`                                  | IPoint       | Get điểm neo của chữ trong marker đã set                                               |
| **setIcon**                  | [Icon](/reference/marker?id=icon)`or`string|`none`| Set một hình ảnh cho marker để thay cho hình ảnh mặc định                                   |
| **getIcon**                  | `none`                                  |Icon`or`string| Get hình ảnh đã set cho marker trước đó                                                |
| **setElevation**             | number                                  | `none`       | Set độ cao của marker theo đơn vị là mét                                               |
| **getElevation**             | `none`                                  | number       | Get độ cao của marker                                                                  |
| **setRotation**              | number                                  | `none`       | Set góc quay của marker trên bản đồ theo đơn vị độ                                     |
| **getRotation**              | `none`                                  | number       | Get góc quay của marker trên bản đồ                                                    |
| **hideInfoWindow**           | `none`                                  | `none`       | Ẩn bảng thông tin của marker                                                           |
| **showInfoWindow**           | `none`                                  | `none`       | Hiện bảng thông tin của marker                                                         |
| **getTitle**                 | `none`                                  | string       | Get tiêu đề của maker                                                                  |
| **setTitle**                 | string                                  | `none`       | Set tiêu của marker                                                                    |
| **getSnippet**               | `none`                                  | string       | Get mô tả của marker                                                                   |
| **setSnippet**               | string                                  | `none`       | Set mô tả của marker                                                                   |
| **setWindowAnchor**          | [IPoint](/reference/coordinates?id=ipoint)| `none`      | Set điểm neo cho bảng thông tin marker                                                |
| **setInfoWindow**            | string `or` Node                        | `none`       | Set kiểu dáng bảng thông tin thay cho bảng thông tin mặc định                          |
| **setInfoContents**          | string `or` Node                        | `none`       | Set nội dung cho bảng thông tin                                                        |
| **isInfoWindowShown**        | `none`                                  | boolean      | Kiểm tra xem bảng thông tin có được hiện trên bản đồ hay không                         |
| **setDraggable**             | boolean                                 | `none`       | Cho phép marker có được kéo trên bản đồ hay không                                      |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem marker có thể kéo trên bản đồ hay không                                   |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho marker                                        |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho marker                                      |
| **setLabel**                 | string`or`[MarkerLabel](/reference/marker?id=marker-label)| `none`| Set một label để vẽ trong marker                                            |
| **setIconView**              | string `or` Node                        | `none`       | Thay thế hình ảnh mặc định của marker bằng một HTML view                               |
| **getIconView**              | `none`                                  |string`or`Node| Get thông tin hình ảnh HTML của marker                                                 |
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra marker có thể tương tác bởi người dùng hay không                              |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép marker có thể tương tác bởi người dùng hay không                              |



## Marker Options

`map4d.MarkerOptions` interface

Đối tượng MarkerOptions dùng để xác định các thuộc tính dùng cho Marker.

**Properties**

| Name                       | Type                | Description                                                                                                                                                           |
|----------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *required*    |[ILatLng](/reference/coordinates?id=ilatlng)| chỉ định một **ILatLng** để xác định vị trí ban đầu của Marker.                                                                                |
| **visible** *optional*     | boolean             | xác định Marker có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                         |
| **anchor** *optional*      |[IPoint](/reference/coordinates?id=ipoint)| chỉ định một **IPoint** để xác định điểm neo cho Marker. Giá trị mặc định là **{x: 0.5, y: 1.0}**                                                |
| **labelAnchor** *optional* |[IPoint](/reference/coordinates?id=ipoint)| chỉ định một **IPoint** để xác định điểm neo của Label so với Marker. Giá trị mặc định là **{x: 0.5, y: 0.5}**                                   |
| **icon** *optional*        |[Icon](/reference/marker?id=icon)`or`string| tùy chỉnh icon cho Marker. Có thể truyền vào là một **Icon** hoặc là một **Url**                                                                |
| **elevation** *optional*   | number              | chỉ định độ cao của Marker so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                             |
| **rotation** *optional*    | number              | chỉ định góc quay của Marker theo đơn vị là Độ. Giá trị mặc định là **0**                                                                                             |
| **title** *optional*       | string              | chỉ định tiêu đề của Marker. Tiêu đề sẽ được hiển thị ở dòng đầu tiên của bảng thông tin Marker.                                                                      |
| **snippet** *optional*     | string              | mô tả thông tin ngắn gọn cho Marker. Snippet sẽ được hiển thị ở bẳng thông tin của Marker và phía dưới dòng tiêu đề.                                                  |
| **windowAnchor** *optional*|[IPoint](/reference/coordinates?id=ipoint)| chỉ định một **IPoint** để xác định điểm neo bảng thông tin của Marker. Bảng thông tin này sẽ hiện lên khi click vào Marker. Giá trị mặc định là **{x: 0.5, y: 0.0}** |
| **zIndex** *optional*      | number              | chỉ định thứ tự chồng nhau giữa các Marker với nhau hoặc giữa Marker với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**                                    |
| **label** *optional*       |string`or`[MarkerLabel](/reference/marker?id=marker-label)| chỉ định label của Marker. Label sẽ được hiển thị ở tâm của Marker.                                                              |
| **draggable** *optional*   | boolean             | cho phép người dùng có thể kéo Marker trên bản đồ hay không. Giá trị mặc định là **false**                                                                            |
| **iconView** *optional*    |string`or`Node       | cho phép thêm node HTML vào và thay thế icon mặc định của Marker.                                                                                                     |
| **userInteractionEnabled** *optional*| boolean   | cho phép người dùng có thể tương tác được với Marker hay không. Giá trị mặc định là true. Khi không cho phép người dùng tương tác với Marker thì tất cả các sự kiện liên quan tới Marker từ phía người dùng sẽ không có tác dụng.|


## Marker Label

`map4d.MarkerLabel` class

**Constructor** 

Tạo MarkerLabel với các options được chỉ định

```js
MarkerLabel(options)
```

- Parameters:
  - options: [MarkerLabelOptions](/reference/marker?id=marker-label-options) *required*

**Methods**

| Name               | Parameters | Return Value | Description                                                                                  |
|--------------------|:----------:|:------------:|----------------------------------------------------------------------------------------------|
| **getColor**       | `none`     | string       | Get màu của Maker Label theo hệ HEX                                                          |
| **getFontWeight**  | `none`     | string       | Get kiểu font của Marker Label. Có 2 loại fontWeight là normal (nét thường) và bold (nét đậm)|
| **getFontSize**    | `none`     | number       | Get kích thước của Marker Label                                                              |
| **getText**        | `none`     | string       | Get text của Marker Label                                                                    |
| **hasHalo**        | `none`     | boolean      | Kiểm tra xem đối tượng Marker Label có viền bao quanh khi vẽ text hay không                  |
| **getHaloColor**   | `none`     | string       | Get màu bao quanh text khi vẽ lên bản đồ                                                     |
| **getAnchor**      | `none`     |[Point](/reference/coordinates?id=point)| Get điểm neo của Marker Label                                       |
| **getMargin**      | `none`     |[MarginOptions](/reference/marker?id=margin-options)| Get thông tin về căn lề của Marker Label                                                     |

## Marker Label Options

`map4d.MarkerLableOptions` interface

Đối tượng MarkerLabelOptions dùng để xác định các thuộc tính dùng cho **MarkerLabel**.

**Properties**

| Name                      | Type               | Description                                                                                                                                              |
|---------------------------|:------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **text** *required*       | string             | chỉ định một đoạn text cho Marker Label                                                                                                                  |
| **color** *optional*      | string             | chỉ định màu cho Marker Label theo mã HEX (ví dụ **"#FF08A9"**). Giá trị mặc định là **"#000000"**                                                       |
| **fontWeight** *optional* | string             | chỉ định kiểu font cho Marker Label (kiểu **normal** hoặc **bold**). Giá trị mặc định là **normal**                                                      |
| **fontSize** *optional*   | number             | chỉ định kích thước font cho Marker Label. Giá trị mặc định là **13**.                                                                                   |
| **maxWidth** *optional*   | number             | chỉ định độ rộng lớn nhất mà Marker Label có thể vẽ trên bản đồ. Giá trị mặc định là **200**                                                             |
| **line** *optional*       | number             | chỉ định số dòng lớn nhất mà Marker Label có thể vẽ, nếu text dài hơn so với số đòng thì nó sẽ thêm dấu ... ở dòng cuối cùng. Giá trị mặc dịnh là **1**. |
| **halo** *optional*       | boolean            | chỉ định Marker Label vẽ lên bản đồ có viền bao quanh chữ hay không. Giá trị mặc định là **true**                                                        |
| **haloColor** *optional*  | string             | chỉ định màu của viền bao quanh chữ khi Marker Label có halo theo mã HEX. Giá trị mặc định là **"#FFFFFF"**                                              |
| **anchor** *optional*     |[IPoint](/reference/coordinates?id=ipoint)| chỉ định một **IPoint** để xác định điểm neo của Marker Label. Giá trị mặc định là **{x: 0.5, y: 0.5}**                             |
| **margin** *optional*     |[MarginOptions](/reference/marker?id=margin-options)| chỉ định một đối tượng **MarginOptions** để xác định thuộc tính căn lề trên, dưới, trái, phải                             |

## Margin Options

`map4d.MarginOptions` interface

```javascript
interface MarginOptions {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number
}
```

Đối tượng MarginOptions dùng để xác định các thuộc tính căn lề

**Properties**

| Name        | Type          | Description                                                           |
|-------------|:-------------:|-----------------------------------------------------------------------|
| top         | number        | chỉ định khoảng cách căn lề ở phía trên                               |
| bottom      | number        | chỉ định khoảng cách căn lề ở phía dưới                               |
| left        | number        | chỉ định khoảng cách căn lề ở phía bên trái                           |
| right       | number        | chỉ định khoảng cách căn lề ở phía bên phải                           |

## Icon

Là một đối tượng lưu trữ hình ảnh.

`map4d.Icon` class

**Constructor** 

Tạo Icon với các tham số được chỉ định như sau

```js
Icon(width: number, height: number, url: string)
```

- Parameters:
  - width: number *required* Chiều rộng của Icon
  - height: number *required* Chiều cao của Icon
  - url: string *required* đường dẫn URL của hình ảnh dùng để khởi tạo Icon

**Methods**

| Name            | Parameters | Return Value | Description                                                                                  |
|-----------------|:----------:|:------------:|----------------------------------------------------------------------------------------------|
| **clone**       | `none`     | Icon         | Tạo một bản sao của đối tượng Icon hiện tại                                                  |
| **getWidth**    | `none`     | number       | Get chiều rộng của Icon                                                                      |
| **getHeight**   | `none`     | number       | Get chiều cao của Icon                                                                       |
| **getUrl**      | `none`     | string       | Get đường dẫn chứa hình ảnh của Icon                                                         |
