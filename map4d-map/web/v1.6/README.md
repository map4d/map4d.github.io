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
  <script src="https://api.map4d.vn/sdk/map/js?version=SDK_VERSION&key=YOUR_API_KEY&callback=initMap"></script>
</body>
</html>
```

## Load Map4D Web SDK

Map4D Web SDK có thể được tải bằng thẻ script được thêm bên trong file HTML

```JavaScript
<script defer src="https://api.map4d.vn/sdk/map/js?version=SDK_VERSION&key=YOUR_API_KEY&callback=CALLBACK_FUNCTION"></script>
```

Trong đó:
- **SDK_VERSION**: phiên bản Map4D Web SDK, phiên bản mới nhất hiện tại là: `1.6.0`
- **YOUR_API_KEY**: là một mã định danh để xác thực các yêu cầu liên quan đến projects của bạn dùng trong việc sử dụng và thanh toán, liên hệ [map4d.vn](https://map4d.vn/) để nhận API key
- **CALLBACK_FUNCTION**: tên hàm mà sẽ được gọi sau khi hoàn tất việc tải Map4D Web SDK


## Map DOM Elements

Để hiển thị Map4D, cần phải chuẩn bị một vị trí cho nó. Để thực hiện việc này cần tạo 1 phần tử div được đặt tên và lấy tham chiếu bằng cách get DOM element

```HTML
<div id="map"></div>
```

### The Map Object

```js
map = new map4d.Map(document.getElementById("map"), options)
```

### Map Options

[MapOptions](/guides/map-options) là object cung cấp các thiết lập ban đầu để khởi tạo đối tượng Map4D