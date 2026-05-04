#  Text Search (Tìm kiếm dạng văn bản)
## 1. Input (Đầu vào)
```
https://api-test.map4d.vn/sdk/place/text-search?key={key}&text={text}&types={type}&types={type}&datetime={datetime}&location={location}
```
| Parameter |Required| Description                                                                                      |
|-----------|--------|--------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map4d-web-cdtqg.map4d.vn/user/access-key/add để tạo key|
| text      |Yes     | Nội dung muốn tìm và nội dung tìm kiếm tối đa là 1024 ký tự.                                                                             |
| types     |No      | Loại đối tượng của địa điểm. <br>Hỗ trợ 2 formats:<br>  Format 1: AND `type1,type2,type3` -> tìm kiếm và trả về những kết quả có cả type1, type2 và type3. <br>Nếu `types={type1}&types={type2}` -> sẽ hiểu là `types=type1,type2`.<br>  Format 2: OR `type1\|type2\|type3` -> tìm kiếm hoặc trả về những kết có 1 trong các type1, type2, type3. <br>Nếu có cả 2 format được truyền vào, chỉ xử lý type đầu tiên. Ví dụ: `type1,type2\|type3` -> chỉ type1 được nhận.                                                              |
| datetime  |No      | Thời gian địa điểm vẫn còn tồn tại múi giờ là 0, đổi ra đơn vị là miliseconds                 |                                                                        |
| location  |No      | Tọa độ lat, lng tại địa điểm mà bạn muốn tìm. VD: 16.036505,108.218186                         |

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
| Parameter |Notnull| Description                                                                                           |
|-----------|-------|-------------------------------------------------------------------------------------------------------|
| code      |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                               |
| message   |No     | nội dung của mã lỗi (nếu có)                                                                       |
| result    |No     | địa điểm tương ứng với id truyền vào, nếu lỗi thì result là null                                  |
| id        |Yes    | khóa chính của địa điểm                                                                            |
| name      |Yes    | tên của địa điểm                                                                                      |
| address   |Yes    | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nai Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng      |
| location  |Yes    | vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS)                    |
| types     |Yes    | danh sách các kiểu của place. VD: cafe, restaurant ...                                                 |

**Ví dụ**
<iframe src="./examples/test_sdk/textsearch.html" height="550px" allowfullscreen="" frameborder="0"> </iframe>


