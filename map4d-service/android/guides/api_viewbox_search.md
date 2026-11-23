# Viewbox Search

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_viewbox_search>

> Tìm các địa điểm trong một vùng địa lý hình chữ nhật.

## Usage

Để sử dụng Viewbox Search ta sử dụng phương thức sau đây của class [MFPlacesService](reference/places-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
| **searchViewbox**     | [MFViewboxSearchOptions](/guides/api_viewbox_search?id=mfviewboxsearchoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFPlace](types?id=mfplace)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API Viewbox Search với kết quả trả về là mảng **MFPlace** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val options = MFServicesOptions.Builder(this).build()
val placesService = MFPlacesService(options)
val swLocation = MFLocationComponent(16.056453967981348, 108.19387435913086)
val neLocation = MFLocationComponent(16.093031550262133, 108.25927734375)
val viewboxSearchOptions =
  MFViewboxSearchOptions.Builder(neLocation, swLocation).text("Cau rong").build()

val taskSearch =
  placesService.searchViewbox(viewboxSearchOptions, object : MFServiceCallback<Array<MFPlace>> {
    override fun onSuccess(data: Array<MFPlace>?) {
      Log.e(tag, "Number place view box search: ${data?.size}")
      Log.e(tag, "place view box search: ${data?.contentToString()}")
    }

    override fun onError(code: String, message: String) {
      Log.e(tag, "Viewbox Search Error:  $message")
    }
  })
```
#### ** Java **
```java
MFServicesOptions serviceOption = new MFServicesOptions.Builder(this).build();
MFPlacesService placesService = new MFPlacesService(serviceOption);
MFLocationComponent swLocation = new MFLocationComponent(6.056453967981348, 108.19387435913086);
MFLocationComponent neLocation = new MFLocationComponent(16.093031550262133, 108.25927734375);
MFViewboxSearchOptions viewboxSearchOptions = new MFViewboxSearchOptions.Builder(neLocation, swLocation).text("Cau rong").build();
placesService.searchViewbox(viewboxSearchOptions, new MFServiceCallback<MFPlace[]>() {
  @Override
  public void onSuccess(@Nullable MFPlace[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Viewbox Search Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFViewboxSearchOptions

Đối tượng `MFViewboxSearchOptions` dùng để xác định các thuộc tính dùng cho [MFPlacesService](reference/places-service?id=mfplacesservice)

Để tạo đối tượng `MFViewboxSearchOptions` thì ta tạo thông qua class [MFViewboxSearchOptions.Builder](/guides/api_viewbox_search?id=mfviewboxsearchoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val swLocation = MFLocationComponent(16.056453967981348, 108.19387435913086)
val neLocation = MFLocationComponent(16.093031550262133, 108.25927734375)
val viewboxSearchOptions = MFViewboxSearchOptions.Builder(neLocation, swLocation).text("Cau rong").build()
```
#### ** Java **
```java
MFLocationComponent swLocation = new MFLocationComponent(6.056453967981348, 108.19387435913086);
MFLocationComponent neLocation = new MFLocationComponent(16.093031550262133, 108.25927734375);
MFViewboxSearchOptions viewboxSearchOptions = new MFViewboxSearchOptions.Builder(neLocation, swLocation).text("Cau rong").build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getNortheast**             | `none`  | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy tọa độ Northeast của viewbox                                   |
| **getSouthwest**             | `none`  | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy tọa độ Southwest của viewbox                                   |
| **getText**                  | `none`          | String       | Lấy text tìm kiếm                                                  |
| **getTypes**                 | `none`          | String[]     | Lấy mảng types các địa điểm cần tìm kiếm                           |
| **getTags**                  | `none`          | String[]     | Lấy mảng tags các địa điểm cần tìm kiếm                            |
| **getDatetime**              | `none`          | Integer      | Lấy thời gian của địa điểm cần tìm kiếm                            |

## MFViewboxSearchOptions.Builder

**Constructor**

Tạo đối tượng `MFViewboxSearchOptions.Builder`

```
MFViewboxSearchOptions.Builder(@NonNull MFLocationComponent northeast, @NonNull MFLocationComponent southwest)
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **text** *optional*     | String          | Builder      | Set text tìm kiếm cho Builder                                      |
| **types** *optional*    | String[]        | Builder      | Set mảng kiểu địa điểm cho Builder                                 |
| **tags** *optional*     | String[]        | Builder      | Set mảng tags địa điểm cho Builder                                 |
| **datetime** *optional* | Integer         | Builder      | Set thời gian các địa điểm muốn tìm kiếm cho Builder               |
| **build**               | `none`          |[MFViewboxSearchOptions](/guides/api_viewbox_search?id=mfviewboxsearchoptions)| Tạo đối tượng MFViewboxSearchOptions từ Builder|
