# Polyline
Lớp Polyline cho phép người dùng vẽ một polyline lên bản đồ.

## 1. Polyline & PolylineOptions

```javascript
  interface PolylineOptions {
    path: ILatLng[] // Một mảng danh sách các toạ độ cần vẽ polyline lên map
    strokeWidth?: number // Chiều rộng polyline tính bằng point
    strokeColor?: string // Màu sắc marker bằng mã hex
    strokeOpacity?: number // Độ trong suốt
    visible?: boolean // Ẩn hoặc hiện polyline
    closed?: boolean // Cho phép nối điểm đầu và điểm cuối lại với nhau.
  }

  class Polyline {
    constructor(options: PolylineOptions) // Khởi tạo polyline với PolylineOptions
    getPath(): LatLng[] // Lấy thông tin danh sách cách toạ độ cần vẽ polyline
    getMap(): Map // Lấy thông tin map.
    setMap(map: Map): void // Cài đặt map cần vẽ.
    setPath(path: ILatLng[]): void // Cài đặt danh sách các toạ độ cần vẽ.
    setStrokeWidth(strokeWidth: number): void // Cài đặt chiều rộng polyline.
    setClosed(closed: boolean): void // Cho phép nối điểm đầu và điểm cuối.
    setStrokeColor(strokeColor: string): void // Cài đặt màu sắc polyline.
    setStrokeOpacity(strokeOpacity: number): void // Cài đặt độ trong suốt cho polyline.
    setVisible(visible: boolean): void // Cài đặt ẩn hiện polyline.
    getStrokeWidth(): number // Lấy chiều rộng polyline
    getStrokeColor(): string // Lấy màu sắc polyline.
    getStrokeOpacity(): number // Lấy độ trong suốt polyline
    isVisible(): boolean // Kiểm tra ẩn hiện polyline
    isClosed(): boolean // Kiểm tra điểm đầu và điểm cuối có nối lại với nhau không ?

	getUserData(): any // Lấy user data được gán cho polyline
    setUserData(data: any) // Thêm user data cho polyline
  }
```


## 2. Tạo polyline

```javascript
  //tạo đối tượng polyline từ PolylineOptions
  let polyline = new map4d.Polyline({
        path: [
          [10.772431, 106.699380],
          [10.773201, 106.700147],
          [10.771783, 106.700763],
          [10.772302, 106.701901],
          [10.773267, 106.701493],
          [10.773599, 106.702835]
        ], visible: true, strokeColor: "#ff0000", strokeWidth: 10, strokeOpacity: 1.0,
        closed: true
      })
  //thêm polyline vào map    
  polyline.setMap(map)
  //Xóa polyline khỏi map
  polyline.setMap(null)
```

## 3. Các sự kiện trên polyline

Sự kiện click phát sinh khi người dùng click vào polyline

```javascript
let clickEvent = this.map.addListener("click", (args) => {
      console.log("Polyline clicked: ")
      console.log(args)
    }, {polyline: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Sự kiện hover phát sinh khi người dùng rê chuột vào polyline

```javascript
  let hoverEvent = this.map.addListener("hover", (arg) => {
      console.log("Polyline hover: ")
      console.log(arg)
    }, {polyline: true})

    //sau khi dùng xong
    hoverEvent.remove();
```

Ngoài ra map4d SDK còn hỗ trợ các loại sự kiện khác như: long click, right click...

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
