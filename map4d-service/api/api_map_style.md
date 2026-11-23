#  Load Map Style
Get file js theo style tương ứng `mapId`.

Cho phép nhà phát triển tích hợp Map4D SDK vào ứng dụng web với đầy đủ tính năng điều khiển. 

Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/map/style/{mapId}?key={key}
```
| Parameter | Required | Description                                                                                                                                                                       |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       |  **Yes** | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key. |
| mapId     |  **Yes** | Khóa chính của map. `mapId` đã gán với style.                                                                                                                                     |
## 2. Output (Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": "string"
}
```
| Parameter | Notnull | Description                                                                                                                       |
|-----------|---------|-----------------------------------------------------------------------------------------------------------------------------------|
| code      | **Yes** | Mã trả về thành công hoặc lỗi.<br>Nếu trả về mã code "ok" nghĩa là thành công.<br>Ngược lại, nếu lỗi thì trả về mã lỗi tương ứng. |
| message   |    No   | Nội dung của mã lỗi (nếu có).                                                                                                     |
| result    |    No   | "Load Map Style" tương ứng với `mapId` truyền vào, nếu lỗi thì result là "null".                                                  |

[Ví dụ](./examples/v1.0/placedetail.html)
<iframe src="./examples/v1.0/placedetail.html"> </iframe>
