# GeoJson Layer

Map4D Android SDK cung cấp GeoJson layer cho phép người dùng hiển thị dữ liệu địa lý tùy ý, theo định dạng [GeoJSON](https://geojson.org/)

![CocoaPods](../resources/geojson-layer.png)

### 1. Thêm một GeoJSON layer

Để thêm một GeoJSON layer vào map, trước tiên cần tạo mới 1 đối tượng của lớp [MFGeoJsonOptions](/reference/geojson-layer?id=geojson-options) để
định nghĩa các thuộc tính ban đầu của lớp GeoJSON.
Sau đó ta gọi phương thức `addGeoJson` của lớp `Map4D`. Đối tượng trả về sau khi gọi phương thức `addGeoJson` là một [MFGeoJson](/reference/geojson-layer?id=geojson-class)

Ví dụ sau đây thêm một GeoJson layer vào bản đồ ở tọa độ `16.073420650938914, 108.22404093434358`

<!-- tabs:start -->
#### ** Kotlin **

```kotlin
override fun onMapReady(map4D: Map4D) {  
    val jsonString = """{
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "stroke": "#bf0808",
            "stroke-width": 2,
            "stroke-opacity": 1,
            "fill": "#45e8c7",
            "fill-opacity": 0.5
          },
          "geometry": {
            "coordinates": [
              [
                [
                  108.22404093434358,
                  16.073420650938914
                ],
                [
                  108.22404093434358,
                  16.07027546741118
                ],
                [
                  108.22708802596247,
                  16.07027546741118
                ],
                [
                  108.22708802596247,
                  16.073420650938914
                ],
                [
                  108.22404093434358,
                  16.073420650938914
                ]
              ]
            ],
            "type": "Polygon"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "marker-color": "#bb00ff",
            "marker-size": "medium"
          },
          "geometry": {
            "coordinates": [
              108.22742287119428,
              16.07192448288062
            ],
            "type": "Point"
          }
        },
        {
          "type": "Feature",
          "properties": {
            "stroke": "#555555",
            "stroke-width": 5,
            "stroke-opacity": 1
          },
          "geometry": {
            "coordinates": [
              [
                108.22620905722562,
                16.072567997403468
              ],
              [
                108.22750658250317,
                16.074707668219588
              ],
              [
                108.22831858219348,
                16.07294606121482
              ],
              [
                108.23011000418842,
                16.073018456330914
              ],
              [
                108.22734753101753,
                16.069052773943497
              ]
            ],
            "type": "LineString"
          }
        }
      ]
    }"""

    try {
      val geoJsonOptions = MFGeoJsonOptions()
        .geoJson(JSONObject(jsonString))
        .pointStyle(MFGeoJsonPointStyle(MFBitmapDescriptorFactory.fromResource(R.drawable.default_marker)))
      val geoJson = map4D.addGeoJson(geoJsonOptions)
    } catch (e: Exception) {
      e.printStackTrace()
    }  
}
```
#### ** Java **

```java
@Override  
public void onMapReady(final Map4D map4D) {  
    String jsonString = "{\n" +
	  "  \"type\": \"FeatureCollection\",\n" +
	  "  \"features\": [\n" +
	  "    {\n" +
	  "      \"type\": \"Feature\",\n" +
	  "      \"properties\": {\n" +
	  "        \"stroke\": \"#bf0808\",\n" +
	  "        \"stroke-width\": 2,\n" +
	  "        \"stroke-opacity\": 1,\n" +
	  "        \"fill\": \"#45e8c7\",\n" +
	  "        \"fill-opacity\": 0.5\n" +
	  "      },\n" +
	  "      \"geometry\": {\n" +
	  "        \"coordinates\": [\n" +
	  "          [\n" +
	  "            [\n" +
	  "              108.22404093434358,\n" +
	  "              16.073420650938914\n" +
	  "            ],\n" +
	  "            [\n" +
	  "              108.22404093434358,\n" +
	  "              16.07027546741118\n" +
	  "            ],\n" +
	  "            [\n" +
	  "              108.22708802596247,\n" +
	  "              16.07027546741118\n" +
	  "            ],\n" +
	  "            [\n" +
	  "              108.22708802596247,\n" +
	  "              16.073420650938914\n" +
	  "            ],\n" +
	  "            [\n" +
	  "              108.22404093434358,\n" +
	  "              16.073420650938914\n" +
	  "            ]\n" +
	  "          ]\n" +
	  "        ],\n" +
	  "        \"type\": \"Polygon\"\n" +
	  "      }\n" +
	  "    },\n" +
	  "    {\n" +
	  "      \"type\": \"Feature\",\n" +
	  "      \"properties\": {\n" +
	  "        \"marker-color\": \"#bb00ff\",\n" +
	  "        \"marker-size\": \"medium\"\n" +
	  "      },\n" +
	  "      \"geometry\": {\n" +
	  "        \"coordinates\": [\n" +
	  "          108.22742287119428,\n" +
	  "          16.07192448288062\n" +
	  "        ],\n" +
	  "        \"type\": \"Point\"\n" +
	  "      }\n" +
	  "    },\n" +
	  "    {\n" +
	  "      \"type\": \"Feature\",\n" +
	  "      \"properties\": {\n" +
	  "        \"stroke\": \"#555555\",\n" +
	  "        \"stroke-width\": 5,\n" +
	  "        \"stroke-opacity\": 1\n" +
	  "      },\n" +
	  "      \"geometry\": {\n" +
	  "        \"coordinates\": [\n" +
	  "          [\n" +
	  "            108.22620905722562,\n" +
	  "            16.072567997403468\n" +
	  "          ],\n" +
	  "          [\n" +
	  "            108.22750658250317,\n" +
	  "            16.074707668219588\n" +
	  "          ],\n" +
	  "          [\n" +
	  "            108.22831858219348,\n" +
	  "            16.07294606121482\n" +
	  "          ],\n" +
	  "          [\n" +
	  "            108.23011000418842,\n" +
	  "            16.073018456330914\n" +
	  "          ],\n" +
	  "          [\n" +
	  "            108.22734753101753,\n" +
	  "            16.069052773943497\n" +
	  "          ]\n" +
	  "        ],\n" +
	  "        \"type\": \"LineString\"\n" +
	  "      }\n" +
	  "    }\n" +
	  "  ]\n" +
	  "}";
	try {
		MFGeoJsonOptions geoJsonOptions = new MFGeoJsonOptions()
		  .geoJson(new JSONObject(jsonString))
		  .pointStyle(new MFGeoJsonPointStyle(MFBitmapDescriptorFactory.fromResource(R.drawable.default_marker)));
		MFGeoJson geoJson = map4D.addGeoJson(geoJsonOptions);
	} catch (Exception e) {
		e.printStackTrace();
	}  
}
```
<!-- tabs:end -->

### 2. Xóa GeoJSON khỏi bản đồ

Để xóa một lớp GeoJSON khỏi bản đồ chúng ta gọi phương thức `remove`

<!-- tabs:start -->
#### ** Kotlin **

```kotlin
  geoJson?.remove()
```

#### ** Java **

```java
  geoJson.remove();
```
<!-- tabs:end -->

### 3. Thay đổi icon mặc định cho GeoJSON Point

Để thay đổi icon mặc định của GeoJSON Point thì ta tạo một đối tượng `MFGeoJsonPointStyle` với icon kiểu `MFBitmapDescriptor` sau đó truyền vào
option `pointStyle` của đối tượng `MFGeoJsonOptions` trước khi thêm GeoJSON layer vào bản đồ.

<!-- tabs:start -->
#### ** Kotlin **

```kotlin
  val geoJsonOptions = MFGeoJsonOptions()
    .pointStyle(MFGeoJsonPointStyle(MFBitmapDescriptorFactory.fromResource(R.drawable.default_marker)))
```
#### ** Java **

```java
  MFGeoJsonOptions geoJsonOptions = new MFGeoJsonOptions()
    .pointStyle(new MFGeoJsonPointStyle(MFBitmapDescriptorFactory.fromResource(R.drawable.default_marker)));
```
<!-- tabs:end -->

### 4. Sự kiện click GeoJSON layer

- Phát sinh khi người dùng click lên đối tượng `MFGeoJson`

<!-- tabs:start -->

#### ** Kotlin **
```kotlin
  map4D.setOnGeoJsonClickListener { geoJson, feature ->
    Log.e("Events", "GeoJson feature clicked: " + feature.id)
  }
```
#### ** Java **
```java
  map4D.setOnGeoJsonClickListener(new Map4D.OnGeoJsonClickListener() {
	@Override
	public void onGeoJsonClick(@NonNull MFGeoJson geoJson, @NonNull MFGeoJsonFeature feature) {
	  Log.e("Events", "GeoJson feature clicked: " + feature.getId());
	}
  });
```
<!-- tabs:end -->
* Tham số geoJson sẽ trả về đối tượng [MFGeoJson](/reference/geojson-layer?id=geojson-class) mà người dùng click.
* Tham số feature sẽ trả về đối tượng [MFGeoJsonFeature](/reference/geojson-layer?id=mfgeojsonfeature) của lớp GeoJson mà người dùng click lên.

## References

### GeoJson Class

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

### GeoJson Options

`MFGeoJsonOptions` class

Đối tượng **MFGeoJsonOptions** dùng để xác định các thuộc tính dùng cho lớp GeoJson.

**Constructor**

Để tạo một đối tượng `MFGeoJsonOptions` ta làm như sau:

<!-- tabs:start -->
##### ** Java **

```java
MFGeoJsonOptions options = new MFGeoJsonOptions();
```

##### ** Kotlin **

```kotlin
var options = MFGeoJsonOptions()
```
<!-- tabs:end -->

**Properties**

| Name                         | Type                | Description                                                                                                                                                           |
|------------------------------|:-------------------:|----------------------------------------------------------------------------------------------------------------------|
| **geoJson**                  | JSONObject          | chỉ định một đối tượng `JSONObject` để xác định dữ liệu cho GeoJson layer.                                           |
| **pointStyle**               | [MFGeoJsonPointStyle](/reference/geojson-layer?id=mfgeojsonpointstyle-class) | chỉ định style cho kiểu dữ liệu Point của GeoJson layer.                                                         |

### MFGeoJsonPointStyle Class

`MFGeoJsonPointStyle` class

Đối tượng **MFGeoJsonPointStyle** dùng để xác định style cho dữ liệu Point trong GeoJson layer.

**Constructor**

Để tạo một đối tượng `MFGeoJsonPointStyle` ta làm như sau:

<!-- tabs:start -->
##### ** Java **

```java
MFBitmapDescriptor icon = MFBitmapDescriptorFactory.fromResource(R.drawable.custom_icon);
MFGeoJsonPointStyle pointStyle = new MFGeoJsonPointStyle(icon);
```

##### ** Kotlin **

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

### MFGeoJsonFeature

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

### MFGeometry

`MFGeometry` interface

**MFGeometry** là một interface dùng chung cho các đối tượng:
- MFGeoJsonPoint
- MFGeoJsonMultiPoint
- MFGeoJsonLineString
- MFGeoJsonMultiLineString
- MFGeoJsonPolygon
- MFGeoJsonMultiPolygon

### MFGeoJsonPoint

`MFGeoJsonPoint` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          |[MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) | Get tọa độ của Point              |

### MFGeoJsonMultiPoint

`MFGeoJsonMultiPoint` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getPoints**       | `none`            | List< [MFGeoJsonPoint](/reference/geojson-layer?id=mfgeojsonpoint) > | Get danh sách MFGeoJsonPoint       |

### MFGeoJsonLineString

`MFGeoJsonLineString` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          | List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) > | Get danh sách các tọa độ của LineString |

