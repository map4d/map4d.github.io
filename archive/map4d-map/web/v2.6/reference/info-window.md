# InfoWindow reference

## InfoWindow Class

`map4d.InfoWindow` class

**Constructor** 

Tạo InfoWindow với các options được chỉ định

```js
InfoWindow(options)
```

- Parameters:
  - options: [InfoWindowOptions](/reference/info-window?id=infowindow-options)

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                             |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **open**                     | [IInfoWindowOpenOptions](/reference/info-window?id=iinfowindowopenoptions), [anchor](/reference/marker?id=marker-class)      | `none`       | Thêm InfoWindow vào map                                                                         |
| **close**                    | `none`                                  | `none`       | Xóa InfoWindow khỏi map                                                                         |
| **setOptions**               | [InfoWindowOptions](/reference/info-window?id=infowindow-options)             | `none`       | Set InfoWindowOptions InfoWindow                                                                         |
| **setContent**               | string `or` Node                        | `none`       | Set nội dung content cho InfoWindow
| **getContent**               | `none`                                  | string       | Get nội dung content của InfoWindow                                                                  |
| **setPosition**              | [ILatLng](/reference/coordinates?id=ilatlng)| `none`    | Set vị trí cho InfoWindow                                                                  |
| **getPosition**              | `none`                                  | ILatLng      | Get vị trí của InfoWindow                                                                  |
| **setZIndex**                | `number`                                  | `none`       | Set giá trị zIndex cho InfoWindow                                                                  |
| **getZIndex**                | `none`                                  | number       | Get giá trị zIndex hiện tại của InfoWindow                                                                  |

## InfoWindow Options
`map4d.InfoWindowOptions` interface

Đối tượng InfoWindowOptions dùng để xác định các thuộc tính dùng cho InfoWindow.

**Properties**

| Name                       | Type                | Description                                                                                                                                                           |
|----------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *optional*    |[ILatLng](/reference/coordinates?id=ilatlng)| chỉ định một **ILatLng** để xác định vị trí ban đầu của InfoWindow.                                                                                |
| **ariaLabel** *optional*    | string              | ariaLabel sẽ gán cho InfoWindow.                                                                                         |
| **content** *optional*      | string `or` Node    | nội dung để hiển thị trong InfoWindow. Đó có thể là một phần tử HTML, một chuỗi văn bản thuần túy hoặc một chuỗi chứa HTML.                                                    |
| **maxWidth** *optional*     | number              | chiều rộng tối đa của InfoWindow, bất kể chiều rộng của nội dung. Giá trị này chỉ được xem xét nếu được đặt trước khi gọi open()                                                                             |
| **minWidth** *optional*     | number              | chiều rộng tối thiểu của InfoWindow, bất kể chiều rộng của nội dung. Khi sử dụng thuộc tính này, bạn nên đặt minWidth thành một giá trị nhỏ hơn chiều rộng của bản đồ (tính bằng pixel).                                                                                             |
| **zIndex** *optional*       | number              | chỉ định thứ tự chồng nhau giữa các InfoWindow với nhau hoặc giữa InfoWindow với các đối tượng khác trên bản đồ. Giá trị mặc định là **0**                                    |

## IInfoWindowOpenOptions

`map4d.IInfoWindowOpenOptions` type

```js
type IInfoWindowOpenOptions = InfoWindowOpenOptions | Map
```

## InfoWindow Open Options
`map4d.InfoWindowOpenOptions` interface

Đối tượng InfoWindowOptions dùng để mở InfoWindow

**Properties**

| Name                       | Type                | Description                                                                                                                                                           |
|----------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **anchor** *optional*    | [Marker](/reference/marker?id=marker-class)           | chỉ định một [ILatLng](/reference/coordinates?id=ilatlng) để xác định vị trí ban đầu của InfoWindow.                                                                                |
| **map** *optional*        | [Map](/reference/map?id=map-class)              | ariaLabel sẽ gán cho InfoWindow.          |