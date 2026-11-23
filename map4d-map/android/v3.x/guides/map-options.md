# Map Options

...

## API Reference

<a id="reference-map"></a>

## Map reference

## iPostMap class

Các phương thức:

| Name                    | Parameters       | Return Value | Description                                                                            |
|-------------------------|------------------|--------------|----------------------------------------------------------------------------------------|
| **getMyLocation**       | boolean          | `none`       | Lấy vị trí hiện tại của My Location marker                                             |
| **getCameraPosition**   |`none`|[MFCameraPosition](/guides/map-options?id=mfcameraposition)| Get thông số Camera Postion của Map                        |
| **getBounds**           |`none`|[MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds)| Get vùng bounds của Map với các thông số Camera và màn hình hiện tại. |
| **getCameraPositionForBounds**|[MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds), int|[MFCameraPosition](/guides/map-options?id=mfcameraposition)| Tạo một Camera Position từ tham số bounds và padding|
| **getCameraPositionForBounds**|[MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds), int, int, int, int|[MFCameraPosition](/guides/map-options?id=mfcameraposition)| Tạo một Camera Position từ tham số bounds và padding|
| **getProjection**       | `none`|[MFProjection](/guides/projection?id=projection)| Get thuộc tính MFProjection của Map                             |
| **getUiSettings**       | `none`|[MFUiSettings](/guides/map-options?id=mfuisettings)| Get thuộc tính cài đặt giao diện của Map                          |
| **addMarker**           |[MFMarkerOptions](/guides/marker?id=marker-options)|[MFMarker](/guides/marker?id=mfmarker-class)| Add một marker vào Map|
| **addPolyline**         |[MFPolylineOptions](/guides/polyline?id=polyline-options)|[MFPolyline](/guides/polyline?id=polyline-class)| Add một polyline vào Map|
| **addPolygon**          |[MFPolygonOptions](/guides/polygon?id=polygon-options)|[MFPolygon](/guides/polygon?id=polygon-class)| Add một polygon vào Map|
| **addCircle**           |[MFCircleOptions](/guides/circle?id=circle-options)|[MFCircle](/guides/circle?id=circle-class)| Add một circle vào Map|
| **addPOI**              |[MFPOIOptions](/guides/poi?id=poi-options)|[MFPOI](/guides/poi?id=poi-class)| Add một POI vào Map                   |
| **addBuilding**         |[MFBuildingOptions](/guides/building?id=building-options)|[MFBuilding](/guides/building?id=building-class)| Add một Building vào Map |
| **addTileOverlay**      |[MFTileOverlayOptions](/guides/tile-overlay?id=mftileoverlayoptions-class)|[MFTileOverlay](/guides/tile-overlay?id=mftileoverlay-class)| Add một Tile Overlay vào Map |
| **addBuildingOverlay**  |[MFBuildingOverlayOptions](/guides/building-overlay?id=mfbuildingoverlayoptions-class)|[MFBuildingOverlay](/guides/building-overlay?id=buildingoverlay-class)| Add một Building Overlay vào Map |
| **addPOIOverlay**       |[MFPOIOverlayOptions](/guides/poi-overlay?id=mfpoioverlayoptions-class)|[MFPOIOverlay](/guides/poi-overlay?id=poioverlay-class)| Add một POI Overlay vào Map |
| **moveCamera**          |[MFCameraUpdate](/guides/map-options?id=mfcameraupdate)|`none`| Di chuyển bản đồ tới một vị trí Camera ngay lập tức            |
| **animateCamera**       |[MFCameraUpdate](/guides/map-options?id=mfcameraupdate)|`none`| Di chuyển bản đồ tới một vị trí Camera với hiệu ứng fly        |
| **isMyLocationEnabled** | `none`           | boolean      | Kiểm tra xem My Location marker có được hiển thị hay không                             |
| **setMyLocationEnabled**| boolean          | `none`       | Set giá trị enable cho My Location marker                                              |
| **setTime**             | Date             | `none`       | Set giá trị thời gian cho Map                                                          |
| **setOnMyLocationButtonClickListener**|`iPostMap.OnMyLocationButtonClickListener`|`none`| Set một callback để bắt sự kiện nút My Location được ấn     |
| **setOnMarkerClickListener**|`iPostMap.OnMarkerClickListener`|`none`| Set một callback để bắt sự kiện touch lên Marker                                |
| **setOnMarkerDragListener**|`iPostMap.OnMarkerDragListener`|`none`| Set một callback để bắt sự kiện kéo Marker trên Map                               |
| **setOnMyLocationClickListener**|`iPostMap.OnMyLocationClickListener`|`none`| Set một callback để bắt sự kiện khi touch My Location marker            |
| **setOnPolylineClickListener**|`iPostMap.OnPolylineClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên Polyline                      |
| **setOnPolygonClickListener**|`iPostMap.OnPolygonClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên Polygon                         |
| **setOnCircleClickListener**|`iPostMap.OnCircleClickListener`|`none| Set một callback để bắt sự kiện khi touch lên Circle                             |
| **setMaxZoomPreference**| double           | `none`       | Set giá trị zoom lớn nhất mà Map có thể hiển thị                                       |
| **setMinZoomPreference**| double           | `none`       | Set giá trị zoom nhỏ nhất mà Map có thể hiển thị                                       |
| **setMaxNativeZoom**    | double           | `none`       | Set giá trị zoom lớn nhất mà Tile không bị scale khi Map hiển thị                      |
| **setOnMapClickListener**|`iPostMap.OnMapClickListener`|`none`| Set một callback để bắt sự kiện touch lên Map                                         |
| **setOnCameraMoveStartedListener**|`iPostMap.OnCameraMoveStartedListener`|`none`| Set một callback để bắt sự kiện Camera của Map bắt đầu thay đổi     |
| **setOnCameraMoveListener**|`iPostMap.OnCameraMoveListener`|`none`| Set một callback để bắt sự kiện Camera của Map đang thay đổi                      |
| **setOnCameraIdleListener**|`iPostMap.OnCameraIdleListener`|`none`| Set một callback để bắt sự kiện Camera của Map thay đổi xong                      |
| **setOnBuildingClickListener**|`iPostMap.OnBuildingClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên Building                      |
| **setOnBuildingClickListener**|`iPostMap.OnBuildingClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên Building                      |
| **setOnUserBuildingClickListener**|`iPostMap.OnUserBuildingClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên User Building         |
| **setOnPOIClickListener**|`iPostMap.OnPOIClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên POI                                     |
| **setOnUserPOIClickListener**|`iPostMap.OnUserPOIClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên User POI                        |
| **setOnInfoWindowClickListener**|`iPostMap.OnInfoWindowClickListener`|`none`| Set một callback để bắt sự kiện khi touch lên Info Window               |
| **getSelectedPlace**    | `none`           | String       | Get id của POI được chọn (selected)                                                    |
| **setInfoWindowAdapter**|`iPostMap.InfoWindowAdapter`|`none` | Set info window adapter cho Map                                                        |
| **setPOIsEnabled**      | boolean          | `none`       | Set tất cả các POI của iPostMap hiện hay ẩn                                               |
| **isPOIsEnabled**       | `none`           | boolean      | Kiểm tra POI của iPostMap có hiện hay không                                               |
| **setBuildingsEnabled** | boolean          | `none`       | Set tất cả các Building của iPostMap hiện hay ẩn                                          |
| **isBuildingsEnabled**  | `none`           | boolean      | Kiểm tra Building của iPostMap có được hiện hay không                                     |
| **setSelectedBuildings**| List< String >   | `none`       | Set các Building sẽ được hightlight theo danh sách id truyền vào                       |
| **setWaterEffectEnabled**| boolean         | `none`       | Bật hoặc tắt hiệu ứng nước 3D của Map                                                  |
| **setScrollGesturesEnabled**| boolean      | `none`       | Bật hoặc tắt cử chỉ di chuyển Map                                                      |
| **setZoomGesturesEnabled**| boolean        | `none`       | Bật hoặc tắt cử chỉ phóng to hoặc thu nhỏ Map                                          |
| **setRotateGesturesEnabled**| boolean      | `none`       | Bật hoặc tắt cử chỉ xoay Map                                                           |
| **setTiltGesturesEnabled**| boolean        | `none`       | Bật hoặc tắt cử chỉ nghiêng Map                                                        |
| **setAllGesturesEnabled**| boolean         | `none`       | Bật hoặc tắt tất cả các cử chỉ tác động lên Map                                        |
| **setMapType**          |[MFMapType](/guides/map-options?id=mfmaptype)| `none` | Set kiểu của tile cho Map (Raster hoặc Vector)                         |
| **getMapType**          |`none`|[MFMapType](/guides/map-options?id=mfmaptype)  | Trả về kiểu hiện thị của tile Map hiện tại                             |
| **setMapId**            | String           | `none`       | Set Map ID                                                      |
| **getMapId**            | `none`           | String       | Trả về Map ID hiện tại                                          |
| **clear**               | `none`           | `none`       | Xóa tất cả các Annotation ra khỏi Map                                                  |

