# Map Options

Map options là một object [MapOptions](/reference/map?id=mapoptions-interface) cung cấp các thiết lập ban đầu để khởi tạo đối tượng Map4D.  
Bao gồm:

| No | Name                | Type                                                     | Default Value | Description                                                                                        |
|:--:|---------------------|----------------------------------------------------------|---------------|----------------------------------------------------------------------------------------------------|
|  1 | center              | [ILatLng](/reference/coordinates?id=ilatlng)             | [0, 0]        | Vị trí hiển thị ban đầu của map                                                                    |
|  2 | zoom                | number                                                   | 12            | Mức zoom hiển thị ban đầu của map                                                                  |
|  3 | tilt                | number                                                   | 0             | Độ nghiên hiển thị ban đầu của map                                                                 |
|  4 | bearing             | number                                                   | 0             | Góc xoay hiển thị ban đầu của map                                                                  |
|  5 | controls            | boolean                                                  | false         | Cho phép hiện/ẩn bảng điều khiển *(zoom, direction, 3D button)*                                    |
|  6 | controlOptions      | [ControlOptions](/reference/map?id=controloptions-enum)  | BOTTOM_RIGHT  | Vị trí hiển thị của bảng điều khiển                                                                |
|  7 | geolocate           | boolean                                                  | false         | Hiện/ẩn chức năng lấy vị trí hiện tại của người dùng                                               |
|  8 | minZoom             | number                                                   | 0             | Thiết lập mức zoom nhỏ nhất mà map được hiển thị                                                   |
|  9 | maxZoom             | number                                                   | 22            | Thiết lập mức zoom cao nhất mà map được hiển thị                                                   |
| 10 | maxNativeZoom       | number                                                   | 19            | Giới hạn mức zoom cao nhất của Tile mà map request từ server                                       |
| 11 | restrictionBounds   | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds) | null          | Giới hạn vùng hiển thị, di chuyển của map                                                          |
| ~~12~~ | ~~shouldChangeMapMode~~ *(removed)* | ~~function~~ | ~~null~~              | ~~Hàm mà sẽ được gọi khi mức zoom chuyển từ mức hiển thị 2D sang mức có thể hiển thị 3D và ngược lại~~             |
| 12 | mapType             | [IMapType](/reference/map?id=imaptype)                   | "roadmap"     | Xác định [kiểu của bản đồ](guides/map-types.md)                                                    |

