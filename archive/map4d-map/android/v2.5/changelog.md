# Changelog

## Version 2.5.0

Những thay đổi kể từ version 2.4.0

#### Added

- Thêm mới [GeoJson Layer](/guides/geojson-layer?id=geojson-layer)

#### Changed

- Thay đổi thuộc tính `transparency` thành `opacity` cho các đối tượng **Overlay**
- Update `userData` option cho class MFBuildingOptions
- Update để quay góc nhỏ nhất khi set bearing cho Map
- Update để load các file model phức tạp cho các đối tượng **MFBuilding**
- Update để có thể set `scale` cho **MFBuilding**

#### Fixed

- Fixed bug vẽ Marker xoay không đúng với anchor
- Fixed bug gọi hàm `moveTo` không có tác dụng với mức zoom là số thực (float)
- Fixed bug không query `MFPOI` được khi nó nằm chồng lên Annotation có zIndex nhỏ hơn
- Fixed Directions Renderer vẽ sai zIndex của active line khi set **activedIndex > 0**