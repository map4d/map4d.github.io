#  Nearby Search (Tìm kiếm địa điểm ưu tiên gần đây)
Tìm kiếm địa điểm xung quanh một vị trí cho trước. Kết quả sẽ trả về danh sách các địa điểm.

Phương thức: **GET**
## 1. Input (Đầu vào)
```
http://api.map4d.vn/sdk/place/nearby-search?key={key}&location={location}&radius={radius}&text={text}&types={types}&tags={tags}&datetime={datetime}
```
| Parameter | Required | Description                                                                                                                                                                                                                                                                                                                                                                          |
|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/my-access-key/add để tạo key.                                                                                                                                                                                                    |
| location  | **Yes**  | Tọa độ lat, lng tại địa điểm muốn tìm. Ví dụ: 16.036505,108.218186                                                                                                                                                                                                                                                                                                                   |
| radius    | **Yes**  | Bán kính tìm dữ liệu xung quanh - đơn vị là mét.<br>Các địa điểm trong bán kính này sẽ được ưu tiên hơn (không ràng buộc).<br>Giới hạn bán kính là 50.000 meters.                                                                                                                                                                                                                    |
| text      | No       | Nội dung muốn tìm kiếm.                                                                                                                                                                                                                                                                                                                                                              |
| types     | No       | Loại đối tượng của địa điểm. <br>Hỗ trợ 2 formats:<br>  Format 1: `type1,type2,type3` -> tìm kiếm và trả về những kết quả có cả type1, type2 và type3. <br>  Format 2: `type1\|type2\|type3` -> tìm kiếm hoặc trả về những kết có 1 trong các type1, type2, type3. <br>Nếu cả 2 format được truyền vào, chỉ xử lý type đầu tiên. Ví dụ: `type1,type2\|type3` -> chỉ type1 được nhận. |
| tags      | No       | Nhãn của địa điểm. Ví dụ: vietlott, coopmart, …                                                                                                                                                                                                                                                                                                                                      |
| datetime  | No       | Thời gian địa điểm vẫn còn tồn tại - múi giờ là 0, đổi ra đơn vị là miliseconds.                                                                                                                                                                                                                                                                                                     |  

**Note:** Cần phải có ít nhất 1 trong `text` hoặc `types` hoặc `tags` được truyền vào.
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
<iframe src="./examples/v1.0/nearbysearch.html" height="650px"  width: 80%> </iframe>