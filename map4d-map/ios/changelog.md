# Changelog

## Version 3.4.0

- Bổ sung Heatmap Overlay (`MFHeatmapOverlay`, `MFWeightedLocation`).
- Sửa lỗi và cải thiện hiệu suất.

## Version 3.3.8

- Bổ sung hỗ trợ Swift Package Manager (SPM).
- Sửa lỗi và cải thiện hiệu suất.

## Version 3.3.7

- Sửa lỗi chạy trên iOS Simulator arm64.
- Cải thiện hiệu suất hiển thị bản đồ.

## Version 3.3.6

- Sửa lỗi và cải thiện hiệu suất.

## Version 3.3.3 / 3.3.2 / 3.3.1

- Cải thiện tải tile, sửa lỗi và cải thiện hiệu suất.

## Version 3.3.0

- Hỗ trợ style khi zoom vượt mức dữ liệu gốc.
- Sửa lỗi và cải thiện hiệu suất.

## Version 3.2

- Cải thiện tải tile, giải phóng tài nguyên và sửa lỗi.
- Vẽ đầu đường bo tròn cho Directions Renderer

## Version 3.1

- Hỗ trợ thiết lập màu mặc định của đối tượng 3D khi chưa tải được texture (hoặc không có texture) bằng phương thức `setBuildingsFallbackColor`
- Hỗ trợ hiển thị ở CarPlay
- Xử lý hiển thị đường mượt hơn, hạn chế răng cưa
- Hỗ trợ thiết lập padding cho camera position
- Cho phép thiết lập duration  khi move camera
- Cho phép thiết lập zIndex đối với MFGeoJson
- Hỗ trợ groundAnchor, rotation và flat đối với MFGeoJSON.PointStyle
- Cho phép thiết lập zIndex đối với MFDirectionsRenderer
- Bổ sung completion handler khi set mapID
- Cải tiến xử lý tương tác với bản đồ
- Sửa lỗi và cải thiện hiệu suất

## Version 3.0

Những thay đổi kể từ version 2.8

- Thay đổi cách tiếp cận chế độ 3D.  Thay vì phải sử dụng map type 3D để hiển thị các đối tượng 3D thì nhà phát triển có thể chủ động bật/tắt các đối tượng 3D trên bản đồ thông qua phương thức `MFMapView.setBuildingsEnabled`.
Hỗ trợ trên cả map type `roadmap` và `hybrid`. Giúp nhà phát triển có thể tùy chỉnh style bản đồ theo ý thích ngay cả ở chế độ 3D.

- Thêm mới map type `hybrid`, cho phép hiển thị ảnh vệ tinh kết hợp thông tin đường sá.
- Điều chỉnh map type `satellite`, chỉ cho phép hiển thị hình ảnh vệ tinh, không có thông tin đường sá và 3D.
- Loại bỏ map type `raster`.
- Loại bỏ các phương thức điều khiển chế độ và lọc đối tượng cũ.
- Loại bỏ các sự kiện chuyển chế độ cũ.
- Cho phép set style map với `MFMapStyle` (style với `MFMapID` vẫn hoạt động như cũ).
- Cải tiến việc tải dữ liệu và hiển thị bản đồ.
- Sửa lỗi.
