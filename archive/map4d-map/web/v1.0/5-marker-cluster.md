# Marker cluster
Marker clustering giúp bạn quản lý nhiều markers ở các level zoom. Khi một người sử dụng xem map ở một zoom level cao, các marker riêng được hiển thị trên map. Khi người dùng zoom map ra, xem map với mức độ chi tiết ít hơn, các marker sẽ được tập hợp lại thành các cụm để người xem map dễ dàng hơn.

## 1. MarkerClusterer & MarkerClusterOptions
```javascript
	interface MarkerClusterOptions {

    minZoom?: number

    maxZoom?: number

    radius?: number

    zoomOnClick?: boolean
  }

  class MarkerClusterer {
    constructor(markers: Marker[], options?: MarkerClusterOptions)
    setZoomOnClick(zoomOnClick: boolean): void
    setMap(map: Map): void
  }
```

- **MarkerClusterOptions**
	- minZoom: Mức zoom nhỏ nhất mà cluster được sinh ra (mặc định là 0)
	- maxZoom: Mức zoom lớn nhất mà cluster được sinh ra (mặc định là 22)
	- radius: bán kính cluster tính bằng px (mặc định là 100)
	- zoomOnClick: Quyết định có trigger sự kiện move tới cụm vừa click vào hay không (mặc định là có).

- **MarkerClusterer**
	- constructor: chứa tham số đầu vào là danh sách các cluster muốn add vào cụm và thông số tùy chỉnh cho MarkerCluster

## 2. Tạo Marker cluster
```javascript
let locations = [
      [10.879162, 106.700935],
      [10.881859, 106.705741],
      [10.880173, 106.712951],
      [10.895345, 106.716041],
      [10.895345, 106.698188],
      [10.737187, 106.539230],
      [10.737524, 106.559829],
      [10.713912, 106.558456],
      [10.713912, 106.524124],
      [10.779685, 106.786422],
      [10.783732, 106.808395],
      [10.792838, 106.797065],
      [10.752028, 106.804275],
      [10.919617, 106.494598],
      [10.651160, 106.689605],
      [10.652510, 106.666259]
]
let markers = locations.map(function(location) {
      return new map4d.Marker({
        position: [location[0], location[1]],
        icon: new map4d.Icon(32, 32, "https://cdn3.iconfinder.com/data/icons/map-markers-2/512/marker_2-512.png"),
        anchor: new map4d.Point(0.5, 1.0),
      })
    })
let cluster = new map4d.MarkerClusterer(markers, {radius: 150})
cluster.setMap(map)
```
License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
