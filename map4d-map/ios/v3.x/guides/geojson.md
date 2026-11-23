# GeoJSON Layer

GeoJSON layer cho phép người dùng hiển thị dữ liệu địa lý theo định dạng [GeoJSON](https://geojson.org/) lên bản đồ iPostMap

## 1. Thêm mới GeoJSON layer

Để thêm 1 GeoJSON layer vào bản đồ, ta tạo 1 đối tượng [MFGeoJSON](/guides/geojson?id=reference-geojson) và set map cho đối tượng đó

```swift
let geoJSON = MFGeoJSON(json: jsonString)
geoJSON.map = mapView
```

## 2. Xóa GeoJSON layer khỏi bản đồ

Để xóa GeoJSON layer khỏi bản đồ, ta set property `map` của đối tượng bằng `nil`

```swift
geoJSON.map = nil
```

## 3. Sự kiện trên GeoJSON layer

Sự kiện trên GeoJSON layer được gọi khi người dùng tap vào vùng hiển thị của GeoJSON layer
Giá trị trả về gồm đối tượng [MFGeoJSON](/guides/geojson?id=reference-geojson) và [Feature](/guides/geojson?id=mfgeojsonfeature-class) mà người dùng touch vào đó

```swift
func mapView(_ mapView: MFMapView!, didTap geoJSON: MFGeoJSON!, feature: MFGeoJSON.Feature!) {}
```

## 4. Thay đổi icon mặc định cho Point của GeoJSON layer

Để thay đổi icon mặc định cho Point của GeoJSON layer, ta set

```swift
geoJSON.pointStyle.icon = UIImage(named: "image_name")
```

## API Reference

<a id="reference-geojson"></a>

## GeoJSON reference

## MFGeoJSON class

### 1 Constructor


```swift
let geoJSON = MFGeoJSON(json:"json string")
```

#### Properties

| Name            | Type                                                                   | Description                                                                  |
|-----------------|:-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| **features**    | [MFGeoJSONFeature[]](/guides/geojson?id=mfgeojsonfeature-class)     | Danh sách các features                                                       |
| **pointStyle**  | [MFGeoJSONPointStyle](/guides/geojson?id=mfgeojsonpointstyle-class) | Style cho points của GeoJSON                                                 |
| **map**         | [MFMapView](/guides/map-options?id=mfmapview)                               | Chỉ định hiển thị **GeoJSON** trên **Map** hoặc xoá **GeoJSON** khỏi **Map** |

## MFGeoJSONFeature class

#### Properties

| Name            | Type                                                                   | Description         |
|-----------------|:-----------------------------------------------------------------------|---------------------|
| **geometry**    | [MFGeoJSONGeometry](/guides/geojson?id=mfgeojsongeometry-interface) | Geometry            |
| **properties**  | NSDictionary                                                           | Geometry properties |

## MFGeoJSONGeometry interface

| Name            | Type                                                                      | Description         |
|-----------------|:--------------------------------------------------------------------------|---------------------|
| **type    **    | [MFGeoJSONGeometryType](/guides/geojson?id=mfgeojsongeometrytype-enum) | Kiểu của geomtry, bao gồm `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon` |

## MFGeoJSONGeometryType enum

Kiểu Swift: `MFGeoJSON.GeometryType`.

| Giá trị | Geometry |
|---------|----------|
| `.point` | Point |
| `.multiPoint` | MultiPoint |
| `.lineString` | LineString |
| `.multiLineString` | MultiLineString |
| `.polygon` | Polygon |
| `.multiPolygon` | MultiPolygon |
| `.geometryCollection` | GeometryCollection |

## MFGeoJSONPointStyle class

#### Properties

| Name            | Type                                                               | Description             |
|-----------------|:-------------------------------------------------------------------|-------------------------|
| **icon**        | UIImage                                                            | Icon mặc định cho point |
