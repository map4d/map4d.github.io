
#  Get Icon(Icon đại diện cho kiểu của địa điểm)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/place/icon?key={key}&option={option}&type={type}&size={size}
key là thuộc tính bắc buộc.
option: là tùy chọn 0 hoặc 1 hoặc 2.
  option = 0 --> icon giọt nước để vẽ địa điểm trên sdk
  option = 1 --> icon giọt nước để client add vào hiển thị khi có kết quả search 
  option = 2 --> icon hình tròn để sử dụng trong các trường hợp khác.
type: là kiểu dữ liệu của địa điểm. vd: cafe, atm...
size: là kích thướt của icon, là 1x hoặc 2x hoặc 3x
```
## 2. Output(Đầu ra)
```
stream
```
```html
stream: dữ liệu trả về dạng stream, nếu không có thì sẽ hiển thị icon mặt định
```
[Ví dụ](./examples/v1.0/icon.html)
<iframe src="./examples/v1.0/icon.html"> </iframe>