## MFCameraPosition.Builder

Constructor:

| No | Name                         |
|----|------------------------------|
| 1  | Builder()                    |
| 2  | Builder(CameraPositionUpdate)|
| 3  | Builder(CameraZoomUpdate)    |
| 4  | Builder(MFCameraPosition)    |

Các phương thức:

| Name        | Parameters   | Return Value | Description                                                                         |
|-------------|--------------|--------------|-------------------------------------------------------------------------------------|
| **target**  |[MFLocationCoordinate](/guides/coordinates?id=mflocationcoordinate)|Builder| trả về một `Builder` với target được thêm vào                                    |
| **zoom**    | double       | Builder      | trả về một `Builder` với zoom được thêm vào                                         |
| **tilt**    | double       | Builder      | trả về một `Builder` với tilt được thêm vào                                         |
| **bearing** | double       | Builder      | trả về một `Builder` với bearing được thêm vào                                      |
| **build**   | `none`       |[MFCameraPosition](/guides/map-options?id=mfcameraposition)| tạo một `MFCameraPosition` từ đối tượng `Builder`|

## MFCameraPosition

Để tạo một đối tượng `MFCameraPosition` thì ta dùng class static [MFCameraPosition.Builder](/guides/map-options?id=mfcamerapositionbuilder)

