# Building Overlay Reference

## BuildingOverlay class

`map4d.BuildingOverlay` class

**Constructor** 

Tạo BuildingOverlay với các options được chỉ định

```js
BuildingOverlay(options)
```

- Parameters:
  - options: [BuildingOverlayOptions](/reference/building-overlay?id=buildingoverlayoptions-interface) *required*

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                                    |
|----------------|-----------------------------------------|--------------|------------------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/reference/map?id=map-class) | `none`       | Hiển thị building overlay lên map, nếu set map là null thì building overlay sẽ bị xóa khỏi map |
| **setVisible** | visibility: boolean                     | `none`       | Ẩn/hiện building overlay trên map                                                              |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của overlay                                                             |
| **getPrefixId**| `none`                                  | string       | Get prefixId                                                                                   |

## BuildingOverlayOptions interface

`map4d.BuildingOverlayOptions` interface

Đối tượng BuildingOverlayOptions đùng để xác định các thuộc tính dùng cho BuildingOverlay.

**Properties**

| Name                    | Type     | Description                                                               |
|-------------------------|----------|---------------------------------------------------------------------------|
| **getUrl** *required*   | function | Hàm nhận vào 3 giá trị `x`, `y`, `zoom` và trả về đường dẫn đến Buildings |
| **prefixId** *optional* | string   | Giá trị được thêm vào trước id của những building thuộc overlay.          |
| **visible** *optional*  | boolean  | Nếu là `true` thì building overlay sẽ được hiển thị                       |


## BuildingData interface

`map4d.BuildingData` interface

Đối tượng BuildingData dùng để xác định các thuộc tính của building

**Properties**

| Name                       | Type                                           | Description                                                                                                                                  |
|----------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **id** *required*          | string                                         | ID của building                                                                                                                              |
| **name** *required*        | string                                         | Tên tuilding                                                                                                                                 |
| **position** *required*    | [ILatLng](/reference/coordinates?id=ilatlng)   | Vị trí hiển thị building trên bản đồ                                                                                                         |
| **model** *optional*       | string                                         | Đường dẫn URL để lấy dữ liệu model cho building                                                                                              |
| **texture** *optional*     | string                                         | Đường dẫn URL để lấy dữ liệu texture cho building                                                                                            |
| **coordinates** *optional* | [ILatLng[]](/reference/coordinates?id=ilatlng) | Một mảng vị trí `ILatLng` để tạo một Building hình khối với mặt đáy của hình khối là mảng vị trí này. Kết hợp với `height` để tạo chiều cao  |
| **height** *optional*      | number                                         | Chiều cao của building (đơn vị: mét)                                                                                                         |
| **scale** *optional*       | number                                         | Tỉ lệ hiển thị của building so với kích thước thực tế                                                                                        |
| **bearing** *optional*     | number                                         | Góc quay của building khi được vẽ ra trên bản đồ (đơn vị: độ)                                                                                |
| **elevation** *optional*   | number                                         | Độ cao của building so với mực nước biển (đơn vị: mét)                                                                                       |
| **startDate** *optional*   | number                                         | Ngày bắt đầu hiển thị building                                                                                                               |
| **endDate** *optional*     | number                                         | Ngày kết thúc hiển thị building                                                                                                              |

**Chú ý:**
  - Trường hợp dùng `model` nhưng `texture` là *`null`* thì building sẽ được tô màu trắng.
  - Trường hợp dùng `model` thì sẽ không dùng đến thuộc tính `coordinates`. Nếu set giá trị cho `coordinates` và cả `model` đồng thời thì sẽ ưu tiên lấy giá trị của `model` để tạo Building