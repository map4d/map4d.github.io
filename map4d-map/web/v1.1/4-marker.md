# Marker
Lớp Marker cho phép người dùng add một điểm ghim trên bản đồ tại một vị trí xác định.

## 1. Marker & MarkerOptions

  ```javascript
  interface MarkerOptions {
    position: ILatLng //vị trí đặt marker
    visible?: boolean //ẩn hiện marker
    anchor?: IPoint //điểm neo của marker
    labelAnchor?: IPoint  //điểm neo của label so với marker
    icon?: Icon | string //icon marker có thể là 1 icon hoặc 1 url
    elevation?: number //độ cao so với mặt nước biển
    title?: string //tiêu đề của marker
    snippet?: string//mô tả ngắn gọn của marker
    windowAnchor?: IPoint //điểm neo của bảng thông tin marker (bảng thông tin này sẽ hiện khi click vào marker)
    zIndex?: number // z index của annotation. Annotation nào có z index cao hơn sẽ đè lên annotation có z index thấp hơn. Mặc định là 0
    label?: string | MarkerLabel // Vẽ chữ ở tâm markerc
    draggable?: boolean // Bật tắt tính năng kéo marker qua vị trí khác
    iconView?: string | Node // marker iconview có thể add node HTML vào  
    bringFrontBuilding?: boolean // cho phép marker hiển thị phía trên building (mặc định là có)
  }
  ```

  ```javascript
  class Marker {
    constructor(options: MarkerOptions) //hàm tạo marker từ 1 MarkerOptions
    setMap(map: Map)  //khi gọi set map, marker sẽ được hiển thị trên map, khi set map = null, marker sẽ được xóa khỏi map
    setPosition(position: ILatLng)
    setVisible(visible: boolean)
    setAnchor(anchor: IPoint)
    setLabelAnchor(labelAnchor: IPoint): void
    setIcon(icon: Icon | string)
    setElevation(elevation: number)
    setZIndex(zIndex: number): void
    setTitle(title: string): void
    setDraggable(draggable: boolean): void
    setSnippet(snippet: string): void
    setWindowAnchor(anchor: IPoint): void
    setInfoWindow(infoWindow: string | Node): void
    setInfoContents(infoContents: string | Node): void
    setBringFrontBuilding(bringFrontBuilding: boolean): void 
    setLabel(label: string | MarkerLabel): void
    setIconView(iconView: string | Node ): void
    getZIndex(): number
    getPosition(): LatLng
    isVisible(): boolean
    getAnchor(): Point
    getLabelAnchor(): Point
    getIcon(): Icon | string
    getElevation(): number
    getMap(): Map
    getTitle(): string
    getSnippet(): string
    isInfoWindowShown(): boolean
    isDraggable(): boolean
    isBringFrontBuilding(): boolean
    getIconView():  string | Node
    hideInfoWindow(): void //ẩn bảng thông tin marker
    showInfoWindow(): void //hiện bảng thông tin marker
	getUserData(): any // Lấy user data được gán cho marker
    setUserData(data: any) // Thêm user data cho marker
  }
```

```javascript
  interface MarkerLabelOptions {
    text: string
    color?: string
    fontWeight?: string
    fontSize?: number
    maxWidth?: number
    line?: number
    halo?: boolean
    haloColor?: string
    anchor?: IPoint,
    margin?: MarginOptions
  }
```

```javascript
  class MarkerLabel {
    constructor(options: MarkerLabelOptions)
    getColor(): string
    getFontWeight(): string
    getFontSize(): number
    getText(): string
    hasHalo(): boolean
    getHaloColor(): string
    getAnchor(): Point
    getMargin(): MarginOptions
  }
```

