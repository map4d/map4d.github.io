# POI reference

## POI Class

`map4d.POI` class

**Constructor** 

Tạo POI với các options được chỉ định

```js
POI(options)
```

- Parameters:
  - options: [POIOptions](/reference/poi?id=poi-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm polygon vào map, nếu set map là **null** thì polygon sẽ bị xóa khỏi map           |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà polygon được thêm vào                                             |
| **setTitle**                 | string                                  | `none`       | Set tiêu đề cho POI                                                                    |
| **getTitle**                 | `none`                                  | string       | Get tiêu đề của POI                                                                    |
| **setPosition**              |[ILatLng](/reference/coordinates?id=ilatlng)| `none`    | Set vị trí tọa độ trên bản đồ cho POI                                                  |
| **getPosition**              | `none` | [LatLng](/reference/coordinates?id=latlng)    | Get vị trí tọa độ của POI                                                              |
| **setTitleColor**            | string                                  | `none`       | Set màu cho tiêu đề của POI theo mã HEX (ví dụ: **"#0F4DA9"**)                         |
| **getTitleColor**            | `none`                                  | string       | Get màu tiêu đề của POI                                                                |
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

`map4d.POIOptions` interface

Đối tượng POIOptions dùng để xác định các thuộc tính dùng cho POI.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *required*      |[ILatLng](/reference/coordinates?id=ilatlng)| chỉ định một **ILatLng** để xác định vị trí ban đầu của POI.                                                                                   |
| **title** *optional*         | string              | chỉ định tiêu đề của POI. Tiêu đề sẽ hiển thị thông tin của POI mà bạn muốn hiển thị cho người dùng.                                                                  |
| **subtitle** *optional*      | string              | chỉ định thông tin mô tả của POI.                                                                                                                                     |
| **titleColor** *optional*    | string              | chỉ định màu tiêu đề của POI theo mã HEX (ví dụ **"#5B9AFF"**). Giá trị mặc định là **"#FF0000"**                                                                     |
| **type** *optional*          | string              | chỉ định kiểu của POI, tùy thuộc vào kiểu mà icon của POI sẽ có hình ảnh tương ứng. Hiện tại **map4d** hỗ trợ cái kiểu sau: **point, cafe, bus_station, electronics, shop, bakery, fuel, restaurant, police, payment_centre, museum, university, school, airport, bank, clothes, motel, insurance, furniture, atm, hospital, bar, books, theatre, car, goverment, townhall, apartment, park, stadium, nightclub**. Kiểu mặc định sẽ là **point**.|
| **icon** *optional*          | string              | chỉ định một đường dẫn URL để lấy hình ảnh cho POI. Nếu option này được set giá trị thì hình ảnh của POI sẽ lấy theo URL này mà không cần quan tâm tới option **type**. Giá trị mặc định là **null**.|
| **elevation** *optional*     | number              | chỉ định độ cao của POI so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                                |
| **zIndex** *optional*        | number              | chỉ định thứ tự chồng nhau giữa các POI với nhau, nó không dùng để xác định thứ tự chồng nhau so với các đối tượng khác. Giá trị mặc định là **0**.                   |
| **visible** *optional*       | boolean             | xác định POI có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                            |
| **draggable** *optional*     | boolean             | cho phép người dùng có thể kéo POI trên bản đồ hay không. Giá trị mặc định là **false**.                                                                              |
| **userInteractionEnabled** *optional*| boolean     | cho phép người dùng có thể tương tác được với POI hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với POI thì tất cả các sự kiện liên quan tới POI từ phía người dùng sẽ không có tác dụng.|
