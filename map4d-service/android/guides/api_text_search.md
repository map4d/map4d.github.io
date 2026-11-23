# Text Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_text_search>

> Tìm kiếm các địa điểm bằng chuỗi kí tự.

## Usage

Để sử dụng Text Search ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **searchText**     | [MFTextSearchOptions](/guides/api_text_search?id=mftextsearchoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFPlace](types?id=mfplace)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API Text Search với kết quả trả về là mảng **MFPlace** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val options = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(options)
val arrayTypes = arrayOf("cafe")
val textSearchOptions = MFTextSearchOptions.Builder().text("Ca phe").types(arrayTypes).build()
val taskTextSearch =
  placesService.searchText(textSearchOptions, object : MFServiceCallback<Array<MFPlace>> {
    override fun onSuccess(data: Array<MFPlace>?) {
      Log.e(tag, "place text search: ${data?.size}")
      Log.e(tag, "place text search: ${data?.contentToString()}")
    }

    override fun onError(code: String, message: String) {
      Log.e(tag, "textSearchError:  $message")
    }
  })
```
#### ** Java **
```java
MFServicesOptions options = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(options);
String[] arrayTypes = {"cafe"};
MFTextSearchOptions textSearchOptions = new MFTextSearchOptions.Builder().text("Ca phe").types(arrayTypes).build();
placesService.searchText(textSearchOptions, new MFServiceCallback<MFPlace[]>() {
  @Override
  public void onSuccess(@Nullable MFPlace[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Text Search Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFTextSearchOptions

Đối tượng `MFTextSearchOptions` dùng để xác định các thuộc tính dùng cho [MFPlacesService](reference/places-service?id=mfplacesservice)

Để tạo đối tượng `MFTextSearchOptions` thì ta tạo thông qua class [MFTextSearchOptions.Builder](/guides/api_text_search?id=mftextsearchoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val arrayTypes = arrayOf("cafe")
val textSearchOptions = MFTextSearchOptions.Builder().text("Ca phe").types(arrayTypes).build()
```
#### ** Java **
```java
String[] arrayTypes = {"cafe"};
MFTextSearchOptions textSearchOptions = new MFTextSearchOptions.Builder().text("Ca phe").types(arrayTypes).build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getText**                  | `none`          | String       | Lấy text tìm kiếm                                                  |
| **getTypes**                 | `none`          | String[]     | Lấy kiểu địa điểm tìm kiếm                                         |
| **getLocation**              | `none`          | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy vị trí tìm kiếm                                       |
| **getDatetime**              | `none`          | Integer      | Lấy thời gian địa điểm cần tìm kiếm                                |

## MFTextSearchOptions.Builder

**Constructor**

Tạo đối tượng `MFTextSearchOptions.Builder`

```
MFTextSearchOptions.Builder()
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **text** *required*     | String          | Builder      | Set text tìm kiếm cho Builder                                      |
| **types** *optional*    | String[]        | Builder      | Set mảng kiểu địa điểm cho Builder                                 |
| **location** *optional* | [MFLocationComponent](/types?id=mflocationcomponent) | Builder | Set vị trí tìm kiếm cho Builder                                    |
| **datetime** *optional* | Integer         | Builder      | Set thời gian các địa điểm muốn tìm kiếm cho Builder               |
| **build**               | `none`          |[MFTextSearchOptions](/guides/api_text_search?id=mftextsearchoptions)| Tạo đối tượng MFTextSearchOptions từ Builder|
