# Map events

> **IPostMap iOS SDK** cung cấp các sự kiện của map hay tương tác của người dùng giúp cho nhà phát triển có thể lắng nghe và xử lý.

  ##  Giới thiệu chung

  **MFMapViewDelegate** cung cấp các giao thức cho phép người dùng thao tác với các sự kiện trên **map**.

  #### Các sự kiện thao tác trên map

  ```swift
  func mapView(_ mapView: MFMapView?, willMove gesture: Bool)
  func mapView(_ mapView: MFMapView?, moving position: MFCameraPosition?)
  func mapView(_ mapView: MFMapView?, didChange position: MFCameraPosition?)
  func mapView(_ mapView: MFMapView?, idleAt position: MFCameraPosition?)
    func mapView(_ mapView: MFMapView?, didTapAtCoordinate coordinate: CLLocationCoordinate2D)
  ```


  | No       | Event name                            | Description                                                                                                                |
  |:--------:|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
  | **1**    | **willMove**                          | Phát sinh khi người dùng tương tác bằng cử chỉ làm thay đổi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom)     |
  | **2**    | **movingCameraPosition**              | Phát sinh khi một trong các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map chuẩn bị thay đổi               |
  | **3**    | **didChangeCameraPosition**           | Đhát sinh khi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map kết thúc sự thay đổi.                     |
  | **4**    | **idleAtCameraPosition**              | Phát sinh khi các thông số camera (tâm, góc nghiêng, góc quay, mức zoom) của map kết thúc sự thay đổi.                     |
  | **5**    | **didTapAtCoordinate**                | Phát sinh khi người dùng touch vào **Coordinate** trên **map**                                                             |

  Chúng ta thử một ví dụ đánh dấu một **Marker** lên **map** tại vị trí chỉ định dùng sự kiện **didTapAtCoordinate**

  ```swift
  func mapView(_ mapView: MFMapView!, didTapAt coordinate: CLLocationCoordinate2D) {
    let marker = MFMarker()
    marker.position = coordinate
    marker.icon = UIImage(named: "iconLocation")
    marker.groundAnchor = CGPoint(x: 0.5, y: 1.0)
    marker.title = "IPostMap"
    marker.snippet = "An Hải Bắc, Sơn Trà, Đà Nẵng"
    marker.map = mapView
  }
  ```
  
  #### Các sự kiện thao tác trên Annotation

  ```swift
  func mapView(_ mapView: MFMapView?, didTap marker: MFMarker?) -> Bool
  func mapView(_ mapView: MFMapView?, didBeginDragging marker: MFMarker?)
  func mapView(_ mapView: MFMapView?, didEndDragging marker: MFMarker?)
  func mapView(_ mapView: MFMapView?, didDrag marker: MFMarker?)
  func mapView(_ mapView: MFMapView?, didTapInfoWindowOf marker: MFMarker?)
  func mapView(_ mapView: MFMapView?, didTap polyline: MFPolyline?)
  func mapView(_ mapView: MFMapView?, didTap polygon: MFPolygon?)
  func mapView(_ mapView: MFMapView?, didTap circle: MFCircle?)
  func mapView(_ mapView: MFMapView?, didTapMyLocation location: CLLocationCoordinate2D)
  func didTapMyLocationButton(for mapView: MFMapView?) -> Bool
  func mapView(_ mapView: MFMapView?, markerInfoWindow marker: MFMarker?) -> UIView?
  ```


  | No       | Event name                            | Description                                                                                                                |
  |----------|:-------------------:|----------------------------------------------------------------------------------------------------------------------------------------------|
  | **1**    | **didTapMarker**                      | Phát sinh khi người dùng touch vào **Marker** trên **map**                                                                 |
  | **2**    | **didBeginDraggingMarker**            | Phát sinh khi người dùng bắt đầu nhấn và giữ **Marker** trong một khoảng thời gian trên **map**                            |
  | **3**    | **didEndDraggingMarker**              | Phát sinh khi người dùng thả **Marker** ra sau khi nhấn và giữ **Marker** trong một khoảng thời gian trên **map**          |
  | **4**    | **didDragMarker**                     | Phát sinh khi người dùng nhấn và giữ **Marker** trong một khoảng thời gian trên **map**                                    |
  | **5**    | **didTapInfoWindowOfMarker**          | Phát sinh khi người dùng touch vào **bảng thông tin** của **Marker** trên **map**                                          |
  | **6**    | **didTapPolyline**                    | Phát sinh khi người dùng touch vào **Polyline** trên **map**                                                               |
  | **7**    | **didTapPolygon**                     | Phát sinh khi người dùng touch vào **Polygon** trên **map**                                                                |
  | **8**    | **didTapCircle**                      | Phát sinh khi người dùng touch vào **Circle**  trên **map**                                                                |
  | **13**   | **didTapMyLocation**                  | Phát sinh khi người dùng touch vào **Marker my location** trên **map**                                                     |
  | **14**   | **didTapMyLocationButtonForMapView**  | Phát sinh khi người dùng touch vào **Button my location** của Map4d cung cấp trên **map**                                  |
  | **15**   | **markerInfoWindow**                  | Phát sinh khi người dùng thay đổi **bảng thông tin** của **Marker**                                                        |

  ####  Các sự kiện liên quan đến kinh doanh và địa điểm yêu thích

  > **Map4d iOS SDK** cung cấp cho nhà phát triển các giao thức tương tác với **POI** và **Object** cung cấp cho bạn các thông tin về địa điểm hoặc đối tượng mà bạn muốn lấy thông tin trên **map**
  <br/>Các **POI** xuất hiện trên map cùng với các biểu tượng tương ứng của chúng. **POI** bao gồm công viên, trường học, v.v. cũng như các **POI** kinh doanh như cửa hàng, nhà hàng và khách sạn.
  <br/>Các **Object** xuất hiên trên **map** như các toàn nhà, các khối hình hộp, ...

  ```swift
  func mapView(_ mapView: MFMapView?, didTap building: MFBuilding?)
  func mapView(_ mapView: MFMapView?, didTapBuildingWithBuildingID buildingID: String?, name: String?, location: CLLocationCoordinate2D)
  func mapView(_ mapView: MFMapView?, didTap poi: MFPOI?)
  func mapView(_ mapView: MFMapView?, didTapPOIWithPlaceID placeID: String?, name: String?, location: CLLocationCoordinate2D)
  func mapView(_ mapView: MFMapView?, didTapPlaceWithName name: String?, location: CLLocationCoordinate2D)
  ```

  | No    | Event name                             | Description                                                                                                               |
  |-------|:--------------------------------------:|---------------------------------------------------------------------------------------------------------------------------|
  | **1** | **didTapBuilding**                     | Phát sinh khi người dùng touch vào **Building** trên **map**                                                              |
  | **2** | **didTapBuildingWithBuildingID**       | Phát sinh khi người dùng touch vào **Building** trên **map**                                                              |
  | **3** | **didTapPOI**                          | Phát sinh khi người dùng touch vào **Poi** trên **map**                                                                   |
  | **4** | **didTapPOIWithPlaceID**               | Phát sinh khi người dùng touch vào **Poi** trên **map**                                                                   |
  | **5** | **didTapPlaceWithName**                | Phát sinh khi người dùng touch vào **Place** trên **map** (đối với mapType là MFMapTypeRoadmap)                           |
