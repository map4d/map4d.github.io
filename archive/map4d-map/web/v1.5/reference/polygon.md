# Polygon reference

## Polygon Class

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
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra polygon có thể tương tác bởi người dùng hay không                             |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép polygon có thể tương tác bởi người dùng hay không                             |

## Polygon Options

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
| **userInteractionEnabled** *optional*| boolean     | cho phép người dùng có thể tương tác được với Polygon hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với Polygon thì tất cả các sự kiện liên quan tới Polygon từ phía người dùng sẽ không có tác dụng.|
