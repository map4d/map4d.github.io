# Tích hợp với leaflet - map4dll sdk
Thư viện tích hợp map4dsdk và thư viện nguồn mở leaflet, mang trải nghiệm 3D cho người dùng leaflet.

## 1. Cài đặt

  - Tải thư viện map4dll (Map4D Leaflet), tích hợp với leaflet tại [here](https://raw.githubusercontent.com/iotlinkadmin/map4d-web-sdk/master/sdk-leaflet/map4dll@1.1.0.prod)

  - Nhúng mã nguồn SDK vào trang web của bạn bằng tag script

```html
<script src="[PATH]/map4dll@[version].js"></script>
```

**Chú ý: tên script mã nguồn phải chứa "map4dll@", nếu không SDK sẽ không hoạt động.**

## 2. Tạo map

  - Khai báo 1 div để chứa map

```html
<body>
<div id="yourmapid"> <!--Map Container Here--> </div>

<script src="[PATH]/map4dll@[version].js"></script>
</body>
```
  - Khởi tạo map với id

```html
<body>
<div id="yourmapid"></div>

<script src="[PATH]/map4dll@[version].js"></script>

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
Tương tự với các thuộc tính khởi tạo khi sử dụng map4dsdk
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
  controlOptions?: ControlOptions,
  
  is3dMode?: boolean //khởi tạo chế độ 3D hoặc 2D
}
```

## 4. Chuyển chế độ 3D và 2D (SwitchMode)
Phiên bản map4dll không hỗ trợ chuyển tự động giữa chế độ 3D và 2D, muốn chuyển từ chế độ 2D qua 3D và ngược lại, sử dụng hàm enable3dMode(boolean).
Sự kiện modeChanged để theo dõi sự chuyển đổi từ chế độ 3D sang 2D và ngược lại.

## 5. Truy xuất đến leaflet
Phiên bản map4dll hỗ trợ phương để truy xuất đến thể hiện của leaflet map và leaflet tile layer, thông qua 2 thuộc tính

```javascript
  map.leafletMap --> tham chiếu đến leaflet map 
  map.leafletTileLayer --> tham chiếu đến leaflet tile layer
```

Người dùng có thể sử dụng 2 thuộc tính này để tương tác với thư viện leaflet.

## 6. Sử dụng plugin của leaflet 
Khi sử dụng thư viện map4dll, người dùng có thể tích hợp thêm các plugin có sẵn của leaflet theo cách thông thường.

```html
<body>
<div id="yourmapid"> <!--Map Container Here--> </div>

<script src="[PATH]/map4dll@[version].js"></script>
<script src="leaflet-plugin-script"></script>
</body>
```

Chú ý: khi nhúng các plugin của leaflet vào, thì phải đảm bảo mã nhúng script của plugin phải nằm sau mã nhúng script map4dll.

## 7. Sử dụng leaflet cho chế độ 2D và map4dsdk cho chế độ 3D
map4dll là bản tích hợp giữa leaflet và map4dsdk, khi sử dụng ở chế độ 2D, leaflet sẽ được hiển thị, khi sử dụng ở chế độ 3D, map4dsdk sẽ được hiển thị, các đối tượng được thêm cho leaflet ở chế độ 2D, sẽ hoạt động độc lập với các đối tượng được thêm trên map4dsdk ở chế độ 3D. 
Các đối tượng của map4dll hoạt động tương tự với các đối tượng trên map4dsdk.


License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
