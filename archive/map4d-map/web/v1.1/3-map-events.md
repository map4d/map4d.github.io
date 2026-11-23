# Sự kiện Map4D-SDK
Hướng dẫn sử dụng các sự kiện của Map4D SDK.

## 1. Giới thiệu chung

  > Chú ý: Nếu bạn đăng ký sự kiện trên map thì phải remove chúng khi không còn sử dụng để cải thiện hiệu năng cho map.
  Chi tiết hướng dẫn có ở phần 2.

  **1.1. cameraWillChange**
  - Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map chuẩn bị thay đổi.

  **1.2. cameraChanging**
  - Được gọi khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map đang thay đổi.

  **1.3. idle**
  - Được gọi khi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map kết thúc sự thay đổi.

  **1.4. click**
  - Được gọi khi có sự kiện click trên map, annotation hoặc đối tượng 3D.

  **1.5. dblClick**
  - Được gọi khi click 2 lần chuột trái vào map, annotation hoặc đối tượng 3D.

  **1.6. drag**
  - Được gọi khi map đang được giữ và kéo chuột trái.

  **1.7. dragEnd**
  - Được gọi khi map kết thúc giữ và kéo chuột trái.

  **1.8. dragStart**
  - Được gọi khi map bắt đầu được giữ và kéo chuột trái.

  **1.9. mouseMove**
  - Được gọi khi chuột di chuyển trên map.

  **1.10. mouseOut**
  - Được gọi khi chuột di chuyển ra ngoài map.

  **1.11. mouseOver**
  - Đưọc gọi khi chuột di chuyển từ ngoài vào trong map.

  **1.12. rightClick**
  - Được gọi khi click chuột phải trên map, annotation hoặc đối tượng 3D.
  
  **1.13. longClick**
  - Được gọi khi giữ chuột trái trong 1 khoảng thời gian trên bản đồ 
  
  **1.14. hover**
  - Được gọi khi rê chuột vào annotation hoặc đối tượng 3D.
  
  **1.15. tilesLoaded**
  - Được gọi khi tất cả các visible tiles đã load hoàn thành (visible tiles là tất cả tiles sẽ được hiển thị trên màn hình)
  
  **1.16. boundsChanged** 
  - Được gọi khi viewport đã thay đổi 
  
  ---

