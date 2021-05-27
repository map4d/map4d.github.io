# AutoSuggest (Tự động đề xuất chuỗi tìm kiếm)
## 1. Input (Đầu vào)
```
https://api-test.map4d.vn/sdk/autosuggest?key={key}&text={text}&location={location}&acronym={acronym}
```
| Parameter |Required| Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/access-key/add để tạo key|
| text      |Yes     | chuỗi muốn gửi. VD: "Đà Nẵng"                                                                         |
| location  |No      | địa điểm bạn đang tìm kiếm trên bản đồ. VD: 16.036505,108.218186                                      |
| acronym   |No      | tìm theo chữ cái viết tắt của vị trí cần tìm, mặc định là false. VD: nvl -> nguyen van linh...        |

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
| Parameter |Notnull| Description                                                                       |
|-----------|-------|-----------------------------------------------------------------------------------|
| code      |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi           |
| message   |No     | nội dung của mã lỗi (nếu có)                                                   |
| result    |No     | danh sách place được tìm thấy, nếu lỗi thì result là null                      |
| id        |Yes    | khóa của địa điểm                                                              |
| name      |Yes    | tên của địa điểm                                                                  |
| address   |Yes    | địa chỉ của địa điểm                                                              |
| location  |Yes    | vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS) |
| types     |Yes    | danh sách các kiểu của place. VD: cafe, restaurant ...                             |

**Ví dụ**
<iframe src="./examples/test_sdk/autosugest.html" height="450px";> </iframe>

