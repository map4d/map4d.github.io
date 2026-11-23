#  Init Map - Load nội dung file JS (Bản đồ 2D, 3D trên điện thoại)
Cho phép nhà phát triển tích hợp Map4D SDK vào ứng dụng di động trên nền tảng Android/iOS với đầy đủ tính năng điều khiển ở chế độ 2D, 3D.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/map/init?key={key}&mode={mode}
```
| Parameter | Required | Description                                                                                                                                                                  |
|---------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key           | **Yes**      | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key. |
| mode          | No           | Có 2 chế độ Map là "2d" và "3d". Mặc định là "2d".                                                                                                                                |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "signature": "string",
    "verificationCode": "string",
    "resourceBaseUrl": "string"
  }
}
```
| Parameter    | Notnull | Description                                                                                                                   |
|------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------|
| code             | **Yes**     | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message          | No          | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result           | No          | "Load Map" tương ứng với mode truyền vào, nếu lỗi thì result là "null".                                                           |
| signature        | **Yes**     | Chữ ký được mã hóa.                                                                                                               |
| verificationCode | **Yes**     | Mã code xác thực được mã hóa.                                                                                                     |
| resourceBaseUrl  | **Yes**     | Link URL resource.                                                                                                                |