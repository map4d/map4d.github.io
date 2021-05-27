# Polygon
Lớp Polygon cho phép người dùng vẽ một Polygon lên bản đồ.

## 1. Polygon & PolygoneOptions

```javascript
  interface PolygonOptions {
    paths: ILatLng[][] // Danh sách các toạ độ cần vẽ
    fillColor?: string // Màu sắc polygon
    fillOpacity?: number // Độ trong suốt polygon
    visible?: boolean // Ẩn hoặc hiện polygon
  }

  class Polygon {
    constructor(options: PolygonOptions) // Khỏi tạo polygon bằng PolygonOptions
    getMap(): Map // Lấy thông tin map
    setMap(map: Map): void // Cài đặt map cần vẽ polygon
    setPaths(paths: ILatLng[][]): void // Cài đặt danh sách các toạ độ cần vẽ polygon
    setFillColor(fillColor: string): void // Cài đặt màu sắc polygon
    setFillOpacity(fillOpacity: number): void // Cài đặt độ trong suốt polygon
    setVisible(visible: boolean): void // Cài đặt ẩn hiện polygon
    getPaths(): LatLng[][] // Lấy danh sách các toạ độ cần vẽ polygon
    getFillColor(): string // Lấy thông tin màu sắc
    getFillOpacity(): number // Lấy thông tin độ trong suốt
    isVisible(): boolean // Kiểm tra polygon ẩn hiện

	getUserData(): any // Lấy user data được gán cho polygon
    setUserData(data: any) // Thêm user data cho polygon
  }
```


## 2. Tạo polygon

```javascript
  //tạo đối tượng polygon từ PolygonOptions
  let polygonOption: map4d.PolygonOptions = {
      paths:
        [[{lat: 10.773201, lng: 106.700147}, {lat: 10.771783, lng: 106.700763},
          {lat: 10.772302, lng: 106.701901}, {lat: 10.773267, lng: 106.701493},
          {lat: 10.773201, lng: 106.700147}],
          // hole1
          [{lat: 10.772785, lng: 106.700738}, {lat: 10.772904, lng: 106.701304},
            {lat: 10.772752, lng: 106.701319}, {lat: 10.772650, lng: 106.700651},
            {lat: 10.772785, lng: 106.700738}],
          // hole2
          [{lat: 10.772356, lng: 106.700802}, {lat: 10.772479, lng: 106.701413},
            {lat: 10.772285, lng: 106.701497}, {lat: 10.772059, lng: 106.701064},
            {lat: 10.772356, lng: 106.700802}]], fillOpacity: 0.9
    }
  //thêm polygon vào map    
  let polygon = new map4d.Polygon(polygonOption)
  polygon.setMap(this.map)
  //Xóa polygon khỏi map
  polygon.setMap(null)
```

  ***Chú ý:***
  - Paths là một mảng chứa các mảng với mảng đầu tiên là polygon cần vẽ lên bản đồ. Các mảng tiếp theo là lỗ trên polygon đó.
  - Điểm đầu điểm cuối danh sách các điểm cần vẽ phải giống nhau
  - Xem demo ở ví dụ trên
```javascript
[ {lat: 10.773201, lng: 106.700147},
        {lat: 10.771783, lng: 106.700763},
        {lat: 10.772302, lng: 106.701901},
        {lat: 10.773267, lng: 106.701493},
        {lat: 10.773201, lng: 106.700147}]
```

## 3. Các sự kiện trên polygon

Sự kiện click phát sinh khi người dùng click vào polygon

```javascript
let clickEvent = this.map.addListener("click", (args) => {
      console.log("Polygon clicked: ")
      console.log(args)
    }, {polygon: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Sự kiện hover phát sinh khi người dùng rê chuột vào polygon

```javascript
  let hoverEvent = this.map.addListener("hover", (arg) => {
      console.log(Polygon hover: ")
      console.log(arg)
    }, {polygon: true})

    //sau khi dùng xong
    hoverEvent.remove();
```

Ngoài ra map4d SDK còn hỗ trợ các loại sự kiện khác như: long click, right click...

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
