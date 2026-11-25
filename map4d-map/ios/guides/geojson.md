# GeoJSON Layer

GeoJSON layer cho phép người dùng hiển thị dữ liệu địa lý theo định dạng [GeoJSON](https://geojson.org/) lên bản đồ Map4D

## 1. Thêm mới GeoJSON layer

Để thêm 1 GeoJSON layer vào bản đồ, ta tạo 1 đối tượng [MFGeoJSON](/guides/geojson.md?id=api-geojson) và set map cho đối tượng đó

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
Giá trị trả về gồm đối tượng [MFGeoJSON](/guides/geojson.md?id=api-geojson) và [Feature](/guides/geojson.md?id=api-geojson-mfgeojsonfeature-class) mà người dùng touch vào đó

```swift 
func mapView(_ mapView: MFMapView!, didTap geoJSON: MFGeoJSON!, feature: MFGeoJSON.Feature!) {}
```

## 4. Thay đổi icon mặc định cho Point của GeoJSON layer

Để thay đổi icon mặc định cho Point của GeoJSON layer, ta set 

```swift 
geoJSON.pointStyle.icon = UIImage(named: "image_name")
```

---

## API Reference :id=api-geojson

### MFGeoJSON class :id=api-geojson-mfgeojson-class

#### 1 Constructor :id=api-geojson-_1-constructor

```swift 
let geoJSON = MFGeoJSON(json:"json string")
```

##### Properties :id=api-geojson-properties

| Name            | Type                                                                   | Description                                                                  |
|-----------------|:-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| **features**    | [MFGeoJSONFeature[]](/guides/geojson.md?id=api-geojson-mfgeojsonfeature-class)     | Danh sách các features                                                       |
| **pointStyle**  | [MFGeoJSONPointStyle](/guides/geojson.md?id=api-geojson-mfgeojsonpointstyle-class) | Style cho points của GeoJSON                                                 |
| **zIndex** | Float | Thứ tự hiển thị của GeoJSON layer. |
| **map**         | [MFMapView](/guides/map.md?id=api-map-mfmapview)                               | Chỉ định hiển thị **GeoJSON** trên **Map** hoặc xoá **GeoJSON** khỏi **Map** |

### MFGeoJSONFeature class :id=api-geojson-mfgeojsonfeature-class

##### Properties :id=api-geojson-properties-1

| Name            | Type                                                                   | Description         |
|-----------------|:-----------------------------------------------------------------------|---------------------|
| **geometry**    | [MFGeoJSONGeometry](/guides/geojson.md?id=api-geojson-mfgeojsongeometry-interface) | Geometry            |
| **properties**  | NSDictionary                                                           | Geometry properties |

### MFGeoJSONGeometry interface :id=api-geojson-mfgeojsongeometry-interface

| Name            | Type                                                                      | Description         |
|-----------------|:--------------------------------------------------------------------------|---------------------|
| **type**    | [MFGeoJSONGeometryType](/guides/geojson.md?id=api-geojson-mfgeojsongeometrytype-enum) | Kiểu của geomtry, bao gồm `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, `GeometryCollection` |

### MFGeoJSONGeometryType enum :id=api-geojson-mfgeojsongeometrytype-enum

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

### MFGeoJSONPointStyle class :id=api-geojson-mfgeojsonpointstyle-class

##### Properties :id=api-geojson-properties-2

| Name            | Type                                                               | Description             |
|-----------------|:-------------------------------------------------------------------|-------------------------|
| **rotation** | Double | Góc quay của icon. |
| **groundAnchor** | CGPoint | Điểm neo của icon. |
| **isFlat** | Bool | Icon nằm phẳng theo mặt đất. |
| **icon**        | UIImage                                                            | Icon mặc định cho point |

## Các kiểu geometry trong Swift

`features` và `pointStyle` là thuộc tính chỉ đọc; có thể thay đổi các thuộc tính của đối tượng `pointStyle`.

| Kiểu | Khởi tạo | Thuộc tính chỉ đọc |
|---|---|---|
| `MFGeoJSON.Feature` | `init(geometry:properties:)` | `geometry`, `properties` |
| `MFGeoJSON.Point` | `init(coordinate:)` | `coordinate` |
| `MFGeoJSON.MultiPoint` | `init(points:)` | `points` |
| `MFGeoJSON.LineString` | `init(path:)` | `path` |
| `MFGeoJSON.MultiLineString` | `init(lineStrings:)` | `lineStrings` |
| `MFGeoJSON.Polygon` | `init(paths:)` | `paths` |
| `MFGeoJSON.MultiPolygon` | `init(polygons:)` | `polygons` |
| `MFGeoJSON.GeometryCollection` | `init(geometries:)` | `geometries` |

Tất cả geometry tuân theo `MFGeoJSON.Geometry`, với thuộc tính chỉ đọc `type: MFGeoJSON.GeometryType`.

