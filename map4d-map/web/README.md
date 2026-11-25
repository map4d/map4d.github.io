# Map4dMap JavaScript SDK
[![map4d](https://img.shields.io/badge/map4d-map-orange)](https://map4d.vn/)
[![platform](https://img.shields.io/badge/platform-js-ff69b4.svg)](https://map.map4d.vn/)

Map4dMap JavaScript SDK cho phép bạn tùy chỉnh bản đồ với nội dung để hiển thị trên các trang web và thiết bị di động.

## Hello, World

<iframe src="./html/overview.html" class="is-fullwidth" height="270px"></iframe>

```HTML
<!DOCTYPE html>
<html>
<body>
  <div id="map" style="width:100%;height:250px;"></div>
  <script>
    function initMap() {
      let options = {
        center: {lat: 16.072163491469226, lng: 108.22690536081757},
        zoom: 15,
        controls: true
      }
      let map = new map4d.Map(document.getElementById("map"), options)
    }
  </script>
  <script src="https://api.map4d.vn/sdk/map/js?version=SDK_VERSION&key=YOUR_API_KEY&mapId=MAP_ID&callback=initMap"></script>
</body>
</html>
```

## Load Map4D Web SDK

Map4D Web SDK có thể được tải bằng thẻ script được thêm bên trong file HTML

```JavaScript
<script defer src="https://api.map4d.vn/sdk/map/js?version=SDK_VERSION&key=YOUR_API_KEY&mapId=MAP_ID&callback=CALLBACK_FUNCTION"></script>
```

Trong đó:
- **SDK_VERSION**: phiên bản JS Web SDK, phiên bản mới nhất hiện tại là: `3.3`
- **YOUR_API_KEY**: là một mã định danh để xác thực các yêu cầu liên quan đến projects của bạn dùng trong việc sử dụng và thanh toán, tại trang nhà phát triển của Map4D <https://map.map4d.vn/developer/key/> *(yêu cầu tài khoản đã kích hoạt tính năng nhà phát triển)*
- **CALLBACK_FUNCTION**: tên hàm mà sẽ được gọi sau khi hoàn tất việc tải JS Web SDK
- **MAP_ID** *(optional)*: map id để lấy style, tham khảo [Map Style](https://map.map4d.vn/developer/mapstyle)


## Map DOM Elements

Để hiển thị bản đồ, cần phải chuẩn bị một vị trí cho nó. Để thực hiện việc này cần tạo 1 phần tử div được đặt tên và lấy tham chiếu bằng cách get DOM element

```HTML
<div id="map"></div>
```

### The Map Object

```js
map = new map4d.Map(document.getElementById("map"), options)
```

### Map Options

[MapOptions](/guides/map-options) là object cung cấp các thiết lập ban đầu để khởi tạo đối tượng bản đồ

### Samples

https://github.com/map4d/js-samples



