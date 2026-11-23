#  Get Icon (Icon đại diện cho kiểu của địa điểm)
Phương thức: **GET**
## 1. Input (Đầu vào)
```
https://api.map4d.vn/sdk/place/icon?key={key}&option={option}&type={type}&size={size}
```
| Parameter | Required | Description                                                                                                                                                                                                                                          |
|-----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| key       | **Yes**  | apiKey - một mã định danh để xác thực các yêu cầu liên quan đến projects dùng trong việc sử dụng và thanh toán. <br>Truy cập: https://map.map4d.vn/developer/key/add để tạo key.                                                                    |
| option    | No       | Tùy chọn 0 hoặc 1 hoặc 2.<br>  option = 0 --> icon giọt nước để vẽ địa điểm trên sdk.<br>  option = 1 --> icon giọt nước để client add vào hiển thị khi có kết quả search. <br>  option = 2 --> icon hình tròn để sử dụng trong các trường hợp khác. |
| type      | No       | Kiểu dữ liệu của địa điểm. Ví dụ: cafe, atm, ...                                                                                                                                                                                                     |
| size      | No       | Kích thước của icon, là 1x hoặc 2x hoặc 3x.                                                                                                                                                                                                          |
## 2. Output (Đầu ra)
```
stream
```
```html
stream: dữ liệu trả về dạng stream, nếu không có thì sẽ hiển thị icon mặc định
```
[Ví dụ](./examples/v1.0/icon.html)
<iframe src="./examples/v1.0/icon.html"> </iframe>