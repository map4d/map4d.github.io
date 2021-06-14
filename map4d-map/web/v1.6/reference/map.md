# Map reference

## Map class

`map4d.Map` class

**Constructor** 

Tạo Map với container HTMLElement và các options được chỉ định

```javascript
Map(container, options)
```

- Parameters:
  - container: **HTMLElement** *required*: là một container để chứa Map
  - options: [MapOptions](/reference/map?id=mapoptions-interface) *required*

**Methods**

| Name                         | Parameters                              | Return Value | Description                                                                            |
|------------------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **data**                     | `none`                                  | [MapData](/guides/data-layer?id=data-layer)  | Lấy dữ liệu data layer lưu trữ dữ liệu không gian địa lý của Map |
| **enable3dMode**             | boolean                                 | `none`       | Bật hoặc tắt chế độ 3D của Map                              |
| **is3dMode**                 | `none`                                  | boolean      | Kiểm tra Map có ở chế độ 3D không                               |
| **getBounds**                | [PaddingOptions](/reference/map?id=paddingoptions)?|[LatLngBounds](/reference/coordinates?id=latlngbounds) | trả về một đối tượng LatLngBounds của Map với các thông số Camera và màn hình hiện tại.|
| **setTileUrl**                | string, boolean                        | `none`       | Set một đường dẫn Url để tải Tile từ server thay thế cho Url mặc định của SDK                                                  |
| **getTileUrl**                | boolean                                | string       | Lấy đường dẫn Url tải Tile từ server hiện tại Map đang sử dụng                                      |
| **setMinZoom**                | number                                 | `none`       | Set mức zoom nhỏ nhất mà Map có thể hiển thị                                      |
| **setMaxZoom**                | number                                 | `none`       | Set mức zoom lớn nhất mà Map có thể hiển thị                                              |
| **setWeather**                | string `or` [Weather](/reference/map?id=weather-enum), [WeatherProvider](/reference/map?id=weatherprovider-interface)?| `none` | Set giá trị thời tiết cho Map                                              |
| **getWeather**                | `none` | [Weather](/reference/map?id=weather-enum)    | Get giá trị thời tiết hiện tại của Map                                              |
| **panBy**                | [IPoint](/reference/coordinates?id=ipoint), [AnimationOptions](/reference/map?id=animationoptions)?| `none`       | Di chuyển Map một khoảng có độ dài x, y theo đơn vị Point                                              |
| **panTo**                 | [ILatLng](/reference/coordinates?id=ilatlng), [AnimationOptions](/reference/map?id=animationoptions)?| `none`     | Di chuyển Map đến một vị trí chính xác ILatLng                                              |
| **moveToMyLocation**        | boolean                                  | `none`       | Di chuyển Map tới vị trí hiện tại của người dùng từ thông tin GPS của trình duyệt                  |
| **moveCamera**   | [ICameraPosition](/reference/map?id=icameraposition), [AnimationOptions](/reference/map?id=animationoptions)?| `none` | Di chuyển Map đến một vị trí chính xác ILatLng                        |
| **getCamera**                | `none`  | [CameraPosition](/reference/map?id=cameraposition) | Lấy thông tin Camera hiện tại của Map                                              |
| **getCameraWithBounds**  | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds), [PaddingOptions](/reference/map?id=paddingoptions)? | [CameraPosition](/reference/map?id=cameraposition)  | Tạo ra một thông tin Camera từ các tham số bạn truyền vào                                               |
| **getRestrictionBounds**    | `none` | [LatLngBounds](/reference/coordinates?id=latlngbounds) | Lấy vùng giới hạn di chuyển Camera của Map                                              |
| **setRestrictionBounds**     | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds) | `none`   | Set vùng giới hạn di chuyển Camera của Map                                              |
| **fitBounds**                | [ILatLngBounds](/reference/coordinates?id=ilatlngbounds), [PaddingOptions](/reference/map?id=paddingoptions)?, [AnimationOptions](/reference/map?id=animationoptions)? | `none` | Di chuyển camera của Map tới một vị trí hợp lý nhất có thể chứa đủ bounds mà bạn truyền vào |
| **addListener**   | string `or` [MapEvent](/reference/map?id=mapevent-enum), Function, [EventOptions](/reference/map?id=eventoptions)?| [MapsEventListener](/reference/map?id=mapseventlistener-interface) | Thêm các sự kiện Listener để lắng nghe các sự kiện của Map            |
| **setDate**                | Date                                 | `none`       | Set thời gian cho Map để thực hiện việc xem Map trong quá khứ hoặc tương lai              |
| **getMinZoom**                | `none`                                 | number       | Lấy giá trị mức zoom nhỏ nhất mà Map có thể hiển thị                                              |
| **getPreferMinZoom**          | `none`                                 | number       | Lấy mức zoom nhỏ nhất của Map dựa vào chế độ 2D hay 3D. Nếu ở chế độ 3D thì giá trị sẽ là 17, còn chế độ 2D thì giá trị sẽ là giá trị minZoom |
| **getMaxZoom**                | `none`                                 | number       | Lấy giá trị mức zoom lớn nhất mà Map có thể hiển thị                                              |
| **setMaxNativeZoom**         | number                                 | `none`       | Set mức zoom lớn nhất mà Map request Tile từ server                                              |
| **getMaxNativeZoom**           | `none`                                 | number       | Lấy giá trị mức zoom lớn nhất mà Map request Tile từ server                                              |
| **getTimeEffect**         | `none`    | [TimeEffect](/reference/map?id=timeeffect-enum)| Lấy giá trị hiệu ứng theo thời gian của Map                                              |
| **setTimeEffect**        | string `or` [TimeEffect](/reference/map?id=timeeffect-enum) | `none`       | Set giá trị hiệu ứng theo thời gian cho Map                                              |
| **setBuildingsEnabled**       | boolean                                 | `none`       | Cho phép hiển thị các Building có sẵn của Map trong chế độ 3D hay không                                              |
| **isBuildingsEnabled**        | `none`                                 | boolean       | Kiểm tra các Building có sẵn của Map được phép hiển thị trong chế độ 3D hay không                                              |
| **setPOIsEnabled**                | boolean                                 | `none`       | Cho phép hiển thị các POI có sẵn của Map hay không                                              |
| **isPOIsEnabled**                | `none`                                 | boolean       | Kiểm tra các POI có sẵn của Map được phép hiển thị hay không                                             |
| **setFilterPOIs**                | string[]                                 | `none`       | Set filter cho phép các POI có kiểu trong filter đó có thể hiển thị trên Map                                             |
| **getFilterPOIs**                | `none`                                 | string[]       | Get danh sách các kiểu POI đang bị filter                                        |
| **setFilterBuildings**       | string[]                                 | `none`       | Set filter cho phép các Building có kiểu trong filter đó có thể hiển thị trên Map                                               |
| **getFilterBuildings**       | `none`                                 | string[]       | Get danh sách các kiểu Building đang bị filter                                              |
| **setWaterEffect**          | boolean                                 | `none`       | Bật/Tắt hiệu ứng nước trong chế độ 3D                                              |
| **setSelectedBuildings**     | string[]                                 | `none`       | Set high light cho các building có ID nằm trong danh sách tham số truyền vào trong chế độ 3D                                             |
| **getSelectedBuildings**     | `none`                                 | string[]       | Get danh sách ID các building được high light trên Map ở chế độ 3D                                             |
| **setVisibleBuildings**       | string[]                               | `none`       | Chỉ hiển thị những building id truyền vào trên Map                                              |
| **setHiddenBuildings**        | string[]                               | `none`       | Ẩn những building id truyền vào khỏi Map, cần setVisibleBuildings() với tham số là mảng rỗng trước khi gọi phương thức này nếu trước đó bạn đã gọi phương thức setVisibleBuildings() |
| **setZoomGesturesEnabled**   | boolean                                 | `none`       | Bật/Tắt chức năng người dùng có thể Zoom Map                                            |
| **setScrollGesturesEnabled**  | boolean                                 | `none`       | Bật/Tắt thao tác người dùng có thể di chuyển Map                                              |
| **setRotateGesturesEnabled**   | boolean                                 | `none`       | Bật/Tắt thao tác người dùng có thể xoay Map                                              |
| **setTiltGesturesEnabled**     | boolean                                 | `none`       | Bật/Tắt thao tác người dùng có thể nghiêng Map                                              |
| **setAllGesturesEnabled**      | boolean                                 | `none`       | Bật/Tắt tất các các thao tác người dùng tác động đến Map                                              |

