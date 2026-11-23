# GeoJson Layer References

## GeoJson Class

`MFGeoJson` class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **getFeatures**| `none`      | LongSparseArray< [MFGeoJsonFeature](/reference/geojson-layer?id=mfgeojsonfeature) >        | Get danh sách tất cả các Feature của GeoJson layer                                     |
| **getFeature** | `none` |[MFGeoJsonFeature](/reference/geojson-layer?id=mfgeojsonfeature)      | Get Feature với tham số là `id` của Feature trong GeoJson layer                        |
|**getPointStyle**|`none`|[MFGeoJsonPointStyle](/reference/geojson-layer?id=mfgeojsonpointstyle-class)| Get đối tượng style của dữ liệu Point trong GeoJson layer  |
|**setPointStyle**|[MFGeoJsonPointStyle](/reference/geojson-layer?id=mfgeojsonpointstyle-class)|`none`| Set style cho dữ liệu Point của GeoJson layer              |
| **getId**      | `none`                                  | long         | Get `id` của GeoJson layer                                                             |
| **remove**     | `none`                                  | `none`       | Remove GeoJson layer ra khỏi Map                                                       |

## GeoJson Options

`MFGeoJsonOptions` class

Đối tượng **MFGeoJsonOptions** dùng để xác định các thuộc tính dùng cho lớp GeoJson.

**Constructor**

Để tạo một đối tượng `MFGeoJsonOptions` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
MFGeoJsonOptions options = new MFGeoJsonOptions();
```

#### ** Kotlin **

```kotlin
var options = MFGeoJsonOptions()
```
<!-- tabs:end -->

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|----------------------------------------------------------------------------------------------------------------------|
| **geoJson**                  | JSONObject          | chỉ định một đối tượng `JSONObject` để xác định dữ liệu cho GeoJson layer.                                           |
| **pointStyle**               | [MFGeoJsonPointStyle](/reference/geojson-layer?id=mfgeojsonpointstyle-class) | chỉ định style cho kiểu dữ liệu Point của GeoJson layer.                                                         |

## MFGeoJsonPointStyle Class

`MFGeoJsonPointStyle` class

Đối tượng **MFGeoJsonPointStyle** dùng để xác định style cho dữ liệu Point trong GeoJson layer.

**Constructor**

Để tạo một đối tượng `MFGeoJsonPointStyle` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
MFBitmapDescriptor icon = MFBitmapDescriptorFactory.fromResource(R.drawable.custom_icon);
MFGeoJsonPointStyle pointStyle = new MFGeoJsonPointStyle(icon);
```

#### ** Kotlin **

```kotlin
val icon = MFBitmapDescriptorFactory.fromResource(R.drawable.custom_icon)
var pointStyle = MFGeoJsonPointStyle(icon)
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **getIcon**    |`none`|[MFBitmapDescriptor](/reference/marker?id=mfbitmapdescriptor)| Get icon của point style                                                   |
| **setIcon**    |[MFBitmapDescriptor](/reference/marker?id=mfbitmapdescriptor)|`none`| Set icon cho point style                                                   |

## MFGeoJsonFeature

`MFGeoJsonFeature` class

Đối tượng **MFGeoJsonFeature** dùng để lưu trữ dữ liệu của từng Feature trong GeoJson layer.

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getPropertyKeys** | `none`            | Iterable<String> | Get tất cả các key của property                                                        |
| **getProperties**   | `none`            | Iterable         | Get tập hợp các property của feature                                                   |
| **getProperty**     | String            | String           | Get giá trị property tương ứng với tham số key                                         |
| **hasProperty**     | String            | boolean          | Kiểm tra feature có thuộc tính tương ứng với key truyền vào hay không                  |
| **hasProperties**   | `none`            | boolean          | Kiểm tra feature có bất kì property nào không                                          |
| **getGeometry**     |`none`|[MFGeometry](/reference/geojson-layer?id=mfgeometry)| Get đối tượng Geometry của feature                                |
| **setGeometry**     |[MFGeometry](/reference/geojson-layer?id=mfgeometry)|`none`| Set Geometry cho feature                                          |
| **hasGeometry**     | `none`            | boolean          | Kiểm tra feature có Geometry hay không                                                 |
| **setProperty**     | String, String    | String           | Set property cho feature. Trả về giá trị property được thêm vào                        |
| **removeProperty**  | String            | String           | Remove property tương ứng với key truyền vào. Trả về thuộc tính được remove            |
| **getId**           | `none`            | long             | Get `id` của feature                                                                   |
| **setId**           | long              | `none`           | Set `id` của feature                                                                   |

## MFGeometry

`MFGeometry` interface

**MFGeometry** là một interface dùng chung cho các đối tượng:
- MFGeoJsonPoint
- MFGeoJsonMultiPoint
- MFGeoJsonLineString
- MFGeoJsonMultiLineString
- MFGeoJsonPolygon
- MFGeoJsonMultiPolygon

## MFGeoJsonPoint

`MFGeoJsonPoint` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          |[MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) | Get tọa độ của Point              |

## MFGeoJsonMultiPoint

`MFGeoJsonMultiPoint` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getPoints**       | `none`            | List< [MFGeoJsonPoint](/reference/geojson-layer?id=mfgeojsonpoint) > | Get danh sách MFGeoJsonPoint       |

## MFGeoJsonLineString

`MFGeoJsonLineString` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          | List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) > | Get danh sách các tọa độ của LineString |

## MFGeoJsonMultiLineString

`MFGeoJsonMultiLineString` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getLineStrings**  | `none`            |List< [MFGeoJsonLineString](/reference/geojson-layer?id=mfgeojsonlinestring) >| Get danh sách MFGeoJsonLineString |

## MFGeoJsonPolygon

`MFGeoJsonPolygon` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          | List< List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) >> | Get list của list các tọa độ tạo nên Polygon |
| **getOuterBoundaryCoordinates** |`none` | List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) > | Get list tọa độ đường biên ngoài cùng của Polygon |
| **getInnerBoundaryCoordinates** |`none` | List< List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) >> | Get list tọa độ của các hole trong Polygon |

## MFGeoJsonMultiPolygon

`MFGeoJsonMultiPolygon` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getPolygons**     | `none`    | List< [MFGeoJsonPolygon](/reference/geojson-layer?id=mfgeojsonpolygon) > | Get danh sách các MFGeoJsonPolygon     |

## MFGeometryType

`MFGeometryType` enum

Hiện tại Map4D hỗ trợ 6 loại MFGeometryType như bên dưới:

| No. | Name                          | Description                                      |
|:---:|-------------------------------|--------------------------------------------------|
|  1  | MFGeometryTypePoint           | Giá trị: `0`<br>Geometry kiểu Point              |
|  2  | MFGeometryTypeMultiPoint      | Giá trị: `1`<br>Geometry kiểu Multi Point        |
|  3  | MFGeometryTypeLineString      | Giá trị: `2`<br>Geometry kiểu LineString         |
|  4  | MFGeometryTypeMultiLineString | Giá trị: `3`<br>Geometry kiểu MultiLineString    |
|  5  | MFGeometryTypePolygon         | Giá trị: `4`<br>Geometry kiểu Polygon            |
|  6  | MFGeometryTypeMultiPolygon    | Giá trị: `5`<br>Geometry kiểu Multi Polygon      |