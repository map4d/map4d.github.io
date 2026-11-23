## Version 3.0.0

Thay đổi cách tiếp cận chế độ 3D. Thay vì phải sử dụng map type 3D để hiển thị các đối tượng 3D thì nhà phát triển có thể chủ động bật/tắt các đối tượng 3D trên bản đồ thông qua thuộc tính `buildingsEnabled` của MFMapView widget. Hỗ trợ trên cả map type `roadmap` và `hybrid`. Giúp nhà phát triển có thể tùy chỉnh style bản đồ theo ý thích ngay cả ở chế độ 3D.

#### Added
- Hỗ trợ thiết lập map style thông qua thuộc tính `style` của `MFMapView` widget
- Thêm mới map type `hybrid`
- Hỗ trợ thay đổi camera với padding

<!-- #### Changed -->
<!-- #### Deprecated -->

#### Removed
- Loại bỏ map type `raster`, `map3D`
- Loại bỏ phương thức `enable3DMode` trong MFMapViewController. Sử dụng thuộc tính `buildingsEnabled` của `MFMapView` widget để ẩn/hiện đối tượng 3D
- Loại bỏ `onModeChange` trong `MFMapView` widget

<!-- #### Fixed -->
<!-- #### Security -->
