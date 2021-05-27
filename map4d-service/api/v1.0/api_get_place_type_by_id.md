
# Get Place Type By Id(Lấy chi tiết của kiểu địa điểm)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/place/type/{id}?key={key}
key và id là thuộc tính bắc buộc.
id: là khóa chính của type. vd: cafe, atm
```
## 2 Output(Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": {
    "id": "string",
    "name": "string",
    "iconName": "string",
    "iconUrl": "string",
    "color": "string",
    "description": "string"
  }
}
```
```html
code: là mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi
message: là nội dung của mã lỗi(nếu có)
result: là địa điểm tương ứng với id truyền vào
id: là khóa chính của type
name: là tên của type
iconName: là tên của icon
iconUrl: là url truy cập trực tiêp tới icon
color: màu của icon
description: mô tả về icon
```
[Ví dụ](./examples/v1.0/typeid.html)
<iframe src="./examples/v1.0/typeid.html"> </iframe>
