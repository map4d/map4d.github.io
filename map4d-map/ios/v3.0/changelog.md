## Version 3.0.1

- Hỗ trợ thiết lập màu mặc định của đối tượng 3D khi chưa tải được texture (hoặc không có texture) bằng phương thức `setBuildingsFallbackColor`

## Version 3.0.0

Những thay đổi kể từ version 2.8

- Thay đổi cách tiếp cận chế độ 3D.  Thay vì phải sử dụng map type 3D để hiển thị các đối tượng 3D thì nhà phát triển có thể chủ động bật/tắt các đối tượng 3D trên bản đồ thông qua phương thức `MFMapView.setBuildingsEnabled`.
Hỗ trợ trên cả map type `roadmap` và `hybrid`. Giúp nhà phát triển có thể tùy chỉnh style bản đồ theo ý thích ngay cả ở chế độ 3D.

- Thêm mới map type `hybrid`, cho phép hiển thị ảnh vệ tinh kết hợp thông tin đường sá.
- Điều chỉnh map type `satellite`, chỉ cho phép hiển thị hình ảnh vệ tinh, không có thông tin đường sá và 3D.
- Loại bỏ map type `raster`.
- Xóa một số phương thức của `MFMapView`: enable3DMode, is3DMode, setFilterPlaces, getFilterPlaces, setHiddenBuilding, setUnhiddenBuilding.
- Xóa bỏ một số sự kiện không cần thiết trong `MFMapViewDelegate`: mapView:onModeChange:, mapView:didReachLimitedZoom:, shouldChangeMapModeForMapView:.
- Cho phép set style map với `MFMapStyle` (style với `MFMapID` vẫn hoạt động như cũ).
- Cải tiến việc tải dữ liệu và hiển thị bản đồ.
- Sửa lỗi.
