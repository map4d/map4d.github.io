#  ETA(Dự kiến thời gian đến)
## 1. Input(Đầu vào)
```
https://api.map4d.vn/sdk/route?key={key}&origin={origin}&destination={destination}&points={points}&mode={mode}&language={language}&weighting={weighting}
key và mode là thuộc tính bắc buộc.
origins: là danh sách vị trí của từng xe lat,lng của địa điểm bắt đầu. vd:[{"alias":"Xe 1", "location":{16.024634,108.209217}},{"alias":"Xe 2", "location":{16.094266,108.225059}}]
destination: là vị trí lat,lng của địa điểm kết thúc. vd:16.020179,108.211212
mode: là phương tiện đi qua, hiện tại hỗ trợ 3 loại phương tiện: car(xe hơi), bike(xe đạp, xe máy), foot(đi bộ)
language: là ngôn ngữ dùng chỉ đường, hiện tại hỗ trợ Tiếng Viêt(vi) hoặc Tiếng Anh(en), mặt định sẽ là Tiếng Việt
weighting: là thuộc tính tìm theo đường đi ngắn nhất hay đường đi nhanh nhất hay đường đi cần bằng giữa ngắn nhất và nhanh nhất mặt định là nhanh nhất. Nếu weighting=0 là tìm đường đi nhanh nhất, nếu weighting=1 là tìm đường đi ngắn nhất, nếu weighting=2 là cân bằng giữa ngắn nhất và nhanh nhất
 
```
## 2. Output(Đầu ra)
```json
{
  "code": "string",
  "message": "string",
  "result": [
    {
      "alias": "string",
      "location": "string",
      "distance": {
        "text": "string",
        "value": 0
      },
      "duration": {
        "text": "string",
        "value": 0
      },
      "polyline": "string"
    }
  ]
}
```
```html
code: là mã trả về, nếu 'ok' nghĩa là thành công, ngoài ra thì yêu cầu bị lỗi
message: là nội dung của mã lỗi(nếu có)
result: là danh sách các xe theo thứ tự từ gần đến xa
alias: là danh sách tên đầu vào
location: vị trí danh sách tại vị trí cần đi
distance: là khoản cách từ xe đến vị trí đích
distance.text: là mô tả khoản cách xe đến vị trí đích
distance.value: là khoản cách đơn vị là mét tới vị trí đích
duration.text: là mô tả thời gian xe đến vị trí đích
duration.value: là khoản thời gian đơn vị là giây tới vị trí đích
polyline: là đường đi từng điểm dưới dạng mã hóa polyline làm tròn 5 ký tự
```
[![CocoaPods](../resources/route.png)](https://map4d.vn)
[Ví dụ](./examples/v1.0/eta.html)
<iframe src="./examples/v1.0/eta.html"> </iframe>