# POI Overlay References

## POIOverlay class

`MFPOIOverlay` class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setVisible** | boolean                                 | `none`       | Ẩn/hiện POI Overlay trên map                                                           |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của POI Overlay                                                 |
| **getPrefixId**| `none`                                  | String       | Get giá trị prefix id của POI Overlay                                                  |

## MFPOIOverlayOptions class

`MFPOIOverlayOptions` class

**Constructor**

Để tạo một đối tượng `MFPOIOverlayOptions` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
MFPOIOverlayOptions options = new MFPOIOverlayOptions()
```

#### ** Kotlin **

```kotlin
var options = MFPOIOverlayOptions()
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **poiProvider**| `MFPOIProvider`                           | MFPOIOverlayOptions| set đối tượng TileProvider cho MFPOIOverlayOptions                               |
| **visible**    | boolean                                 | MFPOIOverlayOptions| set giá trị visible cho MFPOIOverlayOptions                                      |
| **prefixId**   | String                                  | MFPOIOverlayOptions| Set giá trị prefixId cho MFPOIOverlayOptions                                     |


## MFUrlPOIProvider class

`MFUrlPOIProvider` abtract class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **getPOIUrl** | int, int, int, boolean                   | String       | Trả về là một đường dẫn URL chứa dữ liệu của POI trên Tile ứng với tọa độ x, y, mức zoom và chế độ Map tương ứng|
| **parserPOIData**| String                                |List<[MFPOIData](/reference/poi-overlay?id=mfpoidata-class)>| Biến đổi dữ liệu từ String trả về từ phương thức `getPOIUrl` sang List< MFPOIData >     |

## MFPOIData class

`MFPOIData` class

MFPOIData là object chứa thông tin của POI để Map4D SDK có thể hiểu được, người sử dụng POI overlay sẽ thực hiện implement phương thức `parserPOIData` để biến đổi dữ liệu trả về từ server của
mình thành mảng các POI data cung cấp cho Map4D SDK hiển thị lên bản đồ.

**Constructor**

Để tạo một đối tượng `MFPOIData` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
String id = "id";
String title = "title";
double lat = 16.075854;
double lng = 108.228765;
MFPOIData poiData = new MFPOIData(id, title, new MFLocationCoordinate(lat, lng));
```

#### ** Kotlin **

```kotlin
val id = "id"
val title = "title"
val lat = 16.075854
val lng = 108.228765
val poiData = MFPOIData(id, title, MFLocationCoordinate(lat, lng))
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setId**      | String                                  | `none` | set id cho POI                                                                               |
| **setPosition**| [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) | `none`| Set vị trí tọa độ của POI hiển thị trên bản đồ                 |
| **setTitle**   | String                                  | `none`| Set title cho POI                                                                             |
| ~**setTitleColor**~   | int                              | `none`| Set màu của title cho POI                                                                     |
| **setColor**   | int                                     | `none`| Màu cho icon (nếu sử dụng type) và tiêu đề của POI                                            |
| ~**setHasTitleColor**~   | boolean                       | `none`| Set title của POI có màu sắc hay không                                                        |
| **setHasColor**| boolean                                 | `none`| Set title của POI có màu sắc hay không                                                        |
| **setType**    | String                                  | `none`| Set kiểu của POI *("bank", "atm", "park", ...)*, tùy thuộc kiểu của POI mà có icon tương ứng  |
| **setIconUrl** | String                                  | `none`| Set đường dẫn để lấy icon của POI, nếu icon URL được set thì hình ảnh của POI sẽ được ưu tiên lấy theo URL này mà không cần quan tâm tới **type** |
| **setZIndex**  | float                                   | `none`| Set độ ưu tiên hiển thị của POI đối với POI khác                                              |