```javascript
  class Icon {
    constructor(width: number, height: number, url: string) //tạo icon với các thông số
    clone(): Icon //tạo bản sao 1 icon
    getWidth(): number
    getHeight(): number
    getUrl(): string
  }
```
***Chú ý:***
  - Width, height của icon và marker mặc định là 32x32 nếu không cung cấp giá trị.
  - Nếu không truyền icon thì hệ thống sẽ sử dụng hình ảnh marker mặc định.
  - Đối với đối tượng icon, hoặc hàm setIcon truyền vào 1 url là đường dẫn tới hình ảnh icon.
    - Để hỗ trợ hiển thị marker trên nhiều màn hình 1x (màn hình thông thường), 2x (màn hình Apple rentina, hoặc các màn hình độ phân giải cao 2k, 4k) bạn phải chuẩn bị 3 ảnh 1x, 2x, 3x (thêm hậu tố @1x, @2x, @3x) và khi gán giá trị cho url cho icon thì truyền vào đường dẫn icon 1x (http://yourwebsite.com/path/image-marker@1x.png). SDK sẽ tự động hiển thị ảnh phù hợp với màn hình đang hiển thị.
    - Nếu đường dẫn hình ảnh truyền vào không có hậu tố @1x thì hình ảnh sẽ được tự động scale để hiển thị phù hợp.

## 2. Tạo marker

```javascript
//tạo đối tượng marker từ MarkerOption
let marker = new map4d.Marker({
  position: {lat: 10.793113, lng:106.720739},
  icon: new map4d.Icon(32, 32, "https://raw.githubusercontent.com/at-tantv/public_url/master/ic_test_01@1x.png"),
  anchor: [0.5, 0.5],
})
//thêm marker vào map    
marker.setMap(map)
```

## 3. Tạo marker với iconView

```javascript
//tạo đối tượng marker với iconView  
  let marker = new map4d.Marker({
    position: {lat: 10.773766, lng:106.709001},
    iconView: `<div style=\"width: 32px; height: 32px; background-color: red; text-align: center; color: #000000;\">Text</div>`,
    anchor: [0.5, 0.5],
  })
//thêm marker vào map    
marker.setMap(map)
```

![CocoaPods](../resources/4-marker-1.png)

- Bạn có thể vẽ marker bằng HTML node thông qua thuộc tính iconView như trên

## 4. Xóa marker

Để xóa marker khỏi map ta gán map về null.

```javascript
//Xóa marker khỏi map
marker.setMap(null)
```
  
## 5. Hiển thị bảng thông tin marker
Khi marker có tiêu đề hoặc mô tả (title & snippet), nếu người dùng click vào marker, thông tin marker sẽ được hiển thị dựa vào điểm neo windowAnchor.

```javascript
    let marker = new map4d.Marker({
      title: "Demo title",
      snippet: "Demo description",
      position: {lat: 10.773766, lng:106.709001},
    })
    marker.setMap(this.map)
```

![CocoaPods](../resources/4-marker-2.png)
    
## 6. Tùy chọn hiển thị thông tin marker
Khi marker có tiêu đề hoặc mô tả (title & snippet), nếu người dùng click vào marker, thông tin marker sẽ được hiển thị (dựa vào điểm neo windowAnchor)

- Tùy biến nội dung thông tin với layout mặc định
```javascript
    marker.setInfoContents("có thể là string hoặc html") 
```

- Tùy biến bảng hiển thị thông tin bao gồm cả layout và nội dung
```javascript
    marker.setInfoWindow("có thể là string hoặc html")
```

## 7. Vẽ chữ lên marker
Chúng ta có thể vẽ chữ lên marker thông qua thuộc tính label.

```javascript
//tạo đối tượng marker từ MarkerOption
let marker = new map4d.Marker({
  position: {lat: 10.793113, lng:106.720739},
  anchor: [0.5, 1.0],
  label: new map4d.MarkerLabel({text: "Text", color: "000000", fontSize: 12})
})

