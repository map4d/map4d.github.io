
# Tile(Lấy thông tin của tile)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/tile/{z}/{x}/{y}?key={key}&tileUrl={tileUrl}&mode={mode}
key và mode là thuộc tính bắc buộc.
z: là độ zoom của map
x: là tọa độ x
y: là tọa độ y
tileUrl: là url của tile
mode: là loại 2d hoặc 3d
```
## 2. Output(Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "rasterTile": "string",
    "objects": [
      {
        "id": "string",
        "name": "string",
        "places": [
          "string"
        ],
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
          "tilt": 0,
          "target": {
            "lng": 0,
            "lat": 0
          }
        },
        "types": [
          "string"
        ],
        "minZoom": 0,
        "maxZoom": 0,
        "startDate": "2020-07-06T07:20:52.010Z",
        "endDate": "2020-07-06T07:20:52.010Z",
        "model": {
          "id": "string",
          "type": "string",
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
    ],
    "places": [
      {
        "id": "string",
        "name": "string",
        "types": [
          "string"
        ],
        "location": {
          "lng": 0,
          "lat": 0
        },
        "rank": {
          "value": 0
        },
        "icon": {
          "type": "string",
          "url": "string",
          "color": "string"
        }
      }
    ]
  }
}
```
```html
code: là mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi
message: là nội dung của mã lỗi(nếu có)
result: là kết quả của dữ liệu trả về
rasterTile: là nội dung tile dạng base64
objects: là danh sách các object trong tile đó
places: là danh sách place trong tile đó
```
[Ví dụ](./examples/v1.0/tile.html)
<iframe src="./examples/v1.0/tile.html"> </iframe>
