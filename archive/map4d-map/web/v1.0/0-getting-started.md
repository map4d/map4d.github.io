# Cài đặt Map4D-SDK

## 1. Cài đặt

  - Tải mã nguồn mới nhất của SDK từ [link](https://github.com/iotlinkadmin/map4d-web-sdk/tree/master/sdk)

  - Nhúng mã nguồn SDK vào trang web của bạn bằng tag script

```html
<script src="[PATH]/map4dsdk@[version].js"></script>
```

**Chú ý: tên script mã nguồn phải chứa "map4dsdk@", nếu không SDK sẽ không hoạt động.**

## 2. Tạo map

  - Khai báo 1 div để chứa map

```html
<body>
<div id="yourmapid"> <!--Map Container Here--> </div>

<script src="[PATH]/map4dsdk@[version].js"></script>
</body>
```
  - Khởi tạo map với id

```html
<body>
<div id="id"></div>

<script src="[PATH]/map4dsdk@[version].js"></script>

<script>
  let map = new map4d.Map(document.getElementById("yourmapid"),
      {
        center: [10.793113, 106.720739],
        zoom: 17,
        geolocate: true,
        controls :true,
        tilt: 0,
        controlOptions: map4d.ControlOptions.BOTTOM_RIGHT,
        accessKey: "${access_key}"
      }
    )
</script>
</body>
```

- Thiết lập style cho map

```css
  <style>
	body {
	  margin: 0px;
	  height: 100%;
	}

	#yourmapid {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  background-color: #f2efe9;
	}
  </style>
  ```

## 3. Access key
Để sử dụng map4d JavaScript API, bạn cần phải có access key (bạn có thể sử dụng một access key cho các api trên web, iOS, Android).
Để nhận được access key vui vòng truy cập đường link sau ([đăng ký key](http://map4d.vn))

## 4. Tùy chọn khi tạo map

```javascript
{
  center: ILatLng,
  accessKey: string
  zoom?: number,
  tilt?: number,
  bearing?: number,
  minZoom?: number,
  maxZoom?: number,
  geolocate?: boolean,
  controls?: boolean,
  controlOptions?: ControlOptions
}

enum ControlOptions {
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT
}
```

- center: vị trí khởi tạo trung tâm của map
- zoom, tilt, bearing: mức zoom, độ nghiêng và góc xoay khởi tạo cho map
- minZoom, maxZoom: giới hạn zoom của map có nghĩa mức zoom của map chỉ được nằm trong khoảng [minZoom, maxZoom]. Nếu không set thì giá trị mặc định sẽ là [0, 22]
- geolocate: bật/tắt chức năng lấy vị trí hiện tại của người dùng, mặc định là tắt
- accessKey: key để sử dụng map ([đăng ký key](http://map4d.vn))
- controls: ẩn hiện bảng điều khiển, mặc định là ẩn
- controlOptions: vị trí của bảng điều khiển giá trị mặc định là BOTTOM_RIGHT


## 5. Giới hạn mức zoom tối đa và tối thiểu
Có thể set thông qua MapOptions khi khởi tạo map hoặc là phương thức setMinZoom/ setMapZoom
```javascript
  map.setMinZoom(7)
  map.setMaxZoom(18)
```

## 6. Lấy các thông số của map.

```javascript
getCamera(): CameraPosition

```
- getCamera: Cho phép lấy các thông số của map như độ nghiêng, độ xoay, điểm trung tâm, mức zoom hiện tại

```javascript
  getMapUrl(): string
```
- getMapUrl: trả về thông tin url hiện tại của map.

```javascript
  getBounds(paddingOptions?: PaddingOptions): LatLngBounds
```
- getBounds: trả về thông tin LatLngBounds của map với các thông số camera và màn hình hiện tại.

```javascript
  getMinZoom(): number
```
- getMinZoom: trả về thông tin mức zoom tối thiểu của map.

```javascript
  getMaxZoom(): number
```
- getMaxZoom: trả về thông tin mức zoom tối đa của map.


```javascript
  getWeather(): Weather
```
- getWeather: trả về thông tin hiệu ứng thời gian của map


```javascript
  is3dMode(): boolean
```
- is3dMode: Kiểm tra map đang ở chế độ 2D hay 3D. 


```javascript
  getPreferMinZoom(): number
```
- getPreferMinZoom: trả về thông tin mức zoom tối thiểu theo trạng thái map(2D or 3D) và phụ thuộc vào **SwitchMode**
  - **Ví dụ**:

    - *Map đang ở chế độ Manual*:   
    Nếu map đang ở 2D: trả về mức zoom tối thiếu khi đang ở chế độ 2D 
    <br/>Nếu map đang ở 3D: trả về mức zoom tối thiểu khi đang ở chế độ 3D (Vì chế độ này không cho phép chuyển từ 3D xuống 2D) => [ minZoom >= 17 ]

    - *Map đang ở chế độ Auto*:
    <br/>Nếu map đang ở chế độ 2D: trả về mức zoom tối thiếu khi đang ở chế độ 2D
    <br/>Nếu map đang ở chế độ 3D: trả về mức zoom tối thiếu khi đang ở chế độ 2D (Vì chế độ này cho phép chuyển từ 3D xuống 2D)

    - *Map đang ở chế độ Auto3DTo2D*:
    <br/>Nếu map đang ở chế độ 2D: trả về mức zoom tối thiếu khi đang ở chế độ 2D
    <br/>Nếu map đang ở chế độ 3D: trả về mức zoom tối thiều khi đang ở chế độ 2D (Vì chế độ này cho phép chuyển từ 3D xuống 2D)

    - *Map đang ở chế độ Auto2DTo3D*:
    <br/>Nếu map đang ở chế độ 2D: trả về mức zoom tối thiếu khi đang ở chế độ 2D
    <br/>Nếu map đang ở chế độ 3D: trả về mức zoom tối thiều khi đang ở chế độ 3D (Vì chế độ này không cho phép chuyển từ 3D xuống 2D) => [ minZoom >= 17 ]

  > Chú ý: Ở mức zoom >= 17 mới có chế độ 3D và tìm hiểu chi tiết về các chế độ ở phía trên
  > Mức zoom tối thiểu khi đang ở chế độ 2D bằng với giá trị khi ta gọi hàm getZoom()
  > Đọc thêm phần 3d objects để có thêm cái nhìn về các mode chuyển đổi

## 7. Di chuyển map
Cho phép di chuyển map đến một vị trí bất kỳ

```javascript
    panBy(offset: IPoint, animationOptions?: AnimationOptions): void
    panTo(destination: ILatLng, animationOptions?: AnimationOptions): void
	moveCamera(camera: ICameraPosition, animationOptions?: AnimationOptions): void
	moveToMyLocation(animate: boolean): void
```

AnimationOption:

```javascript
  interface AnimationOptions {
    duration?: number // thời gian chuyển động nếu có animation, đơn vị: miliseconds
    easing?: (arg0: number) => number // phương trình chuyển động nếu người dùng truyền vào
    animate?: boolean // có animation hay không nếu animate = false thì mặc định duration = 0
  }
```

IPoint:

```javascript
IPoint  = Point | {lat: number, lng: number} | [number, number]
```

ICameraPosition:

```javascript
ICameraPosition = CameraPosition | {target: ILatLng, tilt: number, bearing: number, zoom: number}
```

- **panBy**: di chuyển map 1 khoảng x, y tính theo đơn vị point
  - offset: Point | {x: number, y: number} | [number, number]
  - animationOptions: tùy chọn, mặc định là null. Cho phép tùy biến chuyển động.
- **panTo**: di chuyển map đến 1 vị trí (LatLng) bất kỳ
  - destination: LatLng | {lat: number, lng: number} | [number, number]
  - animationOptions: tùy chọn, mặc định là null. Cho phép tùy biến chuyển động.
- **moveCamera**: di chuyển map đến 1 vị trí (LatLng) bất kỳ
  - destination: LatLng | {lat: number, lng: number} | [number, number]
  - zoom: giá trị zoom sau khi di chuyển tới vị trí đích
  - animationOptions: tùy chọn, mặc định là null. Cho phép tùy biến chuyển động.  
- **moveToMyLocation** di chuyển map tới vị trí hiện tại của người dùng (nếu geolocate được bật) 

 ## 8. Ghi chú
 Các kiểu dữ liệu **Point, LatLng, CameraPosition, SwitchMode, ControlOptions** là các kiểu dữ liệu của Map4D-SDK, muốn sử dụng được phải thông qua **module map4d**
 Ví dụ:
 ```javascript
 let location = new map4d.LatLng(10, 108);
 let point = new map4d.Point(1, 2)
 let camera = new map4d.CameraPosition([10, 108], tilt, bearing, zoom)
 map.setSwitchMode(map4d.SwitchMode.Auto)
 ```

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
