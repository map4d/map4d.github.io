# Đối tượng 3D trên map

## 1. Bật tắt chế độ 3D
Để bật tắt chế độ 3D sử dụng:

```javascript
  map.enable3dMode(enabled: boolean): void
```

- **enable3dMode**: 
  - *true* : Bật chế độ 3D, tại chế độ này khi map ở mức zoom >= 17 sẽ hiển thị các đối tượng 3D
  - *false* : Tắt chế độ 3D
  
Người dùng có thể bật tắt chế độ 3D thông qua button 3D mode ở bảng điều khiển

## 2. Ẩn hiện các đối tượng 3D.
Như các bạn đã biết khi chúng ta bật chế độ 3D cho map. Thì khi mức zoom của map >=17 nó sẽ hiển thị các đối tượng 3D lên bản đồ bao gồm các đối tượng 3D của hệ thống và các đối tượng 3D do người dùng thêm vào. 

Map4D SDK cho phép người dùng có thể cài đặt ẩn hoặc hiện các đối tượng trên map

Chú ý: Chỉ ẩn các đối tượng trên map, còn đối tượng người dùng tự thêm vào thì sẽ không ẩn.

```javascript
enable3dMode(enabled: boolean): void
is3DMode(): boolean
```

```javascript
map.setObjectsEnabled(enabled: boolean): void
map.isObjectsEnabled(): boolean
```

- **setObjectsEnabled**: 
  - *true* : Hiện tất cả các đối tượng trên map.
  - *false* : Ẩn tất cả các đối tượng trên map trừ các đối tượng người dùng thêm vào.
- **isObjectsEnabled**: Trả về thông tin ẩn hiện của đối tượng trên map.

## 3. Thay đổi thời gian của map
Map 4D SDK cho phép người dùng thiết lập thời gian cho map, dữ liệu 3D và các địa điểm sẽ được lấy theo thời gian người dùng thiết lập, mặc định sẽ lấy thời gian hiện tại.

Nếu bạn cài đặt thời gian cho map là 1/1/2017 thì tất cả các đối tượng 3D mà có thời gian sau 1/1/2017 thì sẽ không được hiển thị trên bản đồ.

```javascript
map.setTime(date: Date): void
```

## 4. Bộ lọc Objects
Bạn có thể tạo bộ lọc chỉ hiển thị các đối tượng 3D có kiểu nhất định thông qua hàm

```javascript
  setFilterObjects(objectTypes: string[]): void
  getFilterObjects(): string[]
```

Ví dụ bạn chỉ muốn hiển thị đối tượng 3D có kiểu là bank hoặc restaurant: 

```javascript
  setFilterObjects(["bank", "restaurant"])
```

Set lại null hoặc empty list để tắt bộ lọc và hiển thị lại tất cả các đối tượng 3D.

## 5. Thêm đối tượng 3D vào map
Lớp MapObject cho phép người dùng thêm các đối tượng 3D của mình lên bản đồ.
### 5.1 MapObject và MapObjectOptions
```javascript
interface MapObjectOptions {
    id: string
    location?: ILatLng
    name?: string
    scale?: number
    bearing?: number
    elevation?: number
    height?: number
    obj?: string | MapObjectData
    texture?: string | MapObjectData
    coordinates?: ILatLng[]
    draggable?: boolean
  }

type MapObjectData = {
  reuseId?: string
  data: string,
}

class MapObject {
    constructor(options?: MapObjectOptions)
        getId(): string
        getName(): string
        getPlaces() : string[]
        getScale(): any
        getBearing(): number
        getLocation(): LatLng
        getElevation(): number
        getHeight(): number
        getCamera(): CameraPosition
        getTypes(): string[]
        getMinZoom(): number
        getMaxZoom(): number
        getStartDate(): number
        getEndDate(): number
        getCoordinates(): LatLng[]
        isDraggable(): boolean
        setMap(map: Map): void
        setLocation(location: ILatLng): void
        setScale(scale: number): void
        setTexture(texture: string | MapObjectData): void
        setObj(obj: string | MapObjectData): void
        setElevation(elevation: number): void
        setHeight(height: number)
        setBearing(bearing: number): void
        setName(name: string): void
        setCoordinates(coordinates: ILatLng[]): void
        setDraggable(draggable: boolean): void
        getTileCovers(zooms: number[], completion: Function): void //Lấy tất cả các tile mà object nằm trên 
        getBoundsCoordinates(completion: Function): void //Lấy danh sách toạ độ tạo thành hình chân đế của object
  }
```
Trên bản đồ có 2 kiểu 3D object

1. Object được vẽ từ obj file, loại object này sẽ có texture, có nghĩa chúng ta có thể set texture cho nó (mặc định là texture màu trắng)
2. Extrude object đây là object chúng ta chỉ cần set các tọa độ của object và chiều cao của nó. map4d SDK tự động sinh ra model 3D cho object này. Loại object này thường là các object với hình dáng đơn giản như các khối hộp. Đây là loại object không có texture và chúng ta sẽ vẽ object lên với màu trắng.

### 5.2 Thêm đối tượng 3D vào bản đồ

```javascript
    let mapObject = new map4d.MapObject({
      id: "my_building",
      location: [106.699380, 10.772431],
      obj: "58a2b79436eace2398d47c01",
      texture: "CauKhanhHoi.png"
    })
    mapObject.setMap(map)
```