## MapOptions interface

`map4d.MapOptions` interface

Đối tượng MapOptions dùng để xác định các thuộc tính dùng cho Map. [Chi tiết](/guides/map-options?id=map-options)

```javascript
interface MapOptions {
    center?: ILatLng
    zoom?: number
    minZoom?: number
    maxZoom?: number
    maxNativeZoom?: number,
    geolocate?: boolean
    accessKey?: string
    tilt?: number,
    bearing?: number,
    controls?: boolean
    controlOptions?: ControlOptions
    restrictionBounds?: ILatLngBounds
    shouldChangeMapMode?: Function
}
```

## ControlOptions enum

Để thiết lập vị trí của bảng điều khiển ta sử dụng **ControlOptions**

`map4d.ControlOptions` enum

```javascript
enum ControlOptions {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT
}
```

| No | Name                    | Description                                                    |
|----|-------------------------|----------------------------------------------------------------|
| 1  | TOP_LEFT                | Hiển thị bảng điều khiển ở góc trên bên trái                   |
| 2  | TOP_RIGHT               | Hiển thị bảng điều khiển ở góc trên bên phải                   |
| 3  | BOTTOM_LEFT             | Hiển thị bảng điều khiển ở góc dưới bên trái                   |
| 4  | BOTTOM_RIGHT            | Hiển thị bảng điều khiển ở góc dưới bên phải                   |

## Weather enum

Định nghĩa các kiểu thời tiết để thiết lập cho Map.

`map4d.Weather` enum

