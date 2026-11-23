#  Geocode (Phân giải địa chỉ)
Chuyển đổi từ tọa độ vị trí (vĩ độ, kinh độ) sang địa chỉ.

Phương thức: GET
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/geocode?key={key}&lat={lat}&lng={lng}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key. |
| lat       | **Yes**  | Vị trí "lat" tại địa điểm muốn phân giải. Ví dụ: 16.0758766<br>Vĩ độ theo bản đồ gps, có giá trị từ -90 đến 90.                                                                   |
| lng       | **Yes**  | Vị trí "lng" tại địa điểm muốn phân giải. Ví dụ: 108.2290401<br>Kinh độ theo bản đồ gps, có giá trị từ -180 đến 180.                                                              |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "id": "string",
    "name": "string",
    "address": "string",
    "location": {
      "lng": 0,
      "lat": 0
    },
    "types": [
      "string"
    ],
    "addressComponents": [
      {
        "types": [
          "string"
        ],
        "name": "string"
      }
    ]
  }
}
```
| Parameter         | Notnull | Description                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code              | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng.                                                                                                                                                                                                                                                                      |
| message           | No      | Nội dung của mã lỗi (nếu có).                                                                                                                                                                                                                                                                                                                                                                          |
| result            | No      | "Place" được tìm thấy gần nhất (nếu có địa điểm trong 50 mét sẽ trả về, không thì sẽ trả về đường trong phạm vi 50 mét, nếu không có nữa thì sẽ trả về địa giới hành chính chứa vị trí này), nếu lỗi thì result là "null".                                                                                                                                                                             |
| id                | No      | Khóa của địa điểm tương ứng. Trường hợp nội suy id là "null".                                                                                                                                                                                                                                                                                                                                          |
| name              | **Yes** | Tên của địa điểm tương ứng.                                                                                                                                                                                                                                                                                                                                                                            |
| address           | **Yes** | Địa chỉ của địa điểm tương ứng. Ví dụ: 271 Trần Hưng Đạo, An Hải Bắc, Sơn Trà, Đà Nẵng, Việt Nam                                                                                                                                                                                                                                                                                                       |
| location          | **Yes** | Vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                                                                                                                                                                                                                                                                                                    |
| types             | **Yes** | Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...                                                                                                                                                                                                                                                                                                                         |
| addressComponents | No      | Danh sách các thành phần của địa chỉ.<br>`types` (notnull) của addressComponents gồm: <br>  `housenumber`: số nhà; <br>  `street`: tên đường; <br>  `admin_level_4`: phường/xã;<br>  `admin_level_3`: quận/huyện; <br>  `admin_level_2`: tỉnh/thành phố trực thuộc trung ương; <br>  `admin_level_1`: quốc gia;<br>  `extra`: các thông tin khác<br>`name` (notnull) là tên địa chỉ tương ứng `types`. |

**Ví dụ**
<iframe src="./examples/v1.0/geocode.html" height = "400px"> </iframe>