**id**: id của object. Mỗi đối tượng 3D phải có duy nhất 1 id. Nếu bạn thêm 2 đối tượng 3D có cùng id thì chỉ có 1 đối tượng 3D được tạo.

**location**: vị trí của đối tượng 3D tính bằng LatLng

**obj**: model id của obj trên hệ thống. Ta có thể truyền đường dẫn url chỉ tới file obj model. Định dạng của model phải là obj. Ngoài ra bạn còn có thể truyền vào đối tượng MapObjectData (sẽ nói sau)

**texture** texture id trên hệ thống. Ta có thể truyền đường dẫn url chỉ tới file ảnh texture. Ngoài ra bạn còn có thể truyền vào đối tượng MapObjectData (sẽ nói sau)

Ở ví dụ trên chúng ta đã biết cách thêm 1 đối tượng 3D bằng obj model. Ví dụ tiếp theo chúng ta sẽ tìm hiểu cách thêm đối tượng 1 đối tượng "extrude" lên bản đồ. Cách thêm này vô cùng dễ dàng so với cách đầu tiên.

```javascript
    let mapObject = new map4d.MapObject({
      id: "dungtest",
      coordinates: [[106.707764, 10.774544],
        [106.709001, 10.773766],
        [106.708627, 10.772759],
        [106.707806, 10.774045]],
      height: 100
    })
    mapObject.setMap(map)
```

Như thấy ở trên khi add 1 đối tượng 3D extrude chúng ta chỉ cần cung cấp 2 thông số.

**coordinates**: tọa độ các điểm cần extrude

**height**: Chiều cao của đối tượng 3D được tính theo mét. Chỉ có thể hoạt động với thuộc tính **coordinates**

Lưu ý chúng ta không cần truyền vào location vì location sẽ được tính dựa trên thông số của **coordinate**.

Chúng ta có thể set lại vị trí của đối tượng extrude của đối tượng 3D thong qua hàm **setLocation**. Sau khi gọi hàm này các thông số tọa độ sẽ được tự động tính  lại.

Chúng ta có thể set thuộc tính **draggable** cho đối tượng 3D. Thuộc tính **draggable** có nghĩa chúng ta có thể sử dụng chuột và drag đối tượng 3D qua vị trí mới. Mặc định là bằng false.

## 6. Các sự kiện trên đối tượng 3D
Sự kiện click phát sinh khi người dùng click lên đối tượng 3D

```javascript
    let clickEvent = this.map.addListener("click", (args) => {
      console.log("Object clicked: ")
      console.log(args)
    }, {object: true})

    //sau khi dùng xong
    clickEvent.remove();
```

Các sự kiện khi người dùng kéo đối tượng 3D (chỉ có thể kéo các đối tượng 3D có thuộc tính draggable là true)

```javascript
    let dragStart = this.map.addListener("dragStart", (args) => {
        // Sự kiện này sẽ được gọi khi bắt đầu kéo đối tượng 3D
    }, {object: true})
    
    let drag = this.map.addListener("drag", (args) => {
        // Sự kiện này sẽ được gọi trong khi kéo đối tượng 3D
    }, {object: true})
    
    let dragEnd = this.map.addListener("dragEnd", (args) => {
        // Sự kiện này sẽ được gọi sau khi kéo đối tượng 3D xong
    }, {object: true})
```

Ngoài ra map4d SDK còn hỗ trợ nhiều loai sự kiện trên đối tượng 3D như: long click, right click, hover...

## 7. Chọn đối tượng 3D
Có thể chọn đối tượng 3D thông qua phương thức:
```javascript
    setSelectedObjects(ids: string[]): void
    getSelectedObjects(): string
```
với thông số đầu vào là 1 danh sách các id của đối tượng 3D.
Khi một đối tượng 3D được chọn nó sẽ được làm nổi bật trên bản đồ.
Ví dụ về chương trình click chọn đối tượng 3D

```javascript
    this.map.addListener("click", (args) => {
        args.object && this.map.setSelectedObjects([args.object.getId()])
    }, {object: true})
```

## 8. Ẩn hiện đối tượng object
```javascript
    setHiddenObject(id: string): void
    setUnhiddenObject(id: string): void
```
Khi chúng ta không muốn hiển thị một đối tượng 3D cụ thể nào trên map thì cũng ta có thể sử dụng hàm **setHiddenObject(id: string)** với id là id của 3d object.
Sau khi sử dụng hàm này thì object nào có id mà giống với id ta đang set thì nó sẽ không được hiển thị trên map

## 9. Thay đổi thông số của đối tượng 3d có sẵn trên bản đồ
```javascript
    getMapObjectById(id: string): MapObject
```
Khi biết được id đối tượng 3D có sẵn trên bản đồ ta sử dụng hàm trên để lấy được MapObject từ đối tượng 3D đó. Sau đó ta có thể thây đổi các thông số của đối tượng đó như location, texture...

## 10. Các hàm khác
```javascript
    getTileCovers(zooms: number[], completion: Function): void
```
**getTileCovers** dùng để lấy thông tin các tile mà MapObject đè lên.
- zooms: Các mức zoom muốn kiểm tra các tile mà MapObject đè lên.
- completion: callback function để trả kết quả về.

```javascript
    getBoundsCoordinates(completion: Function): void
```
**getBoundsCoordinates** trả về một danh sách các điểm tọa độ bao quanh Object. Tham số truyền vào là một hàm callback để lấy kết quả trả về.



License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
