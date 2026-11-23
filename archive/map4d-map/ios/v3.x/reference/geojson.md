# GeoJSON reference

## MFGeoJSON class

### 1 Constructor


<!-- tabs:start -->
#### ** Swift **

```swift 
let geoJSON = MFGeoJSON(json:"json string")
```

#### ** Objective C **

```objc 
MFGeoJSON *geoJSON = [[MFGeoJSON alloc] initWithJson:@"json string"];
```

<!-- tabs:end -->

#### Properties

| Name            | Type                                                                   | Description                                                                  |
|-----------------|:-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| **features**    | [MFGeoJSONFeature[]](/reference/geojson?id=mfgeojsonfeature-class)     | Danh sách các features                                                       |
| **pointStyle**  | [MFGeoJSONPointStyle](/reference/geojson?id=mfgeojsonpointstyle-class) | Style cho points của GeoJSON                                                 |
| **map**         | [MFMapView](/reference/map?id=MFMapView)                               | Chỉ định hiển thị **GeoJSON** trên **Map** hoặc xoá **GeoJSON** khỏi **Map** |

## MFGeoJSONFeature class

#### Properties

| Name            | Type                                                                   | Description         |
|-----------------|:-----------------------------------------------------------------------|---------------------|
| **geometry**    | [MFGeoJSONGeometry](/reference/geojson?id=mfgeojsongeometry-interface) | Geometry            |
| **properties**  | NSDictionary                                                           | Geometry properties |

## MFGeoJSONGeometry interface

| Name            | Type                                                                      | Description         |
|-----------------|:--------------------------------------------------------------------------|---------------------|
| **type    **    | [MFGeoJSONGeometryType](/reference/geojson?id=mfgeojsongeometrytype-enum) | Kiểu của geomtry, bao gồm `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon` |

## MFGeoJSONGeometryType enum

```
typedef NS_ENUM(NSUInteger, MFGeoJSONGeometryType) {
  MFGeoJSONGeometryTypePoint,
  MFGeoJSONGeometryTypeMultiPoint,
  MFGeoJSONGeometryTypeLineString,
  MFGeoJSONGeometryTypeMultiLineString,
  MFGeoJSONGeometryTypePolygon,
  MFGeoJSONGeometryTypeMultiPolygon,
  MFGeoJSONGeometryTypeGeometryCollection
} NS_SWIFT_NAME(MFGeoJSON.GeometryType);
```

## MFGeoJSONPointStyle class

#### Properties

| Name            | Type                                                               | Description             |
|-----------------|:-------------------------------------------------------------------|-------------------------|
| **icon**        | UIImage                                                            | Icon mặc định cho point |
