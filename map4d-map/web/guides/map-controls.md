# Map Controls

## Các thao tác trên bản đồ

### Thao tác với chuột
- Chọn đối tượng hay một vị trí bất kỳ trên map
  - *Click chuột trái để chọn đối tượng hay một vị trí bất kỳ trên map.*
- Di chuyển map
  - *Giữ và di chuyển chuột trái để di chuyển map.*
- Xoay map
  - *Giữ và di chuyển chuột phải sang trái sang phải để xoay map.*
- Nghiêng map
  - *Giữ và di chuyển chuột phải lên xuống để nghiêng map.*
- Phóng to 1 mức zoom
  - *Click đúp chuột trái để tăng 1 mức zoom.*
- Thu phóng map
  - *Cuộn (scroll hoặc wheel) lên cuộn xuống để thay đổi mức zoom.*

### Thao tác bằng touch
- Chọn đối tượng hay một vị trí bất kỳ trên map
  - *Touch để chọn đối tượng hay một vị trí bất kỳ trên map.*
- Di chuyển map
  - *Touch và di chuyển ngón tay để di chuyển map.*
- Xoay map
  - *Dùng hai ngón tay di chuyển theo đường tròn để xoay map.*
- Nghiêng map
  - *Dùng 2 ngón tay đẩy lên xuống để nghiêng map.*
- Phóng to 1 mức zoom
  - *Touch 2 lần để tăng 1 mức zoom.*
- Thu phóng map
  - *Dùng 2 ngón tay di chuyển trái chiều để di chuyển map.*

### Thao tác bằng bàn phím (keyboard)
- Di chuyển map
  - *Sử dụng các phím mũi tên để di chuyển map.*
- Xoay map
  - *Shift+⇢: Xoay map sang trái.*
  - *Shift+⇠: Xoay map sang phải.*
- Nghiêng map
  - *Shift+⇡: Tăng độ nghiêng của map thêm 10 độ.*
  - *Shift+⇣: Giảm độ nghiêng của map xuống 10 độ.*
- Thu phóng map
  - *= / +: Tăng mức thu phóng map lên 1 mức.*
  - *Shift-= / Shift-+: Tăng mức thu phóng map lên 2 mức.*
  - *-: Giảm mức thu phóng map xuống 1 mức.*
  - *Shift--: Giảm mức thu phóng map xuống 2 mức.*

## Các phần tử điều khiển trên bản đồ

Bản đồ được hiển thị thông qua Map4D Web SDK có chứa các phần tử cho phép người dùng tương tác với bản đồ.  
Các phần tử này có thể được ẩn/hiện thông qua [options](/reference/map?id=mapoptions-interface) khi khởi tạo bản đồ.  
Mặc định các phần tử này sẽ không được hiển thị

Dưới đây là bản đồ hiển thị bảng điều khiển nằm ở vị trí phía dưới bên trái của bản đồ:
<iframe src="./html/map-controls.html" style="min-width: 1000px;" height="300px"></iframe>

Các phần tử điều khiển được cung cấp sẵn của Map4D:
- zoom: thay đổi mức zoom của map, gồm zoom in ![zoom-in](../resources/zoom-in.png) và zoom out ![zoom-out](../resources/zoom-out.png)
- direction: hiển thị hướng của bản đồ đang hiển thị ![direct-ion](../resources/direct-icon.png)
- geolocate: lấy vị trí hiện tại của người dùng ![location-icon](../resources/location-icon.png)

### Hiển thị bảng điều khiển trên bản đồ

- Để hiển thị bẳng điều khiển *(bao gồm **zoom**, **direction**, **3D button**)* ta set thuộc tính `controls` là `true` khi khởi tạo map
- Để hiển thị `geolocate`, ta set thuộc tính `geolocate` là `true`
- Để thiết lập vị trí hiển thị của bảng điều khiển, ta set giá trị cho thuộc tính `controlOptions`. Map4D Web SDK cung cấp 4 vị trí hiển thị là: `TOP_LEFT`, `TOP_RIGHT`, `BOTTOM_LEFT`, `BOTTOM_RIGHT`. Tham khảo: [ControlOptions](/reference/map?id=controloptions-enum)

```js
let options = {
  center: {lat: 16.051158793373546, lng: 108.22926387306055},
  zoom: 15,
  controls: true,
  geolocate: true,
  controlOptions: map4d.ControlOptions.BOTTOM_LEFT
}
```