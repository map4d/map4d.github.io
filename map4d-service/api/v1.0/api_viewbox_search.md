#  Viewbox Search (Tìm kiếm trong hộp hình chữ nhật)
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/viewbox-search?key={key}&viewbox={viewbox}&text={text}&types={type}&types={type}&tags={tags}&datetime={datetime}&accuracy={accuracy}
```
| Parameter    |Required| Description                                                                                   |
|--------------|--------|----------------------------------------------------------------------------------------------|
| key          |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập:  https://map.map4d.vn/user/access-key/add để tạo key |                         
| viewbox      |Yes     | khung muốn tìm kiếm, định dạng: minLat, minLng, maxLat, maxLng. VD: 16.056453967981348,108.19387435913086,16.093031550262133,108.25927734375|                                                                 
| text         |No      | nội dung muốn tìm                                                                          |
| types        |No      | kiểu của địa điểm. VD: cafe, atm ...                                                       |
| tags         |No      | đánh dấu địa điểm riêng để tìm                                                             |
| datetime     |No      | thời gian địa điểm vẫn còn tồn tại múi giờ là 0, đổi ra đơn vị là miliseconds              |         
| accuracy     |No      | độ chính xác của địa điểm, nếu 0 là tìm chính xác, ngoài ra là tìm tương đối.              |

#### 2. Output (Đầu ra)
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
| Parameter |Notnull| Description                                                                                          |
|-----------|-------|------------------------------------------------------------------------------------------------------|
| code      |  Yes  | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                              |
| message   |  No   | nội dung của mã lỗi (nếu có)                                                                      |
| result    |  No   | địa điểm tương ứng với id truyền vào                                                              |
| id        |  Yes  | khóa chính của địa điểm                                                                           |
| name      |  Yes  | tên của địa điểm                                                                                     |
| address   |  Yes  | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nai Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng     |
| location  |  Yes  | vị trí đặt địa điểm (lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS)                   |
| types     |  Yes  | danh sách các kiểu của place. VD: cafe, restaurant ...                                                |

**Ví dụ**
<iframe src="./examples/v1.0/viewboxsearch.html" height="600px"> </iframe>