Các phương thức:

| Name        | Parameters   | Return Value | Description                                                                         |
|-------------|--------------|--------------|-------------------------------------------------------------------------------------|
| `static` **fromCoordinateZoom**|[MFLocationCoordinate](/guides/coordinates?id=mflocationcoordinate), double|MFCameraPosition| trả về một `MFCameraPosition` với target và mức zoom|
| **getTarget**| `none`      | [MFLocationCoordinate](/guides/coordinates?id=mflocationcoordinate) | trả về target của camera                                                |
| **getZoom**  | `none`      | double       | trả về mức zoom của camera                                                          |
| **getTilt**  | `none`      | double       | trả về độ nghiêng của camera                                                        |
| **getBearing**|`none`      |MFCameraPosition| trả về góc xoay của camera                                                        |

## MFCameraUpdate

`MFCameraUpdate` là một interface

Các phương thức:

| Name                   | Parameters   | Return Value | Description                                                                         |
|------------------------|--------------|--------------|-------------------------------------------------------------------------------------|
| **getCameraPosition**  |[iPostMap](/guides/map-options?id=map4d-class)|MFCameraPosition| trả về Camera Position của iPostMap                          |

## MFCameraUpdateFactory

`MFCameraUpdateFactory` class chứa các phương thức để tạo một đối tượng `MFCameraUpdate`

Các phương thức:

