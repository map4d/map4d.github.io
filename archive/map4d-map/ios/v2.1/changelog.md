# Changelog

## Version 2.1.1

Những thay đổi kể từ version 2.1.0

#### Removed

- Remove class MFServices nhằm tránh xung đột với [Map4dServices](https://cocoapods.org/pods/Map4dServices)

#### Fixed

- Fixed lỗi request api khởi tạo map nhiều hơn 1 lần khi tạo mới 1 map view

## Version 2.1.0

Những thay đổi kể từ version 2.0.7

#### Added

- Thêm mới sự kiện `mapView:didReachLimitedZoom:` cho [Map Events](guides/map-events.md)
- Thêm mới 2 [map types](guides/map-types.md):
  + Satellite
  + Map 3D
- Hỗ trợ set ground anchor cho [POI](guides/poi.md)
- Hỗ trợ set ground anchor cho điểm bắt đầu, kết thúc của [Directions Renderer](guides/directions-renderer.md)

#### Changed

- Thay đổi giá trị ground anchor mặc định của marker

#### Deprecated

- Deprecated [Map Events](guides/map-events.md) delegate `mapView:onModeChange:`
- Deprecated [Map Events](guides/map-events.md) delegate `shouldChangeMapModeForMapView:`
- Deprecated [Map View](reference/map.md) method `enable3DMode:` 
- Deprecated [Map View](reference/map.md) method `is3DMode` 

<!-- #### Removed -->

#### Fixed

- Fix lỗi marker infor window không hiển thị tile ở một số thiết bị
- Fix lỗi crash khi move camera mà window size của map view chưa được khởi tạo

<!-- #### Security -->
