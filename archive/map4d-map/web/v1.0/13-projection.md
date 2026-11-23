# Projection
Lớp Projection cho phép người dùng thực hiện các phép chiếu

## 1. Khởi tạo lớp Projection

```javascript
  let projection = new map4d.Projection(map)
```

## 2. Chuyển đổi từ toạ độ LatLng sang toạ độ Screen

```javascript
    let screenCoordinate = projection.fromLatLngToScreen(new LatLng(10.771783, 106.700763))
```

## 3. Chuyển đổi từ toạ độ LatLng sang toạ độ Screen với elevation (meter)

```javascript
    let target = new LatLng(10.771783, 106.700763)
    let elevation = 10
    let screenCoordinate = projection.fromLatLngToScreen(target, elevation)
```

## 4. Chuyển đổi từ toạ độ Screen sang toạ độ LatLng

```javascript
    let latLngCoordinate = projection.fromScreenToLatLng({x: 100, y: 100})
```

## 5. Chuyển đổi từ toạ độ Screen sang toạ độ LatLng với elevation (meter)

```javascript
    let screenCoordinate = {x: 100, y: 100}
    let elevation = 20
    let latLngCoordinate = projection.fromScreenToLatLng(screenCoordinate, elevation)
```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
