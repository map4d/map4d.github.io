# Circle
Lớp MFPolyline cho phép người dùng vẽ một Polyline lên map.


## 1. MFCircle

  - 
    ```swift
      open class MFCircle : MFOverlay {
        open var fillOpacity: CGFloat
        open var fillColor: UIColor?
        open var position: CLLocationCoordinate2D
        open var radius: CLLocationDistance
        public init(_ position: CLLocationCoordinate2D, radius: CLLocationDistance)
        public init(_ position: CLLocationCoordinate2D, radius: CLLocationDistance, fill fillColor: UIColor, fillOpacity: CGFloat)
      }
    ```

## 2. Tạo Circle 
  
  -  ![MAP4DSDK](../resources/6-circle.png)
   
  - 
   
    ```swift
      let circle = MFCircle(CLLocationCoordinate2D(latitude: 16.074846, longitude: 108.221426), radius: 200, fill: .red, fillOpacity: 1.0)
      circle.map = mapView
    ```

## 3. Sự kiện click Circle 

  - Phát sinh khi người dùng click vào circle 
    ```swift
      optional func mapview(_ mapView: MFMapView!, didTap circle: MFCircle!)
    ```
  - Hướng dẫn sử dụng
    ```swift
      func mapview(_ mapView: MFMapView!, didTap circle: MFCircle!) {
        print("You have click circle")
      }
    ```


License
-------

Copyright (C) 2016 IOT Link Ltd. All Rights Reserved.