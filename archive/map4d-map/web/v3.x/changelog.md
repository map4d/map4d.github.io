# Changelog

## Version 3.0

Những thay đổi kể từ version 2.6

- Thay đổi cách tiếp cận chế độ 3D.  Thay vì phải sử dụng map type 3D để hiển thị các đối tượng 3D thì nhà phát triển có thể chủ động bật/tắt các đối tượng 3D trên bản đồ thông qua phương thức `setBuildingsEnabled`.
Hỗ trợ trên cả map type `roadmap` và `hybrid`. Giúp nhà phát triển có thể tùy chỉnh style bản đồ theo ý thích ngay cả ở chế độ 3D.

- Thêm mới map type `hybrid`, cho phép hiển thị ảnh vệ tinh kết hợp thông tin đường sá.
- Điều chỉnh map type `satellite`, chỉ cho phép hiển thị hình ảnh vệ tinh, không có thông tin đường sá và 3D.
- Loại bỏ map type `raster`, `map3d`.
- Xóa một số phương thức của `map`: enable3DMode, is3DMode, setFilterPOIs, getFilterPOIs, setHiddenBuilding, setUnhiddenBuilding, setHiddenBuildings, setVisibleBuildings.
- Cho phép chụp ảnh bản đồ với phương thức `capture`
- Hỗ trợ image pattern cho `Polygon`
- Hỗ trợ tube annotation
- Cải tiến việc tải dữ liệu và hiển thị bản đồ.
- Sửa lỗi và cải thiện hiệu suất
