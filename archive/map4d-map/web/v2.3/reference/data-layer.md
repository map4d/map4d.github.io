# Data Layer References

<!--------------------------------------------------------------------- MapData ----------------------------------------------------------------------------------------->
<!--------------------------------------------------------------------- MapData ----------------------------------------------------------------------------------------->
## MapData class

`map4d.MapData` class

**Methods**

| Name        | Parameters                                                                             | Return Value                                                       | Description                                           |
|-------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------|
| add         | feature: [Data.Feature](#feature-class) \| [Data.FeatureOptions](#featureoptions-type) | [Data.Feature](#feature-class)                                     | Thêm 1 feature vào Data Layer                         |
| addGeoJson  | geoJson: string                                                                        | [Data.Feature](#feature-class)                                     | Thêm 1 hoặc nhiều feature vào Data Layer bằng geoJson |
| remove      | feature: [Data.Feature](#feature-class)                                                | `none`                                                             | Xóa feature khỏi Data Layer                           |
| clear       | `none`                                                                                 | `none`                                                             | Xóa tất cả feature khỏi Data Layer                    |
| addListener | event: string \| [MapEvent](/reference/map?id=mapevent-enum)<br>func: Function         | [MapsEventListener](/reference/map?id=mapseventlistener-interface) | Thêm sự kiên cho Data Layer                           |
| setMinZoom  | minZoom: number                                                                        | `none`                                                             | Set mức zoom nhỏ nhất để hiển thị Data Layer          |
| getMinZoom  | `none`                                                                                 | number                                                             | Get mức zoom nhỏ nhất có thể hiển thị Data Layer      |
| setMaxZoom  | maxZoom: number                                                                        | `none`                                                             | Set mức zoom lớn nhất để hiển thị Data Layer          |
| getMaxZoom  | `none`                                                                                 | number                                                             | Get mức zoom lớn nhất có thể hiển thị Data Layer      |

---
## Data namespace

<!--------------------------------------------------------------------- FeatureOptions ---------------------------------------------------------------------------------->
<!--------------------------------------------------------------------- FeatureOptions ---------------------------------------------------------------------------------->
### FeatureOptions type

`map4d.Data.FeatureOptions` type

**Properties**

| Name       | Type                                 | Description        |
|------------|--------------------------------------|--------------------|
| id         | number \| string                     | Feature id         |
| geometry   | [Data.Geometry](#geometry-interface) | Feature geometry   |
| properties | any                                  | Feature properties |

<!--------------------------------------------------------------------- Feature ---------------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- Feature ---------------------------------------------------------------------------------------->
### Feature class

`map4d.Data.Feature` class

**Constructor** 

Tạo Data.Feature với các tham số được chỉ định

```js
Data.Feature(id, geometry, properties)
```

- Parameters:
  - id: number | string *required*
  - geometry: Geometry *required*
  - properties: any *required*

**Methods**

| Name          | Parameters | Return Value                         | Description            |
|---------------|------------|--------------------------------------|------------------------|
| getId         | `none`     | number \| string                     | Get feature id         |
| getGeometry   | `none`     | [Data.Geometry](#geometry-interface) | Get feature geometry   |
| getProperties | `none`     | any                                  | Get feature properties |

<!--------------------------------------------------------------------- Geometry --------------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- Geometry --------------------------------------------------------------------------------------->
### Geometry interface

`map4d.Data.Geometry` interface

Geometry là một giao diện chung dành cho các đối tượng:
- Point
- MultiPoint
- LineString
- MultiLineString
- Polygon
- MultiPolygon

<!--------------------------------------------------------------------- Point ----------------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- Point ----------------------------------------------------------------------------------------->
### Point class

`map4d.Data.Point` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.Point với coordinate được chỉ định

```js
Data.Point(coordinate)
```

- Parameters:
  - coordinate: [ILatLng](/reference/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value                                     | Description                                                   |
|---------------|------------------------------------|--------------------------------------------------|---------------------------------------------------------------|
| getType       | `none`                             | string                                           | "Point"                                                       |
| forEachLatLng | callback: function(LatLng) => void | `none`                                           | Gọi xử lý `callback` với tham số là `coordinate` của Point    |
| get           | `none`                             | [LatLng](/reference/coordinates?id=latlng)       | Get `coordinate` của Point                                    |

<!--------------------------------------------------------------------- MultiPoint ----------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- MultiPoint ----------------------------------------------------------------------------------->
### MultiPoint class

`map4d.Data.MultiPoint` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.MultiPoint với coordinates được chỉ định

```js
Data.MultiPoint(coordinates)
```

- Parameters:
  - coordinates: [ILatLng[]](/reference/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value                                 | Description                                                                    |
|---------------|------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------|
| getType       | `none`                             | string                                       | "MultiPoint"                                                                   |
| forEachLatLng | callback: function(LatLng) => void | `none`                                       | Duyệt qua các LatLng của mỗi element trong MultiPoint và gọi xử lý `callback`  |
| getAt         | n: number                          | [LatLng](/reference/coordinates?id=latlng)   | Get LatLng ở vị trí `n`                                                        |
| getArray      | `none`                             | [LatLng[]](/reference/coordinates?id=latlng) | Get coordinates                                                                |
| getLength     | `none`                             | number                                       | Get tổng số coordinates hiện có của đối tượng MultiPoint                       |

<!--------------------------------------------------------------------- LineString ----------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- LineString ----------------------------------------------------------------------------------->
### LineString class

`map4d.Data.LineString` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.LineString với các elements được chỉ định

```js
Data.LineString(elements)
```

- Parameters:
  - elements: [ILatLng[]](/reference/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value | Description                                                   |
|---------------|------------------------------------|--------------|---------------------------------------------------------------|
| getType       | `none`                             | string       | "LineString"                                                  |
| forEachLatLng | callback: function(LatLng) => void | `none`       | Duyệt qua các elements của LineString và gọi xử lý `callback` |


<!--------------------------------------------------------------------- MultiLineString ------------------------------------------------------------------------------>
---
<!--------------------------------------------------------------------- MultiLineString ------------------------------------------------------------------------------>
### MultiLineString class

`map4d.Data.MultiLineString` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.MultiLineString với các elements được chỉ định

```js
Data.MultiLineString(elements)
```

- Parameters:
  - elements: [Data.LineString[]](#linestring-class) *required*

**Methods**

| Name          | Parameters                         | Return Value                         | Description                                                                        |
|---------------|------------------------------------|--------------------------------------|------------------------------------------------------------------------------------|
| getType       | `none`                             | string                               | "MultiLineString"                                                                  |
| forEachLatLng | callback: function(LatLng) => void | `none`                               | Duyệt qua các LatLng của mỗi element trong MultiLineString và gọi xử lý `callback` |
| getAt         | n: number                          | [Data.LineString](#linestring-class) | Get LineString ở vị trí `n`                                                        |
| getLength     | `none`                             | number                               | Get tổng số LineString hiện có của đối tượng MultiLineString                       |


<!--------------------------------------------------------------------- LinearRing ----------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- LinearRing ----------------------------------------------------------------------------------->
### LinearRing class

`map4d.Data.LinearRing` class

**Constructor** 

Tạo Data.LinearRing với các elements được chỉ định

```js
Data.LinearRing(elements)
```

- Parameters:
  - elements: [ILatLng[]](/reference/coordinates?id=ilatlng) *required*

**Properties**

| Name         | Type                                           | Description                                                          |
|--------------|------------------------------------------------|----------------------------------------------------------------------|
| **elements** | [ILatLng[]](/reference/coordinates?id=ilatlng) |                                                                      |


<!--------------------------------------------------------------------- Polygon -------------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- Polygon -------------------------------------------------------------------------------------->
### Polygon class

`map4d.Data.Polygon` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.Polygon với các elements được chỉ định

```js
Data.Polygon(elements)
```

- Parameters:
  - elements: [LinearRing](#linearring-class) *required*

**Methods**

| Name          | Parameters                         | Return Value | Description                                                |
|---------------|------------------------------------|--------------|------------------------------------------------------------|
| getType       | `none`                             | string       | "Polygon"                                                  |
| forEachLatLng | callback: function(LatLng) => void | `none`       | Duyệt qua các elements của Polygon và gọi xử lý `callback` |


<!--------------------------------------------------------------------- MultiPolygon --------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- MultiPolygon --------------------------------------------------------------------------------->
### MultiPolygon class

`map4d.Data.MultiPolygon` class là một [Data.Geometry](#geometry-interface)

**Constructor** 

Tạo Data.MultiPolygon với các elements được chỉ định

```js
Data.MultiPolygon(elements)
```

- Parameters:
  - elements: [Data.Polygon[]](#polygon-class) *required*

**Methods**

| Name          | Parameters                         | Return Value                   | Description                                                                     |
|---------------|------------------------------------|--------------------------------|---------------------------------------------------------------------------------|
| getType       | `none`                             | string                         | "MultiPolygon"                                                                  |
| forEachLatLng | callback: function(LatLng) => void | `none`                         | Duyệt qua các LatLng của mỗi element trong MultiPolygon và gọi xử lý `callback` |
| getAt         | n: number                          | [Data.Polygon](#polygon-class) | Get Polygon ở vị trí `n`                                                        |
| getLength     | `none`                             | number                         | Get tổng số polygon hiện có của đối tượng MultiPolygon                          |