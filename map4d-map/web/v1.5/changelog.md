# Changelog

### Version 1.5.1

Những thay đổi kẻ từ version 1.5.0
- Map
  - Thay đổi logo Map4D theo quy chuẩn mới
  - Bổ sung phương thức `setVisibleBuildings` và `setHiddenBuildings`
  - Loại bỏ phương thức `setHiddenBuilding` và `setUnhiddenBuilding`
  - Sửa lỗi click marker trong data layer không chính xác
  - Sửa lỗi set giá trị position của Building khi building chưa được thêm vào Map

### Version 1.5.0

Những thay đổi kẻ từ version 1.4
- Map
  - Cải thiên hiệu suất của Map4D và fixed bugs
  - Bổ sung hiệu ứng mọc lên cho building
  - Thêm tùy chọn vô hiệu hóa zoom, pan hoặc rotate
  - Thay đổi tùy chọn của sự kiện trên map. Chi tiết [EventOptions](/reference/map?id=eventoptions)
  - Xóa deprecated methods
  - Xóa `SwitchMode` class, thay thế bằng `shouldChangeMapMode` function. Tham khảo [Map Options](/guides/map-options)
  - Xóa `TileArea` feature. Có thể sử dụng [Ground Overlay](/guides/ground-overlay) để thay thế
  - Đổi tên phương thức `setPlacesEnabled` thành `setPOIsEnabled`
  - Đổi tên phương thức`isPlacesEnabled` thành `isPOIsEnabled`
  - Đổi tên phương thức`setHiddenObject` thành `setHiddenBuilding`
  - Đổi tên phương thức`setUnhiddenObject` thành `setUnhiddenBuilding`
  - Đổi tên phương thức`setSelectedObjects` thành `setSelectedBuildings`
  - Đổi tên phương thức`getSelectedObjects` thành `getSelectedBuildings`

- Drawing on the Map
  - Xóa `MapObject` class and `MapObjectOptions` interface. Thay thế bằng [Building](/guides/building)
  - Xóa `Place` class and `PlaceOptions` interface. Thay thế bằng [POI](/guides/poi)
  - Đổi tên thuộc tính `location` trong [BuildingOptions](/reference/building?id=building-options) thành `position`
  - Đổi tên phương thức `getLocation`/`setLocation` của [Building](/reference/building) thành `getPosition`/`setPosition`

- Layers
  - Thêm mới [Ground Overlay](/guides/ground-overlay)
  - Hỗ trợ `visible` cho tất cả overlay
  - Hỗ trợ `zIndex` cho [Tile Overlay](/guides/tile-overlay)
  - Hỗ trợ `prefixId` cho [Building Overlay](/guides/building-overlay), [POI Overlay](/guides/poi-overlay)