## 2. Hướng dẫn chi tiết
  **Hàm đăng ký event**
  
  ```javascript
    interface EventOptions {

        marker?: boolean
    
        polygon?: boolean
    
        polyline?: boolean
    
        circle?: boolean
    
        object?: boolean
    
        location?: boolean
    }
    addListener(event: string | MapEvent, func: Function, options?: EventOptions): MapsEventListener
  ```
  Sau khi đăng ký event Map sẽ trả về cho chúng ta đối tượng MapsEventListener 
  ```javascript
    interface MapsEventListener { 
        remove(): void
        updateEventOptions(options: EventOptions): void
    }
  ```
  
  **Cách đăng ký event chung**
  
  ```javascript
    let event = map.addListener("event_name", (args) => {
    }, {marker: true, polygon: true, polyline: true, circle: true, object: true, location: true})
  ```

  Đối với các event modeChanged, mouseOver, mouseOut, idle, cameraChanging, cameraWillChange, tilesLoaded, boundsChanged thì parameter thứ ba là không cần thiết.
  Đối với event hover nó chỉ hoạt động với marker, polygon, polyline, circle, object

  **Cách gỡ bỏ một event khi không sử dụng**
  
  ```javascript
    event.remove()
  ```
  
  **2.1. cameraWillChange**
  ```javascript
    map.addListener("cameraWillChange", (args) => {
      console.log(args)
    })
  ```

  - **args**:
  ```javascript
    {camera: CameraPosition}
  ```
  - *camera: CameraPosition*
  - *gesture: boolean*
    - *true*:  camera bắt đầu thay đổi khi người dùng sử dụng các gesture.
    - *false*: camera bắt đầu thay đổi nhưng người dùng không sử dụng gesture.
  - **Kết quả**:

  ```javascript
    {camera: CameraPosition}
  ```

  **2.2. cameraChanging**
  ```javascript
    map.addListener("cameraChanging", (args) => {
      console.log(args)
    })
  ```

  - **args**:
  ```javascript
    { camera: CameraPosition}
  ```
  - *camera: CameraPosition*
  - **Kết quả**:

  ```javascript
    { camera: CameraPosition}
  ```

  **2.3. idle**
  ```javascript
    map.addListener("idle", (args) => {
      console.log(args)
    })
  ```

  - **args**:
  ```javascript
    { camera: CameraPosition}
  ```
  - *camera: CameraPosition*
  - **Kết quả**:

  ```javascript
    { camera: CameraPosition}
  ```

  **2.4. click**

  ```javascript
    map.addListener("click", (args) => {
      console.log(args)
    }, {marker: true, polygon: true, polyline: true, circle: true, object: true, location: true})
  ```

  - **args**:
 	Tùy vào việc đăng ký sự kiện cho cái gì thì đối tượng đó được trả về. Đối với location event thì vị trí click được trả về dưới dạng LatLng

	
  **2.5. dblClick**

  ```javascript
    map.addListener("dblClick", (args) => {
      console.log(args)
    }, {marker: true, polygon: true, polyline: true, circle: true, object: true, location: true})
  ```

  - **args**:
 	Tùy vào việc đăng ký sự kiện cho cái gì thì đối tượng đó được trả về. Đối với location event thì vị trí click được trả về dưới dạng LatLng

  **2.6. dblClick**

  ```javascript
    map.addListener("rightClick", (args) => {
      console.log(args)
    }, {marker: true, polygon: true, polyline: true, circle: true, object: true, location: true})
  ```

  - **args**:
 	Tùy vào việc đăng ký sự kiện cho cái gì thì đối tượng đó được trả về. Đối với location event thì vị trí click được trả về dưới dạng LatLng
 	
  **2.7. Tất cả các sự kiện này đều có các tham số giống nhau**

  ```javascript
    map.addListener("drag", (args) => {
      console.log(args)
    })
  ```

  ```javascript
    map.addListener("dragEnd", (args) => {
      console.log(args)
    })
  ```

  ```javascript
    map.addListener("dragStart", (args) => {
      console.log(args)
    })
  ```

  ```javascript
    map.addListener("mouseMove", (args) => {
      console.log(args)
    })
  ```

  ```javascript
    map.addListener("mouseOut", (args) => {
      console.log(args)
    })
  ```

  ```javascript
    map.addListener("mouseOver", (args) => {
      console.log(args)
    })
  ```

  - **args**:
  
  ```javascript
    { location: LatLng,
      point: Point,
      pixel: Point,
      xa: MouseEvent }
  ```
  - *location: LatLng*

  - *point: Point*
    - Đơn vị point độc lập đối với mỗi màn hình.
  - *pixel: Point*
    - Pixel, px hay có khi gọi là pel (xuất phát từ “picture element”), chúng ta hay gọi là điểm ảnh, có dạng hình vuông.
  - *xa: MouseEvent*
  ```javascript
    {xa: MouseEvent}
  ```

**2.8. tilesLoaded**

  ```javascript
    map.addListener("tilesLoaded", () => {
      console.log("visible tiles have finished loading")
    })
  ```

**2.9. boundsChanged**

  ```javascript
    map.addListener("boundsChanged", () => {
      console.log("boundsChanged is fired")
    })
  ```

> Các thông số khi làm việc với map nên sử dụng theo đơn vị **Point**

  **Kết quả**:<br>
  ```javascript
    { location: LatLng,
      point: Point,
      pixel: Point,
      xa: MouseEvent }
  ```
## 3. Đổi EventOptions ở runtime
  Chúng ta có thể đổi EventOptions ở runtime thử xem ví dụ sau:
  ```javascript
    let listener = map.addListener("click", (args) => {
        console.log(args)
    }, {marker: true, polygon: true, polyline: true})
  ```
  Như trên ta đăng ký một event nhận sự kiên click của marker, polygon và polyline. Sau ta muốn đổi các sự kiện của **listener** ta sử dụng như sau:
  ```javascript
    listener.updateEventOptions({marker: true})
  ```
  Sau khi sử dụng hàm trên thì **listener** chỉ nhận sự kiên click của marker không còn nhận sự kiện click cuar polygon và polyline nữa.

  License
  -------

  Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.
