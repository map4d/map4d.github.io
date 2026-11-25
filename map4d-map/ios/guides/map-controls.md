# Map Controls

  ## 1. Các thao tác trên map

  #### Chọn đối tượng hay một vị trí bất kỳ trên map

  Chạm vào đối tượng hay một vị trí bất kỳ trên **map**.

  #### Di chuyển map

  Chạm và giữ ngón tay di chuyển trên **map** để di chuyển **map**.

  #### Xoay map

  Dùng hai ngón tay di chuyển theo đường tròn trên **map** để xoay **map**.

  #### Nghiêng map

  Dùng hai ngón tay di chuyển lên hoặc xuống cùng hướng để nghiêng **map**.

  #### Thu nhỏ hoặc phóng to map

  Dùng hai ngón tay thu hẹp/ mở rộng khoảng cách của 2 ngón tay trên **map** để thay đổi mức **zoom**.
  <br>**Thu hẹp:** Giảm mức **zoom**
  <br>**Mở rộng:** Tăng mức **zoom**

  ## 2. Các thuộc tính điều khiển map

  > Bạn có thể tắt các điều khiển mặc định trên **map** bằng cách đặt các thuộc tính của lớp **MFUISettings**, lớp này có sẵn như một thuộc tính của **MFMapView**. 
  
  - Các điều khiển sau có thể được bật và tắt theo chương trình:

    + **myLocationButton**: Điều khiển bật tắt nút myLocation mà iOS SDK cung cấp.
    + **scrollGestures**: Điều khiển các cử chỉ cuộn được bật hay tắt. Nếu được bật, người dùng có thể vuốt để xoay **camera**.
    + **zoomGestures**: Điều khiển các cử chỉ thu phóng được bật hay tắt. Nếu được bật, người dùng có thể nhấn đúp, dùng hai ngón tay **thu hẹp hoặc mở rộng** để thay đổi mức **zoom** của **camera**.
    + **tiltGestures**: Điều khiển các cử chỉ nghiêng được bật hay tắt. Nếu được bật, người dùng có thể sử dụng hai ngón tay vuốt dọc xuống hoặc vuốt lên để nghiêng **camera**.
    + **rotateGestures**: Điều khiển xem các cử chỉ xoay được bật hay tắt. Nếu được bật, người dùng có thể sử dụng cử chỉ xoay hai ngón tay để xoay **camera**.

  - **Chú ý:** Bạn có thể bật hoặc tắt tất cả các điều khiển thông qua phương thức **setAllGesturesEnabled**

  ```swift
  mapView.settings.myLocationButton = true
  
  mapView.settings.scrollGestures = true
  mapView.settings.zoomGestures = true
  mapView.settings.tiltGestures = true
  mapView.settings.rotateGestures = true
  mapView.settings.setAllGesturesEnabled(true)
  ```

  ## 3. Các phương thức tương tác trên map

  #### Giới hạn mức zoom tối đa và tối thiểu

  **Set** mức **zoom** tối đa và tối thiểu thông qua phương thức **setMinZoom**
    
  ```swift
  mapView.setMinZoom(3.0, maxZoom: 20.0)
  ```

    #### Lấy các tham số của camera

  **Lấy các tham số của camera như độ nghiêng, độ xoay, điểm quan sát, mức zoom hiện tại.**

  ```swift
  let camera = mapView.camera
  let target = camera?.target
  let zoom = camera?.zoom
  let bearing = camera?.bearing
  let tilt = camera?.tilt
  ```

  ## 4. Di chuyển map

  **iOS SDK** hỗ trợ người dùng di chuyển tới một vị trí **camera** mới thông qua 2 phương thức **animate** và **move**.

  **Phương thức animate**

  ```swift
  let cameraUpdate = MFCameraUpdate.setTarget(CLLocationCoordinate2D(latitude: 16.08795975082965, longitude: 108.22837829589844), zoom: 17)
  mapView.animateCamera(cameraUpdate)
  ```

  **Phương thức move**

  ```swift
  let cameraUpdate = MFCameraUpdate.setTarget(CLLocationCoordinate2D(latitude: 16.08795975082965, longitude: 108.22837829589844), zoom: 17)
  mapView.moveCamera(cameraUpdate)
  mapView.moveCamera(cameraUpdate, duration: 1.0)
  ```

  Có thể thiết lập `padding` trên `MFCameraPosition` hoặc khi tạo `MFCameraUpdate` để chừa vùng hiển thị cho các thành phần giao diện. `duration` có đơn vị giây.
