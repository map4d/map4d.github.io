# Changelog

## Version 2.0.x

Những thay đổi kể từ version 1.6.x

#### Added

- Render map dưới dạng vector
- Thêm mới hàm `setMapType` cho **map4d.Map** 
- Thêm mới hàm `getMapType` cho **map4d.Map**
- Thêm sự kiện `click` cho các place label trên vector map.
- Hỗ trợ render chỉ đường với `map4d.DirectionsRenderer`

#### Changed

- Thay đổi hoạt động của hàm `moveCamera`, di chuyển lập tức đến vị trí camera mới nếu khoảng cách giữa vị trí hiện tại và
vị trí mới quá xa nhau, chứ không có hiệu ứng fly.
- Thay đổi việc hiển thị text trên nhiều kích thước và độ phân giải màn hình.