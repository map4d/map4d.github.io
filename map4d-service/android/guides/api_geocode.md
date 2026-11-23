# GeoCode

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_geocode_v2>

> Dùng để phân giải địa điểm ra tọa độ địa lý.

## Usage

Để sử dụng GeoCode ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **geocoding**     | [MFGeocodeOptions](/guides/api_geocode?id=mfgeocodeoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFPlace](types?id=mfplace)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API GeoCode với kết quả trả về là mảng **MFPlace** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val serviceOption = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(serviceOption)
val mfGeocodeOptions =
  MFGeocodeOptions.Builder().location(MFLocationComponent(16.024634, 108.209217))
    .build()
placesService.geocoding(mfGeocodeOptions, object : MFServiceCallback<Array<MFPlace>> {
  override fun onSuccess(data: Array<MFPlace>?) {
    data?.let {
      Log.e("Geocode", "Geocode:  ${it?.contentToString()}")
    }
  }

  override fun onError(code: String, message: String) {
    Log.e("Geocode", "Error:  $code , message: $message")
  }
})
```
#### ** Java **
```java
MFServicesOptions serviceOption = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(serviceOption);
MFGeocodeOptions mfGeocodeOptions = new MFGeocodeOptions.Builder()
  .location(new MFLocationComponent(16.024634, 108.209217))
  .build();

placesService.geocoding(mfGeocodeOptions, new MFServiceCallback<MFPlace[]>() {
  @Override
  public void onSuccess(@Nullable MFPlace[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Geocode Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFGeocodeOptions

Đối tượng `MFGeocodeOptions` dùng để xác định các thuộc tính dùng cho [MFPlacesService](reference/places-service?id=mfplacesservice)

Để tạo đối tượng `MFGeocodeOptions` thì ta tạo thông qua class [MFGeocodeOptions.Builder](/guides/api_geocode?id=mfgeocodeoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val mfGeocodeOptions = MFGeocodeOptions.Builder().location(MFLocationComponent(16.024634, 108.209217)).build()
```
#### ** Java **
```java
MFGeocodeOptions mfGeocodeOptions = new MFGeocodeOptions.Builder().location(new MFLocationComponent(16.024634, 108.209217)).build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getNortheast**             | `none` |  [MFLocationComponent](/types?id=mflocationcomponent)| Lấy tọa độ Northeast của viewbox                                   |
| **getSouthwest**             | `none` | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy tọa độ Southwest của viewbox                                   |
| **getAddress**               | `none`          | String       | Lấy địa chỉ                                                        |
| **getLocation**              | `none` | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy tọa độ địa điểm                                                |

## MFGeocodeOptions.Builder

**Constructor**

Tạo đối tượng `MFGeocodeOptions.Builder`

```
MFGeocodeOptions.Builder()
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **location** *optional* | [MFLocationComponent](/types?id=mflocationcomponent) | Builder      | Set vị trí địa điểm cho Builder                      |
| **address** *optional*  | String          | Builder      | Set địa chỉ cho Builder                                            |
| **viewbox** *optional*  | [MFLocationComponent](/types?id=mflocationcomponent), [MFLocationComponent](/types?id=mflocationcomponent) | Builder      | Set viewbox cho Builder                 |
| **build**               | `none` |[MFGeocodeOptions](/guides/api_geocode?id=mfgeocodeoptions)| Tạo đối tượng MFGeocodeOptions từ Builder|
