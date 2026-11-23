# Get Place Type By Id(Lấy chi tiết của kiểu địa điểm)
Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/type/{id}?key={key}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key. |
| id        | **Yes**  | Khóa chính của type. Ví dụ: cafe, atm, ...                                                                                                                                        |
## 2 Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "id": "string",
    "name": "string",
    "iconName": "string",
    "iconUrl": "string",
    "color": "string",
    "description": "string"
  }
}
```
| Parameter   | Notnull | Description                                                                                                                       |
|-------------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| code        | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message     | No      | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result      | No      | Kiểu địa điểm tương ứng với 'id' truyền vào, nếu lỗi thì result là "null".                                                        |
| id          | **Yes** | Khóa của type tương ứng.                                                                                                          |
| name        | **Yes** | Tên của type tương ứng.                                                                                                           |
| iconName    | **Yes** | Tên của icon tương ứng.                                                                                                           |
| iconUrl     | **Yes** | Link URL truy cập trực tiếp tới icon.                                                                                             |
| color       | No      | Màu của icon tương ứng.                                                                                                           |
| description | No      | Mô tả về icon.                                                                                                                    |
| types       | No      | Gồm 3 types: `object`, `place` và `address`.                                                                                      |
[Ví dụ](./examples/v1.0/typeid.html)
<iframe src="./examples/v1.0/typeid.html"> </iframe>