```javascript
enum Weather {
    Rainy = 0,
    Snowy,
    Sunny,
    Cloudy,
    Live,
    None
}
```

## WeatherProvider interface

Định nghĩa interface để lấy dữ liệu thời tiết từ server khi thiết lập kiểu thời tiết `Live`. Các kiểu thời tiết khác thì
không cần đến interface này.

`map4d.WeatherProvider` interface

```javascript
interface WeatherProvider {
    refreshDistance?: number,//metter
    refreshTime?: number,//seconds
    getWeather: (location: LatLng, callback: (weather: number | string | Weather) => void) => void
}
```

| No | Name            | Description                                                    |
|----|-----------------|----------------------------------------------------------------|
| 1  | refreshDistance | Khoảng cách mà thời tiết được cập nhật khi người dùng di chuyển Map, đơn vị là mét |
| 2  | refreshTime     | Khoảng thời gian mà thời tiết được cập nhật, đơn vị là giây    |
| 3  | getWeather      | Là hàm trả về giá trị thời tiết mà bạn có thể tùy chọn xử lý   |

## TimeEffect enum

Định nghĩa các kiểu thời gian để thiết lập cho Map.

`map4d.TimeEffect` enum

```javascript
enum TimeEffect {
    Live,
    Morning,
    Noon,
    AfterNoon,
    Evening,
    None
}
```

## MapsEventListener interface

Định nghĩa interface lắng nghe sự kiện trên Map.

`map4d.MapsEventListener` interface

```javascript
interface MapsEventListener {
    remove(): void
    updateEventOptions(options: EventOptions): void
}
```

## MapEvent enum

Định nghĩa tất cả các sự kiện của Map.

`map4d.MapEvent` enum

```javascript
enum MapEvent {
    cameraWillChange = 0,
    cameraChanging,
    idle,
    hover,
    click,
    dblClick,
    drag,
    dragEnd,
    dragStart,
    mouseMove,
    mouseOut,
    mouseOver,
    rightClick,
    tilesLoaded,
    modeChanged,
    longClick,
    boundsChanged
}
```

## EventOptions

Định nghĩa các option cho các sự kiện của Map.

`map4d.EventOptions` interface

```javascript
interface EventOptions {
    marker?: boolean
    polygon?: boolean
    polyline?: boolean
    circle?: boolean
    poi?: boolean
    building?: boolean
    location?: boolean
    mappoi?: boolean
    mapbuilding?: boolean
}
```

## PaddingOptions

Định nghĩa giao diện quy định khoảng trống cho các đối tượng trong Map theo 4 hướng.

`map4d.PaddingOptions` interface

```javascript
interface PaddingOptions {
    top?: number
    bottom?: number
    left?: number
    right?: number
}
```

## AnimationOptions

Định nghĩa giao diện giúp làm cho chuyển động camera của Map được đẹp mắt hơn.

`map4d.AnimationOptions` interface

```javascript
interface AnimationOptions {
    duration?: number
    easing?: (arg0: number) => number
    animate?: boolean
}
```

| No | Name         | Description                                                    |
|----|--------------|----------------------------------------------------------------|
| 1  | duration     | Thời gian chuyển động của animation, đơn vị là miliseconds     |
| 2  | easing       | phương trình chuyển động của animation                         |
| 3  | animate      | Có animation hay không, nếu set thành false thì mặc định duration = 0|

## CameraPosition

Đối tượng lưu trữ các thông tin vị trí Camera của Map với các thuộc tính:
- **target**: vị trí tâm chính giữa camera.
- **tilt**: độ nghiêng của camera.
- **bearing**: góc quay của camera.
- **zoom**: mức zoom của camera.

`map4d.CameraPosition` class

```javascript
class CameraPosition {
    setTarget(target: ILatLng): void
    setTilt(degrees: number): void
    setBearing(degrees: number): void
    setZoom(zoom: number)
    getTarget(): LatLng
    getTilt(): number
    getBearing(): number
    getZoom(): number
}
```

## ICameraPosition

`map4d.ICameraPosition` type

```javascript
type ICameraPosition  = CameraPosition | {target?: ILatLng, tilt?: number, bearing?: number, zoom?: number}
```

## Projection class

`map4d.Projection` class

**Constructor** 

Tạo Projection với tham số là đối tượng `map`

```js
Projection(map)
```

- Parameters:
  - map: [Map](#map-class) *required*

**Methods**

| Name                   | Parameters                                                                          | Return Value                               | Description                                    |
|------------------------|-------------------------------------------------------------------------------------|--------------------------------------------|------------------------------------------------|
| **fromLatLngToScreen** | latLng: [LatLng](/reference/coordinates?id=latlng)<br> elevation?: number           | [Point](/reference/coordinates?id=point)   | Chuyển đổi từ toạ độ LatLng sang toạ độ Screen |
| **fromScreenToLatLng** | screenCoordinate: [IPoint](/reference/coordinates?id=ipoint)<br> elevation?: number | [LatLng](/reference/coordinates?id=latlng) | Chuyển đổi từ toạ độ Screen sang toạ độ LatLng |
