
#  GeoCode(Phân giải lat, lng thành địa chỉ)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/geocode?key={key}&lat={lat}&lng={lng}
```
| Parameter |Required| Description                                                                                           |
|-----------|--------|-------------------------------------------------------------------------------------------------------|
| key       |Yes     | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. Truy cập: https://map.map4d.vn/user/access-key/add để tạo key|
| lat       |Yes     | vĩ độ theo bản đồ gps, có giá trị từ -90 đến 90                                                                       |
| lng       |Yes     | kinh độ theo bản đồ gps, có giá trị từ -180 đến 180                                      |

## 2. Output(Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
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
| Parameter |Notnull| Description                                                                                           |
|-----------|-------|-------------------------------------------------------------------------------------------------------|
| code      |Yes    | mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi                               |
| message   |No     | nội dung của mã lỗi(nếu có)                                                                        |
| result    |No     | place được tìm thấy gần nhất (nếu có địa điểm trong 50 mét sẽ trả về, không thì sẽ trả về đường trong phạm vi 50 mét, nếu không có nữa thì sẽ trả về địa giới hành chính chứa vị trí này), nếu lỗi thì result là null|
| id        |Yes    | khóa của địa điểm                                                                                  |
| location  |Yes    | vị trí đặt địa điểm(lat là vĩ độ theo bản đồ GCS, lng là kinh độ theo bản đồ GCS)                     |
| address   |Yes    | địa chỉ của địa điểm. VD: 31 Lê Văn Duyệt, Phường Nai Hiên Đông, Quận Sơn Trà, Thành phố Đà Nẵng      |
| name      |Yes    | tên của địa điểm                                                                                      |
| types     |Yes    | danh sách các kiểu của place, vd: cafe, restaurant...        

**Ví dụ**
<iframe src="./examples/v1.0/geocode.html" height = "400px"> </iframe>