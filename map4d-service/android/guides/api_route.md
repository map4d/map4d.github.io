# Directions

Map4D Services API: <https://docs.map4d.vn/map4d-service/api/v1.0/#/api_route>

> Tìm đường đi giữa các địa điểm.

## Usage

Để sử dụng service Directions ta sử dụng phương thức sau đây của class [MFDirectionsService](reference/directions-service?id=mfplacesservice)

**Methods**

| Name              | Parameters                              | Return Value | Description                                                                            |
|-------------------|:---------------------------------------:|:------------:|----------------------------------------------------------------------------------------|
|**fetchDirections**| [MFDirectionOptions](/guides/api_route?id=mfdirectionoptions), [MFServiceCallback](types?id=mfservicecallback)<[MFRoute](types?id=mfroute)[]>|[MFServiceTask](types?id=mfservicetask)| Gọi API Route với kết quả trả về là mảng **MFRoute** |

Ví dụ:

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val appContext = this
val options = MFServicesOptions.Builder(appContext).build()
val directionServices = MFDirectionsService(options)
val origin = MFLocationComponent(16.08116088350121, 108.21979357460582)
val motel = MFLocationComponent(16.081126855919138, 108.21412717916483)
val destination = MFLocationComponent(16.08334260545329, 108.21651589082553)

val wayPoints = listOf(origin, motel, destination)
val routeOptions = MFDirectionOptions.Builder()
  .mode(MFTravelMode.CAR)
  .waypoints(wayPoints)
  .language("en")
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      MFLocationComponent(16.080611, 108.218113),
      MFLocationComponent(16.080499, 108.218482)
    )
  )
  .build()
var task = directionServices.fetchDirections(routeOptions, object : MFServiceCallback<Array<MFRoute>> {
  override fun onSuccess(data: Array<MFRoute>?) {
    data?.let { routes ->
      // Do somethings
    }
  }

  override fun onError(code: String, message: String) {
    Log.e(tag, "directionError:  $message")
  }
})
```
#### ** Java **
```java
Context appContext = this;
MFServicesOptions options = new MFServicesOptions.Builder(appContext).build();
MFDirectionsService directionServices = new MFDirectionsService(options);
MFLocationComponent origin = new MFLocationComponent(16.08116088350121, 108.21979357460582);
MFLocationComponent motel = new MFLocationComponent(16.081126855919138, 108.21412717916483);
MFLocationComponent destination = new MFLocationComponent(16.08334260545329, 108.21651589082553);

List<MFLocationComponent> wayPoints = Arrays.asList(origin, motel, destination);
MFDirectionOptions routeOptions = new MFDirectionOptions.Builder()
  .mode(MFTravelMode.CAR)
  .waypoints(wayPoints)
  .language("en")
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      new MFLocationComponent(16.080611, 108.218113),
      new MFLocationComponent(16.080499, 108.218482)
    )
  )
  .build();

directionServices.fetchDirections(routeOptions, new MFServiceCallback<MFRoute[]>() {
  @Override
  public void onSuccess(@Nullable MFRoute[] data) {
    // Do something
  }

  @Override
  public void onError(String code, String message) {
    Log.e("Direction Error", "Error message: " + message);
  }
});
```
<!-- tabs:end -->

## MFDirectionOptions

Đối tượng `MFDirectionOptions` dùng để xác định các thuộc tính dùng cho [MFDirectionsService](reference/directions-service?id=mfplacesservice)

Để tạo đối tượng `MFDirectionOptions` thì ta tạo thông qua class [MFDirectionOptions.Builder](/guides/api_route?id=mfdirectionoptionsbuilder)

<!-- tabs:start -->
#### ** Kotlin **
```kotlin
val origin = MFLocationComponent(16.08116088350121, 108.21979357460582)
val motel = MFLocationComponent(16.081126855919138, 108.21412717916483)
val destination = MFLocationComponent(16.08334260545329, 108.21651589082553)

