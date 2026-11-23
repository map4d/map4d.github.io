# WebGL Overlay View Reference

## WebGLOverlayView class

`map4d.WebGLOverlayView` class

**Constructor** 

Tạo WebGLOverlayView với các options được chỉ định

```js
WebGLOverlayView(options)
```

- Parameters:
  - options: [WebGLOverlayViewOptions](/reference/webgl-overlay?id=webgloverlayviewoptions-interface) *required*

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                                    |
|----------------|-----------------------------------------|--------------|------------------------------------------------------------------------------------------------|
| **setMap**     | map: [Map](/reference/map?id=map-class) | `none`       | Set WebGL Overlay View lên map, nếu set map là null thì WebGL Overlay View sẽ bị xóa khỏi map  |
| **requestRedraw**| `none`                                | `none`       | Request vẽ lại đối tượng WebGL Overlay View để không bị hạn chế FPS bởi Map4D, phù hợp khi render các model có animation |

## WebGLOverlayViewOptions interface

`map4d.WebGLOverlayViewOptions` interface

Đối tượng WebGLOverlayViewOptions dùng để xác định các thuộc tính dùng cho WebGLOverlayView.

**Properties**

| Name                    | Type     | args | Description                                                         |
|-------------------------|----------|------|---------------------------------------------------------------------|
| **onAdd** *optional*    | function | map: [Map](/reference/map?id=map-class), gl: `WebGLRenderingContext`| Callback được gọi khi WebGLOverlayView được thêm vào Map |
| **onDraw** *optional*   | function | gl: `WebGLRenderingContext` | Callback được gọi để render WebGLOverlayView lên base map  |
| **onRemove** *optional* | function | `none` | Callback được gọi khi WebGLOverlayView bị remove khỏi map với `WebGLOverlayView.setMap(null)` |


## WebGLPositionData interface

`map4d.WebGLPositionData` interface

Đối tượng WebGLPositionData dùng để xác định các thuộc tính vị trí của đối tượng WebGLOverlayView

**Properties**

| Name                       | Type                                           | Description                                                                                                                                  |
|----------------------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **position** *required*    | [ILatLng](/reference/coordinates?id=ilatlng)   | Vị trí hiển thị của đối tượng WebGLOverlayView trên bản đồ                                                                                   |
| **scale** *optional*       | number                                         | Tỉ lệ hiển thị của đối tượng WebGLOverlayView so với kích thước thực tế                                                                      |
| **bearing** *optional*     | number                                         | Góc quay của đối tượng  WebGLOverlayView khi được vẽ ra trên bản đồ (đơn vị: độ)                                                             |
| **elevation** *optional*   | number                                         | Độ cao của đối tượng WebGLOverlayView so với mực nước biển (đơn vị: mét)                                                                     |

