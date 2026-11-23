# Data Layer

iPostMap Web SDK cung cấp 1 data layer cho phép người dùng hiển thị dữ liệu không gian địa lý tùy ý, theo định dạng [GeoJSON](https://geojson.org/)

## Thêm feature vào data layer

Có 2 cách để thêm data layer vào iPostMap
- Sử dụng hàm `addGeoJson` của đối tượng [data](/guides/data-layer?id=mapdata-class) trong [map](/guides/map-options?id=map-class)
- Sử dụng hàm `add` của đối tượng [data](/guides/data-layer?id=mapdata-class) trong [map](/guides/map-options?id=map-class)

Dưới đây là ví dụ thêm data layer sử dụng hàm `addGeoJson`

<iframe width="100%" height="600" src="//jsfiddle.net/huydang/9wv8d2kL/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

**Lưu ý:** Hiện tại data layer chỉ hỗ trợ các kiểu sau:
  - Polygon
  - MultiPolygon
  - LineString
  - MultiLineString
  - Point

## Xóa feature khỏi data layer

Để xóa feature khỏi data layer chúng ta sử dụng hàm `remove`

```js
// Thêm 1 danh sách features vào data layer
let features = map.data.addGeoJson(geojsonString)

// Xóa tất cả features khỏi data layer
features.forEach((feature) => {
  map.data.remove(feature)
})
```

## Xóa tất cả các feature khỏi data layer
Để xóa tất cả các feature khỏi data layer chúng ta sử dụng hàm `clear`

```js
map.data.clear()
```

## API Reference

<a id="reference-data-layer"></a>

## Data Layer References

<!--------------------------------------------------------------------- MapData ----------------------------------------------------------------------------------------->
<!--------------------------------------------------------------------- MapData ----------------------------------------------------------------------------------------->
## MapData class

`ipostmap.MapData` class

**Methods**

| Name        | Parameters                                                                             | Return Value                                                       | Description                                           |
|-------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------|
| add         | feature: [Data.Feature](#feature-class) \| [Data.FeatureOptions](#featureoptions-type) | [Data.Feature](#feature-class)                                     | Thêm 1 feature vào Data Layer                         |
| addGeoJson  | geoJson: string                                                                        | [Data.Feature](#feature-class)                                     | Thêm 1 hoặc nhiều feature vào Data Layer bằng geoJson |
| remove      | feature: [Data.Feature](#feature-class)                                                | `none`                                                             | Xóa feature khỏi Data Layer                           |
| clear       | `none`                                                                                 | `none`                                                             | Xóa tất cả feature khỏi Data Layer                    |
| addListener | event: string \| [MapEvent](/guides/map-options?id=mapevent-enum)<br>func: Function         | [MapsEventListener](/guides/map-options?id=mapseventlistener-interface) | Thêm sự kiên cho Data Layer                           |
| setMinZoom  | minZoom: number                                                                        | `none`                                                             | Set mức zoom nhỏ nhất để hiển thị Data Layer          |
| getMinZoom  | `none`                                                                                 | number                                                             | Get mức zoom nhỏ nhất có thể hiển thị Data Layer      |
| setMaxZoom  | maxZoom: number                                                                        | `none`                                                             | Set mức zoom lớn nhất để hiển thị Data Layer          |
| getMaxZoom  | `none`                                                                                 | number                                                             | Get mức zoom lớn nhất có thể hiển thị Data Layer      |

---
## Data namespace

<!--------------------------------------------------------------------- FeatureOptions ---------------------------------------------------------------------------------->
<!--------------------------------------------------------------------- FeatureOptions ---------------------------------------------------------------------------------->
### FeatureOptions type

`ipostmap.Data.FeatureOptions` type

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

`ipostmap.Data.Feature` class

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

`ipostmap.Data.Geometry` interface

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

`ipostmap.Data.Point` class là một [Data.Geometry](#geometry-interface)

**Constructor**

Tạo Data.Point với coordinate được chỉ định

```js
Data.Point(coordinate)
```

- Parameters:
  - coordinate: [ILatLng](/guides/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value                                     | Description                                                   |
|---------------|------------------------------------|--------------------------------------------------|---------------------------------------------------------------|
| getType       | `none`                             | string                                           | "Point"                                                       |
| forEachLatLng | callback: function(LatLng) => void | `none`                                           | Gọi xử lý `callback` với tham số là `coordinate` của Point    |
| get           | `none`                             | [LatLng](/guides/coordinates?id=latlng)       | Get `coordinate` của Point                                    |

<!--------------------------------------------------------------------- MultiPoint ----------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- MultiPoint ----------------------------------------------------------------------------------->
### MultiPoint class

`ipostmap.Data.MultiPoint` class là một [Data.Geometry](#geometry-interface)

**Constructor**

Tạo Data.MultiPoint với coordinates được chỉ định

```js
Data.MultiPoint(coordinates)
```

- Parameters:
  - coordinates: [ILatLng[]](/guides/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value                                 | Description                                                                    |
|---------------|------------------------------------|----------------------------------------------|--------------------------------------------------------------------------------|
| getType       | `none`                             | string                                       | "MultiPoint"                                                                   |
| forEachLatLng | callback: function(LatLng) => void | `none`                                       | Duyệt qua các LatLng của mỗi element trong MultiPoint và gọi xử lý `callback`  |
| getAt         | n: number                          | [LatLng](/guides/coordinates?id=latlng)   | Get LatLng ở vị trí `n`                                                        |
| getArray      | `none`                             | [LatLng[]](/guides/coordinates?id=latlng) | Get coordinates                                                                |
| getLength     | `none`                             | number                                       | Get tổng số coordinates hiện có của đối tượng MultiPoint                       |

<!--------------------------------------------------------------------- LineString ----------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- LineString ----------------------------------------------------------------------------------->
### LineString class

`ipostmap.Data.LineString` class là một [Data.Geometry](#geometry-interface)

**Constructor**

Tạo Data.LineString với các elements được chỉ định

```js
Data.LineString(elements)
```

- Parameters:
  - elements: [ILatLng[]](/guides/coordinates?id=ilatlng) *required*

**Methods**

| Name          | Parameters                         | Return Value | Description                                                   |
|---------------|------------------------------------|--------------|---------------------------------------------------------------|
| getType       | `none`                             | string       | "LineString"                                                  |
| forEachLatLng | callback: function(LatLng) => void | `none`       | Duyệt qua các elements của LineString và gọi xử lý `callback` |


<!--------------------------------------------------------------------- MultiLineString ------------------------------------------------------------------------------>
---
<!--------------------------------------------------------------------- MultiLineString ------------------------------------------------------------------------------>
### MultiLineString class

`ipostmap.Data.MultiLineString` class là một [Data.Geometry](#geometry-interface)

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

`ipostmap.Data.LinearRing` class

**Constructor**

Tạo Data.LinearRing với các elements được chỉ định

```js
Data.LinearRing(elements)
```

- Parameters:
  - elements: [ILatLng[]](/guides/coordinates?id=ilatlng) *required*

**Properties**

| Name         | Type                                           | Description                                                          |
|--------------|------------------------------------------------|----------------------------------------------------------------------|
| **elements** | [ILatLng[]](/guides/coordinates?id=ilatlng) |                                                                      |


<!--------------------------------------------------------------------- Polygon -------------------------------------------------------------------------------------->
---
<!--------------------------------------------------------------------- Polygon -------------------------------------------------------------------------------------->
### Polygon class

`ipostmap.Data.Polygon` class là một [Data.Geometry](#geometry-interface)

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

`ipostmap.Data.MultiPolygon` class là một [Data.Geometry](#geometry-interface)

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
