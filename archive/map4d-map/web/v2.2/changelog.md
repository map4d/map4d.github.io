# Changelog

## Version 2.2.0

Những thay đổi kể từ version 2.1.x

#### Added

- Thêm mới `strokePattern` option cho [Polyline](reference/polyline.md)
- Cho phép drag marker của [Directions Renderer](reference/directions-renderer.md) và hỗ trợ callback `onMarkerDragEnd` khi drag marker
- Hỗ trợ waypoints cho [Directions Renderer](reference/directions-renderer.md) *(đối với trường hợp set Directions Renderer bằng tham số [directions](reference/directions-renderer?id=directionsrenderer-options))*
- Thêm mới method `setMapId` cho [MapView](reference/map.md) hỗ trợ thay đổi map style thông qua map id.
- Thêm mới method `destroy` cho [MapView](reference/map.md) nhằm giải phóng tất cả tài nguyên được sử dụng bởi bản đồ.
- Thêm mới method `setColor`, `getColor` cho [POI](reference/poi.md)

#### Changed

- Cho phép thay đổi style map cho roadmap bằng map id, hỗ trợ thay đổi style bằng [công cụ quản lý styles](//map.map4d.vn/user/platform/map-style/list).  
Chú ý: Việc hiển thị POIs phụ thuộc hoàn toàn vào style của roadmap (bao gồm cả raster và vệ tinh)
- Cải thiện chức năng zoom (hỗ trợ các mức zoom phân số)
- Cải thiện việc vẽ đường ở chế độ vệ tinh
- Tối ưu hiển thị text halo theo từng loại màn hình

#### Deprecated

- Deprecated option `style` của [Polyline](reference/polyline.md)
- Deprecated method `setTitleColor`, `getTitleColor` của [POI](reference/poi.md)

#### Removed

#### Fixed

- Fixed lỗi icon của POI bị ẩn khi đè lên nhau.

<!-- #### Security -->
