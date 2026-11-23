# Changelog

## Version 2.0.0

Những thay đổi kể từ version 1.6.0

#### Added

- Render map dưới dạng vector
- Thêm mới hàm `setMapType` cho **MFMapView** 
- Thêm mới hàm `getBounds` cho **MFMapView**
- Thêm sự kiện tap on Place
- Hỗ trợ render chỉ đường với `MFDirectionsRenderer`

#### Changed

- Thay đổi hoạt động của hàm `animateCamera`, di chuyển lập tức đến vị trí camera mới nếu khoảng cách giữa vị trí hiện tại và vị trí mới quá xa nhau
- Thay đổi color cho invalid view
- Thay đổi việc hiển thị text

<!-- #### Deprecated -->
#### Removed

- Remove `MFSwitchMode` enum và `switchMode` property trong **MFMapView** 
- Remove `setSelectedPlace` và `getSelectedPlace` trong **MFMapView** 

#### Fixed

- Fix lỗi change map mode hoạt động không chính xác khi thu nhỏ mức zoom


<!-- #### Security -->
