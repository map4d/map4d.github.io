# Autosuggest (Tự động đề xuất)
Gợi ý địa điểm thông qua một phần từ khóa và vị trí.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
http://api.map4d.vn/sdk/autosuggest?key={key}&text={text}&location={location}&acronym={acronym}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key. |
| text      | **Yes**  | Chuỗi muốn gửi. Ví dụ: "Đà Nẵng"                                                                                                                                                  |
| location  | No       | Vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn. Ví dụ: 16.036505,108.218186                                                                                      |
| acronym   | No       | Tìm kiếm theo từ viết tắt. Chỉ hỗ trợ viết tắt ở địa chỉ. <br>Có 2 giá trị "true" và "false", mặc định: false                                                                     |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": [
    {
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
  ]
}
```
| Parameter | Notnull | Description                                                                                                                       |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| code      | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message   | No      | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result    | No      | Danh sách "place" được tìm thấy, nếu lỗi thì result là "null".                                                                    |
| id        | No      | Khóa của địa điểm tương ứng. Trường hợp nội suy id là "null".                                                                     |
| name      | **Yes** | Tên của địa điểm tương ứng.                                                                                                       |
| address   | **Yes** | Địa chỉ của địa điểm tương ứng. Ví dụ: 271 Trần Hưng Đạo, An Hải Bắc, Sơn Trà, Đà Nẵng, Việt Nam                                  |
| location  | **Yes** | Vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS).                                               |
| types     | **Yes** | Danh sách các loại đối tượng của địa điểm. Ví dụ: point, cafe, restaurant, ...                                                    |

**Ví dụ**
<iframe src="./examples/v1.0/autosugest.html" height="450px";> </iframe>

