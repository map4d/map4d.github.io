# Building Overlay

Lớp BuildingOverlay cho phép người dùng thêm một layer vẽ thêm các Building cùng với các Building có sẵn của Map SDK. Nó chỉ có tác dụng trong chế độ 3D của Map

## 1. BuildingOverlay & BuildingOverlayOption

```javascript
interface BuildingOverlayOptions {
    getUrl: Function // Hàm trả về đường dẫn của Building
    minZoom?: number // Mức zoom tối thiểu của BuildingOverlay
    maxZoom?: number // Mức zoom tối đa của BuildingOverlay
}
````

```javascript
class BuildingOverlay {
    constructor(options?: BuildingOverlayOptions) // Khởi tạo BuildingOverlay từ BuildingOverlayOptions
    getUrl(x: number, y: number, z: number): string // Lấy thông tin đường dẫn của Building theo TileCoordinate
}
```

## 2. Tạo BuildingOverlay

Trước tiên chúng ta cần tạo buildingOverlayOption với hàm getUrl, giá trị của minZoom và maxZoom như phía dưới

***Note: Giá trị của minZoom nếu set thì phải lớn hơn hoặc bằng 17, vì BuildingOverlay chỉ sử dụng trong chế độ 3D của Map***

```javascript
// Tạo buildingOverlayOption
let buildingOverlayOptions: map4d.BuildingOverlayOptions = {
  getUrl: (x, y, z) => {
    return `https://your-domain/api/${z}/${x}/${y}`
  },
  minZoom: 17,
  maxZoom: 19
}
```

Sau đó chúng ta sẽ tạo BuildingOverlay như sau:

```javascript
// Tạo BuildingOverlay
let buildingOverlay = new map4d.BuildingOverlay(buildingOverlayOptions)
// Set Building Overlay vào map cần vẽ
buildingOverlay.setMap(this.map)
```

## 3. Xóa Building Overlay

Để xóa Building Overlay khỏi map ta gán map về null.

```javascript
buildingOverlay.setMap(null)
```

## 4. API Response
Để sử dụng được tính năng Building Overlay trên Map4dMap JavaScript SDK, bạn cần 1 API nhận 3 thông số của một `Map Tile` là `x`, `y`, `zoom` và dữ liệu trả về kiểu `JSON` theo cấu trúc sau:

```json
{
  "code": "ok",
  "message": "message",
  "result": {
    "objects": [
      {
        "id": "string",
        "name": "string",        
        "location": {
          "lng": 0,
          "lat": 0
        },
        "scale": 0,
        "bearing": 0,
        "elevation": 0,
        "camera": {
          "zoom": 0,
          "bearing": 0,
          "tilt": 0
        },
        "types": [
          "string"
        ],
        "minZoom": 0,
        "maxZoom": 0,
        "startDate": "1569801600000",
        "endDate": "1569901600000",
        "model": {
          "id": "string",
          "type": "Object", //or Polygon
          "objName": "string",
          "objUrl": "string",
          "textureName": "string",
          "textureUrl": "string",
          "color": "string",
          "height": 0,
          "coordinates": [
            {
              "lng": 0,
              "lat": 0
            }
          ]
        }
      }
    ]
  }
}
```

> Gợi ý thiết kế database  
> Cần 2 collection để lưu thông tin các tile map và thông tin đối tượng:  
> ## Tile Collection
> ```json
> {
>   "id": "string",
>   "x": "number",
>   "y": "number",
>   "zoom": "number",
>   "objects": ["objectId"]
> }
> ```  
> ## Object Collection  
> ```json
>{
>        "id": "string",
>        "name": "string",        
>        "location": {
>          "lng": 0,
>          "lat": 0
>        },
>        "scale": 0,
>        "bearing": 0,
>        "elevation": 0,
>        "camera": {
>          "zoom": 0,
>          "bearing": 0,
>          "tilt": 0
>        },
>        "types": [
>          "string"
>        ],
>        "minZoom": 0,
>        "maxZoom": 0,
>        "startDate": "1569801600000",
>        "endDate": "1569901600000",
>        "model": {
>          "id": "string",
>          "type": "Object", //or Polygon
>          "objName": "string",
>          "objUrl": "string",
>          "textureName": "string",
>          "textureUrl": "string",
>          "color": "string",
>          "height": 0,
>          "coordinates": [
>            {
>              "lng": 0,
>              "lat": 0
>            }
>          ]
>        }
>}
> ```  


License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
