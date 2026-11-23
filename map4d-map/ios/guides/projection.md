# Projection

Lớp MFProjection được dùng để chuyển đổi giữa vị trí trên màn hình và tọa độ địa lý trên bề mặt trái đất và ngược lại.

### 1. Khởi tạo lớp Projection

  ```swift
  let projection = mapView.projection
  ```

### 2. Chuyển đổi từ toạ độ LatLng sang toạ độ Screen
  
  ```swift
  let coordinate = CLLocationCoordinate2D(latitude: 16.072086430034517, longitude: 108.2262037173781)
  let target = CLLocationCoordinate2D(latitude: 16.172086430034517, longitude: 108.2462037173781)
  let camera = MFCameraPosition(target: target, zoom: 17, tilt: 10.0, bearing: 10.0)!
  ```

  ```swift
  // Chuyển đổi từ toạ độ LatLng sang toạ độ Screen.
  let point1 = projection.point(for: coordinate)

  //Chuyển đổi từ toạ độ LatLng sang toạ độ Screen với elevation (meter)
  let pointElevation = projection.point(for: coordinate, elevation: 10.0)
  ```

  ```swift
  // Chuyển đổi từ toạ độ LatLng sang toạ độ Screen với camera.
  let pointWithCamera = projection.point(for: coordinate, camera: camera)

  // Chuyển đổi từ toạ độ LatLng sang toạ độ Screen với camera và elevation (meter)
  let point3DWithCamera = projection.point(for: coordinate, camera: camera, elevation: 10.0)
  ```

### 3. Chuyển đổi từ toạ độ Screen sang toạ độ LatLng
  
  ```swift
  let point = CGPoint(x: 100.0, y: 100.0)
  let target = CLLocationCoordinate2D(latitude: 16.172086430034517, longitude: 108.2462037173781)
  let camera = MFCameraPosition(target: target, zoom: 17, tilt: 10.0, bearing: 10.0)!
  ```
  
  ```swift
  // Chuyển đổi từ toạ độ Screen sang toạ độ LatLng.
  let coordinate = projection.coordinate(for:  point)

  //Chuyển đổi từ toạ độ Screen sang toạ độ LatLng với elevation (meter)
  let coordinateElevation = projection.coordinate(for: point, elevation: 10.0)
  ```
  
  ```swift
  // Chuyển đổi từ toạ độ Screen sang toạ độ LatLng với camera.
  let coordinateWithCamera = projection.coordinate(for: point, camera: camera)

  // Chuyển đổi từ toạ độ Screen sang toạ độ LatLng với camera và elevation (meter)
  let coordinate3D = projection.coordinate(for: point, camera: camera, elevation: 10.0)
  ```

