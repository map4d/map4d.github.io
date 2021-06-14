# Map events

Map4D Web SDK cung cấp các sự kiện của map hay tương tác của người dùng giúp cho nhà phát triển có thể lắng nghe và xử lý.

<iframe src="./html/map-events.html" style="min-width: 914px;" height="420px"></iframe>

| No | Event Name       | Description                                                                                                             |
|:--:|------------------|-------------------------------------------------------------------------------------------------------------------------|
| 1  | cameraWillChange | Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map chuẩn bị thay đổi             |
| 2  | cameraChanging   | Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map đang thay đổi                 |
| 3  | idle             | Được gọi khi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map kết thúc sự thay đổi                    |
| 4  | hover            | Được gọi khi rê chuột vào annotation hoặc đối tượng 3D                                                                  |
| 5  | click            | Được gọi khi có sự kiện click trên map, annotation hoặc đối tượng 3D                                                    |
| 6  | dblClick         | Được gọi khi click 2 lần chuột trái vào map, annotation hoặc đối tượng 3D                                               |
| 7  | drag             | Được gọi khi map đang được giữ và kéo chuột trái                                                                        |
| 8  | dragStart        | Được gọi khi map bắt đầu được giữ và kéo chuột trái                                                                     |
| 9  | dragEnd          | Được gọi khi map kết thúc giữ và kéo chuột trái                                                                         |
| 10 | mouseMove        | Được gọi khi chuột di chuyển trên map                                                                                   |
| 11 | mouseOut         | Được gọi khi chuột di chuyển ra ngoài map                                                                               |
| 12 | mouseOver        | Đưọc gọi khi chuột di chuyển từ ngoài vào trong map                                                                     |
| 13 | rightClick       | Được gọi khi click chuột phải trên map, annotation hoặc đối tượng 3D                                                    |
| 14 | tilesLoaded      | Được gọi khi tất cả các visible tiles đã load hoàn thành (visible tiles là tất cả tiles sẽ được hiển thị trên màn hình) |
| 15 | modeChanged      | Được gọi khi map chuyển từ 2D sang 3D và ngược lại                                                                      |
| 16 | longClick        | Được gọi khi giữ chuột trái trong 1 khoảng thời gian trên bản đồ                                                        |
| 17 | boundsChanged    | Được gọi khi viewport đã thay đổi                                                                                       |

## Handling Events

Để đăng ký thông báo sự kiện, sử dụng phương thức **addListener(event, func, options)**.

Trong đó:
- **event**: tên event (xem bảng trên)
- **func**: hàm sẽ được gọi với tham số ***args*** khi sự kiện được chỉ định xảy ra
- **options**: tùy chọn, dùng để xác định việc xử lý sự kiện chỉ hoạt động đối với các đối tượng được chỉ định (poi, building, marker, ...). Tham khảo [EventOptions](reference/map.md)

Phương thức này trả về một đối tượng [MapsEventListener](/reference/map?id=mapseventlistener-interface)

### Cách đăng ký event chung

```js
let event = map.addListener("event_name",
  (args) => {
    // action ...
  },
  {
    location: true
    mappoi: true
    mapbuilding: true
    marker: true
    polygon: true
    polyline: true
    circle: true
    poi: true
    building: true
  })
```
Chú ý:
- Đối với các event **modeChanged**, **mouseOver**, **mouseOut**, **idle**, **cameraChanging**, **cameraWillChange**, **tilesLoaded**, **boundsChanged** thì ***options*** là không cần thiết.
- Event **hover** chỉ hoạt động với [marker](guides/marker.md), [polygon](guides/polygon.md), [polyline](guides/polyline.md), [circle](guides/circle.md), [building](guides/building.md)


### Cách gỡ bỏ một event khi không sử dụng

```js
event.remove()
```

### Tham số gọi hàm khi xảy ra sự kiện

| No | Event                                                                                                                                             | args                                                           |
|:--:|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
|  1 | - cameraWillChange<br>- cameraChanging<br>- idle                                                                                                  | { `camera`: [CameraPosition](reference/map) }                  |
|  2 | - hover<br>- click *coordinate*<br>- rightClick<br>- dblClick<br>- longClick<br>- dragStart<br>- drag<br>- dragEnd<br>- mouseMove<br>- mouseOut<br>- mouseOver | {<br>&nbsp;&nbsp;&nbsp;&nbsp;`location`: [LatLng](reference/coordinates?id=latlng),<br>&nbsp;&nbsp;&nbsp;&nbsp;`pixel`: [Point](reference/coordinates?id=point),<br>&nbsp;&nbsp;&nbsp;&nbsp;`xa`: MouseEvent<br>} |
| 3  | - modeChanged                                                                                                                                     | { `is3DMode`: boolean }                                        |
| 4  | - tilesLoaded<br>- boundsChanged                                                                                                                  | `none`                                                         |
| 5  | - click *mappoi*                                                                                                                                  |{<br>&nbsp;&nbsp;&nbsp;&nbsp;`poi`: { `id`: string, `name`: string, `location`: [LatLng](reference/coordinates?id=latlng), `type`: string }<br>&nbsp;&nbsp;&nbsp;&nbsp;`location`: [LatLng](reference/coordinates?id=latlng),<br>&nbsp;&nbsp;&nbsp;&nbsp;`pixel`: [Point](reference/coordinates?id=point),<br>&nbsp;&nbsp;&nbsp;&nbsp;`xa`: MouseEvent<br>} |
| 6  | - click *mapbuilding*                                                                                                                             |{<br>&nbsp;&nbsp;&nbsp;&nbsp;`building`: { `id`: string, `name`: string, `location`: [LatLng](reference/coordinates?id=latlng) }<br>&nbsp;&nbsp;&nbsp;&nbsp;`location`: [LatLng](reference/coordinates?id=latlng),<br>&nbsp;&nbsp;&nbsp;&nbsp;`pixel`: [Point](reference/coordinates?id=point),<br>&nbsp;&nbsp;&nbsp;&nbsp;`xa`: MouseEvent<br>} |

### Thay đổi EventOptions ở runtime

Map4dMap JavaScript SDK cho phép thay đổi EventOptions ở runtime.
Ví dụ: ta đăng ký một event nhận sự kiên click của marker, polygon và polyline.
```js
let listener = map.addListener("click", (args) => {
    console.log(args)
}, {marker: true, polygon: true, polyline: true})
```
Sau ta muốn đổi các sự kiện của **listener** ta sử dụng như sau:
```js
listener.updateEventOptions({marker: true})
```
Sau khi sử dụng hàm trên thì **listener** chỉ nhận sự kiện click của marker không còn nhận sự kiện click của polygon và polyline nữa.


## Example

### Click Map

Ví dụ dưới đây lắng nghe sự kiện click chuột trái trên map và hiển thị một [marker](guides/marker.md) ở vị trí được click
<iframe src="//jsfiddle.net/huydang/uc56hn23/embedded/" style="min-width: 914px;" height="420px"></iframe>

### Click POI on Map

Ví dụ dưới đây lắng nghe sự kiện click chuột trái trên POI của Map4D và thực hiện hiển thị thông tin của POI được click
<iframe src="//jsfiddle.net/huydang/2hv1xk9j/embedded/" style="min-width: 914px;" height="600px" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>