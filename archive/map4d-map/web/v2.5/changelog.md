# Changelog

## Version 2.5.1

#### Added

- Thêm hàm `calculateProjectMatrixForWebGL`, `getCanvas()` và `requestRender()` cho Map
- Hỗ trợ class `WebGLOverlayView` để hỗ trợ vẽ thêm đối tượng vào Map bằng các thư viện đồ họa phổ biến như Three.js

## Version 2.5.0

### Changed

- Hỗ trợ render map data từ nhiều nguồn dữ liệu
- Cập nhật để tạo dữ liệu font mới và cải thiện giúp việc render text tốt hơn trên các màn hình độ phân giải cao

### Fixed

- Sửa lỗi thay đổi title, type của POI không được áp dụng ngay lập tức
- Sửa lỗi hàm setOptions của Directions Renderer không có tác dụng
- Sửa lỗi không kéo được marker của Directions Renderer khi không set callback onMarkerDragEnd

## Version 2.4.6

### Changed

- Sử dụng chung worker giữa các đối tượng map, số lượng worker tối đa là 3
- Hỗ trợ hiển thị chữ của POI theo các hướng khác nhau
- Hiển thị marker info window nằm trong vùng hiển thị của bản đồ (nếu marker nằm trong vùng hiển thị)

### Fixed

- Sửa lỗi sự kiện click place, poi không chính xác trong một số trường hợp
- Sửa lỗi thay đổi stroke pattern cho polyline không được áp dụng ngay lập tức
- Sửa lỗi bầu trời đè lên highlight của đối tượng 3D

## Version 2.4.5

#### Added

- Hỗ trợ render label cho marker sử dụng iconView
- Hỗ trợ `animation` cho marker
- Hỗ trợ set giá trị `controlOptions` của bản đồ bằng string

### Fixed

- Sửa lỗi `MFPOI` không kéo được  khi set `draggable` là true

### Changed

- Tối ưu thời gian phản hồi sự kiện cho các poi, place

## Version 2.4.4

### Changed

- Tối ưu thời gian phản hồi sự kiện cho các annotations

### Fixed

- Sửa lỗi sự kiện `hover` được gọi nhiều lần

## Version 2.4.3

#### Added

- Hỗ trợ `contextOptions` cho bản đồ

### Fixed

- Sửa lỗi sự kiện `zoomChanged` hoạt động không chính xác ở trình duyệt di động
- Sửa lỗi không cuộn trang khi chạm vào vùng xám của bản đồ lúc sử dụng cử chỉ hợp tác
- Sửa lỗi sự kiện `mouseOut` của marker sử dụng iconView

### Changed

- Thêm tham số `clickable` cho các annotations nhằm thay thế tham số `userInteractionEnabled`
- Không hiển thị một số loại đường ở mức zoom nhỏ hơn 16

## Version 2.4.2

#### Added

- Thêm sự kiện `tiltChanged`, `zoomChanged`, `bearingChanged`, `targetChanged` cho map

## Version 2.4.1

#### Added

- Thêm sự kiện `mouseOut` cho marker

### Changed

- Giảm thời gian time out cho mouse hover và tối ưu query annotations
- Xóa 3D button ở bảng điều khiển mặc định

### Fixed

- Sửa lỗi setAllGesturesEnabled(false) vẫn cho phép zoom map ở chế độ 3D

## Version 2.4.0

Những thay đổi kể từ version 2.3.x

#### Added

- Thêm lớp Image Overlay
- Hỗ trợ opacity cho Tile Overlay
- Thêm mới phương thức `fromLatLngToPoint` và `fromPointToLatLng` cho Projection class

### Changed

- Thay đổi phương thức kiểm tra đối tượng

### Fixed

- Sửa lỗi vẽ sai thứ tự POI trong một số trường hợp
- Sửa lỗi crash ở một số trường hợp options chứa giá trị null
- Sửa lỗi màu text hiển thị khi set background cho HTML DOM chưa map view
- Sửa lỗi crash khi gọi map đã bị destroy
- Sửa lỗi khó click vào polyline khi set độ cao ở 3D

<!-- #### Security -->
