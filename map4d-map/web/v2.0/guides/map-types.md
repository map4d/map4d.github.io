# Map Type

## Giới thiệu

>IPostMap Web SDK cho phép tùy chỉnh kiểu hiển thị của Tile bản đồ theo hai chế độ (Raster và Roadmap).

### Các loại bản đồ

IPostMap Web SDK  hiện cung cấp 2 loại bản đồ tùy chỉnh thông qua đối tượng `ipostmap.MapType` như bên dưới:

| No. | Name    | Description                                                                                                                                                           |
|:---:|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  1  | ROADMAP | Giá trị: `ipostmap.MapType.roadmap`<br>Các thành phần của bản đồ được vẽ dưới dạng các đường nét và hình khối, có độ phân giải cao<br>Đây là bản đồ mặc định của IPostMap Web SDK |
|  2  | RASTER  | Giá trị: `ipostmap.MapType.raster`<br>Các tiles của bản đồ được hiển thị dưới dạng hình ảnh đã được dựng sẵn, tốc độ tải và hiển thị nhanh hơn so với Roadmap.                |

|                 ROADMAP                         | RASTER                                         |
|:-----------------------------------------------:|:----------------------------------------------:|
| ![MapType](../../resources/maptype-roadmap.png) | ![MapType](../../resources/maptype-raster.png) |

### Thay đổi kiểu bản đồ

Để thay kiểu bản đồ, ta gọi hàm `setMapType(mapType: IMapType)` thông qua đối tượng `ipostmap.Map` hoặc khởi tạo Map với thuộc
tính `mapType` của `ipostmap.MapOptions`

Ví dụ:
<iframe style="min-width: 900px;" height="500px" src="//jsfiddle.net/duydung2007/axnp2ebj//embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


### Get kiểu bản đồ hiện tại

Để get kiểu bản đồ hiện tại ta có thể gọi hàm `getMapType()` thông qua đối tượng `ipostmap.Map`. Giá trị trả về sẽ là một kiểu
của `ipostmap.MapType`

```javascript
map.getMapType()
```
