# Circle reference

## Circle Class

`map4d.Circle` class

**Constructor** 

Tạo Circle với các options được chỉ định

```js
Circle(options)
```

- Parameters:
  - options: [CircleOptions](/reference/circle?id=circle-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm circle vào map, nếu set map là **null** thì circle sẽ bị xóa khỏi map             |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà circle được thêm vào                                              |
| **setCenter**                | [ILatLng](/reference/coordinates?id=ilatlng)| `none`   | Set tạo độ tâm cho circle                                                              |
| **getCenter**                | `none` |  [LatLng](/reference/coordinates?id=latlng)   | Get tọa độ tâm của circle                                                              |
| **setRadius**                | number                                  | `none`       | Set bán kính cho circle theo đơn vị là mét                                             |
| **getRadius**                | `none`                                  | number       | Get bán kính của circle theo đơn vị là mét                                             |
| **setFillColor**             | string                                  | `none`       | Set màu cho circle theo mã HEX (ví dụ: **"#0F4DA9"**)                                  |
| **getFillColor**             | `none`                                  | string       | Get màu của circle                                                                     |
| **setFillOpacity**           | number                                  | `none`       | Set độ trong suốt cho màu của circle (giá trị từ 0.0 đến 1.0)                          |
| **getFillOpacity**           | `none`                                  | number       | Get độ trong suốt của circle                                                           |
| **setStrokeColor**           | string                                  | `none`       | Set màu cho circle theo mã HEX (ví dụ: **"#0F4DA9"**)                                  |
| **getStrokeColor**           | `none`                                  | string       | Get màu của circle                                                                     |
| **setStrokeWidth**           | number                                  | `none`       | Set độ rộng cho đường viền của circle                                                  |
| **getStrokeWidth**           | `none`                                  | number       | Get độ rộng cho đường viền của circle                                                  |
| **setVisible**               | boolean                                 | `none`       | Ẩn/hiện circle trên map                                                                |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của circle                                                      |
| **setZIndex**                | number                                  | `none`       | Set giá trị zIndex cho circle                                                          |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của circle                                                 |
| **setElevation**             | number                                  | `none`       | Set giá trị độ cao cho circle theo đơn vị mét                                          |
| **getElevation**             | `none`                                  | number       | Get giá trị độ cao của circle                                                          |
| **setDraggable**             | boolean                                 | `none`       | Cho phép circle có được kéo trên bản đồ hay không                                      |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem circle có thể kéo trên bản đồ hay không                                   |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho circle                                        |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho circle                                      |
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra circle có thể tương tác bởi người dùng hay không                              |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép circle có thể tương tác bởi người dùng hay không                              |


## Circle Options

`map4d.CircleOptions` interface

Đối tượng CircleOptions dùng để xác định các thuộc tính dùng cho Circle.

**Properties**

| Name                       | Type                | Description                                                                                                                                                           |
|----------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **center** *required*      |[ILatLng](/reference/coordinates?id=ilatlng)| một điểm tọa độ **ILatLng** để xác định tâm của Circle.                                                                                        |
| **radius** *required*      | number              | chỉ định bán kính của Circle theo đơn vị **mét**.                                                                                                                     |
| **fillColor** *optional*   |string               | chỉ định màu sắc của Circle theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc định là **"#0000FF"**.                                                                     |
| **fillOpacity** *optional* |number               | chỉ định độ trong suốt màu của Circle, khoảng giá trị của nó nằm trong khoảng từ 0.0 đến 1.0. Giá trị mặc định là **1**.                                              |
| **visible** *optional*     |boolean              | xác định Circle có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                         |
| **strokeColor** *optional* | string              | chỉ định màu sắc của **đường viền Circle** theo mã HEX (ví dụ **"#FF0000"**). Giá trị mặc định là **"#00FF00"**.                                                      |
| **strokeWidth** *optional* | number              | chỉ định độ lớn của **đường viền Circle** theo đơn vị **point**.                                                                                                      |
| **draggable** *optional*   | boolean             | cho phép người dùng có thể kéo Circle trên bản đồ hay không. Giá trị mặc định là **false**.                                                                           |
| **zIndex** *optional*      | number              | chỉ định thứ tự chồng nhau giữa các Circle với nhau hoặc giữa Circle với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**.                                   |
| **elevation** *optional*   | number              | chỉ định độ cao của Circle so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                             |
| **userInteractionEnabled** *optional*| boolean   | cho phép người dùng có thể tương tác được với Circle hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với Circle thì tất cả các sự kiện liên quan tới Circle từ phía người dùng sẽ không có tác dụng.|

