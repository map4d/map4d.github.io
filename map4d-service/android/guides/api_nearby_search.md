# Nearby Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_nearby_search>

> Tìm kiếm các địa điểm lân cận.

## Usage

Để sử dụng Nearby Search ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **searchNearby**  | [MFNearBySearchOptions](/guides/api_nearby_search?id=mfnearbysearchoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFPlace](types?id=mfplace)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API Nearby Search với kết quả trả về là mảng **MFPlace** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val options = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(options)

val location = MFLocationComponent(16.036461, 108.218159)
val nearbySearchOptions = MFNearBySearchOptions.Builder(location, 400).text("Ca").build()

val taskNearbySearch =
  placesService.searchNearby(nearbySearchOptions, object : MFServiceCallback<Array<MFPlace>> {
    override fun onSuccess(data: Array<MFPlace>?) {
      Log.e(tag, "nearby place search: ${data?.size}")
      Log.e(tag, "nearby place search: ${data?.contentToString()}")
    }

    override fun onError(code: String, message: String) {
      Log.e(tag, "Nearby Search Error:  $message")
    }
  })
```
#### ** Java **
```java
MFServicesOptions options = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(options);
MFLocationComponent location = new MFLocationComponent(16.036461, 108.218159);
MFNearBySearchOptions nearbySearchOptions = new MFNearBySearchOptions.Builder(location, 400).text("Ca").build();
placesService.searchNearby(nearbySearchOptions, new MFServiceCallback<MFPlace[]>() {
  @Override
  public void onSuccess(@Nullable MFPlace[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Nearby Search Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFNearBySearchOptions

Đối tượng `MFNearBySearchOptions` dùng để xác định các thuộc tính dùng cho [MFPlacesService](reference/places-service?id=mfplacesservice)

Để tạo đối tượng `MFNearBySearchOptions` thì ta tạo thông qua class [MFNearBySearchOptions.Builder](/guides/api_nearby_search?id=mfnearbysearchoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val location = MFLocationComponent(16.036461, 108.218159)
val nearbySearchOptions = MFNearBySearchOptions.Builder(location, 400).text("Ca").build()
```
#### ** Java **
```java
MFLocationComponent location = new MFLocationComponent(16.036461, 108.218159);
MFNearBySearchOptions nearbySearchOptions = new MFNearBySearchOptions.Builder(location, 400).text("Ca").build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getText**                  | `none`          | String       | Lấy text tìm kiếm                                                  |
| **getTypes**                 | `none`          | String[]     | Lấy mảng các kiểu địa điểm tìm kiếm                                |
| **getTags**                  | `none`          | String[]     | Lấy mảng các nhãn địa điểm tìm kiếm                                |
| **getLocation**              | `none`          | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy vị trí tìm kiếm                                       |
| **getDatetime**              | `none`          | Integer      | Lấy thời gian địa điểm cần tìm kiếm                                |
| **getRadius**                | `none`          | int          | Lấy bán kính tìm kiếm                                              |

## MFNearBySearchOptions.Builder

**Constructor**

Tạo đối tượng `MFNearBySearchOptions.Builder`

```
MFNearBySearchOptions.Builder(@NonNull MFLocationComponent location, int radius)
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **text** *optional*     | String          | Builder      | Set text tìm kiếm cho Builder                                      |
| **types** *optional*    | String[]        | Builder      | Set mảng kiểu địa điểm cho Builder                                 |
| **tags** *optional*     | String[]        | Builder      | Set mảng kiểu địa điểm cho Builder                                 |
| **datetime** *optional* | Integer         | Builder      | Set thời gian các địa điểm muốn tìm kiếm cho Builder               |
| **build**               | `none`          |[MFNearBySearchOptions](/guides/api_nearby_search?id=mfnearbysearchoptions)| Tạo đối tượng MFNearBySearchOptions từ Builder|
