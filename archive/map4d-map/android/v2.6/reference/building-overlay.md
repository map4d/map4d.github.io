# Building Overlay Reference

## BuildingOverlay class

`MFBuildingOverlay` class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setVisible** | boolean                                 | `none`       | Ẩn/hiện Building Overlay trên map                                                      |
| **isVisible**  | `none`                                  | boolean      | Get trạng thái ẩn/hiện của Building Overlay                                            |
| **getPrefixId**| `none`                                  | String       | Get giá trị prefix id của Building Overlay                                             |

## MFBuildingOverlayOptions class

`MFBuildingOverlayOptions` class

**Constructor**

Để tạo một đối tượng `MFBuildingOverlayOptions` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
MFBuildingOverlayOptions options = new MFBuildingOverlayOptions()
```

#### ** Kotlin **

```kotlin
var options = MFBuildingOverlayOptions()
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **buildingProvider**| `MFBuildingProvider`               | MFBuildingOverlayOptions| set đối tượng MFBuildingProvider cho MFBuildingOverlayOptions               |
| **visible**    | boolean                                 | MFBuildingOverlayOptions| set giá trị visible cho MFBuildingOverlayOptions                            |
| **prefixId**   | String                                  | MFBuildingOverlayOptions| Set giá trị prefixId cho MFBuildingOverlayOptions                           |


## MFUrlBuildingProvider class

`MFUrlBuildingProvider` abtract class

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **getBuildingUrl** | int, int, int                       | String       | Trả về là một đường dẫn URL chứa dữ liệu của POI trên Tile ứng với tọa độ x, y và mức zoom tương ứng|
| **parserBuildingData**| String                           |List<[MFBuildingData](/reference/building-overlay?id=mfbuildingdata-class)>| Biến đổi dữ liệu từ String trả vê từ phương thức `getBuildingUrl()` sang List< MFBuildingData >|

## MFBuildingData class

`MFBuildingData` class

MFBuildingData là object chứa thông tin của building để Map4D SDK có thể hiểu được, người sử dụng building overlay sẽ thực hiện implement phương thức `parserBuildingData` để biến
đổi dữ liệu trả về từ server của mình thành mảng các building data cung cấp cho Map4D SDK hiển thị lên bản đồ.

**Constructor**

Để tạo một đối tượng `MFBuildingData` ta làm như sau:

<!-- tabs:start -->
#### ** Java **

```java
String id = "id";
String model = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/models/5db6b4798b4711141457d8a9.obj";
String texture = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/textures/5db6b4798b4711141457d8ab.jpg";
double lat = 16.075854;
double lng = 108.228765;
MFLocationCoordinate location = new MFLocationCoordinate(lat, lng);
MFBuildingData buildingData = new MFBuildingData(id, location, model, texture);
```

#### ** Kotlin **

```kotlin
val id = "id"
val model = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/models/5db6b4798b4711141457d8a9.obj"
val texture = "https://hcm03.vstorage.vngcloud.vn/v1/AUTH_b32b6bc102c44269ab7b55e7820e7116/sdk/textures/5db6b4798b4711141457d8ab.jpg"
val lat = 16.075854
val lng = 108.228765
val location = MFLocationCoordinate(lat, lng)
val buildingData = MFBuildingData(id, location, model, texture)
```
<!-- tabs:end -->

**Methods**

| Name           | Parameters                              | Return Value | Description                                                                            |
|----------------|-----------------------------------------|--------------|----------------------------------------------------------------------------------------|
| **setId**      | String                                  | `none`       | set id cho Building                                                                    |
| **setName**    | String                                  | `none`       | set tên cho Building                                                                   |
| **setPosition**| [MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate) | `none`| Set vị trí hiển thị của Building trên bản đồ                   |
| **setScale**   | double                                  | `none`       | Set tỉ lệ hiển thị của Building so với thực tế                                         |
| **setBearing** | double                                  | `none`       | Set góc quay của Building khi được vẽ lên bản đồ (đơn vị: độ)                          |
| **setElevation**| double                                 | `none`       | Set độ cao của Building so với mực nước biển                                           |
| **setHeight**  | double                                  | `none`       | Set chiều cao của Building (đơn vị: mét)                                               |
| **setModel**   | String                                  | `none`       | Set đường dẫn để lấy dữ liệu Model cho Building                                        |
| **setTexture** | String                                  | `none`       | Set đường dẫn để lấy dữ liệu Texture cho Building                                      |
| **setCoordinates** | List<[MFLocationCoordinate](/reference/coordinates?id=mflocationcoordinate)> | `none`| Set một mảng tọa độ để tạo một Building hình khối với mặt đáy là mảng vị trí này. Kết hợp với thuộc tính `height` để tạo chiều cao|
| **setStartDate**   | long                                | `none`       | Set ngày bắt đầu hiển thị Building                                                     |
| **setEndDate** | long                                    | `none`       | Set ngày kết thúc hiển thị Building                                                    |

