# Changelog

## Version 2.5.5

#### Changed

- Cải tiến việc điều khiển bản đồ bằng cử chỉ
- Tăng thời gian giới hạn cho việc khởi tạo map

#### Fixed

- Sử lỗi không hiển thị POI nếu không có text

## Version 2.5.4

#### Added

- Hỗ trợ chuyển đổi giá trị giữa point và mét

#### Fixed

- Sửa lỗi crash ở một số trường hợp mở lại app sau một thời gian dài

## Version 2.5.3

#### Fixed

- Sửa lỗi bị mất line trong một số trường hợp ở mức zoom nhỏ

#### Changed

- Loại bỏ các điểm trùng nhau khi tạo MFDirectionsRenderer

## Version 2.5.2

#### Fixed

- Sửa lỗi không load tiles khi set native zoom quá lớn
- Sửa lỗi không reload tile nếu request bị lỗi
- Sửa lỗi crash khi sử dụng hình ảnh không đúng kích thước
- Sửa lỗi các giá trị `bearing`, `scale`, `elevation` của `MFBuilding` không được áp dụng nếu thiết lập trước khi thêm vào bản đồ
- Sửa lỗi mất icon khi set thay đổi liên tục

#### Changed

- Cải thiện hiệu suất request, tính toán

## Version 2.5.1

#### Fixed

- Sửa lỗi xoay map theo góc lớn trong một số trường hợp
- Sửa lỗi marker bị nháy khi thay đổi tọa độ liên tục

## Version 2.5.0

Những thay đổi kể từ version 2.4.4

#### Added

- Thêm mới [GeoJSON Layer](guides/geojson.md)

#### Fixed

- Sửa lỗi marker bị nháy khi thay đổi vị trí liên tục
- Sửa lỗi crash khi load đối tượng 3D không đúng định dạng

<!-- #### Changed -->
<!-- #### Deprecated -->
<!-- #### Removed -->
<!-- #### Security -->
