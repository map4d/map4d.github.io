# AutoSuggest (Tự động đề xuất chuỗi tìm kiếm)
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/autosuggest?key={key}&text={text}&location={location}
```
| Parameter |Required| Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/access-key/add để tạo key|
| text      |Yes     | chuỗi muốn gửi. VD: "Đà Nẵng"                                                                         |
| location  |No      | vị trí ưu tiên. Các địa điểm gần vị trí này sẽ được ưu tiên hơn VD: 16.036505,108.218186                                      |
| acronym  |No      | tìm kiếm theo từ viết tắt, chỉ hỗ trợ viết tắt ở địa chỉ. mặc định false                                      |

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
      "distance": 1234.5
    }
  ]
}
```
| Parameter |Notnull| Description                                                                       |
|-----------|-------|-----------------------------------------------------------------------------------|
| code      |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi           |
| message   |No     | nội dung của mã lỗi (nếu có)                                                   |
| result    |No     | danh sách place được tìm thấy, nếu lỗi thì result là null                      |
| id        |No    | khóa của địa điểm                                                              |
| name      |Yes    | tên của địa điểm                                                                  |
| address   |Yes    | địa chỉ của địa điểm                                                              |
| location  |Yes    | vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS) |
| types     |Yes    | danh sách các kiểu của place. VD: cafe, restaurant ...                             |
| distance     |No    | Số đo khoảng cách từ vị trí nhập vào đến địa điểm hiện tại, tính theo đường chim bay, đơn vị là mét.|

**Ví dụ**
<iframe src="./examples/v1.0/autosugest.html" height="450px";> </iframe>

