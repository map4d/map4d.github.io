# Changelog

## Version 2.2.0

Những thay đổi kể từ version 2.1.1

#### Added

- Cho phép thêm [mapId](/reference/map?id=map-id) để thay đổi [style map](https://map.map4d.vn/developer/mapstyle)
- Thêm mới `color` options cho [MFPOIOptions](/reference/poi?id=poi-options)
- Thêm mới `getColor` và `setColor` method cho [MFPOI](/reference/poi?id=poi-class)
- Thêm mới `getColor`, `setColor`, `isHasColor` và `setHasColor` method cho [MFPOIData](/reference/poi-overlay?id=mfpoidata-class)
- Thêm mới `pattern` options cho [MFPolylineOptions](/reference/polyline?id=polyline-options) để thay đổi kiểu hiển thị của line.
- Thêm mới `getPattern` và `setPattern` cho [MFPolyline](/reference/polyline?id=polyline-class)


#### Changed

- Hỗ trợ mức zoom lẻ khi người dùng thực hiện thao tác zoom.

#### Deprecated

- Deprecated `titleColor` options của [MFPOIOptions](/reference/poi?id=poi-options), thay thế bởi `color` options
- Deprecated `setTitleColor` và `getTitleColor` method của [MFPOI](/reference/poi?id=poi-class), thay thế bởi `setColor` và `getColor` method.
- Deprecated `getTitleColor`, `setTitleColor`, `isHasTitleColor` và `setHasTitleColor` method của [MFPOIData](reference/poi-overlay?id=mfpoidata-class), thay thế
bởi `getColor`, `setColor`, `isHasColor` và `setHasColor` method
- Deprecated `style` options của [MFPolylineOptions](/reference/polyline?id=polyline-options), thay thế bởi `pattern` options
- Deprecated `setStyle` method của [MFPolyline](/reference/polyline?id=polyline-class), thay thế bởi `setPattern` method
- Deprecated `getStyle` và `getStyleValue` method của [MFPolyline](/reference/polyline?id=polyline-class)

<!-- #### Removed -->

#### Fixed

- Fix lỗi set POI title không hoạt động trong một số trường hợp.
- Fix lỗi set POI icon không hoạt động trong một số trường hợp.

<!-- #### Security -->
