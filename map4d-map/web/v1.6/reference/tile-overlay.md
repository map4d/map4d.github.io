# Tile Overlay References

## TileOverlay class

`map4d.TileOverlay` class

**Constructor** 

Tạo TileOverlay với các options được chỉ định

```js
TileOverlay(options)
```

- Parameters:
  - options: [TileOverlayOptions](/reference/tile-overlay?id=tileoverlayoptions-interface) *required*

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/reference/map?id=map-class) | `none`       | Hiển thị tile overlay lên map, nếu set map là null thì tile overlay sẽ bị xóa khỏi map |
| **setVisible** | visibility: boolean                     | `none`       | Ẩn/hiện tile overlay trên map                                                          |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của overlay                                                     |
| **setZIndex**  | zIndex: number                          | `none`       | Set giá trị zIndex                                                                     |
| **getZIndex**  | `none`                                  | number       | Get giá trị zIndex hiện tại của overlay                                                |


## TileOverlayOptions interface

`map4d.TileOverlayOptions` interface

Đối tượng TileOverlayOptions đùng để xác định các thuộc tính dùng cho TileOverlay.

**Properties**

| Name                   | Type     | Description                                                                                                                                                                            |
|------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **getUrl** *required*  | function | Hàm nhận vào 4 giá trị `x`, `y`, `zoom`, `is3dMode`và trả về đường dẫn đến map tile                                                                                                    |
| **visible** *optional* | boolean  | Nếu là `true` thì tile overlay sẽ được hiển thị                                                                                                                                        |
| **zIndex** *optional*  | number   | Tất cả các tile overlay được hiển thị trên bản đồ theo thứ tự zIndex của chúng,<br>với các giá trị cao hơn hiển thị phía trước các tile overlay và ground overlay có giá trị thấp hơn. |