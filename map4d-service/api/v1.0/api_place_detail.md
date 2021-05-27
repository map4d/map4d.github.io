
#  Place Detail (Tìm kiếm thông tin chi tiết của địa điểm)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/place/detail/{id}?key={}
```
| Parameter |Required| Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/access-key/add để tạo key|
| id        |Yes     | khóa của địa điểm                                                                      |

## 2. Output(Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "description": "string",
    "tags": [
      "string"
    ],
    "metadata": [
      {
        "id": "string",
        "type": "string",
        "name": "string",
        "content": "string",
        "order": 0
      }
    ],
    "photos": [
      {
        "url": "string",
        "name": "string"
      }
    ],
    "addressComponents": [
      {
        "code": "string",
        "type": "string",
        "name": "string"
      }
    ],
    "objectId": "string",
    "id": "string",
    "location": {
      "lng": 0,
      "lat": 0
    },
    "address": "string",
    "name": "string",
    "types": [
      "string"
    ]
  }
}
```
| Parameter     |Notnull| Description                                                                                           |
|---------------|-------|-------------------------------------------------------------------------------------------------------|
| code          |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                               |
| message       |No     | nội dung của mã lỗi(nếu có)                                                                        |
| result        |No     | place được tìm thấy gần nhất (nếu có địa điểm trong 50 mét sẽ trả về, không thì sẽ trả về đường trong phạm vi 50 mét, nếu không có nữa thì sẽ trả về địa giới hành chính chứa vị trí này), nếu lỗi thì result là null|
| description   |No     | mô tả thêm về địa điểm                                                                                 |
| tags          |No     | danh sách các nhãn của người dùng thêm vào để thuận tiện cho việc tìm kiếm                     |
| metadata      |No     | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nại Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng      |
| photos        |No     | danh sách thông tin hình ảnh về địa điểm                                                                                      |
| addressComponents|No  | danh sách đơn vị hành chính của địa điểm thuộc vị trí đó
| objectId      |No     | đối tượng của địa điểm đó (ví dụ như địa điểm nó thuộc tòa nhà nào - tòa nhà là đối tượng)                                                                          |
| id            |Yes    | khóa của địa điểm                                                                                  |
| location      |Yes    | vị trí đặt địa điểm(lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS)                     |
| address       |Yes    | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nai Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng      |
| name          |Yes    | tên của địa điểm                                                                                      |
| types         |Yes    | danh sách các kiểu của place, vd: cafe, restaurant...

**Ví dụ**
<iframe src="./examples/v1.0/placedetail.html" height= "400px"> </iframe>