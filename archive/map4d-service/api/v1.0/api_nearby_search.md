#  Nearby Search (Tìm kiếm lân cận)
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/nearby-search?key={key}&location={location}&radius={radius}&text={text}&types={types}&tags={tags}&datetime={datetime}&accuracy={accuracy}
```
| Parameter |Required| Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/access-key/add để tạo key |
| location  |Yes     | tọa độ lat, lng tại địa điểm mà bạn muốn tìm, vd: 16.036505,108.218186                              |
| radius    |Yes     | bán kính tìm dữ liệu xung quanh đơn vị là mét, các địa điểm trong bán kính này sẽ được ưu tiên hơn (không ràng buộc) |
| text      |No      | nội dung muốn tìm                                                                                  |
| types     |No      | loại đối tượng của địa điểm. VD: cafe, restaurant...                                                            |
| tags      |No      | nhãn của địa điểm                                                                     |
| datetime  |No      | thời gian địa điểm vẫn còn tồn tại múi giờ là 0, đổi ra đơn vị là miliseconds                      |  

Lưu ý: Cần phải có ít nhất 1 trong `text` hoặc `types` hoặc `tags` được truyền vào!
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
      ],
      "distance": 123.4
    }
  ]
}
```
| Parameter |Notnull| Description                                                                                           |
|-----------|-------|-------------------------------------------------------------------------------------------------------|
| code      |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                               |
| message   |No     | nội dung của mã lỗi (nếu có)                                                                       |
| result    |No     | địa điểm tương ứng với id truyền vào, nếu lỗi thì result là null                                   |
| id        |No    | khóa chính của địa điểm                                                                            |
| name      |Yes    | tên của địa điểm                                                                                      |
| address   |Yes    | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nai Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng      |                                                                       |
| location  |Yes    | vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS)                    |
| types     |Yes    | danh sách các loại đối tượng của địa điểm. VD: cafe, restaurant...                                                         |
| distance     |No    | Số đo khoảng cách từ vị trí nhập vào đến địa điểm hiện tại, tính theo đường chim bay, đơn vị là mét.|

**Ví dụ**
<iframe src="./examples/v1.0/nearbysearch.html" height="650px"  width: 80%> </iframe>

