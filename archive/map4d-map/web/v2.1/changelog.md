# Changelog

## Version 2.1.0

Những thay đổi kể từ version 2.0.x

#### Added

- Thêm mới [map types](guides/map-types.md): satellite, map3d
- Thêm mới [sự kiện](guides/map-events.md) `limitedZoom` khi người dùng zoom map tới mức giới hạn của map
- Hiển thị layer building ở chế độ roadmap từ mức zoom 17 trở lên.

#### Changed

- Map4D SDKs sẽ không còn tự động chuyển đổi từ 3D sang 2D khi gọi phương thức [moveCamera](reference/map.md) lúc map đang ở mức zoom >= 17 và hiển thị bản đồ 3D về mức zoom <=16.  
Thay vào đó sẽ chỉ di chuyển camera đến mức zoom nhỏ nhất có thể hiển thị bản đồ 3D (mức zoom 17).  
Nếu muốn hiển di chuyển camera đến đúng mức zoom và hiển thị bản đồ 2D như cũ, vui lòng set map type là `roadmap`, `raster` hoặc `satellite` trước khi gọi phương thức `moveCamera`

#### Deprecated

- Deprecated method `enable3dMode` và `is3dMode` của [Map](reference/map.md)

#### Removed

- Remove `shouldChangeMapMode` trong [map options](guides/map-options.md)
- Remove [sự kiện](guides/map-events.md) `modeChanged`

#### Fixed

- Fixed lỗi thỉnh thoảng xoay map khi click chuột phải.
- Fixed lỗi vẫn hiển thị roadmap khi chuyển map từ 2D sang 3D lúc bản đồ ở mức zoom nhỏ hơn 17.
- Fixed lỗi marker info window bị marker khác vẽ đè lên.
- Fixed lỗi khó click marker nếu được set bằng icon.

<!-- #### Security -->