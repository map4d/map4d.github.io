# Changelog

## Version 2.4.2

Những thay đổi kể từ version 2.4.1

#### Fixed

- Android: Handle null when get bound from ReadableMap in cameraForBounds method

## Version 2.4.1

Những thay đổi kể từ version 2.4.0

#### Changed

- Update Android lifecycle

## Version 2.4.0

Những thay đổi kể từ version 2.3.0

#### Added

- Thêm mới react view props `onReachLimitedZoom` cho [Map View Component](guides/mapview.md)
- Thêm mới map types: satellite, map3d

<!-- #### Changed -->
#### Deprecated

- Deprecated phương thức `enable3dMode` và `is3dMode` của [Map View Component](guides/mapview.md)

#### Removed

- Remove react view props `onModeChange`, `onShouldChangeMapMode` của [Map View Component](guides/mapview.md)

#### Fixed

- Fixed lỗi hiển thị width không đúng khi tạo custom view cho marker trên Android

<!-- #### Security -->
