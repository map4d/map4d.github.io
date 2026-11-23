#  Place ID (Thông tin địa điểm)
Thông tin của 1 địa điểm về tên, vị trí và địa chỉ của địa điểm.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/{id}?key={key}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key. |
| id        | **Yes**  | Khóa chính của địa điểm.                                                                                                                                                          |
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
    ]
  }
}
```
| Parameter | Notnull | Description                                                                                                                       |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| code      | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message   | No      | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result    | No      | Địa điểm tương ứng với `id` truyền vào, nếu lỗi thì result là "null".                                                             |
| id        | **Yes** | Khóa của địa điểm tương ứng.                                                                                                      |
| name      | **Yes** | Tên của địa điểm tương ứng.                                                                                                       |
| address   | **Yes** | Địa chỉ của địa điểm tương ứng. Ví dụ: 271 Trần Hưng Đạo, An Hải Bắc, Sơn Trà, Đà Nẵng, Việt Nam                                  |
| location  | **Yes** | Vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                               |
| types     | **Yes** | Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...                                                    |

[Ví dụ](./examples/v1.0/placedetail.html)
<iframe src="./examples/v1.0/placedetail.html"> </iframe>