//thêm marker vào map    
marker.setMap(map) 
```

Như ví dụ trên thì vẽ chữ "Text" màu đen lên marker và kích thước chữ là 12.

![CocoaPods](../resources/4-marker-3.png)

## 8. Draggable marker 
Chúng ta có thể cho phép người dùng kéo marker tới vị trí khác bằng cách bật thuộc tính **draggable** bằng true (mặc đinh thuộc tính này được khởi tạo là false).

```javascript
let marker = new map4d.Marker({
  position: {lat: 10.793113, lng:106.720739},
  draggable: true
})
marker.setMap(map) 
```

Với việc thêm marker vào bản đồ bằng cách trên thì ta có thể kéo marker tới một vị trí khác bằng chuột.
Ngoài ra chúng ta có thể sử dụng hàm **setDraggable** để bật tắt tính năng này
```javascript
marker.setDraggable(true)
```

## 9. Các sự kiện trên marker

Sự kiện click phát sinh khi người dùng click vào marker

```javascript
let clickEvent = this.map.addListener("click", (args) => {
      console.log("Marker clicked: ")
      console.log(args)
    }, {marker: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Sự kiện hover phát sinh khi người dùng rê chuột vào marker

```javascript
  let hoverEvent = this.map.addListener("hover", (arg) => {
      console.log("Marker hover: ")
      console.log(arg)
    }, {marker: true})

    //sau khi dùng xong
    hoverEvent.remove();
```

Các sự kiện khi người dùng kéo draggable marker
```javascript
let dragStart = this.map.addListener("dragStart", (args) => {
  // Sự kiện này sẽ được gọi khi bắt đầu kéo draggable marker
}, {marker: true})

let drag = this.map.addListener("drag", (args) => {
  // Sự kiện này sẽ được gọi trong khi kéo draggable marker
}, {marker: true})

let dragEnd = this.map.addListener("dragEnd", (args) => {
  // Sự kiện này sẽ được gọi sau khi kéo draggable marker xong
}, {marker: true})

```

Ngoài ra map4d SDK còn hỗ trợ các loại sự kiện khác như: long click, right click...

## 10. Một vài lưu ý khi vẽ Marker
- bringFrontBuilding: Mặt định là true, marker nào set bằng true thì sẽ được hiển thị trước, nếu có cùng giá trị thì sẽ vẽ theo zIndex
- zIndex: Marker nào có zIndex lớn hơn sẽ ưu tiên hiển thị trước, zIndex càng lớn càng sẽ được vẽ sau.

Ví dụ: 
```javascript

    let markerA = new map4d.Marker({
      position: {lat: 10.703113, lng: 106.720739},
      icon: new map4d.Icon(32, 32, "https://raw.githubusercontent.com/at-tantv/public_url/master/ic_test_01@1x.png"),
      anchor: [0.5, 1.0],
      zIndex: 5,
    })

    let markerB = new map4d.Marker({
      position: {lat: 10.703113, lng: 106.720739},
      icon: new map4d.Icon(32, 32, "https://raw.githubusercontent.com/at-tantv/public_url/master/ic_test_01@1x.png"),
      anchor: [0.5, 1.0],
      zIndex: 2,
    })

    markerA.setMap(this.map)
    markerB.setMap(this.map)
```
- Như ví dụ trên thì markerA sẽ hiển thị phía trước marker vì nó có zIndex lớn hơn markerB.

- zIndex bằng nhau thì add vô sau sẽ vẽ sau.

Ví dụ:
```javascript

    let markerA = new map4d.Marker({
      position: {lat: 10.703113, lng: 106.720739},
      icon: new map4d.Icon(32, 32, "https://raw.githubusercontent.com/at-tantv/public_url/master/ic_test_01@1x.png"),
      anchor: [0.5, 1.0],
    })

    let markerB = new map4d.Marker({
      position: {lat: 10.703113, lng: 106.720739},
      icon: new map4d.Icon(32, 32, "https://raw.githubusercontent.com/at-tantv/public_url/master/ic_test_01@1x.png"),
      anchor: [0.5, 1.0],
    })

    markerA.setMap(this.map)
    markerB.setMap(this.map)
```
- Như ví dụ trên thì markerB sẽ hiển thị phía trước markerA vì cả 2 marker có cùng zIndex nhưng markerB lại add vô sau markerA.

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
