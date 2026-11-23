# Polyline reference

## Polyline Class

`map4d.Polyline` class

**Constructor** 

Tạo Polyline với các options được chỉ định

```js
Polyline(options)
```

- Parameters:
  - options: [PolylineOptions](/reference/polyline?id=polyline-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm polyline vào map, nếu set map là **null** thì polyline sẽ bị xóa khỏi map         |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà polyline được thêm vào                                            |
| **setPath**                  | [ILatLng](/reference/coordinates?id=ilatlng)[]| `none` | Set mảng các điểm tọa độ của polyline                                                  |
| **getPath**                  | `none` |  [LatLng](/reference/coordinates?id=latlng)[] | Get mảng các điểm tọa độ tâm của polyline                                              |
| **setClosed**                | boolean                                 | `none`       | Set thuộc tính chỉ định polyline có nối điểm đầu và điểm cuối hay không                |
| **isClosed**                 | `none`                                  | boolean      | Kiểm tra polyline có được nối điểm đầu với điểm cuối với nhau hay không                |
| **setStrokeWidth**           | number                                  | `none`       | Set độ rộng cho polyline                                                               |
| **getStrokeWidth**           | `none`                                  | number       | Get độ rộng của polyline                                                               |
| **setStrokeColor**           | string                                  | `none`       | Set màu cho polyline theo mã HEX (ví dụ: **"#0F4DA9"**)                                |
| **getStrokeColor**           | `none`                                  | string       | Get màu của polyline                                                                   |
| **setStrokeOpacity**         | number                                  | `none`       | Set độ trong suốt cho màu của polyline (giá trị từ 0.0 đến 1.0)                        |
| **getStrokeOpacity**         | `none`                                  | number       | Get độ trong suốt của polyline                                                         |
| **setVisible**               | boolean                                 | `none`       | Ẩn/hiện polyline trên map hay không                                                    |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của polyline                                                    |
| **setStyle**                 | string                                 | `none`        | Set kiểu vẽ cho polyline (có 2 kiểu là: **solid** và **dotted**)                       |
| **getStyle**                 | `none`                                  | string       | Get kiểu vẽ hiện tại của polyline                                                      |
| **setZIndex**                | number                                  | `none`       | Set giá trị zIndex cho polyline                                                        |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của polyline                                               |
| **setElevation**             | number                                  | `none`       | Set giá trị độ cao cho polyline theo đơn vị mét                                        |
| **getElevation**             | `none`                                  | number       | Get giá trị độ cao của polyline theo đơn vị mét                                        |
| **setDraggable**             | boolean                                 | `none`       | Cho phép polyline có được kéo trên bản đồ hay không                                    |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem polyline có thể kéo trên bản đồ hay không                                 |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho polyline                                      |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho polyline                                    |
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra polyline có thể tương tác bởi người dùng hay không                            |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép polyline có thể tương tác bởi người dùng hay không                            |


## Polyline Options

`map4d.PolylineOptions` interface

Đối tượng PolylineOptions dùng để xác định các thuộc tính dùng cho Polyline.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **path** *required*          |[ILatLng](/reference/coordinates?id=ilatlng)[]| truyền vào một mảng các tọa độ **ILatLng** để tạo Polyline.                                                                                  |
| **strokeWidth** *required*   | number              | chỉ định độ rộng của Polyline theo đơn vị point.                                                                                                                      |
| **strokeColor** *optional*   | string              | chỉ định màu sắc của Polyline theo mã HEX (ví dụ **"#FF0000"**). Tham số này không hỗ trợ chỉ định màu theo tên (ví dụ: red, green, blue, ...). Giá trị mặc định là **"#0000FF"**.|
| **strokeOpacity** *optional* | number              | chỉ định độ trong suốt của Polyline, khoảng giá trị của nó nằm trong khoảng từ 0.0 đến 1.0. Giá trị mặc định là **1.0**                                               |
| **visible** *optional*       | boolean             | xác định Polyline có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                       |
| **closed** *optional*        | string              | chỉ định Polyline có nối điểm đầu và điểm cuối lại với nhau hay không. Giá trị mặc định là **false**. Nếu bạn chỉ định thuộc tính này bằng **true** thì bạn sẽ được một hình đa giác.|
| **draggable** *optional*     | number              | cho phép người dùng có thể kéo Polyline trên bản đồ hay không. Giá trị mặc định là **false**.                                                                         |
| **zIndex** *optional*        | boolean             | chỉ định thứ tự chồng nhau giữa các Polyline với nhau hoặc giữa Polyline với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**.                               |
| **elevation** *optional*     | number              | chỉ định độ cao của Polyline so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                           |
| **style** *optional*         | number              | chỉ định Polyline là loại nét liền (**"solid"**) hay nét đứt (**"dotted"**). Giá trị mặc định là **"solid"**                                                          |
| **userInteractionEnabled** *optional*| boolean     | cho phép người dùng có thể tương tác được với Polyline hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với Polyline thì tất cả các sự kiện liên quan tới Polyline từ phía người dùng sẽ không có tác dụng.|
