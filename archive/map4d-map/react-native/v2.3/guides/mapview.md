# Map4D Map React Component

> Map4dMap React Native cung cấp `MFMapView` dưới dạng một React Component để hiển thị Map4d.


## MFMapView Component

### React view props

| No. | Name                    | Type                        | Description                                                                                                                   |
|:---:|-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------|
|  1  | camera                  | [CameraShape](#CameraShape) | Vị trí của camera trên bản đồ.                                                                                                |
|  2  | mapType                 | string                      | Kiểu tiles hiển thị của bản đồ, `roadmap` hoặc `raster`                                                                       |
|  3  | showsMyLocationButton   | bool                        | Ẩn hoặc hiển thị nút vị trí của tôi                                                                                           |
|  4  | showsMyLocation         | bool                        | Ẩn hoặc hiển thị vị trí của tôi.<br>Bật tính năng này yêu cầu thêm quyền vị trí đối với cả Android và iOS.                    |
|  5  | showsBuildings          | bool                        | Ẩn hoặc hiển thị các đối tượng 3D của Map4D (ở chế độ 3D).                                                                    |
|  6  | showsPOIs               | bool                        | Ẩn hoặc hiển thị các địa điểm của Map4D (ở chế độ 2D).                                                                        |
|  7  | onMapReady              | func                        | Được gọi khi bản đồ sẵn sàng để sử dụng.                                                                                      |
|  8  | [onPress](#onPress)     | func                        | Được gọi khi người dùng tap trên bản đồ (không phải tap vào địa điểm, building hay annotations).                              |
|  9  | [onPoiPress](#onPoiPress)               | func        | Được gọi khi người dùng tap vào địa điểm trên bản đồ (không phải POI annotation)                                              |
|  10 | [onBuildingPress](#onBuildingPress)     | func        | Được gọi khi người dùng tap vào đối tượng 3D trên bản đồ (không phải building annotation)                                     |
|  11 | [onPlacePress](#onPlacePress)           | func        | Được gọi khi người dùng tap vào place text trên bản đồ (đối với mapType là roadmap)                                           |
|  12 | [onModeChange](#onModeChange)           | func        | Được gọi khi bản đồ chuyển từ 2D sang 3D và ngược lại.                                                                        |
|  13 | [onCameraMove](#onCameraMove)           | func        | Được gọi liên tục khi camera di chuyển.                                                                                       |
|  14 | [onCameraMoveStart](#onCameraMoveStart) | func        | Được gọi khi camera bắt đầu di chuyển.                                                                                        |
|  15 | [onCameraIdle](#onCameraIdle)           | func        | Được gọi khi camera di chuyển kết thúc,<br>không có hoạt động nào đang chờ xử lý và người dùng đã ngừng tương tác với bản đồ. |
|  16 | [onMyLocationButtonPress](#onMyLocationButtonPress) | func | Được gọi khi người dùng chạm vào nút vị trí của tôi                                                                      |
|  17 | [onShouldChangeMapMode](#onShouldChangeMapMode)     | func | Được gọi khi mức zoom của bản đồ thay đổi từ 16-> 17 và ngược lại (mức chỉ có thể hiển thị 2D và mức có thể hiển thị 3D) |
|  18 | zoomGesturesEnabled     | bool                        | Bật/Tắt chức năng người dùng có thể zoom map. Mặc định là `true`                                                              |
|  19 | scrollGesturesEnabled   | bool                        | Bật/Tắt thao tác người dùng có thể di chuyển map. Mặc định là `true`                                                          |
|  20 | rotateGesturesEnabled   | bool                        | Bật/Tắt thao tác người dùng có thể xoay map. Mặc định là `true`                                                               |
|  21 | tiltGesturesEnabled     | bool                        | Bật/Tắt thao tác người dùng có thể nghiêng map. Mặc định là `true`                                                            |

### Methods

| No. | Name               | Return Type                       | Arguments                            | Description                                                             |
|:---:|--------------------|-----------------------------------|--------------------------------------|-------------------------------------------------------------------------|
|  1  | getCamera          | [CameraShape](#CameraShape)       |                                      | Lấy giá trị mức zoom hiện tại của bản đồ.                               |
|  2  | moveCamera         |                                   | [CameraShape](#CameraShape) `camera` | Di chuyển camera đến vị trí `camera` ngay lập tức.                      |
|  3  | animateCamera      |                                   | [CameraShape](#CameraShape) `camera` | Di chuyển camera đến vị trí `camera` với hiệu ứng di chuyển.            |
|  4  | cameraForBounds    | [CameraShape](#CameraShape)       | [BoundsData](#BoundsData) `bounds`   | Lấy giá trị camera đối với `bounds`                                     |
|  5  | fitBounds          |                                   | [BoundsData](#BoundsData) `bounds`   | Di chuyển camera đến ví trí thích hợp với `bounds`                      |
|  6  | getBounds          | [BoundsData](#BoundsData)         |                                      | Lấy vùng hiển thị hiện tại của bản đồ.                                  |
|  7  | is3DMode           | bool                              |                                      | Kiểm tra mode hiện tại của bản đồ có phải là 3D hay không               |
|  8  | enable3DMode       |                                   | bool `enable`                        | Set chế độ 2D, 3D cho bản đồ, `true` thì sẽ hiển thị bản đồ ở chế độ 3D |
|  9  | setTime            |                                   | string                               | Set time cho bản đồ                                                     |
|  10 | coordinateForPoint | [CoordinateData](#CoordinateData) | [PointData](#PointData)              | Convert tọa độ màn hình x,y sang tọa độ kinh độ, vĩ độ                  |
|  11 | pointForCoordinate | [PointData](#PointData)           | [CoordinateData](#CoordinateData)    | Convert tọa độ kinh độ, vĩ độ sang tọa độ màn hình x,y                  |
|  12 | setZoomGesturesEnabled     |                           | bool `enable`                        | Bật/Tắt chức năng người dùng có thể zoom map.                           |
|  13 | setScrollGesturesEnabled   |                           | bool `enable`                        | Bật/Tắt thao tác người dùng có thể di chuyển map.                       |
|  14 | setRotateGesturesEnabled   |                           | bool `enable`                        | Bật/Tắt thao tác người dùng có thể xoay map.`                           |
|  15 | setTiltGesturesEnabled     |                           | bool `enable`                        | Bật/Tắt thao tác người dùng có thể nghiêng map.                         |
|  16 | setAllGesturesEnabled      |                           | bool `enable`                        | Bật/Tắt tất các các thao tác người dùng tác động đến map.               |

### Object Types

#### PointData

Thông tin tọa độ 2 chiều x, y

```js
let point = {x: 1, y: 2}
```

#### CoordinateData

Thông tin tọa độ theo kinh độ, vĩ độ

```js
let coordinate = {latitude: 10.7881732, longitude: 106.7000933}
```

#### CameraShape

CameraShape là một kiểu dữ liệu lưu các thông tin của camera. Có cấu trúc như sau:

```js
{
  center: {
    latitude: number,
    longitude: number,
  },
  zoom: number,
  bearing: number,
  tilt: number
}
```

Ví dụ sử dụng:

```js
var camera = {
  center: {
    latitude: 10.7881732,
    longitude: 106.7000933
  },
  zoom: 16,
  bearing: 0,
  tilt: 0,
}
```

#### BoundsData

Bounds Data là một object chứa thông tin latitude, longitude của một khu vực và padding

Ví dụ sử dụng:
```js
let boundsData = {
  bounds: {
    northEast: { latitude: 16.07102188912311, longitude: 108.22186589241028 },
    southWest: { latitude: 16.07302188912311, longitude: 108.25186589241028 }
  },
  padding: { top: 1, right: 2, bottom: 3, left: 4 }
}
```

### Events

#### onPress

Được gọi khi người dùng tap trên bản đồ (không phải tap vào địa điểm, building hay annotations).  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onPress` được gọi là một object, có dạng như sau:

```js
{
  "action": "map-press",
  "location": {
    "latitude": number,
    "longitude": number
  },
  "pixel": {
    "x": number,
    "y": number
  }
}
```

Trong đó:
  - location: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ địa lý.
  - pixel: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ màn hình.

Ví dụ:
```js
{
  "action": "map-press",
  "location": {
    "latitude": 10.786622402809513,
    "longitude": 106.69969404367612
  },
  "pixel": {
    "x": 357.967529296875,
    "y": 1233.9140625
  }
}
```

#### onPoiPress

Được gọi khi người dùng tap vào địa điểm trên bản đồ (không phải POI annotation).  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onPoiPress` được gọi là một object, có dạng như sau:

```js
{
  action: "map-poi-press",
  location: {
    latitude: number,
    longitude: number
  },
  pixel: {
    x: number,
    y: number
  },
  poi: {
    id: string,
    title: string,
    location: {
      latitude: number,
      longitude: number
    }
  }
}
```

Trong đó:
  - location: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ địa lý.
  - pixel: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ màn hình.
  - poi: object chứa thông tin địa điểm mà người dùng tap trên bản đồ:
    + id: id của địa điểm, dùng để lấy thêm thông tin thông qua Map4d API
    + title: tên của địa điểm
    + location: vị trí của địa điểm hiển thị trên bản đồ, theo hệ tọa độ địa lý.

#### onBuildingPress

Được gọi khi người dùng tap vào đối tượng 3D trên bản đồ (không phải building annotation).  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onBuildingPress` được gọi là một object, có dạng như sau:

```js
{
  action: "map-building-press",
  building: {
    id: string,
    name: string,
    location: {
      latitude: number,
      longitude: number
    }
  },
  location: {
    latitude: number,
    longitude: number
  },
  pixel: {
    x: number,
    y: number
  }
}
```

Trong đó:
  - location: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ địa lý.
  - pixel: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ màn hình.
  - building: object chứa thông tin đối tượng 3d mà người dùng tap trên bản đồ:
    + id: id của đối tượng 3d, dùng để lấy thêm thông tin thông qua Map4d API
    + name: tên của đối tượng 3d
    + location: vị trí của đối tượng 3d hiển thị trên bản đồ, theo hệ tọa độ địa lý.

#### onPlacePress

Được gọi khi người dùng tap vào place text trên bản đồ (đối với mapType là roadmap).  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onPlacePress` được gọi là một object, có dạng như sau:

```js
{
  action: "map-place-press",
  location: {
    latitude: number,
    longitude: number
  },
  pixel: {
    x: number,
    y: number
  },
  place: {
    name: string
    location: {
      latitude: number,
      longitude: number
    }
  }
}
```

Trong đó:
  - location: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ địa lý.
  - pixel: vị trí mà người dùng tap trên bản đồ, theo hệ tọa độ màn hình.
  - place: object chứa thông tin place mà người dùng tap trên bản đồ:
    + name: tên của place
    + location: vị trí text của place hiển thị trên bản đồ, theo hệ tọa độ địa lý.

#### onModeChange

Được gọi khi bản đồ chuyển từ 2D sang 3D và ngược lại.  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onModeChange` được gọi là một object, có dạng như sau:

```js
{
  action: "mode-change",
  mode: string
}
```

Trong đó:
  - mode: giá trị string '2d' hoặc '3d', biểu thị mode hiện tại của bản đồ.

#### onCameraMove

Được gọi liên tục khi camera di chuyển.  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onCameraMove` được gọi là một object lưu thông tin camera hiện tại của bản đồ, có dạng như sau:

```js
{
  action: "camera-move",
  center: {
    latitude: number,
    longitude: number
  },
  zoom: number,
  tilt: number,
  bearing: number
}
```

Trong đó:
  - center: vị trí hiện tại của camera, theo hệ tọa độ địa lý
  - zoom: mức zoom hiện tại của camera
  - tilt: góc nghiêng hiện tại của camera (đơn vị: độ)
  - bearing: góc quay hiện tại của camera (đơn vị: độ)

#### onCameraMoveStart

Được gọi khi camera bắt đầu di chuyển.  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onCameraMoveStart` được gọi là một object lưu thông tin camera hiện tại của bản đồ, có dạng như sau:

Ví dụ:
```js
{
  action: "camera-move-started",
  gesture: bool,
  center: {
    latitude: number,
    longitude: number
  },
  zoom: number,
  tilt: number,
  bearing: number
}
```

Trong đó:
  - gesture: `true` nếu camera di chuyển do tác động của người dùng
  - center: vị trí hiện tại của camera, theo hệ tọa độ địa lý
  - zoom: mức zoom hiện tại của camera
  - tilt: góc nghiêng hiện tại của camera (đơn vị: độ)
  - bearing: góc quay hiện tại của camera (đơn vị: độ)

#### onCameraIdle

Được gọi khi camera di chuyển kết thúc, không có hoạt động nào đang chờ xử lý và người dùng đã ngừng tương tác với bản đồ.  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onCameraIdle` được gọi là một object lưu thông tin camera hiện tại của bản đồ, có dạng như sau:

```js
{
  action: "camera-idle",
  center: {
    latitude: number,
    longitude: number
  },
  zoom: number,
  tilt: number,
  bearing: number
}
```

Trong đó:
  - center: vị trí hiện tại của camera, theo hệ tọa độ địa lý
  - zoom: mức zoom hiện tại của camera
  - tilt: góc nghiêng hiện tại của camera (đơn vị: độ)
  - bearing: góc quay hiện tại của camera (đơn vị: độ)

#### onMyLocationButtonPress

Được gọi khi người dùng chạm vào nút vị trí của tôi.  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onMyLocationButtonPress` được gọi là một object, có dạng như sau:

```js
{
  action: "my-location-button-press"
}
```

#### onShouldChangeMapMode

Được gọi khi mức zoom của bản đồ thay đổi từ 16-> 17 và ngược lại (mức chỉ có thể hiển thị 2D và mức có thể hiển thị 3D).  
Giá trị `nativeEvent` trả về của đối tượng event khi sự kiện `onShouldChangeMapMode` được gọi là một object, có dạng như sau:

```js
{
  action: "should-change-mode"
}
```