| Name                              | Parameters   | Return Value | Description                                                                         |
|-----------------------------------|--------------|--------------|-------------------------------------------------------------------------------------|
| `static` **newCameraPosition**    |[MFCameraPosition](/guides/map-options?id=mfcameraposition)|MFCameraUpdate| trả về MFCameraUpdate từ một camera position|
| `static` **newCoordinate**        |[MFLocationCoordinate](/guides/coordinates?id=mflocationcoordinate)|MFCameraUpdate| trả về MFCameraUpdate từ một tọa độ      |
| `static` **newCoordinateBounds**  |[MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds), int|MFCameraUpdate| trả về MFCameraUpdate từ một vùng bounds và padding      |
| `static` **newCoordinateBounds**  |[MFCoordinateBounds](/guides/coordinates?id=mfcoordinatebounds), int, int, int, int|MFCameraUpdate| trả về MFCameraUpdate từ một vùng bounds và padding|
| `static` **newCoordinateZoom**    |[MFLocationCoordinate](/guides/coordinates?id=mflocationcoordinate), double|MFCameraUpdate| trả về MFCameraUpdate từ một tọa độ và mức zoom |
| `static` **zoomIn**               | `none`       | MFCameraUpdate| trả về MFCameraUpdate của mức zoom lớn hơn 1 đơn vị so với hiện tại |
| `static` **zoomOut**              | `none`       | MFCameraUpdate| trả về MFCameraUpdate của mức zoom nhỏ hơn 1 đơn vị so với hiện tại |
| `static` **zoomTo**               | double       | MFCameraUpdate| trả về MFCameraUpdate của mức zoom mà chúng ta truyền vào           |


## MFUiSettings

`MFUiSettings` dùng để cài đặt các chức năng trên giao diện người dùng của Map.

Các phương thức:

| Name                            | Parameters | Return Value | Description                                                                     |
|---------------------------------|------------|--------------|---------------------------------------------------------------------------------|
| **isMyLocationButtonEnabled**   | `none`     | boolean      | Kiểm tra nút My Location có được bật hay không                                  |
| **isZoomGesturesEnabled**       | `none`     | boolean      | Kiểm tra điều khiển Zoom bằng cử chỉ của Map có được bật hay không              |
| **isRotateGesturesEnabled**     | `none`     | boolean      | Kiểm tra điều khiển Rotate bằng cử chỉ của Map có được bật hay không            |
| **isTiltGesturesEnabled**       | `none`     | boolean      | Kiểm tra điều khiển Tilt bằng cử chỉ của Map có được bật hay không              |
| **isScrollGesturesEnabled**     | `none`     | boolean      | Kiểm tra điều khiển di chuyển bằng cử chỉ của Map có được bật hay không         |
| **setMyLocationButtonEnabled**  | boolean    | `none`       | Hiện hoặc ẩn My Location Button                                                 |
| **setZoomGesturesEnabled**      | boolean    | `none`       | Bật hoặc tắt việc phóng to, thu nhỏ Map bằng cử chỉ                             |
| **setScrollGesturesEnabled**    | boolean    | `none`       | Bật hoặc tắt việc di chuyển Map bằng cử chỉ                                     |
| **setRotateGesturesEnabled**    | boolean    | `none`       | Bật hoặc tắt việc xoay Map bằng cử chỉ                                          |
| **setTiltGesturesEnabled**      | boolean    | `none`       | Bật hoặc tắt việc nghiêng Map bằng cử chỉ                                       |
| **setAllGesturesEnabled**       | boolean    | `none`       | Bật hoặc tắt tất cả các cử chỉ để điều khiển Map                                |


## MFMapType

`MFMapType` dùng để định nghĩa kiểu của tile Map.

* RASTER: Kiểu tile hiển thị trên Map là raster.
* ROADMAP: Kiểu tile hiển thị trên Map là vector.

## Map ID

> Để có thể thay đổi Style của Map thì chúng ta phải thông qua `mapId`.

#### Tạo mapdId

Một `mapID` là một định danh duy nhất đại diện cho một instance duy nhất của iPostMap. Bạn có thể tạo `mapID` và liên kết với map style thông qua
[trang quản lý của iPostMap](https://map.ipostmap.vn/developer/mapstyle)

#### Thêm mapId vào ứng dụng

Để thêm `mapId` vào ứng dụng thì chúng ta sử dụng thuộc tính `map:mapId` của lớp `MFMapView` trong file layout của activity như bên dưới:

```xml
<vn.ipostmap.Map.core.MFMapView
    xmlns:map="http://schemas.android.com/apk/res-auto"
    ....
    map:mapId="YOUR_MAP_ID" />
```
