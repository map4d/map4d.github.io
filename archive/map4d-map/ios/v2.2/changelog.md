# Changelog

## Version 2.2.0

Những thay đổi kể từ version 2.1.1

#### Added

- Thêm mới [MFMapID](reference/map?id=mfmapid) và cho phép [tạo MFMapView với MFMapID](reference/map?id=_1-constructor) để thay đổi [style map](https://map.map4d.vn/developer/mapstyle)
- Thêm mới `color` properties cho [MFPOI](reference/poi?id=properties)
- Thêm mới `color` properties cho [MFPOIData](reference/poi-overlay?id=mfpoidata-class)
- Thêm mới `strokePattern` properties cho [MFPolyline](reference/polyline?id=properties)


<!-- #### Changed -->

#### Deprecated

- Deprecated `titleColor` properties của [MFPOI](reference/poi?id=properties), thay thế bởi `color` properties
- Deprecated `titleColor` properties của [MFPOIData](reference/poi-overlay?id=mfpoidata-class), thay thế bởi `color` properties
- Deprecated `style` properties của [MFPolyline](reference/polyline?id=properties), thay thế bởi `strokePattern` properties

<!-- #### Removed -->

#### Fixed

- Fix lỗi set POI title không hoạt động trong một số trường hợp

<!-- #### Security -->
