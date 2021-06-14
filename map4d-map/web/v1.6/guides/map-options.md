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
| 12 | shouldChangeMapMode | function                                                 | null          | Hàm mà sẽ được gọi khi mức zoom chuyển từ mức hiển thị 2D sang mức có thể hiển thị 3D và ngược lại |


## Should change map mode function

- Parameters: `None`
- Return Value: `boolean`

Map4D Web SDK hỗ trợ hai chế độ 2D và 3D. Đối với chế độ 3D chỉ hiển thị ở mức zoom từ 17 trở lên.  
Trong quá trình zoom in, zoom out từ mức zoom 16 lên 17 hoặc 17 trờ lại 16 thì hàm `shouldChangeMapMode` sẽ được gọi.  
Tùy thuộc vào giá trị trả về là `true` hay `false` thì Map4D sẽ xử lý khác nhau:

- Trường hợp giá trị trả về là `false`:
  - Nếu zoom từ 16 lên 17 thì Map4D sẽ hiển thị mức zoom 17 ở chế độ 2D
  - Nếu ở chế độ 2D và thay đổi mức zoom từ 17 về 16 thì Map4D sẽ hiển thị mức zoom 16
  - Nếu ở chế độ 3D và thay đổi mức zoom từ 17 về 16 thì Map4D sẽ không hiển thị mức zoom 16, mà vẫn sẽ hiển thị tại mức zoom 17

- Trường hợp giá trị trả về là `true`:
  - Khi ở chế độ 2D và zoom từ 16 lên 17, Map4D tự động chuyển thành chế độ 3D
  - Khi ở chế độ 3D và zoom từ 17 về 16, Map4D tự động chuyển thành chế độ 2D