val wayPoints = listOf(origin, motel, destination)
val routeOptions = MFDirectionOptions.Builder()
  .mode(MFTravelMode.CAR)
  .waypoints(wayPoints)
  .language("en")
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      MFLocationComponent(16.080611, 108.218113),
      MFLocationComponent(16.080499, 108.218482)
    )
  )
  .build()
```
#### ** Java **
```java
MFLocationComponent origin = new MFLocationComponent(16.08116088350121, 108.21979357460582);
MFLocationComponent motel = new MFLocationComponent(16.081126855919138, 108.21412717916483);
MFLocationComponent destination = new MFLocationComponent(16.08334260545329, 108.21651589082553);

List<MFLocationComponent> wayPoints = Arrays.asList(origin, motel, destination);
MFDirectionOptions routeOptions = new MFDirectionOptions.Builder()
  .mode(MFTravelMode.CAR)
  .waypoints(wayPoints)
  .language("en")
  .restriction(
    MFRouteRestriction.restrictCoordinateBounds(
      new MFLocationComponent(16.080611, 108.218113),
      new MFLocationComponent(16.080499, 108.218482)
    )
  )
  .build();
```
<!-- tabs:end -->

**Methods**

| Name                         | Parameters      | Return Value | Description                                                        |
|------------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **getOrigin**                | `none` | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy vị trí điểm xuất phát                                          |
| **getDestination**           | `none` | [MFLocationComponent](/types?id=mflocationcomponent) | Lấy vị trí điểm kết thúc                                           |
| **getMode**                  | `none` |[MFTravelMode](/types?id=mftravelmode)| Lấy mode (loại phương tiện) di chuyển               |
| **getWaypoints**             | `none` |List<[MFLocationComponent](/types?id=mflocationcomponent)>| Lấy danh sách các địa điểm trung gian             |
| **getLanguage**              | `none`          | String       | Lấy ngôn ngữ chỉ đường                                             |
| **getWeighting**             | `none` |[MFWeighting](/types?id=mfweighting)| Lấy giá trị thuộc tính đường đi            |
| **getRestriction**           | `none` |[MFRouteRestriction](/types?id=mfrouterestriction)| Lấy điểm / khu vực / danh sách các loại đường mà tuyến đường không đi qua    |
| **getAvoidRoads**            | `none` |List<[MFRouteRestriction.MFRouteType](/types?id=mfrouterestrictionmfroutetype)>| Lấy danh sách các loại đường cấm đi qua         |
| **clone**                    | `none`  | MFDirectionOptions   | Clone một MFDirectionOptions từ MFDirectionOptions hiện tại        |

## MFDirectionOptions.Builder

**Constructor**

Tạo đối tượng `MFDirectionOptions.Builder`

```
MFDirectionOptions.Builder()
```

**Methods**

| Name                    | Parameters      | Return Value | Description                                                        |
|-------------------------|:---------------:|:------------:|--------------------------------------------------------------------|
| **origin** *required*      | [MFLocationComponent](/types?id=mflocationcomponent) | Builder      | Set vị trí xuất phát cho Builder                   |
| **destination** *required* | [MFLocationComponent](/types?id=mflocationcomponent) | Builder | Set vị trí kết thúc cho Builder                                 |
| **mode** *optional* |[MFTravelMode](/types?id=mftravelmode)| Builder | Set loại phương tiện cho Builder. Mặc định là MFTravelMode.CAR|
| **language** *optional* | String | Builder | Set ngôn ngữ chỉ đường cho Builder                                               |
| **waypoints** *optional* |List<[MFLocationComponent](/types?id=mflocationcomponent)>| Builder | Set các địa điểm trung gian cho Builder         |
| **weighting** *optional* |[MFWeighting](/types?id=mfweighting)| Builder | Set thuộc tính đường đi cho Builder      |
| **restriction** *optional*  |[MFRouteRestriction](/types?id=mfrouterestriction)| Builder      | Set điểm / khu vực / danh sách các loại đường mà tuyến đường không đi qua cho Builder|
| **build**               | `none`          |[MFDirectionOptions](/guides/api_route?id=mfdirectionoptions)| Tạo đối tượng MFDirectionOptions từ Builder|
