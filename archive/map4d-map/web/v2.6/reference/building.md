# Building reference

## Building Class

`map4d.Building` class

**Constructor** 

Tạo Building với các options được chỉ định

```js
Building(options)
```

- Parameters:
  - options: [BuildingOptions](/reference/building?id=building-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm building vào map, nếu set map là **null** thì building sẽ bị xóa khỏi map         |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà building được thêm vào                                            |
| **setPosition**              |[ILatLng](/reference/coordinates?id=ilatlng)| `none`| Set vị trí tọa độ trên bản đồ cho building                                                 |
| **getPosition**              | `none` | [LatLng](/reference/coordinates?id=latlng)| Get vị trí tọa độ của building                                                             |
| **setName**                  | string                                  | `none`       | Set tên cho building                                                                   |
| **getName**                  | `none`                                  | string       | Get tên của building                                                                   |
| **setBearing**               | number                                  | `none`       | Set góc quay khi đặt trên bản đồ cho building theo đơn vị Độ                           |
| **getBearing**               | `none`                                  | number       | Get góc quay trên bản đồ của building theo đơn vị Độ                                   |
| **setScale**                 | number                                  | `none`       | Set tỉ lệ vẽ building trên bản đồ so với kích thước thật của nó                        |
| **getScale**                 | `none`                                  | number       | Get tỉ lệ vẽ building trên bản đồ so với kích thước thật của nó                        |
| **setHeight**                | number                                  | `none`       | Set giá trị độ cao cho building khi model của nó được tạo từ thuộc tính coordinates    |
| **getHeight**                | `none`                                  | number       | Get giá trị độ cao của building khi model của nó được tạo từ thuộc tính coordinates    |
| **setElevation**             | number                                  | `none`       | Set giá trị độ cao building so với mực nước biển theo đơn vị mét                       |
| **getElevation**             | `none`                                  | number       | Get giá trị độ cao building so với mực nước biển theo đơn vị mét                       |
| **setSelected**              | boolean                                 | `none`       | Set giá trị để xác định building có được hightlight hay không                          |
| **isSelected**               | `none`                                  | boolean      | Kiểm tra building có được hightlight hay không                                         |
| **setModel**                 | string                                  | `none`       | Set đường dẫn URL để lấy dữ liệu model cho Building                                    |
| **setTexture**               | string                                  | `none`       | Set đường dẫn URL để lấy dữ liệu texture cho Building                                  |
| **getCoordinates**           | `none` | [LatLng](/reference/coordinates?id=latlng)    | Get mảng vị trí mặt đáy **LatLng** đã truyền vào để tạo Building extrude               |
| **setCoordinates**           | string                                  | `none`       | Set mảng vị trí **ILatLng** để tạo một Building hình khối với mặt đáy của hình khối là mảng vị trí này|
| **setVisible**               | boolean                                 | `none`       | Ẩn/hiện building trên map hay không                                                    |
| **isVisible**                | `none`                                  | boolean      | Get trạng thái ẩn/hiện của building                                                    |
| **setGrowUp**                | boolean                                 | `none`       | Bật/tắt hiệu ứng mọc lúc tải building                                                  |
| **isGrowUp**                 | `none`                                  | boolean      | Get trạng thái bật/tắt hiệu ứng mọc lúc tải của building                               |
| **setDraggable**             | boolean                                 | `none`       | Cho phép building có được kéo trên bản đồ hay không                                    |
| **isDraggable**              | `none`                                  | boolean      | Kiểm tra xem building có thể kéo trên bản đồ hay không                                 |
| **getUserData**              | `none`                                  | any          | Set dữ liệu riêng mà người dùng muốn cho building                                      |
| **setUserData**              | any                                     | `none`       | Get dữ liệu riêng mà người dùng đã set cho building                                    |
| **isUserInteractionEnabled** | `none`                                  | boolean      | Kiểm tra building có thể tương tác bởi người dùng hay không                            |
| **setUserInteraction**       | boolean                                 | `none`       | Cho phép building có thể tương tác bởi người dùng hay không                            |
| **getTileCovers**            | zooms: number[], completion: Function   | `none`       | trả về danh sách các tile thông qua hàm **completion** tương ứng với mảng các mức zoom mà bạn truyền vào.|
| **getBoundsCoordinates**     | completion: Function                    | `none`       | trả về danh sách các tọa độ bao quanh mặt chân đế của building thông qua hàm **completion**|

## Building Options

`map4d.BuildingOptions` interface

Đối tượng BuildingOptions dùng để xác định các thuộc tính dùng cho Building.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *required*      |[ILatLng](/reference/coordinates?id=ilatlng)| chỉ định một **ILatLng** để xác định vị trí ban đầu của building.                                                                              |
| **name** *optional*          | string              | chỉ định tên của Building mà bạn tạo. Tên mặc định sẽ là **Unknown name**                                                                                             |
| **scale** *optional*         | number              | chỉ định tỉ lệ của Building được vẽ ra ở trên bản đồ so với tỉ lệ thật của nó. Ví dụ khi giá trị **scale** là 0.5 thì Building sẽ nhỏ hơn một nửa so với kích thước thật của nó. Giá trị mặc định là **1**.|
| **bearing** *optional*       | number              | chỉ định góc quay của Building khi được vẽ ra trên bản đồ theo đơn vị là Độ. Bình thường giá trị mặc định của nó là **0**. Khi bạn muốn quay Building theo một hướng nào đó thì bạn chỉ cần set lại giá  trị **bearing** trong khoảng từ 0 đến 360 độ.|
| **elevation** *optional*     | number              | chỉ định độ cao của building so với mực nước biển, đơn vị là mét. Giá trị mặc định là **0**                                                                           |
| **height** *optional*        | number              | chỉ định chiều cao của Building theo đơn vị là mét. Thuộc tính này chỉ có tác dụng khi Building của bạn được tạo từ một mảng ILatLng thông qua thuộc tính **coordinates** (hay còn gọi là Extrude Building). Nó không có tác dụng với Building được vẽ bằng Model và Texture. Giá trị mặc định là **1**.|
| **model** *optional*         | string              | chỉ định một đường dẫn URL để lấy dữ liệu model cho Building.                                                                                                         |
| **texture** *optional*       | string              | chỉ định một đường dẫn URL để lấy dữ liệu texture cho Building. Thuộc tính này chỉ được dùng khi thuộc tính **model** được set giá trị. Nó sẽ map texture này vào **model** mà bạn đã set cho Building. Nếu bạn không set giá trị **texture** khi đã set giá trị **model** thì bản đồ sẽ vẽ một building màu trắng.|
| **coordinates** *optional*   |[ILatLng](/reference/coordinates?id=ilatlng)[]| chỉ định một mảng vị trí **ILatLng** để tạo một Building hình khối với mặt đáy của hình khối là mảng vị trí này. Nó kết hợp với thuộc tính **height** để tạo chiều cao cho hình khối đó (building này được gọi là Extrude Building). Trường hợp dùng **coordinates** thì sẽ không dùng đến thuộc tính **texture**. Nếu set giá trị cho **coordinates** và cả **model** đồng thời thì sẽ ưu tiên lấy giá trị của **model**để tạo Building.|
| **visible** *optional*       | boolean             | xác định building có thể ẩn hay hiện trên bản đồ. Giá trị mặc định là **true**.                                                                                       |
| **draggable** *optional*     | boolean             | cho phép người dùng có thể kéo building trên bản đồ hay không. Giá trị mặc định là **false**.                                                                         |
| **userInteractionEnabled** *optional*| boolean     | cho phép người dùng có thể tương tác được với building hay không. Giá trị mặc định là **true**. Khi không cho phép người dùng tương tác với building thì tất cả các sự kiện liên quan tới building từ phía người dùng sẽ không có tác dụng.|
| **selected** *optional*      | boolean             | chỉ định Building có được hightlight hay không. Khi nó được set là **true** thì Building sẽ được vẽ một đường viền màu đỏ xung quanh để giúp người dùng dễ nhận biết. Còn khi nó được set giá trị là **false** thì nó sẽ được vẽ như một Building bình thường. Giá trị mặc định là **false**.|
| **growUp** *optional*        | boolean             | quy định Building có hiệu ứng mọc hay không. Hiệu ứng này tạo cảm giác đẹp mắt hơn khi Building vừa được load lên bản đồ. Giá trị mặc định là **true**.               |
