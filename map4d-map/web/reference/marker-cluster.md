# Marker Clusterer reference

## Marker Clusterer Class

`map4d.MarkerClusterer` class

**Constructor** 

Tạo MarkerClusterer với mảng [Marker](/reference/marker?id=marker-class) và các options được chỉ định

```js
MarkerClusterer(Marker[], options)
```

- Parameters:
  - Marker[]: Mảng các marker cần đưa vào MarkerClusterer.
  - options: [MarkerClusterOptions](/reference/marker-cluster?id=marker-clusterer-options) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                                      |
|------------------------------|:---------------------------------------:|:------------:|--------------------------------------------------------------------------------------------------|
| **setMap**                   | [Map](/reference/map?id=map-class)      | `none`       | Thêm marker cluster vào map, nếu set map là **null** thì marker cluster sẽ bị xóa khỏi map       |
| **setZoomOnClick**           | boolean                                 | `none`       | Set giá trị cho phép phóng to bản đồ khi người dùng click để hiển tất cả các Marker trong nó     |

## Marker Clusterer Options

`map4d.MarkerOptions` interface

Đối tượng MarkerClusterOptions dùng để xác định các thuộc tính dùng cho MarkerClusterer.

**Properties**

| Name                       | Type                | Description                                                                                                                                |
|----------------------------|:-------------------:|--------------------------------------------------------------------------------------------------------------------------------------------|
| **minZoom** *optional*     | number              | chỉ định mức zoom nhỏ nhất mà các marker có thể hiển thị theo từng nhóm. Giá trị mặc định là **0**                                         |
| **maxZoom** *optional*     | number              | chỉ định mức zoom lớn nhất mà các marker có thể hiển thị theo từng nhóm. Giá trị mặc định là **22**                                        |
| **radius** *optional*      | number              | chỉ định bán kính của cluster theo đơn vị pixel. Giá trị mặc định là 100.                                                                  |
| **zoomOnClick** *optional* | boolean             | chỉ định bản đồ có thể zoom khi người dùng click vào đối tượng **MarkerClusterer** không.                                                  |
