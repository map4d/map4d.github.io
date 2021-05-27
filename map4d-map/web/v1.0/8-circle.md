# Circle
Lớp Circle cho phép người dùng vẽ một Circle lên map.

## 1. Circle & CircleOptions

```javascript
  interface CircleOptions {
    center: ILatLng // Tâm của Circle
    radius?: number // Bán kính Circle tính theo mét
    fillColor?: string // Màu sắc Circle theo hex
    fillOpacity?: number // Độ trong suốt Circle
    visible?: boolean // Ẩn hoặc hiện Circle
  }

  class Circle {
    constructor(options: CircleOptions) // Khởi tạo Circle bằng CircleOptions
    getMap(): Map // Lấy thông tin map
    setMap(map: Map): void // Cài đặt map cần vẽ Circle
    setCenter(center: ILatLng): void // Cài đặt tâm Circle
    setRadius(radius: number): void // Cài đặt bán kính Circle
    setFillColor(fillColor: string) // Cài đặt màu sắc Circle
    setFillOpacity(fillOpacity: number) // Cài đặt độ trong suốt Circle
    setVisible(visible: boolean) // Cài đặt ẩn hiện Circle
    getCenter(): LatLng // Lấy thông tin tâm Circle
    getRadius(): number // Lấy thông tin bán kính Circle
    getFillColor(): string // Lấy thông tin màu sắc Circle
    getFillOpacity(): number // Lấy thông tin độ trong suốt Circle
    isVisible(): boolean // Kiểm tra ẩn hiện Circle

	getUserData(): any // Lấy user data được gán cho polygon
    setUserData(data: any) // Thêm user data cho polygon
  }
```


## 2. Tạo circle

```javascript
  //tạo đối tượng circle từ CircleOptions
  let circle = new map4d.Circle({center: {lat: 10.773201, lng: 106.700147}, radius: 100})

  //thêm circle vào map    
  circle.setMap(this.map)
  //xóa circle khỏi map
  circle.setMap(null)
```

## 3. Các sự kiện trên circle

Sự kiện click phát sinh khi người dùng click vào circle

```javascript
let clickEvent = this.map.addListener("click", (args) => {
      console.log("Circle clicked: ")
      console.log(args)
    }, {circle: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Sự kiện hover phát sinh khi người dùng rê chuột vào circle

```javascript
  let hoverEvent = this.map.addListener("hover", (arg) => {
      console.log(Circle hover: ")
      console.log(arg)
    }, {circle: true})

    //sau khi dùng xong
    hoverEvent.remove();
```

Ngoài ra map4d SDK còn hỗ trợ các loại sự kiện khác như: long click, right click...

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
