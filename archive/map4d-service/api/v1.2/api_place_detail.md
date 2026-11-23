#  Place Detail (Thông tin chi tiết địa điểm)
Thông tin chi tiết của 1 địa điểm về hình ảnh, số điện thoại, website, thông tin vr360, ...

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/detail/{id}?key={key}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key. |
| id        | **Yes**  | Khóa chính của địa điểm.                                                                                                                                                          |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "description": "string",
    "tags": [
      "string"
    ],
    "metadata": [
      {
        "id": "string",
        "type": "string",
        "name": "string",
        "content": "string",
        "order": 0
      }
    ],
    "photos": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "addressComponents": [
      {
        "type": "string",
        "name": "string"
      }
    ],
    "objectId": "string",
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
| Parameter         | Notnull | Description                                                                                                                       |
|-------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| code              | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message           | No      | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result            | No      | Địa điểm tương ứng với `id` truyền vào, nếu lỗi thì result là "null".                                                             |
| description       | No      | Mô tả thêm về địa điểm.                                                                                                           |
| tags              | No      | Danh sách các nhãn của người dùng thêm vào để thuận tiện cho việc tìm kiếm.                                                       |
| metadata          | No      | Danh sách thông tin liên quan đến địa điểm. Ví dụ: bài báo, đường link liên kết, link video, …                                    |
| photos            | No      | Danh sách thông tin hình ảnh về địa điểm.                                                                                         |
| addressComponents | No      | Danh sách đơn vị hành chính của địa điểm thuộc vị trí đó.                                                                         |
| objectId          | No      | Đối tượng của địa điểm đó. Ví dụ: Địa điểm đó thuộc tòa nhà nào - tòa nhà là đối tượng.                                           |
| id                | **Yes** | Khóa của địa điểm tương ứng.                                                                                                      |
| name              | **Yes** | Tên của địa điểm tương ứng.                                                                                                       |
| address           | **Yes** | Địa chỉ của địa điểm tương ứng. Ví dụ: 271 Trần Hưng Đạo, An Hải Bắc, Sơn Trà, Đà Nẵng, Việt Nam                                  |
| location          | **Yes** | Vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                               |
| types             | **Yes** | Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...                                                    |

**Ví dụ**
<iframe src="./examples/v1.0/placedetail.html" height= "400px"> </iframe>