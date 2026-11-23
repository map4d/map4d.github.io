# Changelog

## Version 3.0.0

#### Những thay đổi kể từ version 2.8.0

Thay đổi cách tiếp cận chế độ 3D. Thay vì phải sử dụng map type 3D để hiển thị các đối tượng 3D thì nhà phát triển có thể chủ động bật/tắt các đối tượng 3D trên bản đồ thông qua thuộc tính `showsBuildings` của MFMapView. Hỗ trợ trên cả map type `roadmap` và `hybrid`. Giúp nhà phát triển có thể tùy chỉnh style bản đồ theo ý thích ngay cả ở chế độ 3D.

#### Added
- Hỗ trợ thiết lập map style thông qua thuộc tính `mapStyle` của `MFMapView`
- Thêm mới map type `hybrid`

<!-- #### Changed -->
<!-- #### Deprecated -->

#### Removed
- Loại bỏ map type `raster`, `map3D`
- Loại bỏ phương thức `enable3DMode` và `is3DMode` trong MFMapView. Sử dụng thuộc tính `showsBuildings` của `MFMapView` widget để ẩn/hiện đối tượng 3D
- Loại bỏ `onModeChange`, `onShouldChangeMapMode`, `onReachLimitedZoom` trong `MFMapView`

<!-- #### Fixed -->
<!-- #### Security -->
