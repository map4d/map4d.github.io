# GeoJSON Layer

GeoJSON layer cho phép người dùng hiển thị dữ liệu địa lý theo định dạng [GeoJSON](https://geojson.org/) lên bản đồ Map4D

## 1. Thêm mới GeoJSON layer

Để thêm 1 GeoJSON layer vào bản đồ, ta tạo 1 đối tượng [MFGeoJSON](/guides/geojson.md?id=api-geojson) và set map cho đối tượng đó

<!-- tabs:start -->

#### ** Swift **

```swift 
let geoJSON = MFGeoJSON(json: jsonString)
geoJSON.map = mapView
```

#### ** Objective C **

```objc 
MFGeoJSON *geoJSON = [[MFGeoJSON alloc] initWithJson:jsonString];
[geoJSON setMap:mapView];
```

<!-- tabs:end -->

## 2. Xóa GeoJSON layer khỏi bản đồ

Để xóa GeoJSON layer khỏi bản đồ, ta set property `map` của đối tượng bằng `nil`

<!-- tabs:start -->

#### ** Swift **

```swift 
geoJSON.map = nil
```

#### ** Objective C **

```objc 
[geoJSON setMap:nil];
```

<!-- tabs:end -->

## 3. Sự kiện trên GeoJSON layer

Sự kiện trên GeoJSON layer được gọi khi người dùng tap vào vùng hiển thị của GeoJSON layer
Giá trị trả về gồm đối tượng [MFGeoJSON](/guides/geojson.md?id=api-geojson) và [Feature](/guides/geojson.md?id=api-geojson-mfgeojsonfeature-class) mà người dùng touch vào đó

<!-- tabs:start -->

#### ** Swift **

```swift 
func mapView(_ mapView: MFMapView!, didTap geoJSON: MFGeoJSON!, feature: MFGeoJSON.Feature!) {}
```

#### ** Objective C **

```objc 
- (void)mapView:(MFMapView *)mapView didTapGeoJSON:(MFGeoJSON *)geoJSON feature:(MFGeoJSONFeature *)feature {}
```

<!-- tabs:end -->

## 4. Thay đổi icon mặc định cho Point của GeoJSON layer

Để thay đổi icon mặc định cho Point của GeoJSON layer, ta set 

<!-- tabs:start -->

#### ** Swift **

```swift 
geoJSON.pointStyle.icon = UIImage(named: "image_name")
```

#### ** Objective C **

```objc 
geoJSON.pointStyle.icon = [UIImage imageWithImage:@"image_name"];
```

<!-- tabs:end -->

---

## API Reference :id=api-geojson

### MFGeoJSON class :id=api-geojson-mfgeojson-class

#### 1 Constructor :id=api-geojson-_1-constructor


<!-- tabs:start -->
#### ** Swift ** :id=api-geojson-swift-

```swift 
let geoJSON = MFGeoJSON(json:"json string")
```

#### ** Objective C ** :id=api-geojson-objective-c-

```objc 
MFGeoJSON *geoJSON = [[MFGeoJSON alloc] initWithJson:@"json string"];
```

<!-- tabs:end -->

##### Properties :id=api-geojson-properties

| Name            | Type                                                                   | Description                                                                  |
|-----------------|:-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| **features**    | [MFGeoJSONFeature[]](/guides/geojson.md?id=api-geojson-mfgeojsonfeature-class)     | Danh sách các features                                                       |
| **pointStyle**  | [MFGeoJSONPointStyle](/guides/geojson.md?id=api-geojson-mfgeojsonpointstyle-class) | Style cho points của GeoJSON                                                 |
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
| **type    **    | [MFGeoJSONGeometryType](/guides/geojson.md?id=api-geojson-mfgeojsongeometrytype-enum) | Kiểu của geomtry, bao gồm `Point`, `MultiPoint`, `LineString`, `MultiLineString`, `Polygon`, `MultiPolygon` |

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
| **icon**        | UIImage                                                            | Icon mặc định cho point |
