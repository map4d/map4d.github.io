# LatLngBounds
Lớp LatLngBounds đại diện cho một hình chữ nhật trong toạ độ địa lý, được biểu diễn bởi toạ độ 2 cực đông bắc và tây nam.

## 1. LatLngBounds & ILatLngBounds

```javascript
  type ILatLngBounds = LatLngBounds | [ILatLng, ILatLng] | [number, number, number, number]
  class LatLngBounds {
    constructor(sw: ILatLng, ne: ILatLng)
    getCenter(): LatLng // Lấy thông tin toạ độ điểm trung tâm
    getNortheast(): LatLng // Lấy thông tin toạ độ cực đông bắc
    getSouthwest(): LatLng // Lấy thông tin toạ độ cực tây nam
    extend(point: ILatLng): LatLngBounds // Tính lại toạ độ latLngBounds khi thêm một toạ độ mới.
  }
```

## 2. Tạo đối tượng LatLngBounds

```javascript
  let bounds = new map4d.LatLngBounds([8.606498, 104.699308], [10.567800, 107.974320])
```

Ngoài ra ta có thể extend các tọa độ vào trong LatLngBounds.
Ví dụ:
```javascript
	let bounds = new map4d.LatLngBounds()
	bounds.extend([8.606498, 104.699308])
	bounds.extend([10.567800, 107.974320])
	bounds.extend([10.767800, 105.974320])
```

## 3. Hướng dẫn sử dụng fitBounds

```javascript
fitBounds(bounds: ILatLngBounds, padding?: PaddingOptions, animationOptions?: AnimationOptions): void
```

```javascript
  // PaddingOptions
  interface PaddingOptions {
    top?: number // padding top
    bottom?: number // padding bottom
    left?: number // padding left
    right?: number // padding right
  }

  // AnimationOptions
  interface AnimationOptions {
    duration?: number // thời gian chuyển động nếu có animation, đơn vị: miliseconds
    easing?: (arg0: number) => number // phương trình chuyển động nếu người dùng truyền vào
    animate?: boolean // có animation hay không nếu animate = false thì mặc định duration = 0
  }

```
***Sử dụng:***

```javascript
      // Tạo đối tượng latlngbounds
      let latLngBounds = new map4d.LatLngBounds()

      // Thêm các toạ độ cần fitbounds
      latLngBounds.extend({lat: 12.218918, lng:105.087287})
      latLngBounds.extend({lat: 14.516814, lng:107.515272})
      latLngBounds.extend({lat: 11.563135, lng:108.075576})
      latLngBounds.extend({lat: 8.866595, lng:105.160668})

      // Khỏi tạo padding options
      let paddingOptions = {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
      }

      // Gọi hàm fitbounds (trong trường hợp này chúng ta không sử dụng animation)
      map.fitBounds(latLngBounds, paddingOptions, null)

      // Markers dùng để test
      // Marker dùng để test 2 điểm tây nam và đông bắc.
      let swMarker  = new map4d.Marker({
        position: latLngBounds.getSouthwest(),
        anchor: new map4d.Point(0.5, 1.0),
        title: "SouthWest"
      })
      swMarker.setMap(map)

      let neMarker  = new map4d.Marker({
        position: latLngBounds.getNortheast(),
        anchor: new map4d.Point(0.5, 1.0),
        title: "NorthEast"
      })
      neMarker.setMap(map)

  ```


License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
