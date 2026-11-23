# Image Overlay References

## ImageOverlay class

`map4d.ImageOverlay` class

**Constructor** 

Tạo ImageOverlay với các options được chỉ định

```js
ImageOverlay(options)
```

- Parameters:
  - options: [ImageOverlayOptions](/reference/image-overlay?id=imageoverlayoptions-interface) *required*

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/reference/map?id=map-class) | `none`       | Hiển thị Image Overlay lên map, nếu set map là null thì Image Overlay sẽ bị xóa khỏi map |
| **setVisible** | visibility: boolean                     | `none`       | Ẩn/hiện Image Overlay trên map                                                         |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của Image Overlay                                               |
| **setOpacity** | number                                  | `none`       | Set giá trị opacity cho overlay. Giá trị opacity từ 0 đến 1                            |
| **getOpacity** | `none`                                  | number       | Get giá trị opacity hiện tại của overlay                                               |


## ImageOverlayOptions interface

`map4d.ImageOverlayOptions` interface

Đối tượng ImageOverlayOptions đùng để xác định các thuộc tính dùng cho ImageOverlay.

**Properties**

| Name                   | Type     | Description                                                                                                                                                                            |
|------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **url** *required*     | string   | Đường dẫn url của Image                                                                                                                                                                |
| **bounds** *required*  | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds) | Vùng hiển thị Image Overlay                                                                                                            |
| **visible** *optional* | boolean  | Nếu là `true` thì Image Overlay sẽ được hiển thị                                                                                                                                       |
| **zIndex** *optional*  | number   | Thứ tự hiển thị giữa các Image Overlay với nhau. Tất cả các Image overlay được hiển thị đè lên trên bản đồ và các điểm Place của bản đồ                                                |
| **opacity** *optional* | number   | Độ trong suốt của Image Overlay. Có giá trị từ 0 đến 1                                                                                                                                 |
