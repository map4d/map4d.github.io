# Place Detail

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_place_detail>

> Lấy thông tin chi tiết của địa điểm thông qua id của địa điểm đó.

## Usage

Để sử dụng Place Detail ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
|**fetchPlaceDetail**|`String`, [MFServiceCallback](types?id=mfservicecallback)<[MFPlaceDetail](/guides/api_place_detail?id=mfplacedetail)>|[MFServiceTask](types?id=mfservicetask)| Gọi API Place Detail với tham số là id của place và kết quả trả về là đối tượng **MFPlaceDetail** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val options = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(options)

val placeId = "5c921929270f65bf9cd77e23"
val taskPlaceDetail = placesService.fetchPlaceDetail(placeId, object : MFServiceCallback<MFPlaceDetail> {
  override fun onSuccess(data: MFPlaceDetail?) {
    // Do somethings
  }

  override fun onError(code: String, message: String) {
    Log.e(tag, "Place Detail Error:  $message")
  }
})
```
#### ** Java **
```java
MFServicesOptions options = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(options);
    
String placeId = "5c921929270f65bf9cd77e23";
placesService.fetchPlaceDetail(placeId, new MFServiceCallback<MFPlaceDetail>() {
  @Override
  public void onSuccess(@Nullable MFPlaceDetail data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Place Detail Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFPlaceDetail

> Là đối tượng được trả về từ callback khi gọi API Place Detail.

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getId**                    | `none` | String | Lấy id của place                                                           |
| **getName**                | `none` | String | Lấy tên của place      |
| **getAddress**             | `none` | String | Lấy địa chỉ của place      |
| **getLocation**            | `none` | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy vị trí của place       |
| **getTypes**                | `none` | String[] | Lấy danh sách các kiểu của place      |
| **getDesc**                | `none` | String | Lấy thông tin mô tả của place       |
| **getTags**                | `none` | String[] | Lấy danh sách tag của place      |
| **getMetadatas**           | `none` |[MFPlaceDetail.Metadata](/guides/api_place_detail?id=mfplacedetailmetadata)[] | Lấy danh sách thông tin dữ liệu bổ sung của place       |
| **getPhotos**              | `none` |[MFPlaceDetail.PhotoInfo](/guides/api_place_detail?id=mfplacedetailphotoinfo)[]| Lấy danh sách các ảnh của place |
| **getAddressComponents**   | `none` |[MFPlaceDetail.AddressComponent](/guides/api_place_detail?id=mfplacedetailaddresscomponent)[]| Lấy danh sách các địa chỉ liên kết |
| **getObjectId**              | `none` | String | Lấy object id của place               |

## MFPlaceDetail.Metadata

> Chứa dữ liệu Metadata của MFPlaceDetail

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getId**                    | `none`          | String       | Lấy id của Metadata                                                |
| **getName**                  | `none`          | String       | Lấy tên của Metadata                                               |
| **getType**                  | `none`          | String       | Lấy kiểu của Metadata                                              |
| **getContent**               | `none`          | String       | Lấy nội dung của Metadata                                          |
| **getOrder**                 | `none`          | Integer       | Lấy vị trí sắp xếp của Metadata                                   |

## MFPlaceDetail.PhotoInfo

> Chứa dữ liệu PhotoInfo của MFPlaceDetail

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getUrl**                   | `none`          | String       | Lấy đường dẫn của Photo                                            |
| **getName**                  | `none`          | String       | Lấy tên của Photo                                                  |

## MFPlaceDetail.AddressComponent

> Chứa dữ liệu AddressComponent của MFPlaceDetail

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getCode**                  | `none`          | String       | Lấy mã của Address Component                                       |
| **getType**                  | `none`          | String       | Lấy kiểu của Address Component                                     |
| **getName**                  | `none`          | String       | Lấy tên của Address Component                                      |
