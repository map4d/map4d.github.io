# Map4D Map React Component

> Map4dMap React Native cung cấp `MFMapView` dưới dạng một React Component để hiển thị Map4d.


## MFMapView Component

### React view props

| No. | Name                    | Type                        | Description                                                                                                                   |
|:---:|-------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------|
|  1  | camera                  | [CameraShape](#CameraShape) | Vị trí của camera trên bản đồ.                                                                                                |
|  2  | showsMyLocationButton   | bool                        | Ẩn hoặc hiển thị nút vị trí của tôi                                                                                           |
|  3  | showsMyLocation         | bool                        | Ẩn hoặc hiển thị vị trí của tôi.<br>Bật tính năng này yêu cầu thêm quyền vị trí đối với cả Android và iOS.                    |
|  4  | showsBuildings          | bool                        | Ẩn hoặc hiển thị các đối tượng 3D của Map4D (ở chế độ 3D).                                                                    |
|  5  | showsPOIs               | bool                        | Ẩn hoặc hiển thị các địa điểm của Map4D (ở chế độ 2D).                                                                        |
|  6  | onMapReady              | func                        | Được gọi khi bản đồ sẵn sàng để sử dụng.                                                                                      |
|  7  | onPress                 | func                        | Được gọi khi người dùng tap trên bản đồ (không phải tap vào địa điểm, building hay annotations).                              |
|  8  | onPoiPress              | func                        | Được gọi khi người dùng tap vào địa điểm trên bản đồ (không phải POI annotation)                                              |
|  9  | onBuildingPress         | func                        | Được gọi khi người dùng tap vào đối tượng 3D trên bản đồ (không phải building annotation)                                     |
|  10 | onModeChange            | func                        | Được gọi khi bản đồ chuyển từ 2D sang 3D và ngược lại.                                                                        |
|  11 | onCameraMove            | func                        | Được gọi liên tục khi camera di chuyển.                                                                                       |
|  12 | onCameraMoveStart       | func                        | Được gọi khi camera bắt đầu di chuyển.                                                                                        |
|  13 | onCameraIdle            | func                        | Được gọi khi camera di chuyển kết thúc,<br>không có hoạt động nào đang chờ xử lý và người dùng đã ngừng tương tác với bản đồ. |
|  14 | onMyLocationButtonPress | func                        | Được gọi khi người dùng chạm vào nút vị trí của tôi                                                                           |
|  15 | onShouldChangeMapMode   | func                        | Được gọi khi mức zoom của bản đồ thay đổi từ 16-> 17 và ngược lại (mức chỉ có thể hiển thị 2D và mức có thể hiển thị 3D)      |

### Methods

| No. | Name               | Return Type                       | Arguments                            | Description                                                             |
|:---:|--------------------|-----------------------------------|--------------------------------------|-------------------------------------------------------------------------|
|  1  | getCamera          | [CameraShape](#CameraShape)       |                                      | Lấy giá trị mức zoom hiện tại của bản đồ.                               |
|  2  | moveCamera         |                                   | [CameraShape](#CameraShape) `camera` | Di chuyển camera đến vị trí `camera` ngay lập tức.                      |
|  3  | animateCamera      |                                   | [CameraShape](#CameraShape) `camera` | Di chuyển camera đến vị trí `camera` với hiệu ứng di chuyển.            |
|  4  | cameraForBounds    | [CameraShape](#CameraShape)       | [BoundsData](#BoundsData) `bounds`   | Lấy giá trị camera đối với `bounds`                                     |
|  5  | fitBounds          |                                   | [BoundsData](#BoundsData) `bounds`   | Di chuyển camera đến ví trí thích hợp với `bounds`                      |
|  6  | is3DMode           | bool                              |                                      | Kiểm tra mode hiện tại của bản đồ có phải là 3D hay không               |
|  7  | enable3DMode       |                                   | bool `enable`                        | Set chế độ 2D, 3D cho bản đồ, `true` thì sẽ hiển thị bản đồ ở chế độ 3D |
|  8  | setTime            |                                   | string                               | Set time cho bản đồ                                                     |
|  9  | coordinateForPoint | [CoordinateData](#CoordinateData) | [PointData](#PointData)              | Convert tọa độ kinh độ, vĩ độ sang tọa độ màn hình x,y                  |
|  10 | pointForCoordinate | [PointData](#PointData)           | [CoordinateData](#CoordinateData)    | Convert tọa độ màn hình x,y sang tọa độ kinh độ, vĩ độ                  |

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
  target: {
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