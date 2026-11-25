# GeoJSON Layer

GeoJSON layer cho phép người dùng hiển thị dữ liệu địa lý theo định dạng [GeoJSON](https://geojson.org/) lên bản đồ

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
| **features**    | [[MFGeoJSON.Feature]](/guides/geojson.md?id=api-geojson-mfgeojsonfeature-class)     | Danh sách các features                                                       |
| **pointStyle**  | [MFGeoJSON.PointStyle](/guides/geojson.md?id=api-geojson-mfgeojsonpointstyle-class) | Style cho points của GeoJSON                                                 |
| **zIndex** | Float | Thứ tự hiển thị của GeoJSON layer. |
| **map**         | [MFMapView](/guides/map.md?id=api-map-mfmapview)                               | Chỉ định hiển thị **GeoJSON** trên **Map** hoặc xoá **GeoJSON** khỏi **Map** |

### MFGeoJSON.Feature class :id=api-geojson-mfgeojsonfeature-class

##### Properties :id=api-geojson-properties-1

| Name            | Type                                                                   | Description         |
|-----------------|:-----------------------------------------------------------------------|---------------------|
| **geometry**    | [MFGeoJSON.Geometry](/guides/geojson.md?id=api-geojson-mfgeojsongeometry-interface) | Geometry            |
| **properties**  | [String: NSObject]?                                                           | Geometry properties |

### MFGeoJSON.Geometry protocol :id=api-geojson-mfgeojsongeometry-interface

| Name            | Type                                                                      | Description         |
|-----------------|:--------------------------------------------------------------------------|---------------------|
| **type**    | [MFGeoJSON.GeometryType](/guides/geojson.md?id=api-geojson-mfgeojsongeometrytype-enum) | Kiểu của geomtry, bao gồm `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon`, `GeometryCollection` |

## MFGeoJSON.GeometryType enum :id=api-geojson-mfgeojsongeometrytype-enum

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

## MFGeoJSON.PointStyle class :id=api-geojson-mfgeojsonpointstyle-class

#### Properties

| Name            | Type                                                               | Description             |
|-----------------|:-------------------------------------------------------------------|-------------------------|
| **rotation** | Double | Góc quay của icon. |
| **groundAnchor** | CGPoint | Điểm neo của icon. |
| **isFlat** | Bool | Icon nằm phẳng theo mặt đất. |
| **icon**        | UIImage                                                            | Icon mặc định cho point |
