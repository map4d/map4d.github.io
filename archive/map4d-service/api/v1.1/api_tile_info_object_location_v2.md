#  Tile (Lấy thông tin đối tượng và địa điểm của tile phiên bản 2)
Map4D API cung cấp dữ liệu nền địa lý gồm thông tin đối tượng và địa điểm của tile.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/tile/v2/{z}/{x}/{y}?key={key}&mode={mode}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key. |
| z         | **Yes**  | Mức zoom của map.                                                                                                                                                                 |
| x         | **Yes**  | Tọa độ x (Giá trị x).                                                                                                                                                             |
| y         | **Yes**  | Tọa độ y (Giá trị y).                                                                                                                                                             |
| mode      | No       | Có 2 chế độ là "2d" và "3d". Mặc định là "2d".                                                                                                                                    |

**Note:** Giá trị `mode` = "3d" chỉ tồn tại ở mức zoom từ 17+
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "rasterTile": "string",
    "vectorTile": "string",
    "format": "string",
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
        "startDate": "2022-04-20T03:30:58.377Z",
        "endDate": "2022-04-20T03:30:58.377Z",
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
| Parameter  | Notnull | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code       | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| message    | No      | Nội dung của mã lỗi (nếu có).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| result     | No      | Trả về các dữ liệu nền địa lý tương ứng các params truyền vào, nếu lỗi thì result là "null".                                                                                                                                                                                                                                                                                                                                                                                                                              |
| rasterTile | No      | Trả về thông tin tile tương ứng. Chỉ áp dụng cho chế độ 2D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| vectorTile | No      | Trả về thông tin tile tương ứng. Chỉ áp dụng cho chế độ 3D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| format     | **Yes** | Trả về dạng format tương ứng. Chỉ áp dụng cho `type` = "roadmap".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| objects    | No      | Trả về danh sách thông tin `objects`. Chỉ áp dụng cho chế độ 3D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| id         | **Yes** | Khóa của đối tượng tương ứng.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| name       | **Yes** | Tên của đối tượng tương ứng.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| location   | **Yes** | Vị trí đặt đối tượng (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| scale      | **Yes** | Tỉ lệ của tile. Chỉ áp dụng cho `type` = "raster".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| bearing    | No      | Góc xoay của đối tượng.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| elevation  | No      | Cao độ của đối tượng.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| camera     | No      | Trả về giá trị `camera` gồm các thông tin: <br> `zoom` (notnull): Mức zoom của đối tượng tương ứng.<br> `bearing` (notnull): Góc xoay của đối tượng tương ứng.<br> `tilt` (notnull): Độ nghiêng của đối tượng tương ứng.<br> `target`: Vị trí đặt đối tượng (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                                                                                                                                                                                                                                     |
| types      | No      | Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| minZoom    | No      | Mức zoom nhỏ nhất của đối tượng (Mức zoom: 17).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| maxZoom    | No      | Mức zoom lớn nhất của đối tượng (Mức zoom: 19).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| startDate  | No      | Thời gian (bắt đầu) đối tượng vẫn còn tồn tại. Lưu dưới dạng `timestamp` - đổi ra đơn vị là miliseconds. Ví dụ: 957139200000                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| endDate    | No      | Thời gian (kết thúc) đối tượng vẫn còn tồn tại. Lưu dưới dạng `timestamp` - đổi ra đơn vị là miliseconds. Ví dụ: 4083868800000                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| model      | **Yes** | Trả về danh sách các `model` tương ứng gồm các thông tin: <br> `id` (notnull): Khóa của model tương ứng.<br> `type`(notnull): Loại model. Ví dụ: Object, ...<br> `objName` (notnull): Tên của model tương ứng (format: .obj).<br> `objUrl` (notnull): Link URL liên kết đến `objName`.<br> `textureName` (notnull): Tên file ảnh của model tương ứng (format: .png, .jpg, ... ).<br> `textureUrl` (notnull): Link URL liên kết đến `textureName`.<br> `color`: Mã màu của model.<br> `height` (notnull): Chiều cao của model.<br> `coordinates`: Danh sách các tọa độ lat, lng. |
| places     | **Yes** | Trả về danh sách các `place` tương ứng gồm các thông tin: <br> `id` (notnull): Khóa của địa điểm tương ứng.<br> `name` (notnull): Tên của địa điểm tương ứng.<br> `types` (notnull): Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...<br> `location` (notnull): Vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).<br> `rank`: Xếp hạng của địa điểm (`value` là giá trị xếp hạng).<br> `icon`: Trả về giá trị Icon tile (`type`: loại icon tile, `url`: link ảnh icon tile, `color`: mã màu icon tile.)         |
[Ví dụ](./examples/v1.0/tile.html)
<iframe src="./examples/v1.0/tile.html"> </iframe>