### MFGeoJsonMultiLineString

`MFGeoJsonMultiLineString` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getLineStrings**  | `none`            |List< [MFGeoJsonLineString](/reference/geojson-layer?id=mfgeojsonlinestring) >| Get danh sách MFGeoJsonLineString |

### MFGeoJsonPolygon

`MFGeoJsonPolygon` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getGeometryObject** | `none`          | List< List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) >> | Get list của list các tọa độ tạo nên Polygon |
| **getOuterBoundaryCoordinates** |`none` | List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) > | Get list tọa độ đường biên ngoài cùng của Polygon |
| **getInnerBoundaryCoordinates** |`none` | List< List< [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) >> | Get list tọa độ của các hole trong Polygon |

### MFGeoJsonMultiPolygon

`MFGeoJsonMultiPolygon` class

**Methods**

| Name                | Parameters        | Return Value     | Description                                                                            |
|---------------------|-------------------|------------------|----------------------------------------------------------------------------------------|
| **getGeometryType** | `none`            |[MFGeometryType](/reference/geojson-layer?id=mfgeometrytype) | Get loại Geometry                           |
| **getPolygons**     | `none`    | List< [MFGeoJsonPolygon](/reference/geojson-layer?id=mfgeojsonpolygon) > | Get danh sách các MFGeoJsonPolygon     |

### MFGeometryType

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