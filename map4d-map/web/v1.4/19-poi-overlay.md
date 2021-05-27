# POI Overlay

Lớp POI Overlay cho phép người dùng thêm vào một layer để vẽ các đối tượng POI theo từng tile. Chúng chỉ được render ở chế độ 2D của Map

## 1. POIOverlay & POIOverlayOptions

```javascript
interface POIOverlayOptions {
    getUrl: Function // Hàm trả về đường dẫn của POI Overlay
    minZoom?: number // Mức zoom tối thiểu của POI Overlay
    maxZoom?: number // Mức zoom tối đa của POI Overlay
}
````

```javascript
class POIOverlay {
    constructor(options?: POIOverlayOptions) // Khởi tạo POIOverlay từ POIOverlayOptions
    getUrl(x: number, y: number, z: number): string // Lấy thông tin đường dẫn của POI theo TileCoordinate
}
```

## 2. Tạo POIOverlay
Trước tiên chúng ta cần tạo một đối tượng poiOverlayOption với hàm getUrl, giá trị của minZoom và maxZoom như phía dưới (giá trị minZoom và maxZoom là tùy chọn không bắt buộc)

```javascript
// Tạo POIOverlayOption
let poiOverlayOptions: map4d.POIOverlayOptions = {
  getUrl: (x, y, z) => {
    return `https://your-domain/api/${z}/${x}/${y}`
  },
  minZoom: 8,
  maxZoom: 19
}
```

Sau đó chúng ta sẽ tạo đối tượng POI Overlay như sau:

```javascript
// Tạo POIOverlay
let poiOverlay = new map4d.POIOverlay(poiOverlayOptions)
// Set POI Overlay vào map cần vẽ
poiOverlay.setMap(this.map)
```

## 3. Xóa POI Overlay

Để xóa POI Overlay khỏi map ta gán map về null.

```javascript
poiOverlay.setMap(null)
```

## 4. API Response
Để sử dụng được tính năng POI Overlay trên Map4dMap JavaScript SDK, bạn cần 1 API nhận 3 thông số của một `Map Tile` là `x`, `y`, `zoom` và dữ liệu trả về kiểu `JSON` theo cấu trúc sau:

```json
{
  "code": "ok",
  "result": {
    "places": [
      {
        "id": "id",
        "name": "name",
        "types": [
          "bank"
        ],
        "location": {
          "lng": 108.2136443,
          "lat": 16.0698656
        },
        "rank": {
          "value": 1000113.0
        },
        "icon": {
          "type": "bank",
          "url": null,
          "color": "916546FF"
        }
      },
      {
        ...
      }
    ]
  }
}
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
