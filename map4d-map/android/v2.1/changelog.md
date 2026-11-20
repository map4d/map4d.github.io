# Changelog

## Version 2.1.0

Những thay đổi kể từ version 2.0.0

#### Added

- Thêm mới 2 Map Type: Satellite và Map3D.
- Thêm mới sự kiện `didReachLimitedZoom` cho **IPostMap**.
- Hỗ trợ thêm anchor cho icon của `MFPOI`.
- Hỗ trợ thêm anchor cho icon đầu và icon cuối của `MFDirectionsRenderer`.
- Thêm chức năng ẩn hiện icon đầu và icon cuối của `MFDirectionsRenderer`.

#### Changed

- Update to stop location service background follow new Google policy.

#### Fixed

- Fixed method containsLatitude().
- Fixed proguard to avoid crash for MFCameraPosition and MFMarker class.
- Fixed crash Map when touch on IPostMap logo on Flutter SDK.

#### Deprecated

- Deprecated phương thức `enable3DMode`.
- Deprecated phương thức `is3DMode`.
- Deprecated sự kiện `onMapModeChange` của **IPostMap**.
- Deprecated sự kiện `onMapModeHandler` của **IPostMap**.

## Version 2.0.0

Những thay đổi kể từ version 1.6.0

#### Added

- Render map dưới dạng vector
- Thêm mới hàm `setMapType` cho **IPostMap** 
- Thêm mới hàm `getBounds` cho **IPostMap**
- Thêm sự kiện `OnPlaceClickListener` cho **IPostMap**
- Hỗ trợ render chỉ đường với `MFDirectionsRenderer`

#### Changed

- Thay đổi hoạt động của hàm `animateCamera`, di chuyển lập tức đến vị trí camera mới nếu khoảng cách giữa vị trí hiện tại và vị trí mới quá xa nhau
- Thay đổi việc hiển thị text

<!-- #### Deprecated -->


<!-- #### Removed -->


<!-- #### Fixed -->


<!-- #### Security -->
