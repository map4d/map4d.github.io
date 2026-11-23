# Map Effects

Map4D Web SDK cung cấp các hiệu ứng 3D khi map ở chế độ 3D, bao gồm:

- Hiệu ứng mặt nước
- Hiệu ứng thời tiết
- Hiệu ứng thời gian trong ngày

<iframe src="./html/map-effect.html" style="min-width: 900px;" height="520px"></iframe>

## Hiệu ứng mặt nước

Hiệu ứng mặt nước sẽ tạo các gợn sóng lăn tăn tại những nơi là sông hoặc biển. Ở chế độ mặc định, Map4D sẽ tắt chức năng này

Để bật/ tắt hiệu ứng mặt nước, ta gọi phương thức `setWaterEffect` từ đối tượng `Map`

```js
map.setWaterEffect(enabled: boolean)
```


Example:
<iframe style="min-width: 900px;" height="500px" src="//jsfiddle.net/huydang/5v9kpe6h/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## Hiệu ứng thời tiết

Map4dMap JavaScript SDK cho phép người dùng cài đặt các hiệu ứng theo thời gian thực hoặc thủ công.

Các loại thời tiết:

| Name   | TypeScript     | Description                                                                                       |
|--------|----------------|---------------------------------------------------------------------------------------------------|
| none   | Weather.None   | Không có hiệu ứng thời tiết                                                                       |
| rainy  | Weather.Rainy  | Hiệu ứng mưa                                                                                      |
| snowy  | Weather.Snowy  | Hiệu ứng tuyết rơi                                                                                |
| sunny  | Weather.Sunny  | Hiệu ứng thời tiết có nắng                                                                        |
| cloudy | Weather.Cloudy | Hiệu ứng thời tiết có mây                                                                         |
| live   | Weather.Live   | Hiệu ứng thời tiết tự động cập nhật theo thời gian thực bằng hệ thống cảm biến đã có ở một số nơi |

Để cài đặt hiệu ứng thời tiết trên bản đồ, ta gọi phương thức `setWeather` từ đối tượng `Map`  
Phương thức `setWeather` nhận vào giá trị là tên thời tiết hoặc giá trị enum [Weather](/reference/map?id=weather-enum) và một
interface [WeatherProvider](reference/map?id=weatherprovider-interface)

```js
map.setWeather(weather)
```

Example:

Set thời tiết với kiểu thời tiết cụ thể thì ta có thể set như sau (không cần tham số `WeatherProvider`):

```js
map.setWeather("rainy")
map.setWeather(map4d.Weather.Snowy)
```

Nếu bạn muốn set kiểu thời tiết `Live` thì phải cung cấp thêm tham số `WeatherProvider`:

```js
let weatherProvider: map4d.WeatherProvider = {
    refreshTime: 120,//second
    getWeather: function(location, callback) {
        // Source code xử lý lấy thời tiết từ server của bạn
        let weather = map4d.Weather.Snowy // Ex: server trả về là snowy
        // Sau đó Gọi hàm callback với giá trị thời tiết trả về từ server
        callback(weather);
    }
}
this.map.setWeather(map4d.Weather.Live, weatherProvider)
```


## Hiệu ứng thời gian trong ngày

Map4dMap JavaScript SDK cho phép thay đổi hiệu ứng theo thời gian trong ngày của bản đồ thành sáng, trưa, chiều, tối...  
Tùy thuộc thời gian trong ngày mà vị trí đổ bóng sẽ khác nhau và màu sắc của ánh sáng sẽ khác nhau.

Các loại hiệu ứng thời gian:

| Name      | TypeScript           | Description                         |
|-----------|----------------------|-------------------------------------|
| none      | TimeEffect.None      | Không có hiệu ứng thời gian         |
| live      | TimeEffect.Live      | Hiệu ứng thời gian được lấy tự động |
| morning   | TimeEffect.Morning   | Hiệu ứng buổi sáng                  |
| noon      | TimeEffect.Noon      | Hiệu ứng buổi trưa                  |
| afternoon | TimeEffect.Afternoon | Hiệu ứng buổi chiều                 |
| evening   | TimeEffect.Evening   | Hiệu ứng buổi tối                   |


Để cài đặt hiệu ứng thời gian trên bản đồ, ta gọi phương thức `setTimeEffect` từ đối tượng `Map`  
Phương thức `setTimeEffect` nhận vào giá trị là tên hiệu ứng thời gian hoặc giá trị enum [TimeEffect](/reference/map?id=timeeffect-enum)

```js
map.setTimeEffect(effect)
```

Example:

```js
map.setTimeEffect("morning")
map.setTimeEffect(map4d.TimeEffect.Evening)
```

Example:
<iframe style="min-width: 900px;" height="600px" src="//jsfiddle.net/huydang/48su6hgx/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
