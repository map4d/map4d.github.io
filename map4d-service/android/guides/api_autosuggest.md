# Auto Suggest

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_autosuggest>

> Tự động đề xuất các địa điểm tìm kiếm khi người dùng gửi tên địa điểm không đầy đủ, hỗ trợ tìm kiếm với chuỗi kí tự viết tắt (ví dụ: nvl để tìm kiếm
cho Nguyễn Văn Linh ...)

## Usage

Để sử dụng Auto Suggest ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
|**fetchSuggestion**| [MFAutoSuggestOptions](/guides/api_autosuggest?id=mfautosuggestoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFPlace](types?id=mfplace)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API Auto Suggest với kết quả trả về là mảng **MFPlace** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val serviceOption = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(serviceOption)
val autoSuggestOptions = MFAutoSuggestOptions.Builder().text("Da").location(MFLocationComponent(16.036505,108.218186)).build()
placesService.fetchSuggestion(autoSuggestOptions, object: MFServiceCallback<Array<MFPlace>> {
  override fun onSuccess(data: Array<MFPlace>?) {
    data?.let {
      Log.e("AutoSuggest", "Suggest: ${it?.contentToString()}")
    }
  }

  override fun onError(code: String, message: String) {
    Log.e("AutoSuggest", "Error:  $code , message: $message")
  }
})
```
#### ** Java **
```java
MFServicesOptions serviceOption = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(serviceOption);
MFAutoSuggestOptions autoSuggestOptions = new MFAutoSuggestOptions.Builder()
  .text("Da")
  .location(new MFLocationComponent(16.036505, 108.218186))
  .build();

placesService.fetchSuggestion(autoSuggestOptions, new MFServiceCallback<MFPlace[]>() {
  @Override
  public void onSuccess(@Nullable MFPlace[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("AutoSuggest Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFAutoSuggestOptions

Đối tượng `MFAutoSuggestOptions` dùng để xác định các thuộc tính dùng cho [MFPlacesService](reference/places-service?id=mfplacesservice)

Để tạo đối tượng `MFAutoSuggestOptions` thì ta tạo thông qua class [MFAutoSuggestOptions.Builder](/guides/api_autosuggest?id=mfautosuggestoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val autoSuggestOptions = MFAutoSuggestOptions.Builder().text("Da").location(MFLocationComponent(16.036505,108.218186)).build()
```
#### ** Java **
```java
MFAutoSuggestOptions autoSuggestOptions = new MFAutoSuggestOptions.Builder().text("Da").location(new MFLocationComponent(16.036505,108.218186)).build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getText**                  | `none`          | String       | Lấy giá trị text trong options                                     |
| **getLocation**              | `none`  | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy location từ options                                            |
| **isAcronym**                | `none`          | boolean      | Lấy giá trị acronym từ options                                     |

## MFAutoSuggestOptions.Builder

**Constructor**

Tạo đối tượng `MFAutoSuggestOptions.Builder`

```
MFAutoSuggestOptions.Builder()
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **text** *required*     | String          | Builder      | Set text cho Builder để tìm kiếm                                   |
| **location** *optional* | [MFLocationComponent](/types?id=mflocationcomponent) | Builder | Set location cho Builder. Các địa điểm gần vị trí này sẽ được ưu tiên hơn |
| **acronym** *optional*  | boolean         | Builder      | Set acronym cho Builder                                            |
| **build**               | `none`          |[MFAutoSuggestOptions](/guides/api_autosuggest?id=mfautosuggestoptions)| Tạo đối tượng MFAutoSuggestOptions từ Builder            |
