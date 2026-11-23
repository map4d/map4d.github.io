# Data Layer

Map4D Web SDK cung cấp 1 data layer cho phép người dùng hiển thị dữ liệu không gian địa lý tùy ý, theo định dạng [GeoJSON](https://geojson.org/)

## Thêm feature vào data layer

Có 2 cách để thêm data layer vào Map4D
- Sử dụng hàm `addGeoJson` của đối tượng [data](/reference/data-layer?id=mapdata-class) trong [map](/reference/map?id=map-class)
- Sử dụng hàm `add` của đối tượng [data](/reference/data-layer?id=mapdata-class) trong [map](/reference/map?id=map-class)

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