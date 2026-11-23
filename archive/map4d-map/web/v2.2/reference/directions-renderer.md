# Directions Renderer reference

## Directions Renderer Class

`map4d.DirectionsRenderer` class

**Constructor** 

Tạo DirectionsRenderer với các options được chỉ định

```js
DirectionsRenderer(options)
```

- Parameters:
  - options: [DirectionsRendererOptions](/reference/directions-renderer?id=directionsrenderer-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **setOptions**|[DirectionsRendererOptions](/reference/directions-renderer?id=directionsrenderer-options)|`none`| Set options dùng để xác định các thuộc tính dùng cho DirectionsRenderer |
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm Directions Renderer vào map, nếu set map là **null** thì Directions Renderer sẽ bị xóa khỏi map |
| **getMap**                   | `none`                                  | Map          | Lấy đối tượng map mà Directions Renderer được thêm vào                                 |
| **setRoutes**                | [ILatLng](/reference/coordinates?id=ilatlng)[][]| `none`| Set mảng tọa độ các routes cho Directions Renderer                                    |
| **getRoutes**                | `none` |  [LatLng](/reference/coordinates?id=latlng)[][]| Get mảng tạo độ các routes của Directions Renderer                                    |
| **setDirections**            | string                                  | `none`       | Set dữ liệu các route cho Directions Renderer bằng JSON string                         |
| **setActivedIndex**          | number                                  | `none`       | Set index của route muốn active trong Directions Renderer                              |
| **getActivedIndex**          | `none`                                  | number       | Get index của route đang active trong Directions Renderer                              |
| **setActiveStrokePattern**   | [PatternItem](/reference/map?id=patternitem)| `none`   | Set pattern cho active line trong Directions Renderer. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)|
| **setInactiveStrokePattern** | [PatternItem](/reference/map?id=patternitem)| `none`   | Set pattern cho inactive line trong Directions Renderer. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)|

## DirectionsRenderer Options

`map4d.DirectionsRendererOptions` interface

Đối tượng DirectionsRendererOptions dùng để xác định các thuộc tính dùng cho DirectionsRenderer.

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **routes** *optional*        |[ILatLng](/reference/coordinates?id=ilatlng)[][]| truyền vào một mảng 2 chiều các tọa độ **ILatLng** để tạo Directions Renderer. Mỗi mảng một chiều tương ứng là một route                   |
| **directions** *optional*    | string              | chỉ định dữ liệu các route cho Directions Renderer bằng JSON string                               |
| **activedIndex** *optional*  | number              | chỉ định index cho route được active trong Directions Renderer.                                   |
| **activeStrokeWidth** *optional*   | number        | chỉ định độ rộng của active line theo đơn vị point.                                               |
| **activeStrokeColor** *optional*   | string        | chỉ định màu sắc của active line theo mã HEX (ví dụ **"#FF0000"**).                               |
| **activeStrokePattern** *optional* |[PatternItem](/reference/map?id=patternitem)| chỉ định pattern của active line. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)|
| **activeOutlineWidth** *optional*  | number        | chỉ định độ rộng của active outline theo đơn vị point.                                            |
| **activeOutlineColor** *optional*  | string        | chỉ định màu sắc của active outline theo mã HEX (ví dụ **"#FF0000"**).                            |
| **inactiveStrokeWidth** *optional* | number        | chỉ định độ rộng của inactive line theo đơn vị point.                                             |
| **inactiveStrokeColor** *optional* | string        | chỉ định màu sắc của inactive line theo mã HEX (ví dụ **"#FF0000"**).                             |
| **inactiveOutlineWidth** *optional*| number        | chỉ định độ rộng của inactive outline theo đơn vị point.                                          |
| **inactiveOutlineColor** *optional*| string        | chỉ định màu sắc của inactive outline theo mã HEX (ví dụ **"#FF0000"**).                          |
| **inactiveOutlinePattern** *optional*|[PatternItem](/reference/map?id=patternitem)| chỉ định pattern của inactive outline. Tương tự như [pattern của Polyline](/guides/polyline?id=_4-tạo-một-polyline-sử-dụng-pattern)|
| **originMarkerOptions** *optional* |[MarkerOptions](/reference/marker?id=marker-options)       | chỉ định các options cho marker bắt đầu               |
| **destinationMarkerOptions** *optional*|[MarkerOptions](/reference/marker?id=marker-options)   | chỉ định các options cho marker kết thúc              |
| **waypointMarkerOptions** *optional*|[MarkerOptions](/reference/marker?id=marker-options)[]    | chỉ định mảng options cho các marker waypoint. **Chú ý:** <span style="color:red">Để có đường polyline nối marker waypoint với route trong trường hợp route có waypoint thì bắt buộc chúng ta phải set route bằng JSON</span>|
| **onMarkerDragEnd** *optional*| Function           | chỉ định options callback sau khi thực hiện việc kéo Marker, callback được gọi với tham số `args` là đối tượng chứa tọa độ LatLng của các Marker trong Directions Renderer.|
