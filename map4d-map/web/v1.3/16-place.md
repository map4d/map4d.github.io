# Place
Lớp Place dùng để nhận dạng 1 địa điểm xác định trên bản đồ. Place bao gồm các place có sẵn trên bản đồ.

## 1. Place

  ```javascript
   class Place {
       constructor(options?: PlaceOptions) // hàm tạo place từ PlaceOptions
       getId(): string  // lấy id của place
       getName(): string // lấy tên của place
       getLocation(): LatLng  // lấy vị trí của place
       getMap(): Map // lấy Map mà place đc thêm vào
   }
  ```

## 2. Enable Place

- Cho phép hoặc ko cho phép hiển thị Place trên bản đồ

```javascript
class Map {
   setPlacesEnabled(enabled: boolean): void
   isPlacesEnabled(): boolean
}
```
- Ví dụ: 

```javascript
// enable or disable place
map.setPlacesEnabled(true) // cho phép vẽ place
map.setPlacesEnabled(false) // ko hiển thị place

// kiểm tra hiện tại place được cho phép vẽ hoặc ko
let isPlaceEnabled = map.isPlacesEnabled()
```

## 3. Filter Place

- Bộ lọc hiển thị những type của place được vẽ trên map. 

- Lệnh setFilterPlaces cuối cũng sẽ lọc những type ở lệnh cuối đc vẽ.

```javascript
class Map {
   setFilterPlaces(placeTypes: string[]): void
   getFilterPlaces(): string[]
}
```
- Ví dụ: 

```javascript
// bộ lọc hiển thị cho type cafe. 
map.setFilterPlaces(["cafe"]) // cho phép vẽ place
let palcesType = map.getFilterPlaces() // mảng danh sách các type của place đang được hiển thị
```

Set lại null hoặc empty list để tắt bộ lọc và hiển thị lại tất cả các place.

## 4. Selected Place

- HighLight place được chợn.

```javascript
class Map {
   setSelectedPlace(id: string): void
   getSelectedPlace(): string
}
```
- Ví dụ: 

```javascript
map.setSelectedPlace("your_id") // highlight place với id của place.
let placeId = map.getSelectedPlace() // get place ID của place đang được chọn.

// kiểm tra hiện tại place được cho phép vẽ hoặc ko
let isPlaceEnabled = map.isPlacesEnabled()
```

## 5. Các sự kiện trên place

Sự kiện click phát sinh khi người dùng click vào place

```javascript
let clickEvent = this.map.addListener("click", (args) => {
      console.log("Place clicked: ")
      console.log(args)
    }, {place: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Sự kiện hover phát sinh khi người dùng rê chuột vào place

```javascript
  let hoverEvent = this.map.addListener("hover", (arg) => {
      console.log("place hover: ")
      console.log(arg)
    }, {place: true})

    //sau khi dùng xong
    hoverEvent.remove();
```

Ngoài ra map4d SDK còn hỗ trợ các loại sự kiện khác như: long click, right click...

License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
